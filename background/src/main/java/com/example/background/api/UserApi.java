package com.example.background.api;

import com.alibaba.fastjson.JSONObject;
import com.example.background.annotation.UserLoginToken;
import com.example.background.entity.User;
import com.example.background.service.TokenService;
import com.example.background.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.soap.MimeHeaders;

/**
 * @author jinbin
 * @date 2018-07-08 20:45
 */
@RestController //请求体在这里
@RequestMapping("api")
public class UserApi {
    @Autowired
    UserService userService;
    @Autowired
    TokenService tokenService;
    //登录
    @PostMapping("/login")
    public Object login(User user){

        JSONObject jsonObject=new JSONObject();
        User userForBase=userService.findByUsername(user);
        String code =  user.getCode();//获取验证码
        if(userForBase==null){
            jsonObject.put("message","登录失败,用户不存在");
            return jsonObject;
        }else {
            if (!code.equals("1234")){
                jsonObject.put("message","验证码错误");//暂时没有次数限制
                return jsonObject;
            }else {
                String token = tokenService.getToken(userForBase);
                //这里返回几个基本的数值
                jsonObject.put("username",userForBase.getUsername());
                jsonObject.put("level",userForBase.getLevel());
                jsonObject.put("UID", userForBase.getUID());
                jsonObject.put("token", token);
                return jsonObject;
            }
        }
    }
    
    @UserLoginToken
    @GetMapping("/getMessage")
    public String getMessage(){
        return "你已通过验证";
    }
}

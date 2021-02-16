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
import java.util.UUID;

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
            if(code != null && code.equals("1234")){
                User newUser = new User();
                newUser.setUID(UUID.randomUUID().toString().replace("-",""));
                newUser.setUsername(user.getUsername());
                int flag = userService.addUser(newUser);
                if(flag>0){
                    jsonObject.put("username",newUser.getUsername());
                    jsonObject.put("UID",newUser.getUID());
                    jsonObject.put("level",'0');
                    String token = tokenService.getToken(newUser);
                    jsonObject.put("token",token);
                    return jsonObject;
                }else{
                    jsonObject.put("message","添加用户失败");
                    return jsonObject;
                }
            }else{
                jsonObject.put("message","验证码错误");
                return jsonObject;
            }

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
    @GetMapping("/getCode")
    public Object getVerificationCode(){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("message","发送成功");
        return jsonObject;
    }

    
    @UserLoginToken
    @GetMapping("/getMessage")
    public String getMessage(){
        return "你已通过验证";
    }
}

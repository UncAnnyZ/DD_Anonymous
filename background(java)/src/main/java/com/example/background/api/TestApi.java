package com.example.background.api;

import com.alibaba.fastjson.JSONObject;
import com.example.background.entity.Demo;
import org.springframework.web.bind.annotation.*;

@RestController

public class TestApi {
    @RequestMapping(value = "/demo",method = RequestMethod.POST)
    public String demo(@RequestBody JSONObject jsonObject){
        System.out.println(jsonObject.get("username").toString());
        return "server response";
    }
}
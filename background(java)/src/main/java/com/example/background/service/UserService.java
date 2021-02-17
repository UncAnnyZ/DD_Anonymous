package com.example.background.service;

import com.example.background.entity.User;
import com.example.background.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * @author jinbin
 * @date 2018-07-08 20:52
 */
@Service("UserService")
public class UserService {
    @Autowired
    UserMapper userMapper;


    public User findByUsername(User user){

        return userMapper.findByUsername(user.getUsername());
    }
    public User findUserById(String userId) {
        return userMapper.findUserById(userId);
    }
    public User findUserByUID(String UID){ return  userMapper.findUserByUid(UID);}
    public int addUser(User user){ return userMapper.addUser(user.getUID(), user.getUsername());}
}

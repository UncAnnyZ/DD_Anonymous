package com.example.background.mapper;

import com.example.background.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

/**
 * @author jinbin
 * @date 2018-07-08 20:44
 */
@Component
public interface UserMapper {
    User findByUsername(@Param("username") String username);
    User findUserById(@Param("Id") String Id);
    User findUserByUid(@Param("uid") String UID);
    int addUser(@Param("uid") String UID, @Param("username") String username);


}

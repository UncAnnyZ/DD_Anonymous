package com.example.background.mapper;

import com.example.background.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

/**
 * @author jinbin
 * @date 2018-07-08 20:44
 */
@Component
public interface UserMapper {
    User findByUsername(@Param("username") String username);
    User findUserById(@Param("Id") String Id);
    User findUserByUid(@Param("UID") String UID);
    int addUser(@Param("UID") String UID, @Param("username") String username);
}

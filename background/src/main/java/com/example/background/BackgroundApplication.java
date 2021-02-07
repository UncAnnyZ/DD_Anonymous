package com.example.background;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;

@SpringBootApplication
@MapperScan("com.example.background.mapper")
public class BackgroundApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackgroundApplication.class, args);
    }

}

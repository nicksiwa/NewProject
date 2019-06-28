package com.homse.hombackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HomBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(HomBackendApplication.class, args);
    }

}

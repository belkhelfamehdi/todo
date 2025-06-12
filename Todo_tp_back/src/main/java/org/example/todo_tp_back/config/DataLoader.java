package org.example.todo_tp_back.config;

import lombok.RequiredArgsConstructor;
import org.example.todo_tp_back.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final UserService userService;

    @Override
    public void run(String... args) {
        if (userService.findByUsername("admin").isEmpty()) {
            userService.saveUser("admin", "password", "ADMIN");
        }
        if (userService.findByUsername("user").isEmpty()) {
            userService.saveUser("user", "password", "USER");
        }
    }
}

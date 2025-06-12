package org.example.todo_tp_back.controller;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.example.todo_tp_back.model.User;
import org.example.todo_tp_back.service.JwtService;
import org.example.todo_tp_back.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        String token = jwtService.generateToken(request.getUsername());
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        User user = userService.saveUser(request.getUsername(), request.getPassword(), request.getRole());
        return ResponseEntity.ok(user);
    }

    @Data
    private static class AuthRequest {
        private String username;
        private String password;
    }

    @Data
    private static class SignupRequest {
        private String username;
        private String password;
        private String role = "USER";
    }

    @Data
    private static class AuthResponse {
        private final String token;
    }
}

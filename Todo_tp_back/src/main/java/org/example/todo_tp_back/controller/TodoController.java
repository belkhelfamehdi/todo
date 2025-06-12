package org.example.todo_tp_back.controller;

import lombok.RequiredArgsConstructor;
import org.example.todo_tp_back.model.Todo;
import org.example.todo_tp_back.model.User;
import org.example.todo_tp_back.repository.UserRepository;
import org.example.todo_tp_back.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;
    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Todo>> list(Authentication auth) {
        if (auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"))) {
            return ResponseEntity.ok(todoService.listAll());
        }
        User user = userRepository.findByUsername(auth.getName()).orElseThrow();
        return ResponseEntity.ok(todoService.listByUser(user.getId()));
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody Todo todo, Authentication auth) {
        User user = userRepository.findByUsername(auth.getName()).orElseThrow();
        todo.setUser(user);
        return ResponseEntity.ok(todoService.create(todo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> update(@PathVariable Long id, @RequestBody Todo todo) {
        return todoService.find(id)
                .map(t -> {
                    t.setTitle(todo.getTitle());
                    t.setDescription(todo.getDescription());
                    t.setCompleted(todo.isCompleted());
                    return ResponseEntity.ok(todoService.create(t));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        todoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

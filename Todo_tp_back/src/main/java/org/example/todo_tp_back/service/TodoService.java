package org.example.todo_tp_back.service;

import lombok.RequiredArgsConstructor;
import org.example.todo_tp_back.model.Todo;
import org.example.todo_tp_back.model.User;
import org.example.todo_tp_back.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;

    public List<Todo> listAll() {
        return todoRepository.findAll();
    }

    public List<Todo> listByUser(Long userId) {
        return todoRepository.findByUserId(userId);
    }

    public Todo create(Todo todo) {
        return todoRepository.save(todo);
    }

    public Optional<Todo> find(Long id) {
        return todoRepository.findById(id);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
}

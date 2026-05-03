package com.naman.spring.taskmanager.TeamTaskManager.backend.controller;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.TaskDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Task;
import com.naman.spring.taskmanager.TeamTaskManager.backend.service.TaskService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskService taskService;

    // GET ALL TASKS

    @GetMapping
    public List<Task> getTasks() {

        return taskService.getTasks();
    }

    // CREATE TASK

    @PostMapping
    public Task createTask(
            @RequestBody TaskDto dto
    ) {

        return taskService.createTask(dto);
    }

    // UPDATE TASK

    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable Long id,
            @RequestBody TaskDto dto
    ) {

        return taskService.updateTask(id, dto);
    }

    // DELETE TASK

    @DeleteMapping("/{id}")
    public String deleteTask(
            @PathVariable Long id
    ) {

        taskService.deleteTask(id);

        return "Task deleted successfully";
    }
}
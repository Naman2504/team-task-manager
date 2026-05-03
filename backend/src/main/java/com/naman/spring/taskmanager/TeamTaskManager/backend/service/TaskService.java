package com.naman.spring.taskmanager.TeamTaskManager.backend.service;

import com.naman.spring.taskmanager.TeamTaskManager.backend.dto.TaskDto;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Task;
import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.TaskStatus;
import com.naman.spring.taskmanager.TeamTaskManager.backend.repository.TaskRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    // GET ALL TASKS

    public List<Task> getTasks() {

        return taskRepository.findAll();
    }

    // CREATE TASK

    public Task createTask(TaskDto dto) {

        Task task = new Task();

        task.setTitle(dto.getTitle());

        task.setDescription(dto.getDescription());

        task.setStatus(
                TaskStatus.valueOf(dto.getStatus())
        );

        task.setDueDate(dto.getDueDate());

        return taskRepository.save(task);
    }

    // UPDATE TASK

    public Task updateTask(
            Long id,
            TaskDto dto
    ) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Task not found")
                );

        task.setTitle(dto.getTitle());

        task.setDescription(dto.getDescription());

        task.setStatus(
                TaskStatus.valueOf(dto.getStatus())
        );

        task.setDueDate(dto.getDueDate());

        return taskRepository.save(task);
    }

    // DELETE TASK

    public void deleteTask(Long id) {

        taskRepository.deleteById(id);
    }
}

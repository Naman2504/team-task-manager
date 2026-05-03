package com.naman.spring.taskmanager.TeamTaskManager.backend.repository;

import com.naman.spring.taskmanager.TeamTaskManager.backend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByAssignedToId(Long id);
}

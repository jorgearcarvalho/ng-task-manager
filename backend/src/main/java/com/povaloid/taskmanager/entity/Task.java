package com.povaloid.taskmanager.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "tasklist_id", nullable = false)
    private TaskList tasklist;

    @Column(nullable = false)
    private String title;

    private String description;

    private Boolean completed = false;

    @Column(name = "expiration_date")
    private LocalDateTime expirationDate;

    private Integer priority;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    // getters & setters
}
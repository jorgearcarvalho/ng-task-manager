package com.povaloid.taskmanager.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tasklist")
public class TaskList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserAccount user;

    @Column(nullable = false)
    private String name;

    @Column(name = "tasks_todo")
    private Integer tasksTodo = 0;

    @Column(name = "tasks_done")
    private Integer tasksDone = 0;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "tasklist", cascade = CascadeType.ALL)
    private List<Task> tasks;

    // getters & setters
}
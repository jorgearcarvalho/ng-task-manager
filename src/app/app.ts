import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from './shared/task-manager/task-item/task-item';
import { TaskModel } from './core/tasks-view/models/task.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-task-manager');

  tasks: TaskModel[] = [
    { id: 1, 
      title: 'Learn Angular', 
      description: "Create a task manager using the Angular framework, it might take a while but keep going homie.", 
      completeUntil: new Date('2025-10-3'),
      completed: false
    },
    { id: 2, 
      title: 'Build Task Manager', 
      completed: true 
    }
  ];  
}
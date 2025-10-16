import { Component, Input } from '@angular/core';
import { TaskModel } from '../../../core/tasks-view/models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  @Input() task!: TaskModel;

  toggleCompleted(){
    this.task.completed = !this.task.completed;
  }
}

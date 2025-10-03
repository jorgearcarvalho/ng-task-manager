import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerPage } from './core/tasks-view/pages/task-manager/task-manager';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskManagerPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-task-manager');
}
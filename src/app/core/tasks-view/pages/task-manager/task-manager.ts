import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../../../shared/task-manager/section/section';
import { TaskModel } from '../../models/task.model';
import { SectionModel } from '../../models/section.model';

@Component({
  selector: 'app-task-manager-page',
  imports: [CommonModule, Section],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css'
})
export class TaskManagerPage {
  sections: SectionModel[] = [];

  ngOnInit() {
    this.defineSection(
      'To Do', 
      [
        {id: 1,
          title: "Build an Angular Application",
          description: "Currently working on a task manager with angular framework",
          completed: false,
        }
      ]
    )
    this.defineSection('Trying to do', [])    
  }

  defineSection(name: string, tasks: TaskModel[]) {
    this.sections.push({name,tasks});
  }
}

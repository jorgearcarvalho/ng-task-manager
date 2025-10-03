import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { SectionModel } from '../../../core/tasks-view/models/section.model';

@Component({
  selector: 'app-section',
  standalone: true, 
  imports: [CommonModule, TaskItem],
  templateUrl: './section.html',
  styleUrl: './section.css'
})
export class Section {
  @Input() section: SectionModel = { 
    name: "",
    tasks: [],
  };
}

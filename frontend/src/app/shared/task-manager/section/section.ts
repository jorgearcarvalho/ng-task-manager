import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { SectionModel } from '../../../core/tasks-view/models/section.model';
import { TaskFormDialog } from '../../task-form-dialog/task-form-dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskModel } from '../../../core/tasks-view/models/task.model';

@Component({
  selector: 'app-section',
  standalone: true, 
  imports: [CommonModule, TaskItem],
  templateUrl: './section.html',
  styleUrl: './section.css'
})
export class Section {
  @Input() section!: SectionModel;
  
  constructor(private dialog: MatDialog) {}

  addTask() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    const dialogRef = this.dialog.open(TaskFormDialog, {
      width: '25%',
    });

    dialogRef.afterClosed().subscribe((result: Partial<TaskModel>) => {
      if (result) {
        const newTask: TaskModel = {
          id: this.section.tasks.length + 1, // simple id generator
          title: result.title!,
          description: result.description,
          expirationDate: result.expirationDate,
          completed: false,
        };
        this.section.tasks.push(newTask);
      }
    });
  }
}

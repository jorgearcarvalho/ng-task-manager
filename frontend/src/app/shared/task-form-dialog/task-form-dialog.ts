import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { TaskModel } from '../../core/tasks-view/models/task.model';

@Component({
  selector: 'app-task-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './task-form-dialog.html',
  styleUrl: './task-form-dialog.css'
})
export class TaskFormDialog {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskFormDialog>
  ) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      expirationDate: [undefined],
      completed: [false]
    });
  }

  save() {
    if (this.taskForm.invalid) return;
    this.dialogRef.close(this.taskForm.value as TaskModel);
    console.log(this.taskForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}

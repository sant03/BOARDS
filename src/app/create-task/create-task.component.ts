import { Component, Inject } from '@angular/core';
import { TaskServices } from '../services/taskService.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  taskImg: string | null = this.data ? this.data.task.img : null
  taskName: string = this.data ? this.data.task.name : ''
  taskDescription : string = this.data ? this.data.task.description : ''
  taskDate: string = this.data ? this.data.task.date : ''
  taksUsers: any[] = this.data ? this.data.task.users : []

  constructor(private tasks: TaskServices, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any){
  }

  addTask(){
    const task = {
      img: this.taskImg,
      name: this.taskName,
      description: this.taskDescription,
      date: this.taskDate,
      users: this.taksUsers
    };
    this.tasks.addTask(task)
    this.dialog.closeAll()
  }

  getUploadedImg(event: any){
    const file = event.target.files[0];
    console.log(file)
    const blob = new Blob([file], { type: 'application/json' });

    // Crear la URL del Blob
    this.taskImg = URL.createObjectURL(blob);
    console.log(this.taskImg)
  }

  updateTask(){
    const task = {
      img: this.taskImg,
      name: this.taskName,
      description: this.taskDescription,
      date: this.taskDate,
      users: this.taksUsers
    };
    this.tasks.updateTask(task, this.data.typeTask)
    this.dialog.closeAll()
  }
}

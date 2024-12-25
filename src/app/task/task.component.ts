import { Component, Input } from '@angular/core';
import { TaskServices } from '../services/taskService.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: string = ''
  @Input() showTaskImg : boolean = true
  @Input() taskImg : string = ''
  @Input() taskName : string = ''
  @Input() taskDescription : string = ''
  @Input() taskDate : string = ''
  @Input() taskUsers : any[] = []

  constructor(private tasks : TaskServices, private dialog: MatDialog){

  }
  deleteTask(){
    const task = {
      img: this.taskImg,
      name: this.taskName,
      description: this.taskDescription,
      date: this.taskDate,
      users: this.taskUsers
    }
    this.tasks.deleteTask(task, this.task)
  }

  editTask(){
    const task = {
      img: this.taskImg,
      name: this.taskName,
      description: this.taskDescription,
      date: this.taskDate,
      users: this.taskUsers
    }
    this.dialog.open(CreateTaskComponent, {
      width: '500px',
      height: '700px',
      data:{
        typeTask: this.task,
        task : task
      },
    });
  }
}

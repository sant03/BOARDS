import { animate, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as dragula from 'dragula';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskServices } from '../services/taskService.service';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);

export const slideInFromBottom = trigger('slideInFromBottom', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('{{delay}}ms ease-out', style({ transform: 'translateY(0)' })),
  ]),
]);

@Component({
  selector: 'app-to-do-section',
  templateUrl: './to-do-section.component.html',
  styleUrls: ['./to-do-section.component.css'],
  animations: [fadeIn, slideInFromBottom],

})
export class ToDoSectionComponent {



  draggingTaskId : string | null = null;

  todoTasks: any = []
  doingTasks: any = []
  underReviewTasks: any = []
  doneTasks: any = []

  constructor(private dialog: MatDialog, private tasks: TaskServices){}
  ngOnInit(): void {
     this.getTodoTasks()
     this.getDoingTasks()
     this.getUnderReviewTasks()
     this.getDoneTasks()
  }

  getTodoTasks(){
    this.todoTasks = this.tasks.getTodoTasks()
  }
  getDoingTasks(){
    this.doingTasks = this.tasks.getDoingTasks()
  }
  getUnderReviewTasks(){
    this.underReviewTasks = this.tasks.getUnderReviewTasks()
  }
  getDoneTasks(){
    this.doneTasks = this.tasks.getDoneTasks()
  }
 
  getAnimationDelay(index: number): number {
    // Ajusta el valor según tus necesidades
    return index * 300; // Por ejemplo, 100ms de retraso por elemento
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask(newTask : string){
    this.tasks.newTask = newTask
    this.dialog.open(CreateTaskComponent, {
      width: '500px',
      height: '700px'
    });
  }


}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopComponent } from './top/top.component';
import { ToDoSectionComponent } from './to-do-section/to-do-section.component';
import { TaskComponent } from './task/task.component';
import { SplineComponentComponent } from './spline-component/spline-component.component';

import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateTaskComponent } from './create-task/create-task.component';
import {MatDialogModule} from '@angular/material/dialog'
import { TaskServices } from './services/taskService.service';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'




@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopComponent,
    ToDoSectionComponent,
    TaskComponent,
    SplineComponentComponent,
    CreateTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [TaskServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

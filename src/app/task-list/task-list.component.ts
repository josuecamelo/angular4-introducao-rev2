import { Component } from '@angular/core';
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  tasks:Array<Task> = [];

  constructor(private taskService:TaskService) {
    this.taskService.tasks.push(
        {
          name: 'Teste',
          value: 2000,
          date_launch: '2017-12-23'
        }
    );
    this.tasks = this.taskService.tasks;
  }
}

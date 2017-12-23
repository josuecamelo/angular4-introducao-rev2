import { Component } from '@angular/core';
import {Task} from "../task";
import {TaskService} from "./task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';
  tasks:Array<Task> = [];

  constructor() {
    let taskService = new TaskService();
    this.tasks.push({
      name: 'Cozinhar',
      value: 200,
      date_launch: '2017-12-23'
    });

    this.tasks = taskService.tasks;
  }
}

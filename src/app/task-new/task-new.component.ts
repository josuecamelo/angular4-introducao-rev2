import { Component } from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent  {
  task:Task = {
    name: "",
    valor: 0,
    date_launch: '2017-09-09'
  };

  tasks:Array<Task> = [];

  constructor(private taskService:TaskService) {
    this.tasks = this.taskService.tasks;
  }

  add(){
    let task = Object.assign({}, this.task); //adicionando objeto vario no
    this.tasks.push(task);
  }
}

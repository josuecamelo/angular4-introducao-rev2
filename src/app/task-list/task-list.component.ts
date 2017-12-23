import { Component } from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  tasks = [];
  task:Task = {
    name: "",
    valor: 0
  };
  add(){
    let task = Object.assign({}, this.task); //adicionando objeto vario no
    this.tasks.push(task);
  }
}

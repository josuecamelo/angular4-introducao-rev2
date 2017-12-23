import { Component, Input } from '@angular/core';
import {Task} from "../task";

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

  @Input()
  tasks = [];
  add(){
    let task = Object.assign({}, this.task); //adicionando objeto vario no
    this.tasks.push(task);
  }
}

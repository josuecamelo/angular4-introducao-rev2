import { Component } from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';

  tasks:Array<Task> = [
    {
      name: 'Cozinhar',
      value: 200,
      date_launch: '2017-12-23'
    }
  ];
}

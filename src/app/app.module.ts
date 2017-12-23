import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //para usar item de formulario
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import {TaskService} from "./task.service";
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyTaskDirective,
    TaskNewComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService], //registrando o serviço
  bootstrap: [AppComponent]
})
export class AppModule { }

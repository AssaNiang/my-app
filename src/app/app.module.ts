import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TodosComponent } from './components/todos/todos.component';
import { ClassComponent } from './components/class/class.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TodosComponent,
    ClassComponent,
    TodoItemComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

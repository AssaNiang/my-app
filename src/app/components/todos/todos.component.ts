import { Component } from '@angular/core';
import { Todo, TODO } from 'src/app/mocks/todo.mock';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  // todos une nlle variable
  todos: Todo[] = TODO;

}

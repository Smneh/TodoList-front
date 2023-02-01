import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  newTodoTitle = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if(this.newTodoTitle.trim() !== ''){
      this.todoService.createTodo(this.newTodoTitle);
      this.newTodoTitle = ''
    }
  }
}

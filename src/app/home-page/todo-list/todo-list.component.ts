import { Component , EventEmitter, Input, Output, SimpleChange} from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todos = []
  }
}

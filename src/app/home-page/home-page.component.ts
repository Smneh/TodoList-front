import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  todos: Todo[] = [];
  subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.fetchTodos();
    this.subscription = this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
    this.todos = this.todoService.getTodos();
  }

  addNewTodo() {
    this.todoService.fetchTodos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.todos = [];
  }
}

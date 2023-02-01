import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from '../environment/environment';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  errorMessage = '';
  todos: Todo[] = [];
  todosChanged = new Subject<Todo[]>();

  baseUrl = environment.apiUrl;
  private getTodosUrl = this.baseUrl + 'todos/getUserTodos';
  userToken = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userToken}`,
    }),
  };

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.todos.slice();
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosChanged.next(this.todos.slice());
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  fetchTodos() {
    console.log(this.httpOptions)
    return this.http.get<Todo[]>(this.getTodosUrl, this.httpOptions).subscribe({
      next: (todos) => {
        this.todos = todos;
        this.todosChanged.next(this.todos.slice());
      },
      error: (error) => {
        alert(error.statusText);
      },
    });
  }

  createTodo(todoTile: string) {
    return this.http
      .post<Todo>(`${this.baseUrl}todos`, `"${todoTile}"`, this.httpOptions)
      .subscribe({
        next: (todo) => {
          this.addTodo(todo);
        },
        error: (error) => {
          alert(error.statusText);
        },
      });
  }

  updateTodo(id: string, todo: Object) {
    return this.http
      .put(`${this.baseUrl}todos/${id}`, todo, this.httpOptions)
      .subscribe({
        error: (error) => {
          alert(error.statusText);
        },
      });
  }

  deleteTodo(id: string) {
    return this.http
      .delete(`${this.baseUrl}todos/${id}`, this.httpOptions)
      .subscribe({
        next: () => {
          this.removeTodo(id);
        },
        error: (error) => {
          alert(error.statusText);
        },
      });
  }
}

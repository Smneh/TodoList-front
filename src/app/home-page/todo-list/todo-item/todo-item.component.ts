import { Component, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;

  editing = false;
  lastTitle = '';

  constructor(private todoService: TodoService) {
    this.todo = {} as Todo;
  }

  updateTodo() {
    if(this.todo.title.trim() !== ''){
      this.todoService.updateTodo(this.todo.id, {
        title: this.todo.title,
        isCompleted: this.todo.isCompleted,
      });
    }
    else{
      this.todo.title = this.lastTitle;
    }
  }

  editDone() {
    this.toggleEdit();
    this.updateTodo();
  }

  editStart(){
    this.lastTitle = this.todo.title;
    this.toggleEdit();
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
  }
}

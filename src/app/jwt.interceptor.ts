import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { TodoService } from './home-page/todo.service';
import { Todo } from './home-page/todo.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private todoService: TodoService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization:
          'Bearer ' + localStorage.getItem('token')
      },
    });
    return next.handle(request);
  }
}

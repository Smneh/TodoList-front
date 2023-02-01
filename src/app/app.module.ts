import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignupComponent } from './Authentication/signup/signup.component';
import { AuthenticationComponent } from './Authentication/authentication.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoListComponent } from './home-page/todo-list/todo-list.component';
import { CreateTodoComponent } from './home-page/create-todo/create-todo.component';
import { AuthenticationService } from './Authentication/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoItemComponent } from './home-page/todo-list/todo-item/todo-item.component';
import { JwtInterceptor } from './jwt.interceptor';
import { TodoService } from './home-page/todo.service';
import { HomeHeaderComponent } from './home-page/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthenticationComponent,
    HomePageComponent,
    TodoListComponent,
    CreateTodoComponent,
    TodoItemComponent,
    HomeHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthenticationService,
    TodoService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() onChangeView = new EventEmitter();

  errorMessage = '';
  username = '';
  password = '';

  constructor(
    private router: Router,
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService
  ) {}

  onLogin() {
    if(this.username.trim() !== '' && this.password.trim() !== ''){
      this.authenticationService.login(this.username, this.password).subscribe({
        next: (data) => {
          const token = data.token;
          localStorage.setItem('token', token);
          this.router.navigate(['home-page']);
        },
        error: (error) => {
          if(error.status == 0)
            this.errorMessage = 'Server Error';
          else
            this.errorMessage = error.error;
        },
      });
    }
    else {
      this.errorMessage = "Fields can't be empty !"
    }
  }

  showSignUp() {
    this.onChangeView.emit();
  }
}

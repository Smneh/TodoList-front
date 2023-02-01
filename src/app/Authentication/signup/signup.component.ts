import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Output() onChangeView = new EventEmitter();

  errorMessage = '';
  username = '';
  password = '';
  name = '';

  constructor(
    private router: Router,
    @Inject(AuthenticationService)
    private authenticationService: AuthenticationService
  ) {}

  onSignUp() {
    if (this.username !== '' && this.password !== '') {
      this.authenticationService.signUp(this.name, this.username, this.password).subscribe({
        next: (data) => {
          const token = data.token;
          localStorage.setItem('token', token);
          this.router.navigate(['home-page']);
        },
        error: (error) => {
          this.errorMessage = error.error;
        },
      });
    } else {
      this.errorMessage = "Fields can't be empty !";
    }
  }

  showLogin() {
    this.onChangeView.emit();
  }
}

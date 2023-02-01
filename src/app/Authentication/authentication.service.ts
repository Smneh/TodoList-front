import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.apiUrl;
  private loginUrl = this.baseUrl + 'users/login';
  private signUpUrl = this.baseUrl + 'users/createUser';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.loginUrl, body);
  }
  signUp(name: string, username: string, password: string): Observable<any> {
    const body = { name, username, password };
    return this.http.post<any>(this.signUpUrl, body);
  }
}

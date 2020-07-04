import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  isLogged = false;
  isLogged$ = new BehaviorSubject<boolean>(this.isLogged);

  constructor(private _httpClient: HttpClient) { }

  public login(loginFormValue: any) {
    const url = `${this.apiUrl}/auth/login`;
    return this._httpClient.post<{isLogged: boolean, error: any}>(url, loginFormValue);
  }

  public logout() {
    const url = `${this.apiUrl}/auth/logout`;
    return this._httpClient.get<{isLogged: boolean, error: any}>(url);
  }
}

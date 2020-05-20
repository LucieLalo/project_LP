import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

  public login(loginFormValue: any) {
    const url = `${this.apiUrl}/auth/login`;
    return this._httpClient.post<{isLogged: boolean, error: any}>(url, loginFormValue);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  public register(registerFormValue: any) {
    const url = `${this.apiUrl}/user`;
    return this._httpClient.post(url, registerFormValue);
  }

  public me() {
    const url = `${this.apiUrl}/user/me`;
    return this._httpClient.get<{user: any}>(url);
  }
}

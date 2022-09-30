import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = "https://localhost:7225/api/Login/";

  constructor(
    private http : HttpClient,
  ) { }

  public signUp(userObj: any) {
    return this.http.post<any>(`${this.baseURL}signup`, userObj);
  }

  public login(loginObj: any) {
    return this.http.post<any>(`${this.baseURL}login`, loginObj);
  }
}
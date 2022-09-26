import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

export interface auth {
  token: string;
}
export const headers = { 'x-access-tokens': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoxNjk5ODYwMDMwfQ.dfwxetg8KRIAeXl-U-h3pq0N3AcaxsculJoWJVJxDvQ' }
export const url = 'http://192.168.0.104:5000/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  removeToken() {
    return localStorage.removeItem('token')
  }

  login(userInfo: auth) {
    return this.http.post<auth>(url, userInfo);
  }
}

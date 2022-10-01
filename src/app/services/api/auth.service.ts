import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { auth } from 'src/app/models/auth';

export let headers = { 'x-access-tokens': '' }
export const url = 'https://wellabridal.uz/api/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged!: boolean;

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
    headers['x-access-tokens'] = token;
  }

  getToken() {
    let token = localStorage.getItem('token')
    if (token !== null) {
      this.setToken(token)
    } else {
      this.isLogged = false
    }
  }

  isLoggedIn() {
    this.getToken()
    this.check().subscribe(data => {
      if (data.message === 'token is invalid') {
        this.isLogged = false
      } else {
        this.isLogged = true
      }
    })
    return this.isLogged
  }

  removeToken() {
    return localStorage.removeItem('token')
  }

  login(userInfo: auth) {
    return this.http.post<auth>(url + 'login', userInfo);
  }

  check() {
    return this.http.get<any>(url + 'check', { headers })
  }
}

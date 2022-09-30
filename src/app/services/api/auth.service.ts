import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface auth {
  token: string;
}
export let headers = { 'x-access-tokens': '' }
export const url = 'http://wellabridal.uz/api/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged!: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
    headers = { 'x-access-tokens': token }
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
    return this.http.post<any>(url + 'login', userInfo);
  }

  check() {
    return this.http.get<any>(url + 'check', { headers })
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {th} from "@faker-js/faker";

type UserCreate = {
  firstName: string,
  lastName: string,
  email: string,
  userName: string,
  password: string,
}

@Injectable({providedIn: 'root'})
export class UserService {
  baseUrl = 'http://195.154.102.249:7272/api/v1/Users'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  login(userName: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {userName, password}, this.httpOptions)
  }

  getUsers() {
    return this.http.get(this.baseUrl)
  }

  addUser(data: UserCreate) {
    return this.http.post<UserCreate>(this.baseUrl, data, this.httpOptions)
  }

}

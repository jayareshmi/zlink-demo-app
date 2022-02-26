import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  fetchUser() {
    const url = 'https://randomuser.me/api/'
    return this.http.get<{ results: any, info: any }>(url)
  }


}

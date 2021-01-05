import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {user} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_ENDPOINT = 'http://localhost:8000/api/auth/'
  constructor(private httpClient: HttpClient) {}

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'users');
  }

  save(user: user){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest'})
    return this.httpClient.post(this.API_ENDPOINT+ 'signup', user, {headers: headers})
  }

  put(user: user){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest'})
    return this.httpClient.post(this.API_ENDPOINT+ 'update/' + user.id, user, {headers: headers})
  }

  delete(id){
    return this.httpClient.get(this.API_ENDPOINT+'delete/'+id);
  }
}

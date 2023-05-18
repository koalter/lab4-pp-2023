import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USERNAME = 'koalter';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserData(username: string = USERNAME) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}

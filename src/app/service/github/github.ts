import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Github {
  private username = 'Mamath68';
  private token = environment.githubToken;
  private apiUrl = `https://api.github.com/users/${this.username}/repos`;

  private headers = new HttpHeaders({
    Authorization: `token ${this.token}`
  });

  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }

  getLanguages(repoName: string) {
    const url = `https://api.github.com/repos/${this.username}/${repoName}/languages`;
    return this.http.get(url, { headers: this.headers });
  }
}

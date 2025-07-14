import {Component, OnInit} from '@angular/core';
import {SkillCard} from '../shared/skill-card/skill-card';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-skills',
  imports: [
    SkillCard
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  skills: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/skills.json').subscribe(data => this.skills = data);
  }
}

import {Component, OnInit} from '@angular/core';
import {SkillCard} from '../shared/skill-card/skill-card';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

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

  title: string = "Mes Compétences";

  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/skills.json').subscribe(data => this.skills = data);
  }
}

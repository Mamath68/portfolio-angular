import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectCard} from '../shared/project-card/project-card';
import {Title} from '@angular/platform-browser';

interface Project {
  id: number;
  title: string;
  languages: string[];
  description?: string;
  demo?: string;
  repo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard

  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
  projects: Project[] = [];
  title: string = "Mes Projets";

  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/projects.json').subscribe(data => this.projects = data);
  }
}

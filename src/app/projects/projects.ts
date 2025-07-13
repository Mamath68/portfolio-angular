import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectCard} from '../shared/project-card/project-card';

interface Project {
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
  projects: Project[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/projects.json').subscribe(data => this.projects = data);
  }

}

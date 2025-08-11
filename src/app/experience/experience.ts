import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Card} from '../shared/card/card';
import {ExperienceCard} from '../shared/experience-card/experience-card';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  imports: [
    NgOptimizedImage,
    Card,
    ExperienceCard
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit {
  formations: any[] = [];
  experiences: any[] = [];
  title: string = "Mes expériences";

  constructor(private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/formations.json').subscribe(data => this.formations = data);
    this.http.get<any[]>('assets/data/experiences.json').subscribe(data => this.experiences = data);
  }

  calculateAge(birthDateString: string): number {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  mathieu = "assets/img/mathieu.jpg";
}

import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title: string = 'Mathieu Stamm';
  calculateAge(birthDateString: string): number {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  mathieu: string = "assets/img/mathieu.jpg";

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}

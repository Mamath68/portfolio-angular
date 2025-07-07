import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
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

  mathieu = "img/mathieu.jpg";
}

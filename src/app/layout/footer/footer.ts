import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink

  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
currentYear = new Date().getFullYear();
github = "/img/github.png";
linkedin = "/img/linkedin.png";
}

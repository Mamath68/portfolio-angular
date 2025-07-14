import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-skill-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css'
})
export class SkillCard {
  @Input() title!: string;
  @Input() img!: string;
}

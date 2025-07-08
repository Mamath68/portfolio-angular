import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css'
})
export class ExperienceCard {
  @Input() title!: string;
  @Input() company!: string;
  @Input() description?: string;
  @Input() date?: string;
}

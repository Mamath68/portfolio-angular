import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-mentions',
  imports: [],
  templateUrl: './mentions.html',
  styleUrl: './mentions.css'
})
export class Mentions {
  title: string = "Mentions légaux"
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

}

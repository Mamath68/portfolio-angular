import {Component} from '@angular/core';
import {InputComponent} from '../shared/contact/input/input';
import {Textarea} from '../shared/contact/textarea/textarea';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [
    InputComponent,
    Textarea,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  title: string = "Me contacter";

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}

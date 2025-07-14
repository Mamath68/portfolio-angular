import {Component} from '@angular/core';
import {InputComponent} from '../shared/contact/input/input';
import {Textarea} from '../shared/contact/textarea/textarea';

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

}

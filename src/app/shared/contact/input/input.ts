import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputComponent {
  @Input() label?: string = '';
  @Input() identifier?: string = '';
  @Input() name?: string = '';
  @Input() type?: string = 'text';
  @Input() placeholder: string = '';
  @Input() className?: string = '';
}

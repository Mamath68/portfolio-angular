import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textarea',
  imports: [],
  templateUrl: './textarea.html',
  styleUrl: './textarea.css'
})
export class Textarea {
  @Input() label?: string = '';
  @Input() name?: string = '';
  @Input() identifier?: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() rows: number = 4;
  @Input() cols: number = 50;
  @Input() className?: string = '';

}

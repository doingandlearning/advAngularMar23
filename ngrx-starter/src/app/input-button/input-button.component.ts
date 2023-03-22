import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css'],
})
export class InputButtonComponent {
  @Input() message!: string;
}

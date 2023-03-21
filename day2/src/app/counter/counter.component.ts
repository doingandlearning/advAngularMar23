import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  template: `
    <div>{{ counter }}</div>
    <button (click)="increment()">Increment</button>
  `,
  standalone: true,
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
}

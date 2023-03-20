import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.scss'],
})
export class ContactDisplayComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() isWorking: boolean = false;
  @Output() hello = new EventEmitter();

  handleClick() {
    this.hello.emit({ name: this.name });
  }
}

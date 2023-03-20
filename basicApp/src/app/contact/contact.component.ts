import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../lib/contact';
import { contacts } from '../lib/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact: Contact | undefined = undefined;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.contact = contacts.find(
        (contact) => contact.name === params['contact']
      );
    });
  }

  handleHello(event: { name: string }) {
    console.log(`${event.name} says hello!`);
  }
}

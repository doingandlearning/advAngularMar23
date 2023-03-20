import { Component } from '@angular/core';
import { Contact } from '../lib/contact';
import { contacts } from '../lib/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[];

  constructor() {
    this.contacts = contacts;
  }
}

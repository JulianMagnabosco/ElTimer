import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-component',
  imports: [],
  templateUrl: './contacts-component.html',
  styleUrl: './contacts-component.css',
})
export class ContactsComponent {
  copy() {
    const email = 'julian.magnabosco@gmail.com'
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard: ' + email);
  }
}

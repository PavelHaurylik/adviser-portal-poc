import { Component, OnInit } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactUsComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

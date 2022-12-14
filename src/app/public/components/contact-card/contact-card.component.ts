import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceHolder } from 'src/app/core/interfaces/contacts';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor() { }

  @Input() contact:ContactJsonPlaceHolder = {};

  ngOnInit(): void {
  }

}

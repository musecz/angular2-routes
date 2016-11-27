import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-can-activate',
  templateUrl: './can-activate.component.html',
  styleUrls: ['./can-activate.component.css'],
  providers: []
})
export class CanActivateComponent implements OnInit {
  public contacts: Contact;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this._route.snapshot.data['contacts'];
  }

}

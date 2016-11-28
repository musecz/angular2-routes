import { Injectable, Inject } from '@angular/core';
import {Observable} from "rxjs";

export interface Contact {
  id: number;
  name: string;
  twitter: string;
}
let contacts = [
  {
    id: 1,
    name: 'tonton',
    twitter: '@tonton'

  },
  {
    id: 2,
    name: 'jack',
    twitter: '@jack'
  }
];

@Injectable()
export class ContactService {
  constructor(@Inject('apiUrl') private _apiUrl) {}
  getContacts(): Observable<Contact>{
      console.log(this._apiUrl);
    return Observable.create(observer => {
      setTimeout(()=>{
        observer.next(contacts);
        observer.complete();
      }, 2000);
    })
  }

}

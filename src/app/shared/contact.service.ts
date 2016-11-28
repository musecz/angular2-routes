import { Injectable } from '@angular/core';
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

  getContacts(): Observable<Contact>{
    return Observable.create(observer => {
      setTimeout(()=>{
        observer.next(contacts);
        observer.complete();
      }, 2000);
    })
  }

}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import * as Rx from 'rxjs';


let contacts = [
    {id: 1, name: 'Jack Daniel', twitter: '@Jack'},
    {id: 2, name: 'Tonton Flingeur', twitter: '@tonton'},
];

@Injectable()
export class ContactService {

    constructor() {
    }

    getContacts() {
        return Observable.create(observer => {
            setTimeout(()=> {
                observer.next(contacts);
                observer.complete();
            },3000);
        });
    }

    getContact(id) {
        return Observable.create(observer => {
            setTimeout(()=> {
                observer.next(contacts.find((contact) =>contact.id == id));
                observer.complete();
            },3000);
        });
    }

}

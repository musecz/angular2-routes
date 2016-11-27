import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {CanActivateComponent} from './can-activate/can-activate.component';
import {ContactService} from './shared/contact.service'
@Injectable()
export class ContactResolveService implements Resolve<CanActivateComponent> {

    constructor(private _contactService: ContactService) {
    }

    resolve() {
        return this._contactService.getContacts();
    }

}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {ContactService} from '../shared/contact.service';
import {Contact} from '../shared/contact.service';
import {Subscription} from 'rxjs/Subscription';
import {LogDebuggerService} from '../shared/log-debugger.service';
import {ConsoleLogService} from '../shared/console-log.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        ContactService,
        ConsoleLogService,
        {
            provide: LogDebuggerService,
            useFactory: (consoleLog)=> {
                return new LogDebuggerService(consoleLog, false);
            },
            deps: [ConsoleLogService]
        }
    ]
})
export class HomeComponent implements OnInit, OnDestroy {
    public contacts: Contact;
    private _contactSubscription: Subscription;

    constructor(private _contactService: ContactService,
                private _logService: LogDebuggerService) {
        this._logService.debug('this is a simple test');
    }

    ngOnInit() {
        this._contactSubscription = this._contactService.getContacts().subscribe(contacts => this.contacts = contacts);
    }

    ngOnDestroy() {
        this._contactSubscription.unsubscribe();
    }

}

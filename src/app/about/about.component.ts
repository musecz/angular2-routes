import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

    public param: number;
    public param_async: number;
    private paramSubscription: Subscription;

    constructor( private _route: ActivatedRoute) {
        this.param = null;
    }

    ngOnInit() {
        this.param = this._route.snapshot.params['id'];
        this.paramSubscription = this._route.params.subscribe(param => {
            this.param_async = param['id'];
        });
    }

    ngOnDestroy() {
        this.paramSubscription.unsubscribe();
    }
}

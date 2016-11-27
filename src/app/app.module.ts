import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {appRoutes} from './app.route';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate.service';
import {ContactResolveService} from './contact-resolve.service';

import {ContactService} from './shared/contact.service';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CanActivateComponent} from './can-activate/can-activate.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CanActivateComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [AuthGuard, CanDeactivateGuard, ContactResolveService , ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CanActivateComponent} from './can-activate/can-activate.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate.service';
import {ContactResolveService} from './contact-resolve.service';

/*
 * appRoutes is an array of routes that describe how to navigate. Each Route maps a URL path to a component.
 * */
export const appRoutes: Routes = [
    // Default route
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'can-activate',
        component: CanActivateComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard],
        resolve: {
            contacts: ContactResolveService
        }
    },
    // 404
    {
        path: '**', redirectTo: ''
    }
];




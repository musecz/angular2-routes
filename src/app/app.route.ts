import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
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
    // 404
    {
        path: '**', component: HomeComponent
    }
];




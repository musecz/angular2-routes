import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


/*
 * appRoutes is an array of routes that describe how to navigate. Each Route maps a URL path to a component.
 * */
export const appRoutes: Routes = [
    // Default route
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {path: 'child-1', component: Child1Component},
            {path: 'child-2', component: Child2Component},
            {path: '', component: Child1Component}
        ]
    },
    // 404
    {
        path: '**', component: HomeComponent
    }
];




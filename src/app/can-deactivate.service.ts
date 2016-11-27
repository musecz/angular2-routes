import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivateComponent } from './can-activate/can-activate.component';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanActivateComponent>{

  canDeactivate(component: CanActivateComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return window.confirm('Do you really want to leave ' + url + ' ?');
  }

}

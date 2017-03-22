import { Injectable, Component } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeavingGuard implements CanDeactivate<Component> {
  canDeactivate(
    component: Component,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(`[${Date.now()}] leaving ${state.url}`);
    return true;
  }
}

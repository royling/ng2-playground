import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,
  NavigationStart
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParentGuard implements CanActivate, CanActivateChild {

  // constructor(private router: Router) {
  //   this.router.events.subscribe(e => {
  //     if (e instanceof NavigationStart) {
  //       console.log(`start navigation to ${e.url}`)
  //     }
  //     console.dir(e);
  //   })
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(`[${Date.now()}] ParentGuard::canActivate`)
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(`[${Date.now()}] ParentGuard::canActivateChild`)
    return true;
  }
}

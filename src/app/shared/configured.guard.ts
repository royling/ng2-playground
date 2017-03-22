import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfiguredGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log(`[${Date.now()}] ConfiguredGuard: ${route.path}`);
    return true;
  }
}

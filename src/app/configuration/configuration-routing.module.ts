import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { ProxyComponent } from './proxy/proxy.component';
// import { AuthenticationGuard } from '../shared/authentication.guard';
// import { AuthorizationGuard } from '../shared/authorization.guard';
import { LeavingGuard } from '../shared/leaving.guard';
// import { ConfiguredGuard } from '../shared/configured.guard';
import { ParentGuard } from './parent.guard';
import { ChildGuard } from './child.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: 'config',
    // canActivate: [ParentGuard],
    canActivateChild: [ParentGuard],
    // canLoad: [ConfiguredGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        // canActivate: [ChildGuard],
        canActivateChild: [ChildGuard],
        canDeactivate: [/*LeavingGuard*/]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        // canActivate: [ChildGuard],
        // canActivateChild: [ChildGuard],
        // canDeactivate: [LeavingGuard],
        children: [
          {
            path: '',
            component: WelcomeComponent
          },
          {
            path: 'proxy',
            component: ProxyComponent,
            // canActivate: [AdminGuard],
            // canActivateChild: [AdminGuard],
            canDeactivate: [/*AdminGuard*/]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }

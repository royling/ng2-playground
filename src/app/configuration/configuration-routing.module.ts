import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticationGuard } from '../shared/authentication.guard';
import { AuthorizationGuard } from '../shared/authorization.guard';
import { LeavingGuard } from '../shared/leaving.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthorizationGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        canDeactivate: [LeavingGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canDeactivate: [LeavingGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }

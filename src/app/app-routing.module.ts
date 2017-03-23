import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfiguredGuard } from './shared/configured.guard';
// import { AuthenticationGuard } from './shared/authentication.guard';
// import { AuthorizationGuard } from './shared/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }//,
    // children: [
      // {
      //   path: 'config',
      //   loadChildren: './configuration/configuration.module#ConfigurationModule',
      //   // canActivateChild: [AuthorizationGuard],
      //   // canActivate: [AuthenticationGuard],
      //   canLoad: [/*ConfiguredGuard*/]
      // }
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

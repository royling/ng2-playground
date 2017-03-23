import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityComponent } from './community/community.component';
import { SupportGuard } from './support.guard';

const routes: Routes = [
  {
    path: 'support',
    canActivateChild: [SupportGuard],
    children: [
      {
        path: 'community',
        component: CommunityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { CommunityComponent } from './community/community.component';

import { SupportGuard } from './support.guard';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule
  ],
  providers: [SupportGuard],
  declarations: [CommunityComponent]
})
export class SupportModule { }

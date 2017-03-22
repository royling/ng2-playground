import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationGuard } from './authentication.guard';
import { AuthorizationGuard } from './authorization.guard';
import { ConfiguredGuard } from './configured.guard';
import { LeavingGuard } from './leaving.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthenticationGuard, AuthorizationGuard, ConfiguredGuard, LeavingGuard]
})
export class SharedModule { }

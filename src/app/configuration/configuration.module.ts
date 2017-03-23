import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';

import { ParentGuard } from './parent.guard';
import { ChildGuard } from './child.guard';
import { AdminGuard } from './admin.guard';
import { ProxyComponent } from './proxy/proxy.component';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ],
  declarations: [WelcomeComponent, SettingsComponent, ProxyComponent],
  providers: [ParentGuard, ChildGuard, AdminGuard]
})
export class ConfigurationModule {

  constructor() {
    console.log(`ConfigurationModule instantiated at ${Date.now()}`);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateModuleComponent } from './private-module.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchMakingComponent } from './match-making/match-making.component';
import { MessagesComponent } from './messages/messages.component';
import { PreferenceComponent } from './preference/preference.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { EventsComponent } from './events/events.component';
import { PrivateModuleRoutingModule } from './private-module-routing';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../shared/ng-zorro-antd.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { AdsBarComponent } from '../components/ads-bar/ads-bar.component';



@NgModule({
  declarations: [
    PrivateModuleComponent,
    EmailVerificationComponent,
    SetupComponent,
    DashboardComponent,
    MatchMakingComponent,
    MessagesComponent,
    PreferenceComponent,
    SubscriptionComponent,
    EventsComponent,
    NavBarComponent,
    SidebarComponent,
    AdsBarComponent
  ],
  imports: [
    CommonModule,
    PrivateModuleRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class PrivateModuleModule { }

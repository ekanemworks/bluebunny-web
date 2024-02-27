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
    
  ],
  imports: [
    CommonModule,
    PrivateModuleRoutingModule
  ]
})
export class PrivateModuleModule { }

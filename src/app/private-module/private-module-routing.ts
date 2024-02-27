import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateModuleComponent } from './private-module.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { EventsComponent } from './events/events.component';
import { MatchMakingComponent } from './match-making/match-making.component';
import { MessagesComponent } from './messages/messages.component';
import { PreferenceComponent } from './preference/preference.component';
import { SetupComponent } from './setup/setup.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  {path: '', component: PrivateModuleComponent, children:[
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: DashboardComponent,},
    {path:'verify-email', component: EmailVerificationComponent,},
    {path:'events', component: EventsComponent,},
    {path:'match-making', component: MatchMakingComponent,},
    {path:'messages', component: MessagesComponent,},
    {path:'preference', component: PreferenceComponent,},
    {path:'setup', component: SetupComponent,},
    {path:'subscription', component: SubscriptionComponent,},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateModuleRoutingModule { }
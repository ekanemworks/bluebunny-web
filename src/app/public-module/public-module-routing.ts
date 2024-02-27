import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicModuleComponent } from './public-module.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: '', component: PublicModuleComponent, children:[
    {path:'', redirectTo: '/welcome', pathMatch: 'full'},
    {path:'welcome', component: WelcomeComponent,},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicModuleRoutingModule { }

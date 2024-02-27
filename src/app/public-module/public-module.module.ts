import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModuleComponent } from './public-module.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [
    PublicModuleComponent,
    WelcomeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModuleModule { }

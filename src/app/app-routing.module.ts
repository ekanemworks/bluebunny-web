import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./public-module/public-module.module').then(m => m.PublicModuleModule) },
  { path: 'account', loadChildren: () => import('./private-module/private-module.module').then(m => m.PrivateModuleModule)},
  // { path: '**', loadChildren: () => import('./public-module/public-module.module').then(m => m.PublicModuleModule)}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

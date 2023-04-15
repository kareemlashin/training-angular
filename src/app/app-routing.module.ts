import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'Admin',
    loadChildren:()=> import('./modules/admin/admin.module').then(admin=>admin.AdminModule)
  },
  {
    path:'',
    redirectTo:'/Admin/A',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

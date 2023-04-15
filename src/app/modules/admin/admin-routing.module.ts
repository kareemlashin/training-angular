import { RouterModule, Routes } from '@angular/router';

import { ChildrenAAdminComponent } from './views/children-a-admin/children-a-admin.component';
import { ChildrenBComponent } from './views/children-b/children-b.component';
import { ChildrenCComponent } from './views/children-c/children-c.component';
import { ChildrenDComponent } from './views/children-d/children-d.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
   
      {
        path:'A',
        component:ChildrenAAdminComponent
      },
         
      {
        path:'B',
        component:ChildrenBComponent
      },
         
      {
        path:'C',
        component:ChildrenCComponent
      },
         
      {
        path:'D',
        component:ChildrenDComponent
      },
      {
        path:'',
        redirectTo:'A',
        pathMatch:'full'
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

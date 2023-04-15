import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChildrenAAdminComponent } from './views/children-a-admin/children-a-admin.component';
import { ChildrenBComponent } from './views/children-b/children-b.component';
import { ChildrenCComponent } from './views/children-c/children-c.component';
import { ChildrenDComponent } from './views/children-d/children-d.component';

@NgModule({
  declarations: [
    IndexComponent,
    ChildrenAAdminComponent,
    ChildrenBComponent,
    ChildrenCComponent,
    ChildrenDComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

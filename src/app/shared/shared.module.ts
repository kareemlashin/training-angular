import { AdminComponent } from './layout/admin/admin.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DatePipe } from './pipes/date.pipe';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { LoginComponent } from './layout/login/login.component';
import { NamePipe } from './pipes/name.pipe';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { OnlyTextArabicDirective } from './directives/only-text-arabic.directive';
import { RegisterComponent } from './layout/register/register.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WebComponent } from './layout/web/web.component';

@NgModule({
  declarations: [
    HeadNavComponent,
    SideNavComponent,
    NavComponent,
    DatePipe,
    NamePipe,
    OnlyNumberDirective,
    OnlyTextArabicDirective,
    WebComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadNavComponent,
    SideNavComponent,
    NavComponent,
    DatePipe,
    NamePipe,
    OnlyNumberDirective,
    OnlyTextArabicDirective,
    WebComponent,
    AdminComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class SharedModule { }

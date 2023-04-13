import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Interceptors } from './core/interceptor';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // one input get value 
    FormsModule,
    // to http request
    HttpClientModule,
    // to use as total
    ReactiveFormsModule,
    // Shared Module
    SharedModule
  ],
  providers: [
    // to inject all Interceptors to all project
    Interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

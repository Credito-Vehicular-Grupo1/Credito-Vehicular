import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

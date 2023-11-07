import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {IntroduccionComponent} from "./pages/introduccion/introduccion.component";
import {PlanComponent} from "./pages/plan/plan.component";
import {FooterComponent} from './pages/footer/footer.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';



const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: SignInComponent },
  { path: 'introduction', component: IntroduccionComponent },
  { path: 'plan', component: PlanComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'configuration', component: ConfiguracionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

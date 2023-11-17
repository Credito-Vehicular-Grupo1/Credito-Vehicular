import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Importaciones de Angular Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from "@angular/material/datepicker";

// Componentes de la aplicación
import { AppComponent } from './app.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { PlanComponent } from './pages/plan/plan.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';


// Servicios
import { AuthService } from "./services/auth.service";
import { PlanService } from "./services/plan.service";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    IntroduccionComponent,
    PlanComponent,
    FooterComponent,
    ConfiguracionComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [
    // AuthService y PlanService ya están provistos en 'root' en su propia declaración y no es necesario incluirlos aquí
    // Quitar MatDatepickerModule de providers, ya que debe estar en imports
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

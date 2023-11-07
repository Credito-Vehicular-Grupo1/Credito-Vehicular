import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    const loginData = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    };

    // Usar AuthService para enviar los datos de inicio de sesión al servidor
    this.authService.login(loginData.email, loginData.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
        // Aquí puedes guardar el token en el almacenamiento local y redirigir al usuario
        this.router.navigate(['/introduction']);
      },
      error => {
        console.error('Error en el inicio de sesión', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}

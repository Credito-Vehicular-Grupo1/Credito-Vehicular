import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const registerData = {
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    };

    this.authService.register(registerData).subscribe(
      response => {
        console.log('Registro exitoso', response);
        // Aquí puedes redirigir al usuario a la pantalla de inicio de sesión o a una página de confirmación
        this.router.navigate(['/sign-in']);
      },
      error => {
        console.error('Error en el registro', error);
        // Aquí manejas los errores, posiblemente mostrando un mensaje al usuario
      }
    );
  }

  goToSignIn() {
    this.router.navigate(['/sign-in']); // Asegúrate de que la ruta coincida con tu configuración de rutas
  }
}

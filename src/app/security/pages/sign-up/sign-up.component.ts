import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(credentials: any) {
    /*
    if (this.signUpForm.valid) {
      // Aquí reemplaza 'tu_api_de_registro' con la URL de tu API
      this.http.post('tu_api_de_registro', credentials).subscribe(
        response => {
          console.log('Registro exitoso', response);
          // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Ocurrió un error en el registro', error);
          // Aquí gestionas los errores de la petición
        }
      );
    }
    */
  }

  goToSignIn() {
    this.router.navigate(['/sign-in']); // Asegúrate de que la ruta coincida con tu configuración de rutas
  }
}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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

    console.log(loginData);
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}

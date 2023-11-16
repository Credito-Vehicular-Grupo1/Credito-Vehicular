import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  configForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private planService: PlanService) {
    this.configForm = this.formBuilder.group({
      periodoGracia: ['', [Validators.required]],
      tipoTasa: ['', [Validators.required]],
      tipoMoneda: ['', [Validators.required]],
      costoTotal: ['', [Validators.required]],
      cuotaInicial: ['', [Validators.required]],
      tasa: ['', [Validators.required]],
      cok: ['', [Validators.required]],
      nPeriodoGracia: ['', [Validators.required]],
      nCuotas: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.configForm.valid) {
      this.planService.createPlan(this.configForm.value).subscribe({
        next: (response) => {
          console.log(response);
          // Aquí manejas la respuesta, como mostrar un mensaje de éxito o redirigir
          this.router.navigate(['/plan']);
        },
        error: (error) => {
          console.error(error);
          // Aquí manejas el error, como mostrar un mensaje de error
        }
      });
    } else {
      console.error('El formulario no es válido');
    }
  }
}

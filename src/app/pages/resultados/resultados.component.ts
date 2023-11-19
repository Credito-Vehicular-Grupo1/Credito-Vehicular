import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  planDetails: any;
  van?: number;
  planId?: string;

  constructor(
    private planService: PlanService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.planId = params['planId'];

          // Verificar si se ha recuperado el planId
          if (this.planId) {
              // Llamar al servicio para obtener los detalles del plan usando this.planId
              this.planService.getPlanDetails(this.planId).subscribe({
                  next: (details) => {
                      this.planDetails = details;
                      this.calcularVAN();
                  },
                  error: (error) => {
                      console.error('Error fetching plan details:', error);
                  }
              });
          } else {
              console.error('No se ha recibido el planId en los parámetros de la URL.');
          }
      });
  }

  calcularVAN() {
    if (this.planDetails) {
      const costoTotal = Number(this.planDetails.costoTotal);
      const cuotaInicial = Number(this.planDetails.cuotaInicial);
      const numeroPeriodoGracia = Number(this.planDetails.numeroPeriodoGracia);
      const numeroCuota = Number(this.planDetails.periodo) * 12; // Asumiendo que el periodo está en años
      const cok = Math.pow(1 + Number(this.planDetails.cok) / 100, 1 / 12) - 1; // Tasa de descuento mensual
      let tasa = Number(this.planDetails.tasa) / 100; // Tasa anual
      let tasaMensual;

      if (this.planDetails.tipoTasa === 'TNA') {
        tasaMensual = (Math.pow(1 + tasa / 12, 1)) - 1;
      } else {
        tasaMensual = (Math.pow(1 + tasa, 1 / 12)) - 1;
      }

      const cuotaMensual = this.calcularCuota(costoTotal - cuotaInicial, tasaMensual, numeroCuota - numeroPeriodoGracia);

      let van = -cuotaInicial;
      for (let i = 1; i <= numeroCuota; i++) {
        if (i <= numeroPeriodoGracia) {
          if (this.planDetails.periodoGracia === 'Parcial') {
            van += (costoTotal - cuotaInicial) * tasaMensual / Math.pow(1 + cok, i);
          }
        } else {
          van += cuotaMensual / Math.pow(1 + cok, i);
        }
      }

      this.van = van;
      console.log('El VAN calculado es:', this.van);
    }
  }

  calcularCuota(prestamo: number, tasaMensual: number, numeroCuotasRestantes: number): number {
    return tasaMensual === 0 ? prestamo / numeroCuotasRestantes :
      prestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual, -numeroCuotasRestantes));
  }
}

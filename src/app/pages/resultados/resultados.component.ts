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
  tir?: number;

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
      this.calcularTIR();
    }
  }

  calcularCuota(prestamo: number, tasaMensual: number, numeroCuotasRestantes: number): number {
    return tasaMensual === 0 ? prestamo / numeroCuotasRestantes :
      prestamo * tasaMensual / (1 - Math.pow(1 + tasaMensual, -numeroCuotasRestantes));
  }

    calcularTIR() {
        // Inicialmente, el flujo de caja solo tiene la inversión inicial (negativa)
        const flujosDeCaja = [-(this.planDetails.costoTotal-this.planDetails.cuotaInicial)];

        // Llenamos el array con las cuotas mensuales, considerando el periodo de gracia
        const numeroCuota = Number(this.planDetails.periodo) * 12; // Total de cuotas
        for (let i = 1; i <= numeroCuota; i++) {
            let flujo;
            if (i <= this.planDetails.numeroPeriodoGracia) {
                // Durante el período de gracia puede haber un flujo diferente o nulo
                flujo = (this.planDetails.periodoGracia === 'Parcial') ? ((this.planDetails.costoTotal-this.planDetails.cuotaInicial)*(this.planDetails.tasa / 100 / 12)) : 0;
            } else {
                // Cuota mensual después del período de gracia
                flujo = this.calcularCuota(
                    this.planDetails.costoTotal - this.planDetails.cuotaInicial,
                    this.planDetails.tasa / 100 / 12,
                    numeroCuota - i + 1
                );
            }
            flujosDeCaja.push(flujo);
        }

        // Cálculo de la TIR usando el método de bisección
        let tasaInferior = 0;
        let tasaSuperior = 1;
        let tasaMedia;
        let van;
        let iteraciones = 0;
        const maxIteraciones = 100;
        const tolerancia = 0.0001;

        do {
            tasaMedia = (tasaInferior + tasaSuperior) / 2;
            van = this.calcularVANaTasa(tasaMedia, flujosDeCaja);

            if (van > 0) {
                tasaInferior = tasaMedia;
            } else {
                tasaSuperior = tasaMedia;
            }

            iteraciones++;
            if (iteraciones > maxIteraciones) {
                console.error("No se pudo encontrar la TIR después de las iteraciones máximas");
                return;
            }
        } while (Math.abs(van) > tolerancia);

        this.tir = tasaMedia * 100; // Convertir a porcentaje para mostrar
        console.log('La TIR calculada es:', this.tir);
    }

  // Método adicional para calcular el VAN a una tasa dada
  calcularVANaTasa(tasa: number, flujosDeCaja: number[]): number {
    return flujosDeCaja.reduce((van, flujo, i) => {
        return van + flujo / Math.pow(1 + tasa, i);
    }, 0);
  }

}

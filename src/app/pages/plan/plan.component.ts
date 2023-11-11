import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  currentRoute: string ;


  constructor(private router: Router) {
    this.currentRoute = this.router.url;

  }
  contentMap: { [key: string]: string[] } = {
    'Ventajas': [
      '---Puedes adquirir la Compra Inteligente en principales concesionarios y nuestras Agencias BK---',
      '---La tarjeta de propiedad sale a tu nombre desde el primer día---',
      '---Incluimos el Seguro de Desgravamen---',
      '---Tasas de Interés Competitivas---',
      '---Proceso de Aprobación Rápido y Sencillo---'] ,

    'Requisitos': [
      '---Es necesario que tengas un ingreso mensual bruto mínimo de S/ 1,500.---',
      '---Es obligatorio afiliarse a un seguro vehicular durante el plazo total del crédito.---',
      '---Buen comportamiento de pago en el BK y sistema financiero.---',
      '---No contar con multas de los últimos procesos electorales.---',
      '---Evaluación de Riesgo Crediticio---'],
    'Tasas': [
      '---La TEA para crédito en soles: desde 8.49% hasta 20.26%---',
      '---La TEA para crédito en dólares: desde 8.49% hasta 20.22%---'],
    'Tu Eliges': [
      '---Plazo del Crédito: 2 años o 3 años---'],
    // Agrega más contenido según sea necesario

  };

  selectedContent: string | null = null;

  showContent(content: string): void {
    this.selectedContent = content;
  }
}

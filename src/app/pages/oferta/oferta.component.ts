// oferta.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent {
  ofertas = [
    { modelo: 'Mazda 3 1.6 MZR 4AT Sedan 2013', imagen: 'assets/images/Mazda.jpg', precio: "S/40,000", tiempo: "2 años", cuotaInicial: "8,000", tasa: "13%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/621.85",
      meses: 25
    }},
    { modelo: 'Chevrolet Captiva 2.4 LT AWD FULL DELUXE AT Suv 2015', imagen: 'assets/images/chevrolet.jpg', precio: "S/55,000", tiempo: "3 años", cuotaInicial: "11,000", tasa: "17%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/659.56",
      meses: 37
    }},
    { modelo: 'Nissan Qashqai 2.0 FULL EXCLUSIVE 4X4 AT Suv 2015', imagen: 'assets/images/nissan.jpg',precio: "S/60,000", tiempo: "3 años", cuotaInicial: "12,000", tasa: "18%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/727.79",
      meses: 37
    }},
    { modelo: 'Volkswagen Amarok 2.0 COMFORTLINE BITDI 4X4 MT Pickup 2018', imagen: 'assets/images/vol.jpg', precio: "S/95,000", tiempo: "3 años", cuotaInicial: "19,000", tasa: "19%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/1165.39",
      meses: 37
    }},
    { modelo: 'Geely Emgrand X7 2.4 SPORT SIGNATURE AT AWD Suv 2020', imagen: 'assets/images/gre.jpg', precio: "S/59,000", tiempo: "3 años", cuotaInicial: "11,800", tasa: "18%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/715.66",
      meses: 37
    }},
    { modelo: 'Ds 3 1.2 PURETECH 116 AT Hatchback 2018', imagen: 'assets/images/ds.jpg', precio: "S/51,000", tiempo: "2 años", cuotaInicial: "10,200", tasa: "15%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/806.32",
      meses: 25
    }},
    { modelo: 'Lexus Rx 3.5 350 F SPORT 4X4 AT Suv 2018', imagen: 'assets/images/lexus.jpg', precio: "S/120,000", tiempo: "3 años", cuotaInicial: "24,000", tasa: "20%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/1488.53",
      meses: 37
    }},
    { modelo: 'Audi A4 1.8 TFSI E MULTITRONIC Sedan 2014', imagen: 'assets/images/audi.jpg', precio: "S/52,000", tiempo: "2 años", cuotaInicial: "10,400", tasa: "16%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/828.95",
      meses: 25
    }},
    { modelo: 'Renault Stepway 1.6 DYNAMIQUE 4X2 MT Suv 2015', imagen: 'assets/images/ren.jpg', precio: "S/38,000", tiempo: "2 años", cuotaInicial: "7,600", tasa: "11%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/580.67",
      meses: 25
    }},
    { modelo: 'Hyundai Tucson 2.0 COMFORT AT 4X2 Suv 2020', imagen: 'assets/images/hy.jpg', precio: "S/80,000", tiempo: "3 años", cuotaInicial: "16,000", tasa: "19%",
    tuEleccion: {
      descripcion: "Credito Vehicular inteligente",
      cuotaMensual: "S/981.38",
      meses: 37
    }},

  ];
  ofertaSeleccionada: any;

  constructor() {
    // Inicializar con la primera oferta al cargar el componente
    this.ofertaSeleccionada = this.ofertas[0];
  }

  verOferta(oferta: any): void {
    this.ofertaSeleccionada = oferta;
  }
}



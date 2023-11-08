import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }
}

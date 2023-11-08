import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private plansUrl = 'http://localhost:8090/api/v1/users'; // URL base
  constructor(private http: HttpClient, private authService: AuthService) { }

  createPlan(planData: any) {
    const userId = this.authService.getUserId(); // Asume que tienes un método para obtener el userId
    if (!userId) {
      throw new Error('No user ID available for creating a plan.');
    }
    return this.http.post(`${this.plansUrl}/${userId}/plans`, planData);
  }
}

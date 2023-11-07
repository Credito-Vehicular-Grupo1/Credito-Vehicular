import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:8090/api/v1/users';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.usersUrl + `/email&password/${email}/${password}`);
  }

  register(inputData:any) {
    return this.http.post(this.usersUrl, inputData);
  }
}

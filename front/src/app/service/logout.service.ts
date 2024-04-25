import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  logoutUrl = "http://127.0.0.1:8000/user/logout/";


  constructor(private router: Router,
    private http: HttpClient
  ) { }

  
  logout(token: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": `Token ${token}`
    });
    return this.http.post(this.logoutUrl, null, { headers });
  }
}

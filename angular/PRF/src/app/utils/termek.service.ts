import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TermekekComponent } from '../termekek/termekek.component';

@Injectable({
  providedIn: 'root'
})
export class TermekService {

  constructor(private http: HttpClient) { }

  public getAllTermek(): Observable<any>{
    return this.http.get(environment.serverUrl + 'termek');
  }

}

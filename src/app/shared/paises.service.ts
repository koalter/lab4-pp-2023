import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  obtenerPaises(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all?fields=name,flags,region').pipe(take(1));
  }
}

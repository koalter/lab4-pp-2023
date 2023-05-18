import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  mostrar() {
    this.loading.next(true);
  }

  ocultar() {
    this.loading.next(false);
  }
}

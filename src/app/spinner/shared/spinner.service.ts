import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  iniciar(observerOrNext?: Partial<Observer<boolean>> | ((value: boolean) => void)): Subscription {
    return this.loading.subscribe(observerOrNext);
  }

  mostrar() {
    this.loading.next(true);
  }

  ocultar() {
    this.loading.next(false);
  }
}

import { Component } from '@angular/core';
import { Repartidor } from './shared/repartidor.model';
import { PaisesService } from '../pais/shared/paises.service';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.scss']
})
export class RepartidorComponent {
  item?: Repartidor;
  pais?: any;

  constructor(private paisesService: PaisesService) { }

  seleccionar(item: Repartidor) {
    this.item = item;
    this.paisesService.obtenerUno(this.item.nacionalidad)
    .subscribe(res => this.pais = res[0]);
  }

  limpiar() {
    this.item = undefined;
  }
}

import { Component, Input } from '@angular/core';
import { Repartidor } from '../shared/repartidor.model';

@Component({
  selector: 'detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.scss']
})
export class DetalleRepartidorComponent {

  @Input() item?: Repartidor;

}

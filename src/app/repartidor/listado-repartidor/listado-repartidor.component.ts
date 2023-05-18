import { Component, EventEmitter, Output } from '@angular/core';
import { Repartidor } from '../shared/repartidor.model';
import { RepartidorService } from '../shared/repartidor.service';
@Component({
  selector: 'listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.scss']
})
export class ListadoRepartidorComponent {

  @Output() select: EventEmitter<Repartidor> = new EventEmitter<Repartidor>();
  list: Repartidor[] = [];

  constructor(private repartidorService: RepartidorService) { }

  ngOnInit(): void {
    this.repartidorService.getRepartidoresAsync()
    .then(res => {
      this.list = res;
    });
  }

  seleccionar(item: Repartidor) {
    this.select.emit(item);
  }
}

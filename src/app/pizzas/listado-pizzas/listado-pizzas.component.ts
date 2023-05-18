import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'listado-pizzas',
  templateUrl: './listado-pizzas.component.html',
  styleUrls: ['./listado-pizzas.component.scss']
})
export class ListadoPizzasComponent {
  @Input() list!: any[];
  @Output() seleccionar: EventEmitter<Pizza> = new EventEmitter<Pizza>();

  seleccionar_click(item: Pizza) {
    this.seleccionar.emit(item);
  }
}

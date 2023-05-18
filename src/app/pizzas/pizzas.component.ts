import { Component, OnInit } from '@angular/core';
import { Pizza } from './shared/pizza.model';
import { PizzaService } from './shared/pizza.service';
import { ToastService } from '../toasts/shared/toast.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizza?: Pizza;
  list!: Pizza[];

  constructor(private pizzaService: PizzaService,
    private toasts: ToastService) { }

  ngOnInit() {
    this.obtenerPizzas();
  }

  seleccionar(item: Pizza) {
    this.pizza = item;
  }

  obtenerPizzas() {
    this.pizzaService.getPizzasAsync()
    .then(res => {
      this.list = res;
    })
    .catch(() => this.toasts.mostrar('¡Error al buscar las pizzas listas!'));
  }

  alta(item: Pizza) {
    this.pizzaService.altaPizzaAsync(item)
    .then(() => this.obtenerPizzas())
    .catch(() => this.toasts.mostrar('¡Error al crear la pizza!'));
  }

  modificar() {
    if (this.pizza) {
      this.pizzaService.modificarPizzaAsync(this.pizza)
      .then(() => this.obtenerPizzas())
      .catch(() => this.toasts.mostrar('¡Error al modificar la pizza!'));
    } else {
      this.toasts.mostrar('¡No se ha seleccionado ninguna pizza!');
    }
  }

  borrar() {
    if (this.pizza) {
      this.pizzaService.bajaPizzaAsync(this.pizza)
      .then(() => {
        this.obtenerPizzas();
        this.pizza = undefined;
      })
      .catch(() => this.toasts.mostrar('¡Error al borrar la pizza!'));
    } else {
      this.toasts.mostrar('¡No se ha seleccionado ninguna pizza!');
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from './pizzas.component';
import { AltaPizzasComponent } from './alta-pizzas/alta-pizzas.component';
import { ModificarPizzasComponent } from './modificar-pizzas/modificar-pizzas.component';
import { BorrarPizzasComponent } from './borrar-pizzas/borrar-pizzas.component';
import { ListadoPizzasComponent } from './listado-pizzas/listado-pizzas.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PizzasComponent,
    AltaPizzasComponent,
    ModificarPizzasComponent,
    BorrarPizzasComponent,
    ListadoPizzasComponent
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    ReactiveFormsModule
  ]
})
export class PizzasModule { }

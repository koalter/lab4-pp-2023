import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AltaRepartidorComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    ReactiveFormsModule,
    TablaPaisesComponent
  ]
})
export class RepartidorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisModule } from '../pais/pais.module';
import { DetalleRepartidorComponent } from './detalle-repartidor/detalle-repartidor.component';
import { RepartidorComponent } from './repartidor.component';
import { ListadoRepartidorComponent } from './listado-repartidor/listado-repartidor.component';

@NgModule({
  declarations: [
    RepartidorComponent,
    AltaRepartidorComponent,
    DetalleRepartidorComponent,
    ListadoRepartidorComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    ReactiveFormsModule,
    PaisModule
  ]
})
export class RepartidorModule { }

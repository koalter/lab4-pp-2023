import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';



@NgModule({
  declarations: [
    TablaPaisesComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TablaPaisesComponent,
    DetallePaisComponent
  ]
})
export class PaisModule { }

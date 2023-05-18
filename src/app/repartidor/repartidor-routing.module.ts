import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { RepartidorComponent } from './repartidor.component';

const routes: Routes = [
  { path: 'alta', component: AltaRepartidorComponent },
  { path: '', component: RepartidorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }

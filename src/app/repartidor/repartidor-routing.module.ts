import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';

const routes: Routes = [
  { path: 'alta', component: AltaRepartidorComponent },
  { path: '', redirectTo: 'alta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }

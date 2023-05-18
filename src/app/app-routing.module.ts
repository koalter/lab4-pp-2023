import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./bienvenido/bienvenido.module').then((m) => m.BienvenidoModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'repartidor',
    loadChildren: () =>
      import('./repartidor/repartidor.module').then((m) => m.RepartidorModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pizzas',
    loadChildren: () =>
      import('./pizzas/pizzas.module').then((m) => m.PizzasModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo('login') }
  },
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

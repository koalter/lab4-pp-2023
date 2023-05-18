import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { SpinnerService } from './spinner/shared/spinner.service';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Lorenzo Cea';
  routes: Routes = [
    { path: 'bienvenido', title: 'Bienvenido' }
  ];
  userRoutes: Routes = [
    { path: 'repartidor/alta', title: 'Alta Repartidor' }
  ];
  spinner: boolean = false;
  spinnerSubscription!: Subscription;
  usuario?: any = undefined;

  constructor(private spinnerService: SpinnerService,
    private authService: AuthService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.authService.getActiveUser(user => this.usuario = user);
    this.spinnerSubscription = this.spinnerService.loading.subscribe(
      state => this.spinner = state);
  }
  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

  cerrarSesion(): void {
    this.authService.logout()
      .then(() => this.router.navigateByUrl('login'));
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../toasts/shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;

  get correo() {
    return this.formulario.get('correo');
  }

  get clave() {
    return this.formulario.get('clave');
  }

  constructor(private authService: AuthService,
    private toastService: ToastService,
    private router: Router) {
    this.formulario = new FormGroup({
      correo: new FormControl('', [Validators.email, Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
  }

  enviar(): void {
    this.authService.login(this.correo?.value, this.clave?.value)
      .then(() =>
        this.router.navigateByUrl(''))
      .catch(err =>
        this.toastService.mostrar(err));
  }

  ingresarCredenciales(username: string, password: string) {
    this.correo?.setValue(username);
    this.clave?.setValue(password);
  }
}

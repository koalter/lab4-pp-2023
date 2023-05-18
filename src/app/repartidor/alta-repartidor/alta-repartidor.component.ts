import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepartidorService } from '../shared/repartidor.service';
import { Repartidor } from '../shared/repartidor.model';
import { ToastService } from '../../toasts/shared/toast.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.scss']
})
export class AltaRepartidorComponent {

  formulario: FormGroup;

  get dni() {
    return this.formulario.get('dni');
  }

  get nombre() {
    return this.formulario.get('nombre');
  }
  
  get apellido() {
    return this.formulario.get('apellido');
  }
  
  get pais() {
    return this.formulario.get('pais');
  }
  
  get unidadPropia() {
    return this.formulario.get('unidadPropia');
  }

  get edad() {
    return this.formulario.get('edad');
  }

  get capacidad() {
    return this.formulario.get('capacidad');
  }

  constructor(private repartidorService: RepartidorService,
    private toasts: ToastService) {
    this.formulario = new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(8)]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(80)]),
      capacidad: new FormControl('', [Validators.required, Validators.min(1)]),
      pais: new FormControl('', [Validators.required]),
      unidadPropia: new FormControl<string | boolean>('', [Validators.required])
    });
  }

  seleccionarPais(value: string) {
    this.pais?.setValue(value);
  }

  altaRepartidor() {
    if (this.formulario.valid) {
      const repartidor: Repartidor = new Repartidor(
        this.dni?.value, 
        this.nombre?.value, 
        this.apellido?.value, 
        this.edad?.value, 
        this.pais?.value, 
        this.capacidad?.value, 
        this.unidadPropia?.value);

      this.repartidorService
        .altaRepartidorAsync(repartidor)
        .then(() => this.formulario.reset())
        .catch(() => this.toasts.mostrar('¡Error al dar de alta un repartidor!'));
    }
  }
}

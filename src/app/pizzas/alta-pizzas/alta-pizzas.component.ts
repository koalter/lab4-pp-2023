import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'alta-pizzas',
  templateUrl: './alta-pizzas.component.html',
  styleUrls: ['./alta-pizzas.component.scss']
})
export class AltaPizzasComponent {

  @Output() confirmar: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  formulario!: FormGroup;

  get nombre() {
    return this.formulario.get('nombre');
  }
  get ingredientes() {
    return this.formulario.get('ingredientes');
  }
  get precio() {
    return this.formulario.get('precio');
  }
  get peso() {
    return this.formulario.get('peso');
  }

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      ingredientes: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required, Validators.min(1)]),
      peso: new FormControl('', [Validators.required, Validators.min(500), Validators.max(1000)])
    });
  }

  confirmar_submit() {
    if (this.formulario.valid) {
      const ingredientes: string[] = (this.ingredientes?.value as string).split(',');
      const res = new Pizza(this.nombre?.value, ingredientes, this.precio?.value, this.peso?.value);

      this.confirmar.emit(res);
      this.formulario.reset();

    } else {
      console.error(this.formulario.errors);
    }
  }
}

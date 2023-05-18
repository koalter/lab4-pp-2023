import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'borrar-pizzas',
  templateUrl: './borrar-pizzas.component.html',
  styleUrls: ['./borrar-pizzas.component.scss']
})
export class BorrarPizzasComponent implements OnChanges {
  @Input() item?: Pizza;
  @Output() confirmar: EventEmitter<void> = new EventEmitter<void>();
  formulario: FormGroup;

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

  ngOnChanges(changes: SimpleChanges): void {
    this.nombre?.setValue(this.item?.nombre);
    this.ingredientes?.setValue(this.item?.ingredientes.join());
    this.precio?.setValue(this.item?.precio);
    this.peso?.setValue(this.item?.peso);
  }

  confirmar_submit() {
    if (this.formulario.valid && this.item) {
      this.confirmar.emit();
      this.item = undefined;
    } else {
      console.error(this.formulario.errors);
    }
  }
}

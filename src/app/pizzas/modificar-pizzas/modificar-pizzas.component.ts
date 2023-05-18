import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Pizza } from '../shared/pizza.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'modificar-pizzas',
  templateUrl: './modificar-pizzas.component.html',
  styleUrls: ['./modificar-pizzas.component.scss']
})
export class ModificarPizzasComponent implements OnChanges {
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
      const ingredientes: string[] = (this.ingredientes?.value as string).split(',');
      
      this.item.ingredientes = ingredientes;
      this.item.peso = this.peso?.value;
      this.item.precio = this.precio?.value;

      this.confirmar.emit();

    } else {
      console.error(this.formulario.errors);
    }
  }
}

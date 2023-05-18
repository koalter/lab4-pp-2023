import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent {

  @Input() item!: any;
  @Output() limpiar: EventEmitter<void> = new EventEmitter<void>();

  limpiar_click() {
    this.item = undefined;
    this.limpiar.emit();
  }
}

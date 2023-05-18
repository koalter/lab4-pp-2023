import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesService } from '../shared/paises.service';

@Component({
  selector: 'tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  @Output() pais: EventEmitter<string> = new EventEmitter<string>();
  paises: any[] = [];

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.obtenerPaises()
      .subscribe(res => {
        const paises = res as any[];
        const paisesEuropa = paises.filter(pais => pais['region'] === 'Europe' && pais['name']['common'].length < 20);
        const paisesAfrica = paises.filter(pais => pais['region'] === 'Africa' && pais['name']['common'].length < 20);
        
        this.paises.push(...paisesEuropa.filter((pais, index) => index < 3));
        this.paises.push(...paisesAfrica.filter((pais, index) => index < 3));
      });
  }

  seleccionarPais(pais: any) {
    this.pais.emit(pais.name.common);
  }
}

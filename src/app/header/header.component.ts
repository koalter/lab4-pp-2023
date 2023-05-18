import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { User } from '@angular/fire/auth';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule, NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() rutas?: Routes;
  @Input() rutasUsuario?: Routes;
  @Input() titulo?: string;
  @Input() usuario?: User | null;
  @Output() cerrarSesion: EventEmitter<void> = new EventEmitter();
  logo = faGithub;

  constructor() {}
  
  cerrarSesion_click(): void {
    this.cerrarSesion.emit();
  }
}

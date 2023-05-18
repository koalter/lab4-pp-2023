import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './shared/toast.service';
import { ToastInfo, ToastTipo } from './shared/toast-info.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWarning, faCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgbModule],
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {

  faWarning = faWarning;

  get toasts() {
    return this.toastService.toasts;
  }

  constructor(private toastService: ToastService) { }

  remover(toast: ToastInfo) {
    this.toastService.remover(toast);
  }

  getColor(toast: ToastInfo) {
    let result: string;
    
    switch (toast.tipo) {
      case ToastTipo.warning:
        result = 'bg-warning'; break;
      case ToastTipo.success:
        result = 'bg-success'; break;
      case ToastTipo.error:
        result = 'bg-danger'; break;
      case ToastTipo.info:
      default:
        result = 'bg-info'; break;
    }

    return result;
  }

  getIcono(toast: ToastInfo) {
    let result;
    
    switch (toast.tipo) {
      case ToastTipo.success:
        result = faCheck; break;
      case ToastTipo.warning:        
      case ToastTipo.error:
        result = faWarning; break;
      case ToastTipo.info:
      default:
        result = faCircleInfo; break;
    }

    return result;
  }
}

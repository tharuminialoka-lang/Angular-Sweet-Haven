import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '../../services/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrls: ['./toast.css']
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  removeToast(id: number): void {
    this.toastService.removeToast(id);
  }

  getToastClass(toast: Toast): string {
    const baseClass = 'toast alert alert-dismissible fade show';
    switch (toast.type) {
      case 'success': return `${baseClass} alert-success`;
      case 'error': return `${baseClass} alert-danger`;
      case 'warning': return `${baseClass} alert-warning`;
      case 'info': return `${baseClass} alert-info`;
      default: return `${baseClass} alert-info`;
    }
  }

  getToastIcon(toast: Toast): string {
    switch (toast.type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-exclamation-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      case 'info': return 'fas fa-info-circle';
      default: return 'fas fa-info-circle';
    }
  }
}
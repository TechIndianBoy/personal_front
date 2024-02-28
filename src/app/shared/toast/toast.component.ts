import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  host: { '[class.ngb-toasts]': 'true' },
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  /**
   * @param toaster
   */
  constructor(public toastService: ToastService) { }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
  ngOnInit(): void {
  }
}

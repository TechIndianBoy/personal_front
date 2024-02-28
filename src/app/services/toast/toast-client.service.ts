import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ToastClientService {
  /**
   * @param ToastClientService
   * Common toaster service for components
   * < Write less & code more />
   */
  constructor(public toastService: ToastService) { }

  Success(message) {
    this.toastService.show(message, {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true,
      headertext: 'Success!'
    });
  }
  Error(message) {
    this.toastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 7000 ,
      autohide: true,
      headertext: 'Error!'
    });
  }
  Warning(message) {
    this.toastService.show(message, {
      classname: 'bg-warning text-light',
      delay: 2500 ,
      autohide: true,
      headertext: 'Warning!'
    });
  }
  info(message) {
    this.toastService.show(message, {
      delay: 2000,
      autohide: true
    });
  }
}

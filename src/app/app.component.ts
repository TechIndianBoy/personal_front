import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isopenUploadBox = false;
  title = 'hubAdmin';
  uploadExcelDetails: any;

  constructor() {

  }
}

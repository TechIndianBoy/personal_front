import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private route:Router) {

   }

  ngOnInit() {
  }
  goDashboard()
  {
    this.route.navigateByUrl("/agentPanel/dashboard");
  }



}

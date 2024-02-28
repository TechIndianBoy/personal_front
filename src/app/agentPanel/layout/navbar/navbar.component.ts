import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleSidebar(){
    console.log('sd')
    let body = document.body;
    body.classList.toggle("is-collapsed");
  }
}

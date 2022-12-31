import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  SidebarAperta = true;
  constructor() { }

  ngOnInit() {  }

  gestoreEvSidebar() {
    this.SidebarAperta = !this.SidebarAperta;
  }

}
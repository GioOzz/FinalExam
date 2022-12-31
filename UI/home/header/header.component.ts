import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() eventoSidebar = new EventEmitter();
  constructor() { }
  ngOnInit() { }
  MovSidebar() {
    // ↓ con il metodo emit io creo un nuovo evento personalizzato
    this.eventoSidebar.emit();
  }
  esci() {
    window.close();
  }
}

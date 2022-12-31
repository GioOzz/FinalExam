import { Component, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-get-server',
  templateUrl: './get-server.component.html',
  styleUrls: ['./get-server.component.css']
})
export class GetServerComponent implements OnInit {

  constructor(private servizio: ServiziService) {}
  ListaServer: any = [];
  TitoloModal: string = '';
  ser: any;
  ModificaAttivaComp: boolean = false;

  ngOnInit(): void {
    this.AggiornaListaServer();
  }
  aggiungiClick() {
    this.ser = {
      IdServer: '',
      StatusServer: ''
    };
    this.TitoloModal = 'Aggiungi Server';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.ser = item;
    this.TitoloModal = 'Modifica Server';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questo server ?')) {
      this.servizio.DELETE_Server(item.IdServer).subscribe(data => {
        alert(data.toString());
        this.AggiornaListaServer();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaServer();
  }
  AggiornaListaServer() {
    this.servizio.GET_Server().subscribe(data => {
      this.ListaServer = data;
    });
  }
}

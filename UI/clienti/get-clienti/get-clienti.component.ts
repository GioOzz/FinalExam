import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';
@Component({
  selector: 'app-get-clienti',
  templateUrl: './get-clienti.component.html',
  styleUrls: ['./get-clienti.component.css'],
})
export class GetClientiComponent implements OnInit {
  constructor(private servizio: ServiziService) {}
  // non specifico any dato che data (in seguito) non ha il tipo
  ListaClienti: any = [];
  TitoloModal: string = '';
  cli: any;
  ModificaAttivaComp: boolean = false;
  ngOnInit() {
    this.AggiornaListaClienti();
  }

  aggiungiClick() {
    this.cli = {
      IdCliente: '',
      Nome: '',
      Cognome: '',
    };
    this.TitoloModal = 'Aggiungi Cliente';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.cli = item;
    this.TitoloModal = 'Modifica Utente';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questo cliente?')) {
      this.servizio.DELETE_Clienti(item.IdCliente).subscribe((data) => {
        alert(data.toString());
        this.AggiornaListaClienti();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaClienti();
  }
  AggiornaListaClienti() {
    //subscribe si assicura di aver ricevuto tutti i dati prima di passare all'istruzione successiva
    this.servizio.GET_Clienti().subscribe((data) => {
      this.ListaClienti = data;
    });
  }
}

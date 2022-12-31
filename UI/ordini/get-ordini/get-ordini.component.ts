import { Component, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-get-ordini',
  templateUrl: './get-ordini.component.html',
  styleUrls: ['./get-ordini.component.css']
})
export class GetOrdiniComponent implements OnInit {

  constructor(private servizio: ServiziService) {}
  ListaOrdini: any = [];
  TitoloModal: string = '';
  ord: any;
  ModificaAttivaComp: boolean = false;

  ngOnInit(): void {
    this.AggiornaListaOrdini();
  }

  aggiungiClick() {
    this.ord = {
      IdOrdine: '',
      NumCliente: '',
      StatusOrdine: '',
      Articolo: '',
      Guadagno: '',
    }
    this.TitoloModal = 'Aggiungi Ordine';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.ord = item;
    this.TitoloModal = 'Modifica Ordine';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questo ordine ?')) {
      this.servizio.DELETE_Ordini(item.IdOrdine).subscribe(data => {
        alert(data.toString());
        this.AggiornaListaOrdini();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaOrdini();
  }
  AggiornaListaOrdini() {
    this.servizio.GET_Ordini().subscribe(data => {
      this.ListaOrdini = data;
    });
  }
}

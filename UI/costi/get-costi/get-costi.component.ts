import { Component, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';
@Component({
  selector: 'app-get-costi',
  templateUrl: './get-costi.component.html',
  styleUrls: ['./get-costi.component.css'],
})
export class GetCostiComponent implements OnInit {
  constructor(private servizio: ServiziService) {}
  ListaCosti: any = [];
  TitoloModal: string = '';
  cos: any;
  ModificaAttivaComp: boolean = false;
  ngOnInit() {
    this.AggiornaListaCosti();
  }

  aggiungiClick() {
    this.cos = {
      IdSpesa: '',
      Tipo: '',
      Importo: '',
    };
    this.TitoloModal = 'Aggiungi Spesa';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.cos = item;
    this.TitoloModal = 'Modifica Spesa';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questa spesa ?')) {
      this.servizio.DELETE_Costi(item.IdSpesa).subscribe(data => {
        alert(data.toString());
        this.AggiornaListaCosti();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaCosti();
  }
  AggiornaListaCosti() {
    //subscribe si assicura di aver ricevuto tutti i dati prima di passare all'istruzione successiva
    this.servizio.GET_Costi().subscribe(data => {
      this.ListaCosti = data;
    });
  }
}

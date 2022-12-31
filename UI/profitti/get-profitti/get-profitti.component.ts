import { Component, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-get-profitti',
  templateUrl: './get-profitti.component.html',
  styleUrls: ['./get-profitti.component.css']
})
export class GetProfittiComponent implements OnInit {
  constructor(private servizio: ServiziService) {}
  ListaProfitti: any = [];
  TitoloModal: string = '';
  pro: any;
  ModificaAttivaComp: boolean = false;
  ngOnInit(): void {
    this.AggiornaListaProfitti();
  }
  aggiungiClick() {
    this.pro = {
      IdProfitto: '',
      PeriodoProfitto: '',
      Profitto: '',
    };
    this.TitoloModal = 'Aggiungi Profitto';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.pro = item;
    this.TitoloModal = 'Modifica Profitto';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questo profitto ?')) {
      this.servizio.DELETE_Profitti(item.IdProfitto).subscribe(data => {
        alert(data.toString());
        this.AggiornaListaProfitti();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaProfitti();
  }
  AggiornaListaProfitti() {
    //subscribe si assicura di aver ricevuto tutti i dati prima di passare all'istruzione successiva
    this.servizio.GET_Profitti().subscribe(data => {
      this.ListaProfitti = data;
    });
  }
}

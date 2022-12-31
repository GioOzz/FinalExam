import { Component, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-get-visite',
  templateUrl: './get-visite.component.html',
  styleUrls: ['./get-visite.component.css']
})
export class GetVisiteComponent implements OnInit {

  constructor(private servizio: ServiziService) {}
  ListaVisite: any = [];
  TitoloModal: string = '';
  vis: any;
  ModificaAttivaComp: boolean = false;

  ngOnInit(): void {
    this.AggiornaListaVisite();
  }
  aggiungiClick() {
    this.vis = {
      IdVisite: '',
      DataAccesso: '',
      NumVisite : '',
      GuadagniPagina : ''
    };
    this.TitoloModal = 'Aggiungi Resoconto Visite';
    this.ModificaAttivaComp = true;
  }
  modificaClick(item: any) {
    this.vis = item;
    this.TitoloModal = 'Modifica Informazioni Visite';
    this.ModificaAttivaComp = true;
  }
  eliminaClick(item: any) {
    if (confirm('Eliminare definitivamente questi dati visite ?')) {
      this.servizio.DELETE_Visite(item.IdVisite).subscribe(data => {
        alert(data.toString());
        this.AggiornaListaVisite();
      });
    }
  }
  chiudiClick() {
    this.ModificaAttivaComp = false;
    this.AggiornaListaVisite();
  }
  AggiornaListaVisite() {
    this.servizio.GET_Visite().subscribe(data => {
      this.ListaVisite = data;
    });
  }


}

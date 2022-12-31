import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-ordini',
  templateUrl: './post-put-ordini.component.html',
  styleUrls: ['./post-put-ordini.component.css']
})
export class PostPutOrdiniComponent implements OnInit {

  constructor(private servizio: ServiziService) { }
  @Input() ord: any;
  IdOrdine: number = 0;
  NumCliente: number = 0;
  StatusOrdine: boolean = false;
  Articolo: string = '';
  Guadagno: string = '';

  ngOnInit(): void {
    this.IdOrdine = this.ord.IdOrdine,
      this.NumCliente = this.ord.NumCliente,
      this.StatusOrdine = this.ord.StatusOrdine,
      this.Articolo = this.ord.Articolo,
      this.Guadagno = this.ord.Guadagno
  }
  aggiungiOrdine() {
    var val = {
      IdOrdine: this.IdOrdine,
      NumCliente: this.NumCliente,
      StatusOrdine: this.StatusOrdine,
      Articolo: this.Articolo,
      Guadagno: this.Guadagno,
    }
    this.servizio.POST_Ordini(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaOrdine() {
    var val = {
      IdOrdine: this.IdOrdine,
      NumCliente: this.NumCliente,
      StatusOrdine: this.StatusOrdine,
      Articolo: this.Articolo,
      Guadagno: this.Guadagno
    }
    this.servizio.PUT_Ordini(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

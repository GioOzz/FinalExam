import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-costi',
  templateUrl: './post-put-costi.component.html',
  styleUrls: ['./post-put-costi.component.css'],
})
export class PostPutCostiComponent implements OnInit {
  constructor(private servizio: ServiziService) {}
  @Input() cos: any;
  IdSpesa: number = 0;
  Tipo: string = '';
  Importo: number = 0;

  ngOnInit(): void {
    this.IdSpesa = this.cos.IdSpesa;
    this.Tipo = this.cos.Tipo;
    this.Importo = this.cos.Importo;
  }
  aggiungiCosto() {
    var val = {
      IdSpesa: this.IdSpesa,
      Tipo: this.Tipo,
      Importo: this.Importo,
    }
    this.servizio.POST_Costi(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaCosto() {
    var val = {
      IdSpesa: this.IdSpesa,
      Tipo: this.Tipo,
      Importo: this.Importo,
    }
    this.servizio.PUT_Costi(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

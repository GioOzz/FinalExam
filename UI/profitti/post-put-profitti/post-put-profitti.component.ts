import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-profitti',
  templateUrl: './post-put-profitti.component.html',
  styleUrls: ['./post-put-profitti.component.css']
})
export class PostPutProfittiComponent implements OnInit {

  constructor(private servizio: ServiziService) {}
  @Input() pro: any;
  IdProfitto: number = 0;
  PeriodoProfitto: string = '';
  Profitto: number = 0;
  ngOnInit(): void {
    this.IdProfitto = this.pro.IdProfitto;
    this.PeriodoProfitto = this.pro.PeriodoProfitto;
    this.Profitto = this.pro.Profitto;
  }
  aggiungiProfitto() {
    var val = {
      IdProfitto: this.IdProfitto,
      PeriodoProfitto: this.PeriodoProfitto,
      Profitto: this.Profitto,
    }
    this.servizio.POST_Profitti(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaProfitto() {
    var val = {
      IdSpesa: this.IdProfitto,
      Tipo: this.PeriodoProfitto,
      Importo: this.Profitto,
    }
    this.servizio.PUT_Profitti(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

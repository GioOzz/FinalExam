import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-visite',
  templateUrl: './post-put-visite.component.html',
  styleUrls: ['./post-put-visite.component.css']
})
export class PostPutVisiteComponent implements OnInit {

  constructor(private servizio: ServiziService) { }
  @Input() vis: any;
  IdVisite: number = 0;
  DataAccesso: string = '';
  NumVisite: number = 0;
  GuadagniPagina: number = 0;
  ngOnInit(): void {
    this.IdVisite = this.vis.IdVisite;
    this.DataAccesso = this.vis.DataAccesso;
    this.NumVisite = this.vis.NumVisite;
    this.GuadagniPagina = this.vis.GuadagniPagina;
  }
  aggiungiVisite() {
    var val = {
      IdVisite: this.IdVisite,
      DataAccesso: this.DataAccesso,
      NumVisite: this.NumVisite,
      GuadagniPagina: this.GuadagniPagina
    }
    this.servizio.POST_Visite(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaVisite() {
    var val = {
      IdVisite: this.IdVisite,
      DataAccesso: this.DataAccesso,
      NumVisite: this.NumVisite,
      GuadagniPagina: this.GuadagniPagina
    }
    this.servizio.PUT_Visite(val).subscribe(res => {
      alert(res.toString());
    });
  }


}

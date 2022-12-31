import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-clienti',
  templateUrl: './post-put-clienti.component.html',
  styleUrls: ['./post-put-clienti.component.css'],
})
export class PostPutClientiComponent implements OnInit {
  constructor(private servizio: ServiziService) {}

  @Input() cli: any;
  IdCliente: number = 0;
  Nome: string = '';
  Cognome: string = '';
  ngOnInit(): void {
    this.IdCliente = this.cli.IdCliente;
    this.Nome = this.cli.Nome;
    this.Cognome = this.cli.Cognome;
  }
  aggiungiCliente() {
    var val = {
      IdCliente: this.IdCliente,
      Nome: this.Nome,
      Cognome: this.Cognome,
    };
    this.servizio.POST_Clienti(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaCliente() {
    var val = {
      IdCliente: this.IdCliente,
      Nome: this.Nome,
      Cognome: this.Cognome,
    };
    this.servizio.PUT_Clienti(val).subscribe(res => {
      alert(res.toString());
    });
  }
}

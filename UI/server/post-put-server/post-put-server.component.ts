import { Component, Input, OnInit } from '@angular/core';
import { ServiziService } from 'src/app/servizi.service';

@Component({
  selector: 'app-post-put-server',
  templateUrl: './post-put-server.component.html',
  styleUrls: ['./post-put-server.component.css']
})
export class PostPutServerComponent implements OnInit {

  constructor(private servizio: ServiziService) {}
  @Input() ser: any;
  IdServer: number = 0;
  StatusServer: boolean = false;
  ngOnInit(): void {
    this.IdServer = this.ser.IdServer;
    this.StatusServer = this.ser.StatusServer;
  }
  aggiungiServer() {
    var val = {
      IdServer: this.IdServer,
      StatusServer: this.StatusServer
    }
    this.servizio.POST_Server(val).subscribe(res => {
      alert(res.toString());
    });
  }
  aggiornaServer() {
    var val = {
      IdServer: this.IdServer,
      StatusServer: this.StatusServer,
    }
    this.servizio.PUT_Server(val).subscribe(res => {
      alert(res.toString());
    });
  }

}

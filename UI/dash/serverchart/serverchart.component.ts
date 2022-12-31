import { Component, OnInit } from '@angular/core';
import { DatiServer } from '../../dati';
@Component({
  selector: 'app-serverchart',
  templateUrl: './serverchart.component.html',
  styleUrls: ['./serverchart.component.css']
})
export class ServerchartComponent implements OnInit {

  DatiServer: any[] = [];
  view: any[] = [1000, 450];
  legend: boolean = true;
  legendTitle : string = 'Categorie di business'
  legendPosition: string = 'up';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#00665C', '#aae3f5', '#F0DC82','#8F8F8F','#E30B5C']
  };

  constructor() {
    Object.assign(this, { DatiServer });
  }

  onSelect(data :any): void {
    console.log('Cliccato', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data :any): void {
    console.log('Attivato', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data :any): void {
    console.log('Disattivato', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }
}

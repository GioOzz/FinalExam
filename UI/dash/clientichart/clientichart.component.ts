import { Component, OnInit } from '@angular/core';
import { DatiClienti } from '../../dati';
@Component({
  selector: 'app-clientichart',
  templateUrl: './clientichart.component.html',
  styleUrls: ['./clientichart.component.css']
})
export class ClientichartComponent implements OnInit {

  DatiClienti: any[] = [];
  view: any[] = [1000, 400];

  // options
  legendTitle : string = 'Indice di Colore';
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = 'Mesi';

  colorScheme = {
    domain: ['#B0E0E6','#1E90FF','#6495ED', '#1560BD', '#0047AB', '#00008B']
  };

  constructor() {
    Object.assign(this, { DatiClienti });
  }

  onSelect(data: any): void {
    console.log('Cliccato', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Attivato', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Disattivato', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { DatiProfitti } from '../../dati';
@Component({
  selector: 'app-profittichart',
  templateUrl: './profittichart.component.html',
  styleUrls: ['./profittichart.component.css']
})
export class ProfittichartComponent implements OnInit {

  constructor() { 
    Object.assign(this, { DatiProfitti });
  }
  legendTitle : string = 'Categorie di business'
  DatiProfitti: any[] = [];
  view: any[] = [1150, 730];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mesi';
  yAxisLabel: string = 'Profitti';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  onSelect(event :any) {
    console.log(event);
  }

  onActivate(data : any): void {
    console.log('Attivato', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data : any): void {
    console.log('Disattivato', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }
}

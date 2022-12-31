import { Component, OnInit } from '@angular/core';
import { DatiOrdini } from '../../dati';
@Component({
  selector: 'app-ordinichart',
  templateUrl: './ordinichart.component.html',
  styleUrls: ['./ordinichart.component.css']
})
export class OrdinichartComponent implements OnInit {

  constructor() {
    Object.assign(this, { DatiOrdini });
  }
  legendTitle : string = 'Categorie di business'
  DatiOrdini: any[] = [];
  posizione: any[] = [1000, 350];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Mesi';
  yAxisLabel: string = 'Ordini (%)';
  timeline: boolean = false;

  setColori = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  onSelect(event: any) {
    console.log(event);
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

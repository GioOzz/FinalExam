import { Component, OnInit } from '@angular/core';
import { DatiVisite, DatiProfitti } from '../../dati';
@Component({
  selector: 'app-visitechart',
  templateUrl: './visitechart.component.html',
  styleUrls: ['./visitechart.component.css']
})
export class VisitechartComponent implements OnInit {

  MesiVisite: any[] = [];
  productSalesMulti: any[] = []

  view: any[] = [900, 370];
  legendTitle: string = 'Mesi';
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'right';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F', '#2A52BE', '#7FFF00', '#FFD800', '#2F2F2F', '#FADADD', '#CD5700', '#8A3324']
  };

  constructor() { Object.assign(this, { DatiVisite, DatiProfitti }) }

  ngOnInit(): void {
  }

  onActivate(data: any): void {
    console.log('Attivato', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Disattivato', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    console.log('Cliccato', JSON.parse(JSON.stringify(data)));
  }

}

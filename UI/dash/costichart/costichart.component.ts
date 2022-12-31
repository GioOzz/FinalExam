import { Component, OnInit } from '@angular/core';
import { DatiVisite, DatiOrdini } from '../../dati'

@Component({
  selector: 'app-costichart',
  templateUrl: './costichart.component.html',
  styleUrls: ['./costichart.component.css']
})
export class CostichartComponent implements OnInit {

  DatiVisite: any[] = [];
  DatiOrdini: any[] = [];

  view: any[] = [1100, 600];

  // options
  legendTitle: string = 'Mesi';
  legendTitleMulti: string = '';
  legendPosition: string = 'below'; 
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisLabel: string = 'Spesa ( € / £ / $ / ¥ )';
  xAxisLabel: string = 'Mesi';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = true;
  trimYAxisTicks: boolean = true;
  rotateXAxisTicks: boolean = true;

  xAxisTicks: any[] = []
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

  animations: boolean = false; 
  showGridLines: boolean = true;
  showDataLabel: boolean = true;

  gradient: boolean = false;
  colorScheme = {
    domain: ['#FF4D00', '#FFCC00', '#93C572', '#25706F','#B20000', '#25706F', '#93C572','#FF4D00', '#FFCC00','#B20000','#FFCC00','#B20000']
  };
  schemeType: string = 'ordinal'; // 'ordinal' / 'linear'
  barPadding: number = 10
  tooltipDisabled: boolean = false;
  yScaleMax: number = 10000;
  roundEdges: boolean = true;

  constructor() { Object.assign(this, { DatiVisite, DatiOrdini }); }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Attivato', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Disattivato', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }
}

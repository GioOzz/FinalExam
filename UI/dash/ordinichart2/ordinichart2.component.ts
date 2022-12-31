import { Component, OnInit } from '@angular/core';
import { DatiOrdiniCard } from '../../dati';

@Component({
  selector: 'app-ordinichart2',
  templateUrl: './ordinichart2.component.html',
  styleUrls: ['./ordinichart2.component.css']
})
export class Ordinichart2Component implements OnInit {

  DatiOrdiniCard: any[] = [];
  posizione: any[] = [1100, 350];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#908435', '#7aa3e5', '#a8385d', '#aae3f5', '#FFFF66', '#7B1B02', '#5F5F5F', '#E30B5C', '#0F52BA', '#293133']
  };
  cardColor: string = '#F2F3F4';
  constructor() {
    Object.assign(this, { DatiOrdiniCard });
  }
  onSelect(event: any) {
    console.log(event);
  }
  ngOnInit(): void {
  }
}

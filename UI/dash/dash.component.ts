import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  constructor(private router : Router ) { }

  ngOnInit() {
  }
  graficopie(){
    this.router.navigate(['/piechart']);
  }
  graficogauge(){
    this.router.navigate(['/gaugechart']);
  }
  graficoline(){
    this.router.navigate(['/linechart']);
  }
  graficonumarea(){
    this.router.navigate(['/numareachart']);
  }
  graficobarhor(){
    this.router.navigate(['/barhorchart']);
  }
  heatchart(){
    this.router.navigate(['/heatchart']);
  }
}
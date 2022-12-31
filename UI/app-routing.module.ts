import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { CostiComponent } from './costi/costi.component';
import { ClientichartComponent } from './dash/clientichart/clientichart.component';
import { CostichartComponent } from './dash/costichart/costichart.component';
import { DashComponent } from './dash/dash.component';
import { OrdinichartComponent } from './dash/ordinichart/ordinichart.component';
import { Ordinichart2Component } from './dash/ordinichart2/ordinichart2.component';
import { ProfittichartComponent } from './dash/profittichart/profittichart.component';
import { ServerchartComponent } from './dash/serverchart/serverchart.component';
import { VisitechartComponent } from './dash/visitechart/visitechart.component';
import { DefaultComponent } from './default/default.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { ProfittiComponent } from './profitti/profitti.component';
import { ServerComponent } from './server/server.component';
import { VisiteComponent } from './visite/visite.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'dash',
        component: DashComponent
      },
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'piechart', component: VisitechartComponent
      },
      {
        path: 'gaugechart', component: ServerchartComponent
      },
      {
        path: 'linechart', component: ProfittichartComponent
      },
      {
        path: 'numareachart', component: OrdinichartComponent
      },
      {
        path: 'numareachart', component: Ordinichart2Component,
      },
      {
        path : 'barhorchart', component : CostichartComponent
      },
      {
        path : 'heatchart', component : ClientichartComponent
      },
      {
        path: 'clienti', component: ClientiComponent
      },
      {
        path: 'costi', component: CostiComponent
      },
      {
        path: 'ordini',
        component: OrdiniComponent
      },
      {
        path: 'profitti',
        component: ProfittiComponent
      },
      {
        path: 'server',
        component: ServerComponent
      },
      {
        path: 'visite',
        component: VisiteComponent
      },
    ],
  },
  {
    path: 'login', component: LoginComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

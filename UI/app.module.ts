import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientiComponent } from './clienti/clienti.component';
import { GetClientiComponent } from './clienti/get-clienti/get-clienti.component';
import { PostPutClientiComponent } from './clienti/post-put-clienti/post-put-clienti.component';
import { ServiziService } from './servizi.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultModule } from './default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CostiComponent } from './costi/costi.component';
import { GetCostiComponent } from './costi/get-costi/get-costi.component';
import { PostPutCostiComponent } from './costi/post-put-costi/post-put-costi.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { GetOrdiniComponent } from './ordini/get-ordini/get-ordini.component';
import { PostPutOrdiniComponent } from './ordini/post-put-ordini/post-put-ordini.component';
import { ProfittiComponent } from './profitti/profitti.component';
import { GetProfittiComponent } from './profitti/get-profitti/get-profitti.component';
import { PostPutProfittiComponent } from './profitti/post-put-profitti/post-put-profitti.component';
import { ServerComponent } from './server/server.component';
import { GetServerComponent } from './server/get-server/get-server.component';
import { PostPutServerComponent } from './server/post-put-server/post-put-server.component';
import { VisiteComponent } from './visite/visite.component';
import { GetVisiteComponent } from './visite/get-visite/get-visite.component';
import { PostPutVisiteComponent } from './visite/post-put-visite/post-put-visite.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { ChartclientiComponent } from './clienti/chartclienti/chartclienti.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { VisitechartComponent } from './dash/visitechart/visitechart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ServerchartComponent } from './dash/serverchart/serverchart.component';
import { ProfittichartComponent } from './dash/profittichart/profittichart.component';
import { OrdinichartComponent } from './dash/ordinichart/ordinichart.component';
import { Ordinichart2Component } from './dash/ordinichart2/ordinichart2.component';
import { CostichartComponent } from './dash/costichart/costichart.component';
import { ClientichartComponent } from './dash/clientichart/clientichart.component';
import { HomepageComponent } from './homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientiComponent,
    GetClientiComponent,
    PostPutClientiComponent,
    CostiComponent,
    GetCostiComponent,
    PostPutCostiComponent,
    OrdiniComponent,
    GetOrdiniComponent,
    PostPutOrdiniComponent,
    ProfittiComponent,
    GetProfittiComponent,
    PostPutProfittiComponent,
    ServerComponent,
    GetServerComponent,
    PostPutServerComponent,
    VisiteComponent,
    GetVisiteComponent,
    PostPutVisiteComponent,
    LoginComponent,
    ChartclientiComponent,
    VisitechartComponent,
    ServerchartComponent,
    ProfittichartComponent,
    OrdinichartComponent,
    Ordinichart2Component,
    CostichartComponent,
    ClientichartComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    NgxChartsModule,
    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ServiziService],
  bootstrap: [AppComponent],
})
export class AppModule {}

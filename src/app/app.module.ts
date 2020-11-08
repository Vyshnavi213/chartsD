import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as d3 from 'd3';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { D3exampleComponent } from './d3example/d3example.component';
import { PieComponent } from './pie/pie.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NewcmpComponent } from './newcmp/newcmp.component';
import { BarcmpComponent } from './barcmp/barcmp.component';
import { CircleaxisComponent } from './circleaxis/circleaxis.component';
import { LinechartComponent } from './linechart/linechart.component';
import { LineComponent } from './line/line.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BubbleD3ChartComponent } from './bubble-d3-chart/bubble-d3-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    DoughnutchartComponent,
    BarchartComponent,
    D3exampleComponent,
    PieComponent,
    PieChartComponent,
    NewcmpComponent,
    BarcmpComponent,
    CircleaxisComponent,
    LinechartComponent,
    LineComponent,
    HomeComponent,
    LoginComponent,
    BubbleChartComponent,
    BubbleD3ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'doughnutchart',
        component: DoughnutchartComponent
      },
      {
        path: 'barchart',
        component: BarchartComponent
      },
      {
        path: 'd3example',
        component: D3exampleComponent
      },
      {
        path: 'pie',
        component: PieComponent
      },
      {
        path: 'pie-chart',
        component: PieChartComponent
      },
      {
        path: 'newcmp',
        component: NewcmpComponent
      },
      {
        path: 'barcmp',
        component: BarcmpComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'circleaxis',
        component: CircleaxisComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'linechart',
        component: LinechartComponent
      },
      {
        path: 'line',
        component: LineComponent
      },
      {
        path: 'bubble-chart',
        component: BubbleChartComponent
      },
      {
        path: 'bubble-d3-chart',
        component: BubbleD3ChartComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

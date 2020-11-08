import { Component, OnInit } from '@angular/core';
import { D3PackedBubbleChartService } from '../d3-packed-bubble-chart.service';

@Component({
  selector: 'app-bubble-d3-chart',
  templateUrl: './bubble-d3-chart.component.html',
  styleUrls: ['./bubble-d3-chart.component.css']
})
export class BubbleD3ChartComponent implements OnInit {

  constructor(private d3PackedBubbleChartService: D3PackedBubbleChartService) { }

  ngOnInit() {
    this.d3PackedBubbleChartService.renderChart();
  }

}

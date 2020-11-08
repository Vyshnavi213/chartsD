import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var data = [4, 8, 15, 16, 23, 42, 20];
    var scaleFactor = 1;
    var height = 20;
    var x = d3.scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, 420]);

    d3.select("#chart")
      .selectAll("div")
      .data(data)
      .enter().append("svg")
      .style("width", function (d) { return x(d) + "px"; })
      .style("background-color", 'steelblue')
      .style('display', 'block')
      .style('margin-bottom', '10')
      .style('height', '20')
      .append("text")
      .attr("x", function (d) { return (d * scaleFactor); })
      .attr("text-anchor", "end")
      .attr("y", height / 2)
      .attr("dy", ".35em")
      .text(function (d) {
        return d;
      });

    // var dataset = [5, 10, 15, 20, 25];

    // d3.select("body").selectAll("div")
    //   .data(dataset)
    //   .enter()
    //   .append("div")
    //   .attr("class", "bar")
    //   .style("height", function (d) {
    //     var barHeight = d * 5;  
    //     return barHeight + "px";
    //   });




  }

}

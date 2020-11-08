import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {

    // var data = [4, 8, 15, 16, 23, 42, 20];

    // var x = d3.scaleLinear()
    //   .domain([0, d3.max(data)])
    //   .range([0, 420]);

    // d3.select("#chart")
    //   .selectAll("div")
    //   .data(data)
    //   .enter().append("svg")
    //   .style("width", function (d) { return x(d) + "px"; })
    //   .style("background-color", 'steelblue')
    //   .style('display', 'block')
    //   .style('margin-bottom', '10')
    //   .style('height', '20')
    //   .text(function (d) { return d; });


    // Bar Chart
    // var data = [5, 10, 12];
    // var width = 200,
    //   scaleFactor = 10,
    //   barHeight = 20;

    // var graph = d3.select("body")
    //   .append("svg")
    //   .attr("width", width)
    //   .attr("height", barHeight * data.length);

    // var bar = graph.selectAll("g")
    //   .data(data)
    //   .enter()
    //   .append("g")
    //   .attr("transform", function (d, i) {
    //     return "translate(0," + i * barHeight + ")";
    //   });

    // bar.append("rect")
    //   .attr("width", function (d) {
    //     return d * scaleFactor;
    //   })
    //   .attr("height", barHeight - 1);

    // bar.append("text")
    //   .attr("x", function (d) { return (d * scaleFactor); })
    //   .attr("y", barHeight / 2)
    //   .attr("dy", ".35em")
    //   .text(function (d) { return d; });







    // var data = [100, 400, 300, 900, 850, 1000]

    // var width = 500,
    //   barHeight = 20,
    //   margin = 1;

    // var scale = d3.scaleLinear()
    //   .domain([d3.min(data), d3.max(data)])
    //   .range([50, 500]);

    // var svg = d3.select("body")
    //   .append("svg")
    //   .attr("width", width)
    //   .attr("height", barHeight * data.length)

    // var g = svg.selectAll("g")
    //   .data(data)
    //   .enter()
    //   .append("g")
    //   .attr("transform", function (d, i) {
    //     return "translate(0," + i * barHeight + ")";
    //   });

    // g.append("rect")
    //   .attr("width", function (d) {
    //     return scale(d);
    //   })
    //   .attr("height", barHeight - margin)
    //   .attr("fill", function(d) {
    //     if (d <= 300) {
    //       return "red";
    //     } else if (d> 300) {
    //       return "orange";
    //     }
    //     return "yellow";
    //   })

    // g.append("text")
    //   .attr("x", function (d) { return (scale(d)); })
    //   .attr("y", barHeight / 2)
    //   .attr("dy", ".35em")
    //   .text(function (d) { return d; });

    var myData = [100, 125, 320, 440, 500];
    var height = 500;
    var width = 500;
    var barWidth = 35;
    var barOffset = 5;
    // var xScale = d3.scaleOrdinal()
    //   .domain(d3.range[myData.length])
    //   .range([0, width])
    //  var x = d3.scaleOrdinal()
    //  .domain(myData)
    //  .range([0, width])

    // var yScale = d3.scaleLinear()
    //   .domain([0, d3.max(myData)])
    //   .range([0, height]);



    var myChart = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', '#f4f4f4')
      .selectAll('rect')
      .data(myData)
      .enter()
      .append('rect')
      .style('fill', 'lightgreen')
      .attr('width', barWidth)
      .attr('height', function (d) {
        return d;
      })
      .attr('x', function (d, i) {
        return i * (barWidth + barOffset);
      })
      .attr('y', function (d) {
        return height - d;
      });
      


  }
}


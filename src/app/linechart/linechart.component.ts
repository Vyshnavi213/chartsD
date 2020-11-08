import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    var margin = { top: 50, right: 50, bottom: 50, left: 50 };
    var width = 600 - margin.left - margin.right;
    var height = 600 - margin.top - margin.bottom;

    var dataset = [40, 68, 75, 86, 123, 42, 70];

    var svg = d3.select("#visualization")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, width]);
    svg
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    var yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    svg
      .append('g')
      .call(d3.axisLeft(yScale));

    svg
      .selectAll('#visualization')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('width', '40px')
      .attr('height', height)
      .attr('x', function (d) {
        return d;
      })
      .attr('y', 20)
      .attr('fill', "blue")
      .attr("transform", "translate(0, 400)")
      .attr("transform", "rotate(0)");

  }
}

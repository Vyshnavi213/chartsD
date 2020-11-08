import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var margin = { top: 10, right: 45, bottom: 20, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;
    var dataset = [40, 68, 75, 86, 123, 42, 70];

    var svg = d3.select("#main")
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

    let data = [];
    let b = 0;
    const lengthOfData = dataset.length;
    for (let l = 0; l < lengthOfData; l++) {
      b = xScale(l);
      data.push({ yCoordinate: yScale[l], y: dataset[l], xCoordinate: xScale(l), x: xScale(l) + 205 });
    }
    console.log(data);

    svg
      .selectAll('#main')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', '40px')
      .attr('height', function (d) {
        console.log(d);
        return d.y;
      })
      .attr('x', function (d) {
        return d.xCoordinate;
      })
      .attr('y', function (d) {
        return d.yCoordinate;
      })
      .attr('fill', "#00000");
    // .attr("transform", "translate(0, 200)");
    // .attr("transform", "rotate(0)");


  }

}

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-barcmp',
  templateUrl: './barcmp.component.html',
  styleUrls: ['./barcmp.component.css']
})
export class BarcmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var margin = { top: 10, right: 45, bottom: 20, left: 30 },
      width = 450 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    var svG = d3.select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var data = [{ a: 0, b: 80 }, { a: 10, b: 90 }, { a: 60, b: 70 }, { a: 30, b: 47 }]

    var xScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    svG
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    var yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);
    svG
      .append('g')
      .call(d3.axisLeft(yScale));

    svG
      .selectAll("#area")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) { return xScale(d.a) })
      .attr("y", function (d) { return yScale(d.b) })
      .attr("width", 30)
      .attr("height", function (d) { return height - yScale(d.b); })
      .style('fill', 'lightgreen');




    // var margin = { top: 50, right: 50, bottom: 50, left: 50 };
    // var width = 600 - margin.left - margin.right;
    // var height = 600 - margin.top - margin.bottom;
    // // var barWidth = 35;
    // // var barOffset = 5;

    // var dataset = [40, 68, 75, 86, 123, 42, 70];


    // var svg = d3.select("#visualization")
    //   .append("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    // // var chart = d3.select('#visualization')
    // //   .append('svg')
    // //   .attr('width', width)
    // //   .attr('height', height)
    // //   .selectAll('rect')
    // //   .data(dataset)
    // //   .enter()
    // //   .append('rect')
    // //   .style('fill', 'lightgreen')
    // //   .attr('width', barWidth)
    // //   .attr('height', function (d) {
    // //     return d;
    // //   })
    // // .attr("cx", function (d) { return x(d.x) })

    // //   .attr('x', function (d, i) {
    // //     return i * (barWidth + barOffset);
    // //   })
    // //   .attr('y', function (d) {
    // //     return height - d;
    // //   });

    // var xScale = d3.scaleLinear()
    //   .domain([0, d3.max(dataset)])
    //   .range([0, width]);
    // svg
    //   .append('g')
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(d3.axisBottom(xScale));

    // var yScale = d3.scaleLinear()
    //   .domain([0, 100])
    //   .range([height, 0]);

    // svg
    //   .append('g')
    //   .call(d3.axisLeft(yScale));

    // let data = [];
    // let b = 0;
    // const lengthOfData = dataset.length;
    // for (let l = 0; l < lengthOfData; l++) {
    //   b = xScale(l);
    //   data.push({yCoordinate: yScale[l], y: dataset[l], xCoordinate: xScale(l), x: xScale(l) + 205 });
    // }
    // console.log(data);

    // svg
    //   .selectAll('#visualization')
    //   .data(data)
    //   .enter()
    //   .append('rect')
    //   .attr('width', '40px')
    //   .attr('height', function (d) {
    //     console.log(d);
    //     return d.y;
    //   })
    //   .attr('x', function (d) {
    //     return d.xCoordinate;
    //   })
    //   .attr('y', function (d) {
    //     return d.yCoordinate;
    //   })
    //   .attr('fill', "#00000")
    //   // .attr("transform", "translate(0, 400)")
    //   .attr("transform", "rotate(0)");

    // RANGE([HEIGHT, 0]) --- Because this inverts the SVG Coordinate Space along the Y-Axis. Let me repeat that - this inverts the SVG Coordinate Space along the Y-Axis. Which means that the origin point will now be at the bottom left instead of the top left. So as the y axis variable grows it will move up rather than down.



    // data.forEach(function(d) {
    //   d.date = parseDate(d.date);
    //   d.close = +d.close; ---- The + sign in front of the d.close converts the string to a number.
    // });
    // For each JavaScript object it does two things: one, it converts the date string to a JavaScript Date Object and two, and it converts the closing price from a string to a number.

    // d3.tsv("data.tsv", function(error, data){...});
    // d3.tsv("data.tsv", function(error, data){
    //     callbackError = error;
    //     callbackData = data;
    // });
    // We do this in this way for two reasons: one - it's easier to do in the JavaScript console as we build the chart piece by piece, and two, it reinforces the idea of the callback function and how it works.


  }

}

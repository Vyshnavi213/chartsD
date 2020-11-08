import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import 'd3pie';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // var width = 450
    // var height = 450
    // var margin = 40

    // var radius = Math.min(width, height) / 2 - margin

    // var svg = d3.select("#pie")
    //   .append("svg")
    //   .attr("width", width)
    //   .attr("height", height)
    //   .append("g")
    //   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // // Create dummy data
    // var data = { a: 9, b: 20, c: 30, d: 8, e: 12 }

    // var color = d3.scaleOrdinal()
    //   .domain(data)
    //   .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    // var pie = d3.pie()
    //   .value(function (d) { return d.value; })
    // var data_ready = pie(d3.entries(data))

    // svg
    //   .selectAll('whatever')
    //   .data(data_ready)
    //   .enter()
    //   .append('path')
    //   .attr('d', d3.arc()
    //     .innerRadius(0)
    //     .outerRadius(radius)
    //   )
    //   .attr('fill', function (d) { return (color(d.data.key)) })
    //   .attr("stroke", "black")
    //   .style("stroke-width", "2px")
    //   .style("opacity", 0.7)





    // var pie = new d3pie("pie", {
    //   header: {
    //     title: {
    //       text: "A very simple example pie"
    //     }
    //   },
    //   data: {
    //     content: [
    //       { label: "JavaScript", value: 264131 },
    //       { label: "Ruby", value: 218812 },
    //       { label: "Java", value: 157618},
    //     ]
    //   }
    // });

    var circledata = [
      { "x_axis": 120, "y_axis": 100, "radius": 40 },
      { "x_axis": 240, "y_axis": 100, "radius": 40 },
      { "x_axis": 360, "y_axis": 100, "radius": 40 },
      { "x_axis": 480, "y_axis": 100, "radius": 40 },
      { "x_axis": 600, "y_axis": 100, "radius": 40 }];

    var svg = d3.select("body").append("svg")
      .attr("width", 2000)
      .attr("height", 2000);

    var circles = svg.selectAll("circle")
      .data(circledata)
      .enter()
      .append("circle");

    var circleAttributes = circles
      .attr("cx", function (d) { return d.x_axis; })
      .attr("cy", function (d) { return d.y_axis; })
      .attr("r", function (d) { return d.radius; });
    // .style("fill", function (d) { return d.color; });

    // d3.selectAll('circle')
    // .style('fill', 'orange')
    d3.selectAll('circle')
      .attr('r', 25)

    var scores = [
      {
        "name": "Andy",
        "score": 25
      },
      {
        "name": "Beth",
        "score": 39
      },
      {
        "name": "Craig",
        "score": 42
      },
      {
        "name": "Diane",
        "score": 35
      },
      {
        "name": "Evelyn",
        "score": 48
      }
    ];
    // var scaleFactor = 0.000005;
    // return d.population * scaleFactor;
    d3.selectAll('circle')
      .data(scores)
      .attr('r', function (d) {
        return d.score * 0.5;
      })
      .on('click', function (d, i) {
        d3.select('.status')
          .text('You clicked on circle' + i)
      })
      .filter(function (d, i) {
        return i % 2 == 0
      })
      .style('fill', 'orange');



      
  }
}

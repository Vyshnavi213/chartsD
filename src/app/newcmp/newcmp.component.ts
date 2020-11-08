import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-newcmp',
  templateUrl: './newcmp.component.html',
  styleUrls: ['./newcmp.component.css']
})
export class NewcmpComponent implements OnInit {

  constructor() { }
  ngOnInit() {

    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    var data = [{ salescount: 10, sales: 20 }, { salescount: 40, sales: 90 }, { salescount: 80, sales: 50 }]

    var svg = d3.select("#area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    var y = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));

    svg
      .selectAll("#area")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) { return x(d.salescount) })
      .attr("y", function (d) { return y(d.sales) })
      .attr("width", 30)
      .attr("height", function (d) { return height - y(d.sales); })
      .style('fill', 'lightblue');




    //barrrrrrrrrrrrr
    //     var width = 500;
    //     var height = 500;
    //     var svg = d3.select("body")
    //       .append("svg")
    //       .attr("width", width)
    //       .attr("height", height)
    //       .style("background-color", "pink");

    // var dataset = [10,2, 34, 43];
    // var pie = d3.pie()
    // console.log(pie(dataset));


    // var data = [10, 20, 30];
    // var r = 300;
    // var canvas = d3.select("body").append("svg")
    // .attr("width", 500)
    // .attr("height", 500);
    // var group = canvas.append("g")
    // .attr("transform", "translate(300,300)")

    // var arc = d3.arc()
    // .innerRadius(0)
    // .outerRadius(r);








    // var details = [{ grade: "A+", number: 8 }, { grade: "A", number: 21 }, { grade: "B", number: 15 }, { grade: "C", number: 29 }, { grade: "D", number: 11 }, { grade: "F", number: 6 }];
    // var data = d3.pie().sort(null).value(function (d: any) { return d.number; })(details);
    // console.log(data);

    // var dataset = [{ "letter": "q", "presses": 1 }, { "letter": "w", "presses": 5 }, { "letter": "e", "presses": 2 }];
    // console.log(dataset);
    // var pie = d3.pie( )
    // .sort(null)
    // .startAngle(0)
    // .endAngle(2 * Math.PI)
    // .padAngle(0.01)
    // .value(function(d) {
    //   return dataset.presses;
    // });




    // .data(dataset)
    // .enter()
    //   .value(function (d) { return d.presses; });



    // var margin = {top: 20, right: 30, bottom: 40, left: 90},
    //     width = 460 - margin.left - margin.right,
    //     height = 400 - margin.top - margin.bottom;
    // var scalefactor = 0.001;
    // var svg = d3.select("#main")
    //   .append("svg")
    //     .attr("width", width + margin.left + margin.right)
    //     .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //     .attr("transform",
    //           "translate(" + margin.left + "," + margin.top + ")");
    // d3.csv("data.csv")
    // .then(function(data) {
    //   // Add X axis
    //   var x = d3.scaleLinear()
    //     .domain([0, 13000])
    //     .range([ 0, width]);
    //   svg.append("g")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(d3.axisBottom(x))
    //     .selectAll("text")
    //       .attr("transform", "translate(-10,0)rotate(-45)")
    //       .style("text-anchor", "end");

    //   // Y axis
    //   var y = d3.scaleBand()
    //     .range([ 0, height ])
    //     .domain(data.map(function(d) { return d.age; }))
    //     .padding(.1);
    //   svg.append("g")
    //     .call(d3.axisLeft(y))

    //   //Bars
    //   svg.selectAll("myRect")
    //     .data(data)
    //     .enter()
    //     .append("rect")
    //     .attr("x", x(0) )
    //     .attr("y", function(d) { return y(d.age); })
    //     .attr("width", function(d) { return (d.population); })
    //     .attr("height", y.bandwidth() )
    //     .attr("fill", "#69b3a2")

    // })



  }

}

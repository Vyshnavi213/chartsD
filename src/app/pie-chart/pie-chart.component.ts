import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

// import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //     var data = [10, 20, 30];
    //     var color = d3.scaleOrdinal()
    //       .range(["red", "blue", "orange"]);
    //     var canvas = d3.select("body")
    //       .append("svg")
    //       .attr("width", 1500)
    //       .attr("height", 1500);



    //   }
    // }
    //     //     var data = [10, 50, 80];
    //             var r = 200;
    //             var color = d3.scaleOrdinal()
    //             .range(["red", "blue", "orange"]);


    //             var canvas = d3.select("body")
    //             .append("svg")
    //             .attr("width", 1500)
    //             .attr("height", 1500);

    //             var group = canvas.append("g")
    //             .attr("transform", "translate(300,300)");

    //             var arc = d3.arc()
    //             .innerRadius(0)
    //             .outerRadius(r);

    //             var pie = d3.layout.pie()
    //             .value(function (d) {return d; });

    //             var arcs = group.selectAll(".arc")
    //             .data(pie(data))
    //             .enter()
    //             .append("g")
    //             .attr("class", "arc");

    //             arcs.append("path")
    //             .attr("d", arc)
    //             .attr("fill", function(d) {return color(d.data); });

    //   }
    // }
    //     var group = d3.select('body')
    //       .append('svg')
    //       .attr('width', 225)
    //       .attr('height', 225)
    //       .append('g')
    //       .attr('transform', 'translate(105, 105)');

    //     var data = [21, 32, 35, 64, 83, 23];
    //     var pieSegments = d3.pie()(data);

    //     var arcGenerator = d3.arc()
    //       .innerRadius(0)
    //       .outerRadius(100)
    //       .startAngle(function (d) {
    //         return d.startAngle;
    //       })
    //       .endAngle(function (d) {
    //         return d.endAngle;
    //       });

    //     var colors = d3.schemeCategory10;
    //     group.selectAll('path')
    //       .data(pieSegments)
    //       .enter()
    //       .append('path')
    //       .attr('d', 'arcGenerator')
    //       .attr('stroke', 'white')
    //       .attr('stroke-width', 3)
    //       .attr('fill', function (d, i) { return colors[i]; });

    //   }

    // }

    var dataset = [10, 23, 45, 60];
    console.log(dataset);
    var width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
      .range(["#FF6384", "#36A2EB", "#FFCE56", "blue"]);
    var pie = d3.pie();

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);
    var labelArc = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);
    var svg = d3.select("#pie")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var arcs = svg.selectAll("arc")
      .data(pie(dataset))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr('fill', function (d, i) { return color(i); })
       .attr("d", arc);
    arcs.append("text")
      .attr("transform", function (d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .text(function (d) { return d.value; })
      .style("fill", "#fff");
  }
}


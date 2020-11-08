import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { DataModel } from 'src/data/data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
}

//     var data = [4, 8, 15, 16, 23, 42, 20];

//     var x = d3.scaleLinear()
//       .domain([0, d3.max(data)])
//       .range([0, 420]);

//     d3.select("#chart")
//       .selectAll("div")
//       .data(data)
//       .enter().append("svg")
//       .style("width", function (d) { return x(d) + "px"; })
//       .style("background-color", 'steelblue')
//       .style('display', 'block')
//       .style('margin-bottom', '10')
//       .style('height', '20')
//       .text(function (d) { return d; });

//   }
// }


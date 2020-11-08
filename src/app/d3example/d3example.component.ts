import { Component, OnInit  } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3example',
  templateUrl: './d3example.component.html',
  styleUrls: ['./d3example.component.css']
})
export class D3exampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    var p = d3.select("body")
      .selectAll("p")
      .data([4, 8, 15, 16, 23, 42])
      .text(function (d) { return d; });

    p.enter().append("p")
      .text(function (d) { return d; });

    p.exit().remove();



    }
  }

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var margin = { top: 20, right: 20, bottom: 20, left: 20 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#bubble")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = [
      { country: "Afganistan", continent: "Asia", lifeExp: 43, pop: 318, gdpPerCap: 297 },
      { country: "Angola", continent: "Africa", lifeExp: 76, pop: 360, gdpPerCap: 4197 },
      { country: "Argentina", continent: "America", lifeExp: 72, pop: 216, gdpPerCap: 623 },
      { country: "Australia", continent: "Europe", lifeExp: 52, pop: 240, gdpPerCap: 3477 },
      { country: "Austria", continent: "Oceania", lifeExp: 81, pop: 286, gdpPerCap: 347 },
      { country: "Bahrain", continent: "Europe", lifeExp: 31, pop: 444, gdpPerCap: 477 },
      { country: "Bangladesh", continent: "Asia", lifeExp: 62, pop: 364, gdpPerCap: 777 },
      { country: "Belgium", continent: "Africa", lifeExp: 94, pop: 394, gdpPerCap: 2477 },
      { country: "Benin", continent: "Europe", lifeExp: 47, pop: 164, gdpPerCap: 1777 },
      { country: "Bolivia", continent: "America", lifeExp: 25, pop: 124, gdpPerCap: 1347 },
      { country: "Bosnia", continent: "Oceania", lifeExp: 16, pop: 421, gdpPerCap: 3111 },
      { country: "Herzegovina", continent: "Asia", lifeExp: 38, pop: 213, gdpPerCap: 4477 },
    ];


    var xScale = d3.scaleLinear()
      .domain([0, 5000])
      .range([0, width]);

    var yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    var zScale = d3.scaleLinear()
      .domain([0, 500])
      .range([10, 0]);
      
    var myColor = d3.scaleOrdinal()
      .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
      .range(d3.schemeSet2);

    svg
      .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    svg
      .append('g')
      .call(d3.axisLeft(yScale));

    svg.append('g')
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return xScale(d.gdpPerCap); })
      .attr("cy", function (d) { return yScale(d.lifeExp); })
      .attr("r", function (d) { return zScale(d.pop); })
      .style("fill", function (d) { return myColor(d.continent); })

      // .style("fill", "#a05d56")
      .attr("stroke", "black");

  }
}

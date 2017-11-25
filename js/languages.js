/**
 * Created by orlandogrodriguez on 11/22/17.
 */
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 256 - margin.left - margin.right,
    height = 256 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
var y = d3.scaleLinear()
    .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#languages").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("languages.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
        d.yoe = +d.yoe;
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.language; }));
    y.domain([0, d3.max(data, function(d) { return d.yoe; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.language); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.yoe); })
        .attr("height", function(d) { return height - y(d.yoe); });

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

});
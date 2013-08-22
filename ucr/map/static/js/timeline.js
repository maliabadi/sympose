var chartMargin = {top: 0, right: 0, bottom: 0, left: 0},
    chartWidth = 460 - chartMargin.left - chartMargin.right,
    chartHeight = 200 - chartMargin.top - chartMargin.bottom;

var x = d3.time.scale()
    .range([0, chartWidth]);

var y = d3.scale.linear()
    .range([chartHeight, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var area = d3.svg.area()
    .x(function(d) { return x(d.year); })
    .y0(chartHeight)
    .y1(function(d) { return y(d.count); })
    .interpolate('basis');

var timeline = d3.select("#timeline").append("svg")
    .attr("width", chartWidth + chartMargin.left + chartMargin.right)
    .attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
  .append("g")
    .attr("transform", "translate(" + chartMargin.left + "," + chartMargin.top + ")");

function load_variable_timeline(variable){
    var uri = ["/timeline", variable].join('/')
    d3.json(uri, function(error, data) {
      data.forEach(function(d) {
        d.year = d.year;
        d.count = +d.count;
      });

      x.domain([1977, 2008]);
      y.domain([0, d3.max(data, function(d) { return d.count; })]);

      timeline.append("path")
          .datum(data)
          .attr("class", "area")
          .attr("d", area);

      timeline.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + chartHeight + ")")
          .call(xAxis);

      timeline.append("g")
          .attr("class", "y axis")
          .call(yAxis);
    });
}


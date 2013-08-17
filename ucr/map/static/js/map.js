var width = 960, height = 600, centered;

path = d3.geo.path();
projection = path.projection(d3.geo.albersUsa());

var svgCounty = d3.select(".main")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr('class', 'counties');

d3.json("/static/data/geo/topology.json", function(error, us) {
  counties = topojson.feature(us, us.objects.tl_2012_us_county).features
  svgCounty.append("g")
    .attr("class", "counties")
    .selectAll("path.counties")
    .data(counties)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("id", function(a) { return "FIPS" + a.id.toString(); })
    .attr("d", path);
});

function load_year_variable(arg) {
  var uri = ["/year", arg.year.toString(), arg.variable.toString()].join('/');
  d3.json(uri, function(error, data) {
    for ( cloroKey in data ) {
      for ( fipsCode in data[cloroKey] ) {
        d3.select( "#FIPS" + fipsCode )
          .style("fill", 'rgb(245, 245, 245)')
          .transition()
          .style("fill", cloroStruct[cloroKey])
          .delay(0);
      }
    }
  });
}
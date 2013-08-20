var width = 960, height = 600, svg, path, projection;

function loadMap(){
  
  path = d3.geo.path();
  projection = path.projection(d3.geo.albersUsa());

  svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr('class', 'counties');

  d3.json("/static/data/geo/topology.json", function(error, us) {
    counties = topojson.feature(us, us.objects.tl_2012_us_county).features
    svg.append("g")
      .attr("class", "counties")
      .selectAll("path.counties")
      .data(counties)
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("id", function(a) { return "fips_" + parseInt(a.id).toString(); })
      .attr("d", path);
  });
};


var cloroStruct = {'cloro-0' : 'rgb(255, 255, 229)',
                   'cloro-1' : 'rgb(255, 247, 188)',
                   'cloro-2' : 'rgb(254, 227, 145)',
                   'cloro-3' : 'rgb(254, 196, 79)',
                   'cloro-4' : 'rgb(254, 153, 41)',
                   'cloro-6' : 'rgb(236, 112, 20)',
                   'cloro-7' : 'rgb(204, 76, 2)',
                   'cloro-8' : 'rgb(153, 52, 4)',
                   'cloro-9' : 'rgb(102, 37, 6)',
                   'cloro-blank': 'rgb(217, 217, 217)'}

var width = 960, height = 600, centered;

path = d3.geo.path();
projection = path.projection(d3.geo.albersUsa());

var svgCounty = d3.select(".pure-u-4-5.main")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr('class', 'counties');

var svgState = d3.select(".pure-u-4-5.main")
  .append("svg")
  .attr('class', 'states')
  .attr("width", width)
  .attr("height", height);

var responseCache = {}

d3.json("/static/data/geo/topology.json", function(error, us) {
  responseCache.counties = topojson.feature(us, us.objects.tl_2012_us_county).features
  svgCounty.append("g")
    .attr("class", "counties")
    .selectAll("path.counties")
    .data(responseCache.counties)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("id", function(a) { return "FIPS" + a.id.toString(); })
    .attr("d", path);
});

d3.json("/static/data/geo/topology_states.json", function(error, us) {
  responseCache.states = topojson.feature(us, us.objects.tl_2012_us_state).features
  svgCounty.append("g")
    .attr("class", "states")
    .selectAll("path.states")
    .data(responseCache.states)
    .enter()
    .append("path")
    .attr("class", "state")
    .attr("id", function(a) { return a.id.toString(); })
    .attr("d", path)
    .on('click', clicked);
});

function getLeft(feature){
  var bounds = path.bounds(feature);
  return bounds[0][0]
}

function getRight(feature){
  var bounds = path.bounds(feature);
  return bounds[1][0]
}

function getTop(feature){
  var bounds = path.bounds(feature);
  return bounds[1][1]
}

function getBottom(feature){
  var bounds = path.bounds(feature);
  return bounds[0][1]
}


function getAbsoluteDimensions() {
  var l, r, b, t, w, h;
  l = d3.min(responseCache.states.map(getLeft));
  r = d3.max(responseCache.states.map(getRight));
  b = d3.min(responseCache.states.map(getBottom));
  t = d3.max(responseCache.states.map(getTop));
  return ((r - l) * (t - b) / (height * width))
}

function clicked(d) {
  var x, y, k;
  var g = d3.selectAll("g");
  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    centered = d;
    k = 3;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }
  g.selectAll('path')
      .classed("active", centered && function(d) {
        return centered && d === centered;
    });

  $(".county active").css('z-index', 4);

  g.selectAll('path.county')
    .classed("inactive", function(e) {
      return centered && e.properties.STATEFP != centered.id;
    });
  g.selectAll('path').transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
}

function loadYearVar(argObject) {
  var uri = ["/year", argObject.year.toString(), argObject.variable.toString()].join('/');
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

$(".offenseButton").click(function(e){
  loadYearVar({'year': parseInt($("ul#years li.pure-menu-selected a").attr('name')), 'variable': e.target.name});
  $("ul#offenses li.pure-menu-selected").removeClass('pure-menu-selected');
  $(this)
      .parent().attr("class", 'pure-menu-selected')
});

$(".yearButton").click(function(e){
  loadYearVar({'year': parseInt(e.target.name), 'variable': $("ul#offenses li.pure-menu-selected a").attr('name')});
  $("ul#years li.pure-menu-selected").removeClass('pure-menu-selected');
  $(this)
      .parent().attr("class", 'pure-menu-selected')
});
var cloroStruct = {'cloro-0' : 'rgb(255, 255, 229)',
                   'cloro-1' : 'rgb(255, 247, 188)',
                   'cloro-2' : 'rgb(254, 227, 145)',
                   'cloro-3' : 'rgb(254, 196, 79)',
                   'cloro-4' : 'rgb(254, 153, 41)',
                   'cloro-6' : 'rgb(236, 112, 20)',
                   'cloro-7' : 'rgb(204, 76, 2)',
                   'cloro-8' : 'rgb(153, 52, 4)',
                   'cloro-9' : 'rgb(102, 37, 6)'}

var width = 960, height = 500;

var path = d3.geo.path();

var projection = path.projection();

var svg = d3.select(".pure-u-4-5.main").append("svg")
.attr("width", width)
.attr("height", height);

var responseCache = {}

d3.json("/static/data/geo/topology.json", function(error, us) {
  svg.append("g")
  .attr("class", "counties")
  .selectAll("path")
  .data(topojson.feature(us, us.objects.tl_2012_us_county).features)
  .enter().append("path")
  .attr("class", "county")
  .attr("id", function(a) { return "FIPS" + a.id.toString(); })
  .attr("d", path);
});

function loadYearVar(argObject) {
  var uri = ["/year", argObject.year.toString(), argObject.variable.toString()].join('/');
  d3.json(uri, function(error, data) {
    for ( cloroKey in data ) {
      for ( fipsCode in data[cloroKey] ) {
        d3.select( "#FIPS" + fipsCode )
          .style("fill", 'rgb(245, 245, 245)')
          .transition()
          .style("fill", cloroStruct[cloroKey])
          .duration(1000)
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
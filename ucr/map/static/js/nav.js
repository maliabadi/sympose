$(function() {
  $( "#slider" ).slider({
    value: 1977,
    min: 1977,
    max: 2008,
    step: 1,
    slide: function( event, ui ) {
      $( "#year h3" ).html(ui.value.toString());
      load_variables();
      load_map_data();
    }
  });
});

function load_variables(){
    $('#variables').empty();
    $('#variables').append('<p class="title" id="ctype"><a href="#">Crime Type</a></p>');
    $('#variables').append('<div class="content"><ul class="side-nav"></ul></div>');
    $.ajax({
            url: '/list/variables/' + parseInt($("#year h3").html()),
            context: $('#variables div.content ul.side-nav')
           })
        .done(function(data){
            for ( i in data ){
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.setAttribute('href', '#');
                a.setAttribute('id', data[i].id.toString());
                $(a).click(load_year_variable);
                a.appendChild(document.createTextNode(data[i].display.toString()));
                li.appendChild(a);
                $(this).append(li);
        };
    });
}

function load_map_data(){
  var variable_id = $("#variable h3 small").data()['id'];
  var year = $( "#year h3" ).html();
  var uri = ["/year", variable_id, year].join('/');
  d3.json(uri, function(error, data) {
    for ( fips in data ) {
        d3.select( "#fips_" + fips )
          .transition()
          .duration(750)
          .style("fill", data[fips]);
      }
    });
  load_variable_timeline(variable_id);
  load_year_var_histogram({'year': year, 'variable': variable_id})
}

function load_year_variable(event) {
  var variable_id = event.currentTarget.getAttribute('id');  
  $("#variable h3 small").html(event.currentTarget.text);
  $("#variable h3 small").data({'id': variable_id});
  load_map_data(variable_id);
}


function initState(){
  $("#variable h3 small").html('Violent Crime');
  $("#variable h3 small").data({'id': '10'});
  $( "#year h3" ).html('1977');
  load_variables();
  load_map_data();
}

$(document).ready(function() {
  $.ajax({
    url: '/list/years',
    context: $('#years')
  }).done(function(data){
    var ul = document.createElement('ul');
    for ( i in data ){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('id', data[i].toString());
        a.appendChild(document.createTextNode(data[i].toString()));
        $(a).click(load_variables);
        li.appendChild(a);
        ul.appendChild(li);
    }
    $(this).append(ul);
  })

  loadMap();
  initState();

});
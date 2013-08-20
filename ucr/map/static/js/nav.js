function load_variables(event){
    $(".active").removeClass('active');
    event.currentTarget.setAttribute('class', 'active');
    $('#variables').empty();
    $.ajax({
            url: '/list/variables/' + event.currentTarget.getAttribute('id'),
            context: $('#variables')
           })
        .done(function(data){
            var ul = document.createElement('ul');
            for ( i in data ){
                console.log(data[i]);
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.setAttribute('href', '#');
                a.setAttribute('id', data[i].id.toString());
                $(a).click(load_year_variable);
                a.appendChild(document.createTextNode(data[i].display.toString()));
                li.appendChild(a);
                ul.appendChild(li);
        };
        $(this).append(ul);
    });
}

function load_year_variable(event) {
  var year = event.currentTarget.getAttribute('id');
  var variable_id = $(".active").attr('id');
  var uri = ["/year", year, variable_id].join('/');
  d3.json(uri, function(error, data) {
    for ( fips in data ) {
        d3.select( "#fips_" + fips )
          .style("fill", data[fips]);
      }
    });
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

});
function getCount(obj) {
  return parseInt(obj.count);
}

function histogram_scale(obj, low, high, width) {
  count = getCount(obj);
  var extent = (high - low);
  var offSet = (count - low);
  var totalOffset = (offSet / extent);
  var scaledWidth = totalOffset * width;
  return {
    'scaledWidth': scaledWidth,
    'count': count,
    'fips': obj[0]
  };
}

function load_year_var_histogram(arg) {
  var uri = ["/histogram/national", arg.year.toString(), arg.variable].join('/')
  var statsBox = $("#histogram");
  statsBox.empty();
  d3.json(uri, function(error, histogram) {
    var counts = histogram.map(getCount);
    var bounds = d3.extent(counts);
    var low = bounds[0];
    var high = bounds[1];
    console.log(counts);
    console.log(bounds);
    console.log(low);
    console.log(high);
    for (i in histogram) {
      var hist = histogram_scale(histogram[i], low, high, 150);
      var container = document.createElement('div');
      container.setAttribute('class', 'bar-container');
      var indicator = document.createElement('div');
      indicator.setAttribute('class', 'bar-indicator');
      indicator.setAttribute('style', 'width:' + Math.round(hist.scaledWidth).toString() + "px;");
      var numberLabel = document.createElement('div');
      numberLabel.setAttribute('class', 'bar-indicator-numeric');
      var number = document.createTextNode(hist.count.toString());
      numberLabel.appendChild(number);
      var label = document.createElement('div');
      label.setAttribute('class', 'bar-label');
      var text = document.createTextNode(histogram[i].name);
      label.appendChild(text);
      container.appendChild(indicator);
      container.appendChild(numberLabel);
      container.appendChild(label);
      statsBox.append(container);
    }
  });
}
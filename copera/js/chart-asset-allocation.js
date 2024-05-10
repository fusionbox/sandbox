// Create Pie Chart: Asset Allocation

am4core.ready(function() {

  var container = am4core.create("chart_asset_allocation", am4core.Container);
  container.width = am4core.percent(100);
  container.height = am4core.percent(100);
  container.align = "center";
  container.valign = "middle";

  var chart = container.createChild(am4charts.PieChart);


  // Add data
  chart.data = [{
    "asset_class": "Global Equity",
    "percentage_of_portfolio": 53.4,
    "last_years_return": "-9.1",
    "benchmark_return": "-9.9"
  }, {
    "asset_class": "Fixed Income",
    "percentage_of_portfolio": 24.0,
    "last_years_return": "-0.1",
    "benchmark_return": "0.1"
  }, {
    "asset_class": "Private Equity",
    "percentage_of_portfolio": 8.8,
    "last_years_return": "7.6",
    "benchmark_return": "10.2"
  }, {
    "asset_class": "Real Estate",
    "percentage_of_portfolio": 9.6,
    "last_years_return": "11.1",
    "benchmark_return": "7.9"
  }, {
    "asset_class": "Opportunity Fund",
    "percentage_of_portfolio": 3.6,
    "last_years_return": "5.6",
    "benchmark_return": "2.2"
  }, {
    "asset_class": "Cash & Short Term",
    "percentage_of_portfolio": 0.6,
    "last_years_return": "2.0",
    "benchmark_return": "1.9"
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "percentage_of_portfolio";
  pieSeries.dataFields.category = "asset_class";
  pieSeries.slices.template.stroke = am4core.color("#eef1f2");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;

  pieSeries.labels.template.fontSize = "13px";
  pieSeries.labels.template.text = "{category}";
	pieSeries.labels.template.disabled = true;

  pieSeries.dataFields.asset_class = "asset_class";
  pieSeries.dataFields.percentage_of_portfolio = "percentage_of_portfolio";
  pieSeries.dataFields.last_years_return = "last_years_return";

	chart.legend = new am4charts.Legend();
	chart.legend.position = "bottom";
  chart.legend.fontSize = "13px";
	chart.legend.itemContainers.template.clickable = false;
	chart.legend.itemContainers.template.focusable = false;
	chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

  pieSeries.slices.template.tooltipText = '{category}\n2018 Return: {last_years_return}%';
  pieSeries.slices.template.tooltipHTML =
	'<div style="font-size:14px"><strong>{category}</strong></div>'+
  '<div class="d-flex">'+
  '<div class="mx-1 py-1 text-center"><div style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;">{last_years_return}%</div><div style="font-size:13px">2018 Return</div></div>'+
  '<div class="mx-1 py-1 text-center"><div style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;">{benchmark_return}%</div><div style="font-size:13px">Benchmark Return</div></div>'+
  '</div>';

}); // end am4core.ready()
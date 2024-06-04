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
		"color": am4core.color("#1F2A59"),
    "asset_class": "Global Equity",
    "percentage_of_portfolio": 55.0,
    "last_years_return": "23.8",
    "benchmark_return": "21.9"
  }, {
		"color": am4core.color("#2C90CC"),
    "asset_class": "Fixed Income",
    "percentage_of_portfolio": 18.9,
    "last_years_return": "6.2",
    "benchmark_return": "5.5"
  }, {
		"color": am4core.color("#D94D26"),
    "asset_class": "Private Equity",
    "percentage_of_portfolio": 8.7,
    "last_years_return": "4.7",
    "benchmark_return": "23.4"
  }, {
		"color": am4core.color("#BA9B22"),
    "asset_class": "Real Estate",
    "percentage_of_portfolio": 10.1,
    "last_years_return": "-9.9",
    "benchmark_return": "-12.2"
  }, {
		"color": am4core.color("#7A9117"),
    "asset_class": "Alternatives",
    "percentage_of_portfolio": 6.9,
    "last_years_return": "7.8",
    "benchmark_return": "9.4"
  }, {
		"color": am4core.color("#DE751C"),
    "asset_class": "Cash & Short Term",
    "percentage_of_portfolio": 0.4,
    "last_years_return": "5.2",
    "benchmark_return": "5.0"
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "percentage_of_portfolio";
  pieSeries.dataFields.category = "asset_class";
  pieSeries.slices.template.stroke = am4core.color("#eef1f2");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.slices.template.propertyFields.fill = "color";

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
	chart.legend.position = "top";
	chart.legend.maxWidth = undefined;
  chart.legend.fontSize = "13px";
	chart.legend.itemContainers.template.clickable = false;
	chart.legend.itemContainers.template.focusable = false;
	chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

	chart.legend.valueLabels.template.align = "top";

  pieSeries.slices.template.hoverOnFocus = true;
  pieSeries.slices.focusable=true;
  pieSeries.slices.template.tooltipText = '{category}\n2023 Return: {last_years_return}%';
  pieSeries.slices.template.tooltipHTML =
	'<div style="font-size:14px"><strong>{category}</strong></div>'+
  '<div class="d-flex">'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{last_years_return}%</div><div style="font-size:13px">2023 Return</div></div>'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{benchmark_return}%</div><div style="font-size:13px">Benchmark Return</div></div>'+
  '</div>';
  pieSeries.slices.template.tooltip.togglable=true;

  title.readerTitle = "A pie chart displaying the allocation of funds to each asset class";

}); // end am4core.ready()
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
		"color": am4core.color("#0088A4"),
    "asset_class": "Global Equity",
    "percentage_of_portfolio": 58.3,
    "last_years_return": "18.6",
    "benchmark_return": "18.5"
  }, {
		"color": am4core.color("#82A8ED"),
    "asset_class": "Fixed Income",
    "percentage_of_portfolio": 18.4,
    "last_years_return": "-1.4",
    "benchmark_return": "-1.5"
  }, {
		"color": am4core.color("#D94D26"),
    "asset_class": "Private Equity",
    "percentage_of_portfolio": 9.2,
    "last_years_return": "39.6",
    "benchmark_return": "20.0"
  }, {
		"color": am4core.color("#BA9B22"),
    "asset_class": "Real Estate",
    "percentage_of_portfolio": 8.8,
    "last_years_return": "24.9",
    "benchmark_return": "21.6"
  }, {
		"color": am4core.color("#7A9117"),
    "asset_class": "Alternatives",
    "percentage_of_portfolio": 4.7,
    "last_years_return": "9.2",
    "benchmark_return": "10.2"
  }, {
		"color": am4core.color("#DE751C"),
    "asset_class": "Cash & Short Term",
    "percentage_of_portfolio": 0.6,
    "last_years_return": "0.0",
    "benchmark_return": "0.0"
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
	chart.legend.position = "left";
	chart.legend.maxWidth = undefined;
  chart.legend.fontSize = "13px";
	chart.legend.itemContainers.template.clickable = false;
	chart.legend.itemContainers.template.focusable = false;
	chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

	chart.legend.valueLabels.template.align = "left";

  pieSeries.slices.template.tooltipText = '{category}\n2020 Return: {last_years_return}%';
  pieSeries.slices.template.tooltipHTML =
	'<div style="font-size:14px"><strong>{category}</strong></div>'+
  '<div class="d-flex">'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{last_years_return}%</div><div style="font-size:13px">2021 Return</div></div>'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{benchmark_return}%</div><div style="font-size:13px">Benchmark Return</div></div>'+
  '</div>';

}); // end am4core.ready()
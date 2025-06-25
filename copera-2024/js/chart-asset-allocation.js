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
		"color": am4core.color("#4A83B4"),
    "asset_class": "Global Equity",
    "percentage_of_portfolio": 55.5,
    "last_years_return": "17.1",
    "benchmark_return": "16.7"
  }, {
		"color": am4core.color("#B2653D"),
    "asset_class": "Fixed Income",
    "percentage_of_portfolio": 19.7,
    "last_years_return": "1.7",
    "benchmark_return": "1.3"
  }, {
		"color": am4core.color("#1D2240"),
    "asset_class": "Private Equity",
    "percentage_of_portfolio": 7.7,
    "last_years_return": "6.4",
    "benchmark_return": "18.2"
  }, {
		"color": am4core.color("#85ACBB"),
    "asset_class": "Real Estate",
    "percentage_of_portfolio": 9.2,
    "last_years_return": "-0.6",
    "benchmark_return": "-1.8"
  }, {
		"color": am4core.color("#B68365"),
    "asset_class": "Alternatives",
    "percentage_of_portfolio": 7.2,
    "last_years_return": "8.0",
    "benchmark_return": "8.6"
  }, {
		"color": am4core.color("#E2ECF3"),
    "asset_class": "Cash & Cash Equivalents",
    "percentage_of_portfolio": 0.7,
    "last_years_return": "5.4",
    "benchmark_return": "5.3"
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "percentage_of_portfolio";
  pieSeries.dataFields.category = "asset_class";
  pieSeries.slices.template.stroke = am4core.color("#ffffff");
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
  pieSeries.slices.template.tooltipText = '{category}\n2024 Return: {last_years_return}%';
  pieSeries.slices.template.tooltipHTML =
	'<div style="font-size:14px"><strong>{category}</strong></div>'+
  '<div class="d-flex">'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{last_years_return}%</div><div style="font-size:13px">2024 Return</div></div>'+
  '<div class="mx-1 py-1 text-center"><div style="font-size:30px;line-height:1;">{benchmark_return}%</div><div style="font-size:13px">Benchmark Return</div></div>'+
  '</div>';
  pieSeries.slices.template.tooltip.togglable=true;

  title.readerTitle = "A pie chart displaying the allocation of funds to each asset class";

}); // end am4core.ready()
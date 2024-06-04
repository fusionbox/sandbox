// Create Bar Chart: Full Funding

am4core.ready(function() {

  var chart = am4core.create("chart_full_funding", am4charts.XYChart);

  // Add data
  chart.data = [{
		"color": am4core.color("#1F2A59"),
    "division": "DPS",
    "years": 9
  },{
		"color": am4core.color("#1F2A59"),
    "division": "Judicial",
    "years": 8
  },{
		"color": am4core.color("#1F2A59"),
    "division": "Local Govt.",
    "years": 14
  },{
		"color": am4core.color("#1F2A59"),
    "division": "School",
    "years": 27
  },{
		"color": am4core.color("#1F2A59"),
    "division": "State",
    "years": 23
  }
  ];

  // Create axes

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());

  categoryAxis.dataFields.category = "division";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.labels.template.fontSize = "15px";

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.fontSize = "15px";
  valueAxis.renderer.minGridDistance = 100;
  valueAxis.min = 0;
  valueAxis.max = 30;

	valueAxis.renderer.labels.template.disabled = true;
	var range0 = valueAxis.axisRanges.create(); range0.value = 0; range0.label.text = "0";
	var range5 = valueAxis.axisRanges.create(); range5.value = 5; range5.label.text = "5";
	var range10 = valueAxis.axisRanges.create(); range10.value = 10; range10.label.text = "10";
	var range15 = valueAxis.axisRanges.create(); range15.value = 15; range15.label.text = "15";
	var range20 = valueAxis.axisRanges.create(); range20.value = 20; range20.label.text = "20";
	var range25 = valueAxis.axisRanges.create(); range25.value = 25; range25.label.text = "25";
	var range30 = valueAxis.axisRanges.create(); range30.value = 30; range30.label.text = "30";

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());

  var hover = series.columns.template.states.create("highlight");
  hover.properties.fill = am4core.color("#0000CC");

  series.dataFields.valueX = "years";
  series.dataFields.categoryY = "division";

  series.name = "Years to Reach Full Funding";
  series.fontSize="15px";
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.fillOpacity = .8;
  series.columns.template.tooltipHTML = '<div><strong>{categoryY}: {valueX} Years</strong></div>';
  series.tooltip.getFillFromObject=false;
  series.tooltip.background.fill=am4core.color("#3E3E3E");
  series.tooltip.background.filters.clear();
  series.tooltip.fontSize='15px';
  series.tooltip.strokeWidth=0;
  series.tooltip.strokeOpacity=0;
  series.tooltip.togglable=true;
  series.tooltip.pointerOrientation = "vertical";

  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 0;
  columnTemplate.strokeOpacity = 0;

  series.columns.template.hoverOnFocus = true;
  series.tooltip.focusable=true;

  var hoverState = series.columns.template.states.create("hover");
  hoverState.properties.fillOpacity = 1;

}); // end am4core.ready()
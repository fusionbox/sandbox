// Create Bar Chart: Full Funding

am4core.ready(function() {

  var chart = am4core.create("chart_full_funding", am4charts.XYChart);

  // Add data
  chart.data = [{
    "division": "DPS",
    "years": 11,
		"years_before_auto_adjust": 20,
    "dollars": 0.5
  },{
    "division": "Judicial",
    "years": 12,
		"years_before_auto_adjust": 12,
    "dollars": 0.5
  },{
    "division": "Local Govt.",
    "years": 14,
		"years_before_auto_adjust": 40,
    "dollars": 0.5
  },{
    "division": "School",
    "years": 24,
		"years_before_auto_adjust": 41,
    "dollars": 0.5
  },{
    "division": "State",
    "years": 22,
		"years_before_auto_adjust": 33,
    "dollars": 0.5
  }
  ];

  // Create axes

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());

  categoryAxis.dataFields.category = "division";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.labels.template.fontSize = "12px";


  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.fontSize = "12px";
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
  series.dataFields.before = "years_before_auto_adjust";
  series.dataFields.categoryY = "division";

  series.name = "Years to Reach Full Funding";
  series.fontSize="13px";
  series.columns.template.fillOpacity = .5;
  series.columns.template.tooltipHTML = '<div><strong>{categoryY}: {valueX} Years</strong></div>';
  series.tooltip.getFillFromObject=false;
  series.tooltip.background.fill=am4core.color("#3E3E3E");
  series.tooltip.background.filters.clear();
  series.tooltip.fontFamily='museo-sans';
  series.tooltip.fontSize='13px';
  series.tooltip.strokeWidth=0;
  series.tooltip.strokeOpacity=0;
  series.tooltip.togglable=true;
  series.tooltip.pointerOrientation = "vertical";

  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 0;
  columnTemplate.strokeOpacity = 0;

  var hoverState = series.columns.template.states.create("hover");
  hoverState.properties.fillOpacity = 1;

}); // end am4core.ready()
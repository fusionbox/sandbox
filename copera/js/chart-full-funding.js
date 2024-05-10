// Create Bar Chart: Full Funding

am4core.ready(function() {

  var chart = am4core.create("chart_full_funding", am4charts.XYChart);

  // Add data
  chart.data = [{
    "division": "DPS",
    "years": 17,
		"years_before_auto_adjust": 20,
    "dollars": 0.5
  },{
    "division": "Judicial",
    "years": 21,
		"years_before_auto_adjust": 24,
    "dollars": 0.5
  },{
    "division": "Local Govt.",
    "years": 29,
		"years_before_auto_adjust": 40,
    "dollars": 0.5
  },{
    "division": "School",
    "years": 34,
		"years_before_auto_adjust": 41,
    "dollars": 0.5
  },{
    "division": "State",
    "years": 28,
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
  valueAxis.renderer.minGridDistance = 30;
  valueAxis.min = 0;
  valueAxis.max = 35;

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
  series.columns.template.tooltipText = '{categoryY}\nAfter Auto-Adjust: {valueX} Years\nBefore Auto-Adjust: {before} Years';
  series.columns.template.tooltipHTML =
	'<div class="mb-1" style="font-size:15px"><strong>{categoryY}</strong></div>'+
	'<div class="d-flex">'+
	'	<div class="mx-1 pb-1">'+
	'		<div class="mb-1">After<br>Auto-Adjust</div>'+
	'		<div style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1.2">{valueX}</div>'+
	'		<div>Years</div>'+
	'	</div>'+
	'	<div class="mx-1 pb-1">'+
	'		<div class="mb-1">Before<br>Auto-Adjust</div>'+
	'		<div style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1.2">{before}</div>'+
	'		<div>Years</div>'+
	'	</div>'+
	'</div>';
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
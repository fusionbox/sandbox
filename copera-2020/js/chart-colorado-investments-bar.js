// Create Pie Chart: Asset Allocation

am4core.ready(function() {

  var chart = am4core.create("chart_colorado_investments", am4charts.XYChart);

  // Add data
  chart.data = [
	{
	  "asset_class": "Public Equity",
	  "dollars": 170300000,
	  "percentage_of_investments": "21.1"
	},
	{
		"asset_class": "Fixed Income",
		"dollars": 14400000,
	  "percentage_of_investments": "1.8"
	},
	{
	  "asset_class": "Real Estate",
	  "dollars": 196300000,
	  "percentage_of_investments": "24.3"
	},
	{
    "asset_class": "Private Equity",
    "dollars": 177300000,
    "percentage_of_investments": "21.9"
  },
	{
	   "asset_class": "Alternatives",
	   "dollars": 250200000,
	   "percentage_of_investments": "30.9"
	}];

  // Create axes

  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());

  categoryAxis.dataFields.category = "asset_class";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 10;
  categoryAxis.renderer.labels.template.fontSize = "12px";

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.fontSize = "12px";
  valueAxis.renderer.minGridDistance = 100;
  valueAxis.min = 0;
  valueAxis.max = 300000000;
	valueAxis.numberFormatter.numberFormat = "$#,###.#a";
	valueAxis.renderer.labels.template.rotation = -60;
	valueAxis.renderer.labels.template.verticalCenter = "middle";
	valueAxis.renderer.labels.template.horizontalCenter = "right";

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());

  var hover = series.columns.template.states.create("highlight");
  hover.properties.fill = am4core.color("#0000CC");

  series.dataFields.valueX = "dollars";
  series.dataFields.percentage = "percentage_of_investments";
  series.dataFields.categoryY = "asset_class";

  series.name = "Years to Reach Full Funding";
  series.fontSize="13px";
  series.columns.template.fillOpacity = .5;
  series.columns.template.tooltipText = '{categoryY} | {valueX}\n{percentage}% of Colorado-Based Investments';
  series.columns.template.tooltipHTML =
	'<div class="mb-1" style="font-size:15px"><strong>{categoryY}</strong></div>'+
	'<div class="mb-2" style="font-size:30px;line-height:1.2""><strong>{valueX}</strong></div>'+
	'<div class="mb-1">{percentage}% of Colorado-Based<br>Investments</div>'+
	'</div>';
  series.tooltip.getFillFromObject=false;
  series.tooltip.background.fill=am4core.color("#3E3E3E");
  series.tooltip.background.filters.clear();
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

// Create Pie Chart: Asset Allocation

am4core.ready(function() {

  var chart = am4core.create("chart_colorado_investments", am4charts.PieChart);

  // Add data
  chart.data = [{
    "asset_class": "Private Equity",
   "percentage_of_investments": 30.4
  }, {
    "asset_class": "Public Equity",
   "percentage_of_investments": 19.2
  }, {
    "asset_class": "Real Estate",
   "percentage_of_investments": 21.7
  }, {
    "asset_class": "Opportunity Fund",
   "percentage_of_investments": 27.5
  }, {
    "asset_class": "Bonds",
   "percentage_of_investments": 1.2
  }];

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "percentage_of_investments";
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
  pieSeries.dataFields.percentage_of_investments = "percentage_of_investments";

	chart.legend = new am4charts.Legend();
	chart.legend.position = "bottom";
  chart.legend.fontSize = "13px";
	chart.legend.itemContainers.template.clickable = false;
	chart.legend.itemContainers.template.focusable = false;
	chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

  pieSeries.slices.template.tooltipHTML =
  '<div class="text-center" style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;">{percentage_of_investments}%</div></div>'+
  '<div class="text-center pb-1" style="font-size:12px"><em>{category}</em></div>';


}); // end am4core.ready()
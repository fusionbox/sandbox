// Create Bar Chart: Rates of Return Over 10 Years

am4core.ready(function() {

  var chart = am4core.create("chart_rates_of_return", am4charts.XYChart);

  // Add data
  chart.data = [{
		"color": am4core.color("#4A83B4"),
    "year": "2015",
    "rate_of_return": 1.5,
    "benchmark": 0.5,
    "assumed": 7.50
  }, {
		"color": am4core.color("#4A83B4"),
    "year": "2016",
    "rate_of_return": 7.3,
    "benchmark": 7.3,
    "assumed": 7.25
  }, {
		"color": am4core.color("#4A83B4"),
    "year": "2017",
    "rate_of_return": 18.1,
    "benchmark": 16.0,
    "assumed": 7.25
  }, {
		"color": am4core.color("#4A83B4"),
    "year": "2018",
    "rate_of_return": -3.5,
    "benchmark": -3.6,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2019",
    "rate_of_return": 20.3,
    "benchmark": 19.8,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2020",
    "rate_of_return": 17.4,
    "benchmark": 14.1,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2021",
    "rate_of_return": 16.1,
    "benchmark": 13.7,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2022",
    "rate_of_return": -13.4,
    "benchmark": -13.7,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2023",
    "rate_of_return": 13.4,
    "benchmark": 14.4,
    "assumed": 7.25
  },{
		"color": am4core.color("#4A83B4"),
    "year": "2024",
    "rate_of_return": 10.8,
    "benchmark": 11.1,
    "assumed": 7.25
  }];

  // Create axes

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.fontSize = "13px";

  categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
    if (target.dataItem && target.dataItem.index & 2 == 2) {
      return dy + 25;
    }
    return dy;
  });

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.fontSize = "13px";
  valueAxis.renderer.minGridDistance = 20;

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());

  var hover = series.columns.template.states.create("highlight");
  hover.properties.fill = am4core.color("#0000CC");

  series.dataFields.valueY = "rate_of_return";
  series.dataFields.categoryX = "year";
  series.name = "Total Fund Rate of Return";
  series.itemReaderText = "Assumed Investment Rate of Return: {assumed}%\n{valueY}% {categoryX}\nPolicy Benchmark Return: {benchmark}%, Assumed Investment: Rate of Return: {assumed}%, {categoryX}: {valueY}%, Policy Benchmark Return: {benchmark}%";
  series.fontSize="14px";
  series.dataFields.benchmark = "benchmark";
  series.dataFields.assumed = "assumed";
  series.columns.template.hoverOnFocus = true;
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.fillOpacity = .8;
  series.columns.template.tooltipText = 'Assumed Investment Rate of Return: {assumed}%\n{valueY}% {categoryX}\nPolicy Benchmark Return: {benchmark}%';
  series.columns.template.tooltipHTML =
  '<div>Assumed Investment <br>Rate of Return: <strong>{assumed}%</strong></div>'+
  '<div class="d-flex">'+
  '<div class="mx-1 pb-1"><div style="font-size:30px;">{valueY}%</div><div>{categoryX}<br>Return</div></div>'+
  '<div class="mx-1 pb-1"><div style="font-size:30px;">{benchmark}%</div><div>Policy Benchmark<br>Return</div></div></div>'+
  '</div>';
  series.tooltip.getFillFromObject=false;
  series.tooltip.background.fill=am4core.color("#3E3E3E");
  series.tooltip.background.filters.clear();
  series.tooltip.fontSize='14px';
  series.tooltip.strokeWidth=0;
  series.tooltip.strokeOpacity=0;
  series.tooltip.hoverable=true;
  series.tooltip.focusable=true;
  series.tooltip.pointerOrientation = "vertical";

  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 0;
  columnTemplate.strokeOpacity = 0;

  var hoverState = series.columns.template.states.create("hover");
  hoverState.properties.fillOpacity = 1;

  title.readerTitle = "A bar chart displaying rates of return over the last ten years";

}); // end am4core.ready()
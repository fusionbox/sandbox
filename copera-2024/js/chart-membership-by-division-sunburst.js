// Create Sankey Chart: Membership by Division

am4core.ready(function() {


  var container = am4core.create("chart_membership_by_division", am4core.Container);
  container.width = am4core.percent(100);
  container.height = am4core.percent(100);
  container.align = "center";
  container.valign = "middle";

  var chart = container.createChild(am4plugins_sunburst.Sunburst);

  chart.data = [
  {
    "name": "All\nMembers",
    "color": am4core.color("#1A2944"),
    tooltipTitle: "All Members",
    tooltipNumber: "716,036",
    "children": [
      {
        "name": "State\nDivision",
        "color": am4core.color("#1F2A59"),
        tooltipTitle: "State Division",
        tooltipNumber: "207,475",
        "children": [
          { "name": "Retirees", "value": 45000, tooltipTitle: "State Retirees and Benefit Recipients", tooltipNumber: "44,999", "color": am4core.color("#314497") },
          { "name": "Actives", "value": 55000, tooltipTitle: "State Actives", tooltipNumber: "55,584", "color": am4core.color("#536EDF") },
          { "name": "Inactives", "value": 107000, tooltipTitle: "State Inactives", tooltipNumber: "106,892", "color": am4core.color("#8598EC") }
        ]
      }, {
        "name": "School\nDivision",
        "color": am4core.color("#DE751C"),
        tooltipTitle: "School Division",
        tooltipNumber: "404,453",
        "children": [
          { "name": "Retirees", "value": 79000, tooltipTitle: "School Retirees and Benefit Recipients", tooltipNumber: "79,228", "color": am4core.color("#E78736") },
          { "name": "Actives", "value": 134000, tooltipTitle: "School Actives", tooltipNumber: "134,080", "color": am4core.color("#F09D57") },
          { "name": "Inactives", "value": 191000, tooltipTitle: "School Inactives", tooltipNumber: "191,145", "color": am4core.color("#F7AF71") }
        ]
      }, {
        "name": "Local Govt.\nDivision",
        "color": am4core.color("#7A9117"),
        tooltipTitle: "Local Govt. Division",
        tooltipNumber: "58,260",
        "children": [
          { "name": "Retirees", "value": 15000, tooltipTitle: "Local Govt. Retirees and Benefit Recipients", tooltipNumber: "9,404", "color": am4core.color("#8EA52B") },
          { "name": "Actives", "value": 25000, tooltipTitle: "Local Govt. Actives", tooltipNumber: "12,982", "color": am4core.color("#A7BD4A") },
          { "name": "Inactives", "value": 50000, tooltipTitle: "Local Govt. Inactives", tooltipNumber: "35,874", "color": am4core.color("#BDD068") }
        ]
      }, {
        "name": "Judicial\nDivision",
        "color": am4core.color("#2C90CC"),
        tooltipTitle: "Judicial Division",
        tooltipNumber: "864",
        "children": [
          { "name": "Retirees", "value": 25000, tooltipTitle: "Judicial Retirees and Benefit Recipients", tooltipNumber: "476", "color": am4core.color("#67A7DD") },
          { "name": "Actives", "value": 20000, tooltipTitle: "Judicial Actives", tooltipNumber: "351", "color": am4core.color("#89C4F6") },
          { "name": "Inactives", "value": 10000, tooltipTitle: "Judicial Inactives", tooltipNumber: "37", "color": am4core.color("#9DD2FF") }
        ]
      }, {
        "name": "DPS\nDivision",
        "color": am4core.color("#D94D26"),
        tooltipTitle: "DPS Division",
        tooltipNumber: "44,984",
        "children": [
          { "name": "Retirees", "value": 20000, tooltipTitle: "DPS Retirees and Benefit Recipients", tooltipNumber: "7,331", "color": am4core.color("#EE7554") },
          { "name": "Actives", "value": 40000, tooltipTitle: "DPS Actives", tooltipNumber: "16,207", "color": am4core.color("#F38A6D") },
          { "name": "Inactives", "value": 40000, tooltipTitle: "DPS Inactives", tooltipNumber: "21,446", "color": am4core.color("#F69D84") }
        ]
      }
    ]
  }
];



  chart.dataFields.name = "name";
  chart.dataFields.value = "value";
  chart.dataFields.children = "children";
	chart.dataFields.color = "color";

	// Configure levels
	var level0 = chart.seriesTemplates.create("0");
	level0.rotation=-90;
	level0.labels.template.text = "{category}";
	level0.labels.template.fill = am4core.color("#ffffff");
  level0.labels.template.fontSize = "12px";
	level0.slices.template.fillOpacity = 1;
	level0.slices.template.stroke = am4core.color("#ffffff");
	level0.slices.template.strokeWidth = 6;
	level0.slices.template.strokeOpacity = 1;

	var level1 = chart.seriesTemplates.create("1");
	level1.slices.template.fillOpacity = 1;
	level1.labels.template.text = "{category}";
	level1.labels.template.fill = am4core.color("#ffffff");
  level1.labels.template.fontSize = "12px";
	level1.slices.template.stroke = am4core.color("#ffffff");
	level1.slices.template.strokeWidth = 6;
	level1.slices.template.strokeOpacity = 1;

	var level2 = chart.seriesTemplates.create("2");
	level2.slices.template.fillOpacity = 1;
	level2.labels.template.text = "{category}";
	level2.labels.template.fill = am4core.color("#ffffff");
  level2.labels.template.fontSize = "12px";
	level2.slices.template.stroke = am4core.color("#ffffff");
	level2.slices.template.strokeWidth = 6;
	level2.slices.template.strokeOpacity = 1;

  level0.slices.template.hoverOnFocus = true;
  level0.slices.focusable=true;

  level1.slices.template.hoverOnFocus = true;
  level1.slices.focusable=true;

  level2.slices.template.hoverOnFocus = true;
  level2.slices.focusable=true;

  level0.slices.template.tooltipText = '{tooltipTitle}';
  level0.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:13px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-size:25px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level1.slices.template.tooltipText = '{tooltipTitle}';
  level1.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:13px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-size:25px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level2.slices.template.tooltipText = '{tooltipTitle}';
  level2.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:13px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-size:25px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  title.readerTitle = "A sunburst chart displaying membership numbers by division";

}); // end am4core.ready()
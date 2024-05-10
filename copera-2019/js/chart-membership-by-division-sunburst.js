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
			"color": am4core.color("#2D4961"),
			tooltipTitle: "All Members",
			tooltipNumber: "621,743",

			/* fake numbers so the pie piece actually shows up, real numbers in tooltip */

			"children": [
				{
				  "name": "State\nDivision",
					"color": am4core.color("#008EB2"),
					tooltipTitle: "State Division",
					tooltipNumber: "184,857",
				  "children": [
				    { "name": "Retirees", "value": 40000, tooltipTitle: "State Retirees and Benefit Recipients", tooltipNumber: "41,181", "color": am4core.color("#12A0C4") },
				    { "name": "Active", "value": 55000, tooltipTitle: "State Actives", tooltipNumber: "55,252", "color": am4core.color("#24B2D6") },
				    { "name": "Inactive", "value": 88000, tooltipTitle: "State Inactives", tooltipNumber: "88,424", "color": am4core.color("#36C4E8") }
				  ]
			  }, {
				  "name": "School\nDivision",
					"color": am4core.color("#D46C2C"),
					tooltipTitle: "School Division",
					tooltipNumber: "347,826",
				  "children": [
				    { "name": "Retirees", "value": 68000, tooltipTitle: "School Retirees and Benefit Recipients", tooltipNumber: "68,362", "color": am4core.color("#E67E3E") },
				    { "name": "Active", "value": 129000, tooltipTitle: "School Actives", tooltipNumber: "128,938", "color": am4core.color("#F89050") },
				    { "name": "Inactive", "value": 150000, tooltipTitle: "School Inactives", tooltipNumber: "150,526", "color": am4core.color("#FFA262") }
				  ]
			  }, {
				  "name": "Local Govt.\nDivision",
					"color": am4core.color("#20A08C"),
					tooltipTitle: "Local Govt. Division",
					tooltipNumber: "49,970",
				  "children": [
				    { "name": "Retirees", "value": 15000, tooltipTitle: "Local Govt. Retirees and Benefit Recipients", tooltipNumber: "7,933", "color": am4core.color("#32B29E") },
				    { "name": "Active", "value": 25000, tooltipTitle: "Local Govt. Actives", tooltipNumber: "13,086", "color": am4core.color("#44C4B0") },
				    { "name": "Inactive", "value": 50000, tooltipTitle: "Local Govt. Inactives", tooltipNumber: "28,951", "color": am4core.color("#56D6C2") }
				  ]
			  }, {
				  "name": "Judicial\nDivision",
					"color": am4core.color("#82629A"),
					tooltipTitle: "Judicial Division",
					tooltipNumber: "758",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "Judicial Retirees and Benefit Recipients", tooltipNumber: "399", "color": am4core.color("#9474AC") },
				    { "name": "Active", "value": 20000, tooltipTitle: "Judicial Actives", tooltipNumber: "339", "color": am4core.color("#A686BE") },
				    { "name": "Inactive", "value": 10000, tooltipTitle: "Judicial Inactives", tooltipNumber: "20", "color": am4core.color("#B898D0") }
				  ]
			  }, {
				  "name": "DPS\nDivision",
					"color": am4core.color("#DB8692"),
					tooltipTitle: "DPS Division",
					tooltipNumber: "38,332",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "DPS Retirees and Benefit Recipients", tooltipNumber: "7,143", "color": am4core.color("#ED98A4") },
				    { "name": "Active", "value": 40000, tooltipTitle: "DPS Actives", tooltipNumber: "15,679", "color": am4core.color("#FFAAB6") },
				    { "name": "Inactive", "value": 40000, tooltipTitle: "DPS Inactives", tooltipNumber: "15,510", "color": am4core.color("#FFBCC8") }
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
  level0.labels.template.fontSize = "13px";
	level0.slices.template.fillOpacity = 1;
	level0.slices.template.stroke = am4core.color("#eef1f2");
	level0.slices.template.strokeWidth = 6;
	level0.slices.template.strokeOpacity = 1;

	var level1 = chart.seriesTemplates.create("1");
	level1.slices.template.fillOpacity = 1;
	level1.labels.template.text = "{category}";
	level1.labels.template.fill = am4core.color("#ffffff");
  level1.labels.template.fontSize = "13px";
	level1.slices.template.stroke = am4core.color("#eef1f2");
	level1.slices.template.strokeWidth = 6;
	level1.slices.template.strokeOpacity = 1;

	var level2 = chart.seriesTemplates.create("2");
	level2.slices.template.fillOpacity = 1;
	level2.labels.template.text = "{category}";
	level2.labels.template.fill = am4core.color("#ffffff");
  level2.labels.template.fontSize = "13px";
	level2.slices.template.stroke = am4core.color("#eef1f2");
	level2.slices.template.strokeWidth = 6;
	level2.slices.template.strokeOpacity = 1;


  level0.slices.template.tooltipText = '{tooltipTitle}';
  level0.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:14px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level1.slices.template.tooltipText = '{tooltipTitle}';
  level1.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:14px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level2.slices.template.tooltipText = '{tooltipTitle}';
  level2.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:14px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-family:lorimer-no-2-condensed;font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

}); // end am4core.ready()
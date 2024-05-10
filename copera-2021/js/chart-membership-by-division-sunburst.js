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
			tooltipNumber: "649,581",

			/* fake numbers so the pie piece actually shows up, real numbers in tooltip */

			"children": [
				{
				  "name": "State\nDivision",
					"color": am4core.color("#0088A4"),
					tooltipTitle: "State Division",
					tooltipNumber: "190,667",
				  "children": [
				    { "name": "Retirees", "value": 40000, tooltipTitle: "State Retirees and Benefit Recipients", tooltipNumber: "43,049", "color": am4core.color("#109DBA") },
				    { "name": "Active", "value": 55000, tooltipTitle: "State Actives", tooltipNumber: "53,477", "color": am4core.color("#1BADCB") },
				    { "name": "Inactive", "value": 88000, tooltipTitle: "State Inactives", tooltipNumber: "94,141", "color": am4core.color("#32BDDA") }
				  ]
			  }, {
				  "name": "School\nDivision",
					"color": am4core.color("#DE751C"),
					tooltipTitle: "School Division",
					tooltipNumber: "365,176",
				  "children": [
				    { "name": "Retirees", "value": 68000, tooltipTitle: "School Retirees and Benefit Recipients", tooltipNumber: "72,852", "color": am4core.color("#E78736") },
				    { "name": "Active", "value": 129000, tooltipTitle: "School Actives", tooltipNumber: "125,007", "color": am4core.color("#F09D57") },
				    { "name": "Inactive", "value": 150000, tooltipTitle: "School Inactives", tooltipNumber: "167,317", "color": am4core.color("#F7AF71") }
				  ]
			  }, {
				  "name": "Local Govt.\nDivision",
					"color": am4core.color("#7A9117"),
					tooltipTitle: "Local Govt. Division",
					tooltipNumber: "52,381",
				  "children": [
				    { "name": "Retirees", "value": 15000, tooltipTitle: "Local Govt. Retirees and Benefit Recipients", tooltipNumber: "8,590", "color": am4core.color("#8EA52B") },
				    { "name": "Active", "value": 25000, tooltipTitle: "Local Govt. Actives", tooltipNumber: "12,745", "color": am4core.color("#A7BD4A") },
				    { "name": "Inactive", "value": 50000, tooltipTitle: "Local Govt. Inactives", tooltipNumber: "31,046", "color": am4core.color("#BDD068") }
				  ]
			  }, {
				  "name": "Judicial\nDivision",
					"color": am4core.color("#82A8ED"),
					tooltipTitle: "Judicial Division",
					tooltipNumber: "801",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "Judicial Retirees and Benefit Recipients", tooltipNumber: "434", "color": am4core.color("#99B8F1") },
				    { "name": "Active", "value": 20000, tooltipTitle: "Judicial Actives", tooltipNumber: "345", "color": am4core.color("#AAC4F4") },
				    { "name": "Inactive", "value": 10000, tooltipTitle: "Judicial Inactives", tooltipNumber: "22", "color": am4core.color("#BACFF5") }
				  ]
			  }, {
				  "name": "DPS\nDivision",
					"color": am4core.color("#D94D26"),
					tooltipTitle: "DPS Division",
					tooltipNumber: "40,556",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "DPS Retirees and Benefit Recipients", tooltipNumber: "7,186", "color": am4core.color("#EE7554") },
				    { "name": "Active", "value": 40000, tooltipTitle: "DPS Actives", tooltipNumber: "15,695", "color": am4core.color("#F38A6D") },
				    { "name": "Inactive", "value": 40000, tooltipTitle: "DPS Inactives", tooltipNumber: "17,675", "color": am4core.color("#F69D84") }
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
  '<div class="py-1 text-center" style="font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level1.slices.template.tooltipText = '{tooltipTitle}';
  level1.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:14px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

  level2.slices.template.tooltipText = '{tooltipTitle}';
  level2.slices.template.tooltipHTML =
	'<div class="text-center" style="font-size:14px;color:#ffffff;"><strong>{tooltipTitle}</strong></div>'+
  '<div class="py-1 text-center" style="font-size:30px;line-height:1;color:#ffffff;">{tooltipNumber}</div>';

}); // end am4core.ready()
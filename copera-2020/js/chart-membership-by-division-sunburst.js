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
			tooltipNumber: "630,801",

			/* fake numbers so the pie piece actually shows up, real numbers in tooltip */

			"children": [
				{
				  "name": "State\nDivision",
					"color": am4core.color("#4AB7DD"),
					tooltipTitle: "State Division",
					tooltipNumber: "187,254",
				  "children": [
				    { "name": "Retirees", "value": 40000, tooltipTitle: "State Retirees and Benefit Recipients", tooltipNumber: "41,868", "color": am4core.color("#5FBFE0") },
				    { "name": "Active", "value": 55000, tooltipTitle: "State Actives", tooltipNumber: "53,643", "color": am4core.color("#6DC8E7") },
				    { "name": "Inactive", "value": 88000, tooltipTitle: "State Inactives", tooltipNumber: "91,743", "color": am4core.color("#84D1EC") }
				  ]
			  }, {
				  "name": "School\nDivision",
					"color": am4core.color("#E7992E"),
					tooltipTitle: "School Division",
					tooltipNumber: "353,139",
				  "children": [
				    { "name": "Retirees", "value": 68000, tooltipTitle: "School Retirees and Benefit Recipients", tooltipNumber: "70,239", "color": am4core.color("#EEA747") },
				    { "name": "Active", "value": 129000, tooltipTitle: "School Actives", tooltipNumber: "119,421", "color": am4core.color("#F0B35F") },
				    { "name": "Inactive", "value": 150000, tooltipTitle: "School Inactives", tooltipNumber: "163,479", "color": am4core.color("#F3BD74") }
				  ]
			  }, {
				  "name": "Local Govt.\nDivision",
					"color": am4core.color("#51B691"),
					tooltipTitle: "Local Govt. Division",
					tooltipNumber: "50,912",
				  "children": [
				    { "name": "Retirees", "value": 15000, tooltipTitle: "Local Govt. Retirees and Benefit Recipients", tooltipNumber: "8,180", "color": am4core.color("#5ACAA1") },
				    { "name": "Active", "value": 25000, tooltipTitle: "Local Govt. Actives", tooltipNumber: "12,757", "color": am4core.color("#68D0AA") },
				    { "name": "Inactive", "value": 50000, tooltipTitle: "Local Govt. Inactives", tooltipNumber: "29,975", "color": am4core.color("#7EDCBA") }
				  ]
			  }, {
				  "name": "Judicial\nDivision",
					"color": am4core.color("#672555"),
					tooltipTitle: "Judicial Division",
					tooltipNumber: "777",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "Judicial Retirees and Benefit Recipients", tooltipNumber: "414", "color": am4core.color("#95417E") },
				    { "name": "Active", "value": 20000, tooltipTitle: "Judicial Actives", tooltipNumber: "344", "color": am4core.color("#AF629A") },
				    { "name": "Inactive", "value": 10000, tooltipTitle: "Judicial Inactives", tooltipNumber: "19", "color": am4core.color("#C591B7") }
				  ]
			  }, {
				  "name": "DPS\nDivision",
					"color": am4core.color("#DD434C"),
					tooltipTitle: "DPS Division",
					tooltipNumber: "38,719",
				  "children": [
				    { "name": "Retirees", "value": 20000, tooltipTitle: "DPS Retirees and Benefit Recipients", tooltipNumber: "7,128", "color": am4core.color("#DA6970") },
				    { "name": "Active", "value": 40000, tooltipTitle: "DPS Actives", tooltipNumber: "14,693", "color": am4core.color("#E3797F") },
				    { "name": "Inactive", "value": 40000, tooltipTitle: "DPS Inactives", tooltipNumber: "16,898", "color": am4core.color("#EC898F") }
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
// Create Sankey Chart: Membership by Division

am4core.ready(function() {

  var container = am4core.create("chart_membership_by_division", am4core.Container);
  container.width = am4core.percent(80);
  container.height = am4core.percent(100);
  container.align = "center";
  container.valign = "middle";

  var chart = container.createChild(am4charts.SankeyDiagram);

  chart.data = [
    {                         "to": "All Members",        "value": 604180, nodeLabel: "604,180", linkLabel: "604,180", nodeColor: "#249F52" },
    { "from": "All Members",  "to": "State",              "value": 181607, nodeLabel: "181,607", linkLabel: "181,607", nodeColor: "#E83F6F" },
    { "from": "All Members",  "to": "School",             "value": 335821, nodeLabel: "335,821", linkLabel: "335,821", nodeColor: "#5B507A" },
    { "from": "All Members",  "to": "Local",              "value": 48652,  nodeLabel: "48,652",  linkLabel: "48,652", nodeColor: "#0088a4" },
    { "from": "All Members",  "to": "Judicial",           "value": 10000,  nodeLabel: "730",     linkLabel: "730", nodeColor: "#e57200" },
    { "from": "All Members",  "to": "DPS",                "value": 37370,  nodeLabel: "37,370",  linkLabel: "37,370", nodeColor: "#4d4d4f" },
    { "from": "State",        "to": "Benefit Recipients", "value": 40446,  nodeLabel: "122,189", linkLabel: "40,446", nodeColor: "#249F52" },
    { "from": "State",        "to": "Active",             "value": 55511,  nodeLabel: "211,584", linkLabel: "55,511", nodeColor: "#249F52"},
    { "from": "State",        "to": "Inactive",           "value": 85650,  nodeLabel: "270,407", linkLabel: "85,650",  nodeColor: "#249F52" },
    { "from": "School",       "to": "Benefit Recipients", "value": 66543,  nodeLabel: "122,189", linkLabel: "66,543",  nodeColor: "#249F52" },
    { "from": "School",       "to": "Active",             "value": 126333, nodeLabel: "211,584", linkLabel: "126,333", nodeColor: "#249F52" },
    { "from": "School",       "to": "Inactive",           "value": 142945, nodeLabel: "270,407", linkLabel: "142,945", nodeColor: "#249F52" },
    { "from": "Local",        "to": "Benefit Recipients", "value": 10000,  nodeLabel: "122,189", linkLabel: "7,662", nodeColor: "#249F52" },
    { "from": "Local",        "to": "Active",             "value": 13260,  nodeLabel: "211,584", linkLabel: "13,260", nodeColor: "#249F52" },
    { "from": "Local",        "to": "Inactive",           "value": 27730,  nodeLabel: "270,407", linkLabel: "27,730", nodeColor: "#249F52" },
    { "from": "Judicial",     "to": "Benefit Recipients", "value": 10000,  nodeLabel: "122,189", linkLabel: "382", nodeColor: "#249F52" },
    { "from": "Judicial",     "to": "Active",             "value": 10000,  nodeLabel: "211,584", linkLabel: "332", nodeColor: "#249F52" },
    { "from": "Judicial",     "to": "Inactive",           "value": 10000,  nodeLabel: "270,407", linkLabel: "16", nodeColor: "#249F52" },
    { "from": "DPS",          "to": "Benefit Recipients", "value": 10000,  nodeLabel: "122,189", linkLabel: "7,156", nodeColor: "#249F52" },
    { "from": "DPS",          "to": "Active",             "value": 16148,  nodeLabel: "211,584", linkLabel: "16,148", nodeColor: "#249F52" },
    { "from": "DPS",          "to": "Inactive",           "value": 14066,  nodeLabel: "270,407", linkLabel: "14,066", nodeColor: "#249F52" }
  ];

  chart.dataFields.fromName = "from";
  chart.dataFields.toName = "to";
  chart.dataFields.value = "value";
  chart.dataFields.color = "nodeColor";

  chart.orientation = "vertical";

  var nodeTemplate = chart.nodes.template;
  nodeTemplate.width = 8;
  nodeTemplate.stroke = am4core.color("#fff");
  nodeTemplate.strokeWidth = 0;
  nodeTemplate.nameLabel.locationY = 1;
  nodeTemplate.nameLabel.label.fontWeight = "bold";
  nodeTemplate.nameLabel.label.fontSize = "13px";
  nodeTemplate.nameLabel.label.fill = am4core.color("#303030");
  nodeTemplate.clickable = false;
  nodeTemplate.hoverable = true;
	nodeTemplate.tooltipText="{nodeLabel}";

  nodeTemplate.nameLabel.adapter.add("locationY", function(location, target) {
    switch (target.parent.level) {
      case 2:
        return -1.5;
      default:
        return 2.5;
    }
  });

	var linkTemplate = chart.links.template;
	linkTemplate.tooltipText="{linkLabel}";

  chart.tooltip.fontFamily='museo-sans,sans-serif';
  chart.tooltip.fontSize='14px';
  chart.tooltip.strokeWidth=0;
  chart.tooltip.strokeOpacity=0;

  var hoverState = chart.links.template.states.create("hover");
  hoverState.properties.fillOpacity = 1;

}); // end am4core.ready()
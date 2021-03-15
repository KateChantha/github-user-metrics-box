import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
// chart type - same type in chartConfigs
import Column2D from "fusioncharts/fusioncharts.charts";
// theme 
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Pie3D = ({ data }) => {
  // STEP 3 
const chartConfigs = {
  type: "pie3d", // chart type(JavaScript alias)
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Languages",
      theme: "fusion",
      decimals:0,
      pieRadius: '35%'
    },
    // Chart Data
    data
  }
};
  return <ReactFC {...chartConfigs} />
}
export default Pie3D;



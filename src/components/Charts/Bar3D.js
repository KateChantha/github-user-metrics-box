import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
// chart type - same type in chartConfigs
import Column2D from "fusioncharts/fusioncharts.charts";
// theme 
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Bar3D = ({ data }) => {
  // STEP 3 
const chartConfigs = {
  type: "bar3d", // chart type(JavaScript alias)
  width: "100%", // Width of the chart, responsive
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Most Forked",
      theme: "ocean",
      yAxisName: "Forks",
      xAxisName: "Repos",
      yAxisNameFontSize: "16px",
      xAxisNameFontSize: "16px",
    },
    // Chart Data
    data: data
  }
};
  return <ReactFC {...chartConfigs} />
}
export default Bar3D;





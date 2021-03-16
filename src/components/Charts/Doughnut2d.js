import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
// chart type - same type in chartConfigs
import Column2D from "fusioncharts/fusioncharts.charts";
// theme 
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Doughnut2D = ({ data }) => {
  // STEP 3 
const chartConfigs = {
  type: "doughnut2d", // chart type(JavaScript alias)
  width: "100%", // Width of the chart, responsive
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Stars Per Languages",
      theme: 'fusion',
      decimals:0,
      doughnutRadius: '45%',
      showPercentValues: 0,
    },
    // Chart Data
    data
  }
};
  return <ReactFC {...chartConfigs} />
}
export default Doughnut2D;



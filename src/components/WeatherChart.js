import React from "react";
import { Chart } from "react-google-charts";



export const options = {
  legend:'none',
  backgroundColor:'none',
  hAxis: {
    title: "Day",
    textStyle: {color:'white'},
    titleTextStyle: {color:'white',bold:true},
    maxValue:7,
    minValue:7
  },
  vAxis: {
    textStyle: {color:'white'},
    title: "Temperatures",
    titleTextStyle: {color:'white',bold:true},
  },
  series: {
    1: { curveType: "function" }
  },
};

export default function WeatherChart({wData}) {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={wData}
      options={options}
    />
  );
};

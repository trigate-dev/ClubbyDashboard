import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";

export const SalesValueChart = ({ data }) => {
  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };
  const checkForData = () => {
    if(data){
      if(data.series[0].length !== 1){ // this because Backend is initialized with a 0 at the start of the day for the call AtPresentVisitorsChange
        return (<Chartist
      data={data}
      options={{ ...options, plugins }}
      type="Line"
      className="ct-series-g ct-double-octave"
    />)
      } else return <h5 style={{textAlign:'center', marginTop: 30, marginBottom: 30}}>Sorry, there is no data for this day...</h5>
    } else
    return <h5 style={{textAlign:'center', marginTop: 30, marginBottom: 30}}>Sorry, there is no data for this day...</h5>
  }
  const plugins = [ChartistTooltip()];
  // data ? console.log(): console.log('data.series')
  return (
    checkForData()
    
  );
};

export const SalesValueChartphone = ({ data }) => {
  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: "end",
      showGrid: true,
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: (value) => `$${value / 1}k`,
    },
  };

  const plugins = [ChartistTooltip()];

  return (
    <Chartist
      data={data}
      options={{ ...options, plugins }}
      type="Line"
      className="ct-series-g ct-major-tenth"
    />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: (value) =>
      `${Math.round((value / series.reduce(sum)) * 100)}%`,
  };

  const plugins = [ChartistTooltip()];

  return (
    <Chartist
      data={{ series }}
      options={{ ...options, plugins }}
      type="Pie"
      className="ct-golden-section"
    />
  );
};

export const BarChart = ({ data }) => {
  const chartClassName = "ct-golden-section"

  const options = {
    height:300, // fix card height
    low: data.series.map(function(row){ return Math.min(...row)}) - data.series.map(function(row){ return Math.min(...row)})/2,
    high: data.series.map(function(row){ return Math.max(...row)}),
    showArea: false,
    
    axisX: {
      labelOffset: {
        x: 100,
        y: 0
      },

      position: "end", //to middle and not twisted
    },
    axisY: {
      showGrid: false,
      onlyInteger:true,
    },
  };
  

  const plugins = [ChartistTooltip()];

  return (

    <Chartist
      data={data}
      options={{ ...options, plugins }}
      type="Bar"
      className={chartClassName}
    />
  );
};

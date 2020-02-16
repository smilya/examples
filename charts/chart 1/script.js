'use strict'

document.addEventListener("DOMContentLoaded", function(){
  let settings = {
    animate: {
      show: false,
      duration: 0.5,
    },
    axisX: {
      show: true,
      color: "#e9edf1",
      width: 2,
      value: "",
      minValue: 0,
      maxValue: 0,
    },
    axisY: {
      show: true,
      color: "#e9edf1",
      width: 2,
      value: "",
      minValue: 0,
      maxValue: 0,
    },
    eventCoord: {
      x: 0,
      y: 0,
    },
    fill: "null",
    gridX: {
      show: true,
      interval: 0,
      fill: 1,
      label: {
        show: true
      },
      stroke:"#e9edf1",
      width:2,
      dasharray:"0 10.04",
      linecap:"round",
    },
    gridY: {
      show: true,
      interval: 0,
      fill: 1,
      label: {
        show: true
      },
      stroke:"#e9edf1",
      width:2,
      dasharray:"0 10.04",
      linecap:"round",
    },
    labels: {
      show: true,
      fontColor: "#c5c6d0",
      fontSize: 12,
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    legends: {
      table: {
        show: true,
        position: {
          x: "center",
          y: 370,
        },
        direction: "horizontal",
      },
      fill: "#c5c6d0",
    },
    line: {
      width: 2,
      style: "curve",
      shadow: true,
      dasharray: null,
    },
    padding: {
      top: 55,
      right: 15,
      bottom: 40,
      left: 20,
    },
    point: {
      show: true,
      radius: 3,
      strokeWidth: 2,
      stroke: "#FFFFF0",
    },
    tooltip: {
      show: true,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      fontColor: "#000000",
    },
    valueOnliteChart: {
      show: false,
    },
  };
  let d = new liteChart("chart", settings);
  
  let xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  d.setLabels(xValues);

  let yValues = [100, 200, 450, 400, 500, 300, 700, 800, 601, 705, 604, 803];
  let yZeros = [1,100,100,100,100,100,100,100,100,100,100,100];
  d.addLegend({"name": "Day", "stroke": "teal", "fill": "#fff", "values": yValues});
  // d.addLegend({"name": "", "stroke": "ivory", "fill": "black", "values": yZeros});

  let chartContainer = document.getElementById("chartContainer");
  d.inject(chartContainer);

  d.draw();
});


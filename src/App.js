import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//reference a div with charts instance
import Chart from "./chart"
//pure highcharts import
import Highcharts from 'highcharts'
//grid from react-bootstrap, not used yet
import { Col } from "react-bootstrap"


class App extends Component {
  render() {
    return (
      //deixei essa parte apenas para ficar mais bonitinho =D
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pure Highcharts with React</h1>
        </header>

      <div style={{width: 400, height: 400, margin: 10, position:'relative', display:'inlineBlock'}}>
        <Chart options={
            {
              chart: {
                  type: 'solidgauge',
                  marginTop: 50
              },
              title: {
                  text: 'Solidgauge dark',
                  style: {
                      fontSize: '24px'
                  }
              },
              credits: {
                enabled:false,
              },
              tooltip: {
                borderWidth: 0,
                backgroundColor: 'none',
                shadow: false,
                style: {
                    fontSize: '16px'
                },
                pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
                positioner: function (labelWidth) {
                    return {
                        x: 200 - labelWidth / 2,
                        y: 180
                    };
                }
              },
               pane: {
               startAngle: 0,
               endAngle: 360,
               background: [{ // Track for Move
                   outerRadius: '112%',
                   innerRadius: '88%',
                   backgroundColor: '#F62366',
                   x: 100,
                   borderWidth: 0
               }, { // Track for Exercise
                   outerRadius: '87%',
                   innerRadius: '63%',
                   backgroundColor: Highcharts.Color('#9DFF02')
                       .setOpacity(0.3)
                       .get(),
                   borderWidth: 0
               }, { // Track for Stand
                   outerRadius: '62%',
                   innerRadius: '38%',
                   backgroundColor: Highcharts.Color('#0CCDD6')
                       .setOpacity(0.3)
                       .get(),
                   borderWidth: 0
               }]
             },
             yAxis: {
                min: 0,
                max: 100,
                lineWidth: 0,
                tickPositions: []
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        enabled: false
                    },
                    linecap: 'round',
                    stickyTracking: false,
                    rounded: true
                }
            },
            series: [{
                name: 'Move',
                data: [{
                    color: '#F62366',
                    radius: '112%',
                    innerRadius: '88%',
                    y: 80
                }]
            }, {
                name: 'Exercise',
                data: [{
                    color: '#9DFF02',
                    radius: '87%',
                    innerRadius: '63%',
                    y: 65
                }]
            }, {
                name: 'Stand',
                data: [{
                    color: '#0CCDD6',
                    radius: '62%',
                    innerRadius: '38%',
                    y: 50
                }]
            }]
          }
        }/>
      </div>
      </div>
    );
  }
}

export default App;

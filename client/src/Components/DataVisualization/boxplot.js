import React, { Component } from "react";
import Chart from "react-apexcharts";

class BoxPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
            chart: {
                type: 'boxPlot',
                height: 350
            },
            title: {
                text: 'Stereotypicality by Type',
                align: 'center',
                style: {
                    fontSize:  '20px',
                    fontWeight:  '800',
                    fontFamily:  'Noto Sans KR',
                    color:  '#263238'
                },
            },
            plotOptions: {
                boxPlot: {
                    colors: {
                        upper: '#00B7A1',
                        lower: '#00B7A1'
                    }
                },

            },
            stroke: {
                colors: [ '#00B7A1' ]
            },
            xaxis: {
                labels:{
                    style: {
                        fontSize:  '16px',
                        fontWeight:  '600',
                        fontFamily:  'Noto Sans KR',
                        color:  '#263238'
                    }                    
                }
            },
            yaxis: {
                min: 3.5, 
                max: 5,
                tickAmount: 3,
                labels:{
                    style: {
                        fontSize:  '16px',
                        fontWeight:  '600',
                        fontFamily:  'Noto Sans KR',
                        color:  '#263238'
                    }                    
                }
            }
        },
        series: [
            {   
                type: "boxPlot",
                data:[
                    {
                        x: "Gender",
                        y: [3.91, 4.02, 4.13, 4.26, 4.29]        
                    },
                    {
                        x: "Profession",
                        y: [3.85, 4.11, 4.23, 4.34, 4.46]     
                    },
                    {
                        x: "Race",
                        y: [3.83, 4.08, 4.19, 4.31, 4.52]     
                    },
                    {
                        x: "Religion",
                        y: [4.02, 4.03, 4.16, 4.23, 4.41]     
                    }
                ]
            }
        ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="boxPlot"
              width="600"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BoxPlot;


// import React, { useState, useEffect } from 'react'
// import ApexChart from 'vue-apexcharts'

// export const BoxPlot = (props) => {

//     const plotData = {
//         series: [
//             {   
//                 type: "boxPlot",
//                 data:[
//                     {
//                         x: "gender",
//                         y: [3.91176, 4.01502, 4.13342, 4.25933, 4.28947]            
//                     },
//                     {
//                         x: "profession",
//                         y: [3.84905, 4.10886, 4.23081, 4.34352, 4.45833]     
//                     },
//                     {
//                         x: "race",
//                         y: [3.82954, 4.08328, 4.19189, 4.30506, 4.51667]     
//                     },
//                     {
//                         x: "religion",
//                         y: [4.02040, 4.03020, 4.15806, 4.22689, 4.41379]     
//                     }
//                 ]
//             }
//         ],
//         options: {
//             chart: {
//               type: 'boxPlot',
//               height: 350
//             },
//             title: {
//               text: 'Basic BoxPlot Chart',
//               align: 'left'
//             },
//             plotOptions: {
//               boxPlot: {
//                 colors: {
//                   upper: '#5C4742',
//                   lower: '#A5978B'
//                 }
//               }
//             }
//         }

//     }

//     return (
//         <div id="chart">
//             <ApexChart 
//                 type="line" 
//                 series={ [
//                     { name: "오늘의 기온",
//                         data: [19, 26, 20, 9],
//                     },
//                     { name: "내일의 기온",
//                         data: [30, 26, 34, 10],
//                     },
//                     ]} 
//                 options={{    
//                     chart : {
//                         height: 500,
//                         width: 500,                    
//                     }, 
//                 }}>
//             </ApexChart>
//         </div>
//     )
// }
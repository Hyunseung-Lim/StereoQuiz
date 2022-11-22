import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Stereotypicality by Target',
                align: 'center',
                style: {
                    fontSize:  '20px',
                    fontWeight:  '800',
                    fontFamily:  'Noto Sans KR',
                    color:  '#263238'
                },
            },
            plotOptions: {
                bar: {
                  borderRadius: 2,
                  horizontal: false,
                }
            },
            stroke: {
                colors: [ '#00B7A1' ]
            },
            xaxis: {
                labels:{
                    style: {
                        fontSize:  '9px',
                        fontWeight:  '600',
                        fontFamily:  'Noto Sans KR',
                        color:  '#263238'
                    }                    
                }
            },
            yaxis: {
                min: 3, 
                max: 5,
                tickAmount: 4,
                decimalsInFloat: 2,
                labels:{
                    style: {
                        fontSize:  '10px',
                        fontWeight:  '600',
                        fontFamily:  'Noto Sans KR',
                        color:  '#263238'
                    }
                }
            },
            dataLabels: {
                enabled: false
            }
        },
        series: [
            {   
                type: "bar",
                data: [
                    {
                        fillColor: "#2AB8FD",
                        x: "Afghanistan",
                        y: 4.516666666666667
                    },
                    {
                        fillColor: "#2FD872",
                        x: "football player",
                        y: 4.458333333333333
                    },
                    {
                        fillColor: "#2FD872",
                        x: "mathematician",
                        y: 4.448275862068965
                    },
                    {
                        fillColor: "#2FD872",
                        x: "butcher",
                        y: 4.427272727272728
                    },
                    {
                        fillColor: "#9F63FE",
                        x: "Muslim",
                        y: 4.413793103448276
                    },
                    {
                        fillColor: "#2FD872",
                        x: "prisoner",
                        y: 4.409090909090909
                    },
                    {
                        fillColor: "#2FD872",
                        x: "researcher",
                        y: 4.407407407407407
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Italy",
                        y: 4.396551724137931
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Arab",
                        y: 4.37962962962963
                    },
                    {
                        fillColor: "#2FD872",
                        x: "politician",
                        y: 4.368421052631579
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Ghanaian",
                        y: 4.357142857142857
                    },
                    {
                        fillColor: "#2FD872",
                        x: "chess player",
                        y: 4.3545454545454545
                    },
                    {
                        fillColor: "#2FD872",
                        x: "mover",
                        y: 4.344827586206897
                    },
                    {
                        fillColor: "#2FD872",
                        x: "guitarist",
                        y: 4.339622641509434
                    },
                    {
                        fillColor: "#2FD872",
                        x: "engineer",
                        y: 4.330188679245283
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "African",
                        y: 4.327272727272727
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Bangladesh",
                        y: 4.326923076923077
                    },
                    {
                        fillColor: "#2FD872",
                        x: "manager",
                        y: 4.322033898305085
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Russian",
                        y: 4.319672131147541
                    },
                    {
                        fillColor: "#2FD872",
                        x: "software developer",
                        y: 4.318965517241379
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Iraq",
                        y: 4.313559322033898
                    },
                    {
                        fillColor: "#2FD872",
                        x: "entrepreneur",
                        y: 4.3125
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Ethiopia",
                        y: 4.309523809523809
                    },
                    {
                        fillColor: "#2FD872",
                        x: "chemist",
                        y: 4.3076923076923075
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Syria",
                        y: 4.303571428571429
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Iranian",
                        y: 4.298076923076923
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Saudi Arabian",
                        y: 4.294642857142857
                    },
                    {
                        fillColor: "#FE7151",
                        x: "male",
                        y: 4.2894736842105265
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Ethiopian",
                        y: 4.28
                    },
                    {
                        fillColor: "#FE7151",
                        x: "mother",
                        y: 4.277777777777778
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Cameroon",
                        y: 4.2745098039215685
                    },
                    {
                        fillColor: "#2FD872",
                        x: "historian",
                        y: 4.269230769230769
                    },
                    {
                        fillColor: "#FE7151",
                        x: "sister",
                        y: 4.260869565217392
                    },
                    {
                        fillColor: "#2FD872",
                        x: "policeman",
                        y: 4.255102040816326
                    },
                    {
                        fillColor: "#FE7151",
                        x: "grandfather",
                        y: 4.254716981132075
                    },
                    {
                        fillColor: "#2FD872",
                        x: "physicist",
                        y: 4.25
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Britain",
                        y: 4.245454545454545
                    },
                    {
                        fillColor: "#2FD872",
                        x: "tailor",
                        y: 4.24
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Norway",
                        y: 4.238636363636363
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Hispanic",
                        y: 4.2368421052631575
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Columbian",
                        y: 4.23
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Yemen",
                        y: 4.220338983050848
                    },
                    {
                        fillColor: "#FE7151",
                        x: "mommy",
                        y: 4.21
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Japanese",
                        y: 4.186274509803922
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Ecuador",
                        y: 4.1826923076923075
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Jordan",
                        y: 4.181818181818182
                    },
                    {
                        fillColor: "#2FD872",
                        x: "nurse",
                        y: 4.18
                    },
                    {
                        fillColor: "#2FD872",
                        x: "commander",
                        y: 4.177966101694915
                    },
                    {
                        fillColor: "#2FD872",
                        x: "psychologist",
                        y: 4.157407407407407
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Eritrean",
                        y: 4.154545454545454
                    },
                    {
                        fillColor: "#2FD872",
                        x: "musician",
                        y: 4.114035087719298
                    },
                    {
                        fillColor: "#2FD872",
                        x: "prosecutor",
                        y: 4.107142857142857
                    },
                    {
                        fillColor: "#FE7151",
                        x: "herself",
                        y: 4.1022727272727275
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Lebanon",
                        y: 4.101851851851852
                    },
                    {
                        fillColor: "#2FD872",
                        x: "plumber",
                        y: 4.1
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Somalia",
                        y: 4.098214285714286
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Sierra Leon",
                        y: 4.092592592592593
                    },
                    {
                        fillColor: "#2FD872",
                        x: "producer",
                        y: 4.092592592592593
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Norweigan",
                        y: 4.084905660377358
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Bengali",
                        y: 4.078431372549019
                    },
                    {
                        fillColor: "#2FD872",
                        x: "performing artist",
                        y: 4.076923076923077
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Persian people",
                        y: 4.07
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Ukrainian",
                        y: 4.043103448275862
                    },
                    {
                        fillColor: "#9F63FE",
                        x: "Bible",
                        y: 4.04
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Spain",
                        y: 4.04
                    },
                    {
                        fillColor: "#FE7151",
                        x: "gentlemen",
                        y: 4.028846153846154
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Eriteria",
                        y: 4.020833333333333
                    },
                    {
                        fillColor: "#9F63FE",
                        x: "Brahmin",
                        y: 4.020408163265306
                    },
                    {
                        fillColor: "#FE7151",
                        x: "himself",
                        y: 4.010416666666667
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Vietnam",
                        y: 4.009090909090909
                    },
                    {
                        fillColor: "#2FD872",
                        x: "delivery man",
                        y: 3.9903846153846154
                    },
                    {
                        fillColor: "#FE7151",
                        x: "schoolgirl",
                        y: 3.988095238095238
                    },
                    {
                        fillColor: "#2FD872",
                        x: "bartender",
                        y: 3.9814814814814814
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Morocco",
                        y: 3.980769230769231
                    },
                    {
                        fillColor: "#2FD872",
                        x: "assistant",
                        y: 3.9339622641509435
                    },
                    {
                        fillColor: "#FE7151",
                        x: "schoolboy",
                        y: 3.911764705882353
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Crimean",
                        y: 3.8846153846153846
                    },
                    {
                        fillColor: "#2FD872",
                        x: "civil servant",
                        y: 3.849056603773585
                    },
                    {
                        fillColor: "#2AB8FD",
                        x: "Cape Verde",
                        y: 3.8295454545454546
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
              type="bar"
              width="1200"
              height="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;
/**
 * Created by lenovo on 2016/10/20.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function SportTypeChart() {

  let option = {
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
      {
        name:'运动类型',
        type:'pie',
        radius : ['50%', '70%'],
        itemStyle : {
          normal : {
            label : {
              show : false
            },
            labelLine : {
              show : false
            }
          },
        },
        data:[
          {value:335, name:'跑步'},
          {value:310, name:'走路'},
          {value:234, name:'骑行'},
        ]
      }
    ]
  };

  return(
    <ReactEcharts style={{height:'150px'}} option={option} />
  )
}


export default SportTypeChart;

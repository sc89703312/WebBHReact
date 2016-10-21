/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function DailyStepChart() {
  let option = {
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '11%',
      left: '1%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'步数',
        type:'bar',
        barWidth: '50%',
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  return(
    <ReactEcharts style={{height:'250px'}} option={option} />
  );
}

export default DailyStepChart;

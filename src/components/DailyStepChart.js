/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function DailyStepChart({steps}) {
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
        data : ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00','16:00','18:00','20:00','22:00'],
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
        data:steps
      }
    ]
  };

  return(
    <ReactEcharts style={{height:'250px'}} option={option} />
  );
}

DailyStepChart.propTypes ={
  steps: React.PropTypes.array
};

export default DailyStepChart;

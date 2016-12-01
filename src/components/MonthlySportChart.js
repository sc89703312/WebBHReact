/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function MonthlySportChart ({data}) {

  var hours = ['12a', '2a',  '4a',  '6a',
     '8a', '10a', '12p',  '2p',  '4p',
    '6p',  '8p',  '10p', ];
  var days = ['周六', '周五', '周四',
    '周三', '周二', '周一', '周末'];


  data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  let option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      height: '50%',
      y: '10%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <ReactEcharts style={{height:'500px'}} option={option} />
  );
}

MonthlySportChart.propTypes = {
  data: React.PropTypes.array
};

export default MonthlySportChart;

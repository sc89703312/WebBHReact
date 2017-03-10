/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function MonthlySportChart ({data}) {

  var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a','10a','11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
  var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];


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

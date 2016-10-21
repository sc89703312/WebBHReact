/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';

function MonthlySportChart () {

  var hours = ['12a', '2a',  '4a',  '6a',
     '8a', '10a', '12p',  '2p',  '4p',
    '6p',  '8p',  '10p', ];
  var days = ['周六', '周五', '周四',
    '周三', '周二', '周一', '周末'];

  var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],
    [1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],
    [2,0,1],[2,1,1],[2,2,0],[2,3,6],[2,4,12],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],
    [3,0,7],[3,1,3],[3,2,4],[3,3,0],[3,4,0],[3,5,6],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],
    [4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,3],[4,5,1],[4,6,0],[4,7,0],[4,8,2],[4,9,2],[4,10,4],[4,11,4],
    [5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,4],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],
    [6,0,1],[6,1,0],[6,2,0],[6,3,1],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0]];

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

export default MonthlySportChart;

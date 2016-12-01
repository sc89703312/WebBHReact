/**
 * Created by lenovo on 2016/10/20.
 */
import React,{PropTypes}from 'react';
import ReactEcharts from 'echarts-for-react';
import { yellow600, red600 } from 'material-ui/styles/colors';

function WeekSportsChart({ data1 },context) {

  const primary1Color = context.muiTheme.palette.primary1Color;

  let option ={
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['实际','建议','好友']
    },
    calculable : true,
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['周一','周二','周三','周四','周五','周六','周日']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'实际',
        type:'line',
        smooth:true,
        itemStyle:
        {
          normal:
            {
              color: primary1Color,
              areaStyle:
                {
                  type: 'default'
                }
            }
        },
        data:data1
      },
      {
        name:'建议',
        type:'line',
        smooth:true,
        itemStyle:
        {
          normal:
          {
            color: yellow600,
            areaStyle:
            {
              type: 'default'
            }
          }
        },
        data:[9000, 9000, 9000, 9000, 9000, 9000, 9000]
      },
      {
        name:'好友',
        type:'line',
        smooth:true,
        itemStyle:
        {
          normal:
          {
            color: red600,
            areaStyle:
            {
              type: 'default'
            }
          }
        },
        data:[6000, 8000, 10000, 6000, 4000, 5000, 6000]
      }
    ]
  };
  return (
    <ReactEcharts
      style={{height:'250px'}}
      option={option}
    />
  );
}

WeekSportsChart.propTypes={
  data1: PropTypes.array.isRequired
};

WeekSportsChart.contextTypes = {muiTheme: React.PropTypes.object};

export default WeekSportsChart;

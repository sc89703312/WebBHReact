/**
 * Created by lenovo on 2016/11/29.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryDailySport(params) {
  // let {userName,date} = params;
  // console.log(params);
  // return request(`${host}/users/${userName}/dailySport?date=${date}`);
  return {
    data:{
      data:{
        steps: 12000,
        distance: 12.2,
        energy: 1203.5,
        speed: 1.2,
        description: '过少'
      }
    }
  }
}

export async function queryDailySteps(params) {
  // let {userName,date} = params;
  // console.log(params);
  // return request(`${host}/users/${userName}/dailySteps?date=${date}`);
  return {
    data:{
      data:{
        steps: [
          12, 0, 0, 0, 1000, 2000, 356,2490,4980,1000,100,9
        ],
        description: '16:00-18:00'
      }
    }
  }
}

/**
 * Created by lenovo on 2016/11/29.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryDailySport(params) {
  let {userName,date} = params;
  console.log(params);
  return request(`${host}/users/${userName}/dailySport?date=${date}`);
}

export async function queryDailySteps(params) {
  let {userName,date} = params;
  console.log(params);
  return request(`${host}/users/${userName}/dailySteps?date=${date}`);
}

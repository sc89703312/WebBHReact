/**
 * Created by lenovo on 2016/10/17.
 */
import request from '../utils/request';
import qs from 'qs';
export async function query(params) {
  return request(`/api/users?${qs.stringify(params)}`);
}

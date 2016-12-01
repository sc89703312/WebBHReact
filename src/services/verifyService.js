/**
 * Created by lenovo on 2016/11/29.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function login(params) {
  let {userName, password} = params;
  let formData = new FormData();
  formData.append("username", userName);
  formData.append("password", password);

  return request(`${host}/auth`,{
    method: `post`,
    body: formData
  });
}

export async function register(params) {
  let {userName, password} = params;
  let formData = new FormData();
  formData.append("username", userName);
  formData.append("password", password);

  return request(`${host}/user`,{
    method: `post`,
    body: formData
  });
}

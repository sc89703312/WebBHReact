/**
 * Created by lenovo on 2016/11/29.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryFollowing(params) {
  return request(`${host}/users/${params}/following`);
}

export async function queryFollower(params) {
  return request(`${host}/users/${params}/followers`);
}

export async function searchUser(params) {
  return request(`${host}/friend/search?keywords=${params}`);
}

export async function followOther(params) {
  let {userName,followingName} = params;
  return request(`${host}/users/${userName}/follow/${followingName}`,{
    method: `POST`
  });
}

export async function unfollowOther(params) {
  let {userName, followingName} = params;
  return request(`${host}/users/${userName}/unfollow/${followingName}`,{
    method: `POST`
  })
}

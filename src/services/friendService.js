/**
 * Created by lenovo on 2016/11/29.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryFollowing(params) {
  // return request(`${host}/users/${params}/following`);
  return {
    data:{
      data:{
        followList:[
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
        ]
      }
    }
  }
}

export async function queryFollower(params) {
  // return request(`${host}/users/${params}/followers`);
  return {
    data:{
      data:{
        followList:[
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
        ]
      }
    }
  }
}

export async function searchUser(params) {
  return {
    data:{
      data:{
        followList:[
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
          {
            userName: '芽衣',
            avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
          },
        ]
      }
    }
  }
}

export async function followOther(params) {
  // let {userName,followingName} = params;
  // return request(`${host}/users/${userName}/follow/${followingName}`,{
  //   method: `POST`
  // });
  return {
    data:{
      state: true
    }
  }
}

export async function unfollowOther(params) {
  let {userName, followingName} = params;
  return request(`${host}/users/${userName}/unfollow/${followingName}`,{
    method: `POST`
  })
}

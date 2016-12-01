/**
 * Created by lenovo on 2016/11/27.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryFollowingPosts(params) {
  let {userName, type} = params;
  return request(`${host}/posts/${userName}/${type}`);
}

export async function querySelfPosts(params) {
  return request(`${host}/users/${params}/posts`);
}

export async function createPost(params) {
  let {userName, title, content, subContent} = params;
  let formData = new FormData();
  formData.append("content", content);
  formData.append("subContent", subContent);
  formData.append("title", title);

  return request(`${host}/users/${userName}/posts`,{
    method: `post`,
    body: formData
  });
}

export async function starPost(params) {
  let {postId, userName} = params;
  return request(`${host}/posts/${postId}/star/${userName}`,{
    method: `post`
  });
}

export async function reportPost(params) {
  let {postId, userName} = params;
  return request(`${host}/posts/${postId}/report/${userName}`,{
    method: `post`
  });
}

export async function getReportPosts(params) {
  return request(`${host}/admin/posts`);
}

export async function getActiveUsers(params) {
  return request(`${host}/admin/users`);
}

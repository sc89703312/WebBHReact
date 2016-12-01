/**
 * Created by lenovo on 2016/11/26.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryCompetenceList(params) {
  let {type, userName} = params;
  return request(`${host}/competences/${type}?userName=${userName}`);
}

export async function queryParticipatedList(params) {
  let {userName, type} = params;
  return request(`${host}/competences/usr/${userName}/${type}`);
}

export async function queryCompetenceMembers(params) {
  return request(`${host}/competences/${params}/members`);
}

export async function joinCompetence(params) {
  let {userName,competenceId} = params;
  return request(`${host}/users/${userName}/competences/${competenceId}`,{
    method: `post`
  });
}

export async function createCompetence(params) {

  let {userName, title, content, bgUrl,
    type, bounces, startTime, endTime, tags} = params;

  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("bgUrl", bgUrl);
  formData.append("type", type);
  formData.append("bounces", bounces);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);
  formData.append("tags", tags);

  return request(`${host}/users/${userName}/competences`,{
    method: `post`,
    body: formData
  });
}

export async function modifyCompetence(params) {
  let {userName, competenceId, title, content, bgUrl,
    type, bounces, startTime, endTime} = params;

  let formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("bgUrl", bgUrl);
  formData.append("type", type);
  formData.append("bounces", bounces);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);

  return request(`${host}/users/${userName}/competences/${competenceId}`,{
    method: `put`,
    body: formData
  });
}

export async function exitCompetence(params) {
  let {userName, competenceId} = params;
  return request(`${host}/users/${userName}/competences/${competenceId}/exit`,{
    method: `post`
  });
}

export async function deleteCompetence(params) {
  let {userName, competenceId} = params;
  return request(`${host}/users/${userName}/competences/${competenceId}/delete`,{
    method: `post`
  });
}

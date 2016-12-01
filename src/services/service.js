/**
 * Created by lenovo on 2016/10/17.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryUserInfo() {

  return {
      basicInfo:{
        name: `一梦换须臾`,
        birthday: `1996-07-11`,
        experience: `硕士`,
        school: `南京哪所大学`,
        content: `测试看看`
      },

      healthInfo:{

      },

      totalSport:{

      },

      weeklyStep:{

      },

      weeklyStrength:{

      }

  };
}

export async function queryUserBasicInfo(payload) {
  return request(`${host}/users/${payload}/info`);
}

export async function queryUserHealthInfo(payload) {
  return request(`${host}/users/${payload}/healthInfo`)
}


export async function queryUserTotalSport(payload) {
  return request(`${host}/users/${payload}/sportTotal`);
}

export async function queryUserWeeklySteps(payload) {
  return request(`${host}/users/${payload}/weekSteps`);
}


export async function queryUserWeeklyIntensity(payload) {
  return request(`${host}/users/${payload}/weekIntensity`);
}


export async function queryUserSignInDays(payload) {
  return request(`${host}/users/${payload}/signIn`);
}


export async function modifyUserInfo(params){
  let {userName, birthDate, degree, phone,
    content, job, address, age, sex, hobbies, height, weight} = params;
  let formData = new FormData();
  formData.append("birthDate", birthDate);
  formData.append("degree", degree);
  formData.append("phone", phone);
  formData.append("content", content);
  formData.append("job", job);
  formData.append("address", address);
  formData.append("age", age);
  formData.append("sex", sex);
  formData.append("hobbies", hobbies);
  formData.append("height", height);
  formData.append("weight", weight);

  return request(`${host}/users/${userName}/info/modify`,{
    method: `post`,
    body: formData
  });
}

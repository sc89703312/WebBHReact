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
  let data = {
    data:{
      job: '程序员',
      usage: '1.5',
      address: '南京市汉口路22号',
      sex: '男',
      height: '1.81',
      weight: '70',
      userName: '芽衣',
      birthDate:'1996-07-11',
      degree: '本科生',
      phone: '110',
      content: '爱运动爱生活',
      age: '21',
      hobbies: '游泳 慢跑',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3'
    }
  };
  return {
    data: data
  };
}

export async function queryUserHealthInfo(payload) {
  // return request(`${host}/users/${payload}/healthInfo`)
  let data = {
    data: {
      BMI: 22.5,
      goal:{
        complete: 5,
        total: 7
      },
      kinds:[
        {
          name: "跑步",
          value: 55
        },
        {
          name: "骑行",
          value: 25
        },
        {
          name: "游泳",
          value: 20
        }
      ]
    }
  };

  return {
    data: data
  }
}


export async function queryUserTotalSport(payload) {
  // return request(`${host}/users/${payload}/sportTotal`);
  return {
    data:{
      data:{
        steps: 123908,
        distance: 22.3,
        calorie: 11983.8
      }
    }
  }
}

export async function queryUserWeeklySteps(payload) {
  // return request(`${host}/users/${payload}/weekSteps`);
  return {
    data:{
      data:{
        steps: [
          11000,
          9000,
          13000,
          7000,
          10000,
          10500,
          10000
        ]
      }
    }
  }
}


export async function queryUserWeeklyIntensity(payload) {
  // return request(`${host}/users/${payload}/weekIntensity`);
  return {
    data:{
      data:{
        weekIntensity:[[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]]

}
    }
  }
}


export async function queryUserSignInDays(payload) {
  // return request(`${host}/users/${payload}/signIn`);
  return {
    data:{
      data:{
        signIn: 5
      }
    }
  }

}


export async function modifyUserInfo(params){
  // let {userName, birthDate, degree, phone,
  //   content, job, address, age, sex, hobbies, height, weight} = params;
  // let formData = new FormData();
  // formData.append("birthDate", birthDate);
  // formData.append("degree", degree);
  // formData.append("phone", phone);
  // formData.append("content", content);
  // formData.append("job", job);
  // formData.append("address", address);
  // formData.append("age", age);
  // formData.append("sex", sex);
  // formData.append("hobbies", hobbies);
  // formData.append("height", height);
  // formData.append("weight", weight);
  //
  // return request(`${host}/users/${userName}/info/modify`,{
  //   method: `post`,
  //   body: formData
  // });

  return {
    data:{
      state: true
    }
  }
}

/**
 * Created by lenovo on 2016/11/26.
 */
import request from '../utils/request';
import host from './hostConfig';

export async function queryCompetenceList(params) {
  // let {type, userName} = params;
  // return request(`${host}/competences/${type}?userName=${userName}`);
  return {
    data:{
      data:{
        competenceList:[
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          },
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          },
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          }
        ]
      }
    }
  }
}

export async function queryParticipatedList(params) {
  // let {userName, type} = params;
  // return request(`${host}/competences/usr/${userName}/${type}`);
  return {
    data:{
      data:{
        competenceList:[
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          },
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          },
          {
            createAt: '2016/12/30 19:00',
            tags: '一起来快活 程序员没有抬头日 惠惠真可爱',
            creator:{
              avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
              userName: '逢坂大河',
            },
            title: '不要走，决战到天亮',
            subTitle: '竞走大赛',
            bgUrl:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489131686&di=6967cb0ae110d4ca206663b57778ddc1&src=http://h7.86.cc/walls/20160127/1440x900_be139566efb5698.jpg',
            type: '多人竞赛',
            bounces: '5000',
            startTime: '2017/03/01 12:00',
            endTime: '2017/03/01 14:00'
          }
        ]
      }
    }
  }
}

export async function queryCompetenceMembers(params) {
  return {
    data:{
      data:{
        members: [
          {
            avatarUrl:'https://avatars3.githubusercontent.com/u/11706061?v=3',
            userAvatarUrl: '逢坂大河',
          }
        ]
      }
    }
  }
}

export async function joinCompetence(params) {
  return {
    data:{
      state: true
    }
  }
}

export async function createCompetence(params) {
  return {
    data:{
      state: true
    }
  }
}

export async function modifyCompetence(params) {
  // let {userName, competenceId, title, content, bgUrl,
  //   type, bounces, startTime, endTime} = params;
  //
  // let formData = new FormData();
  // formData.append("title", title);
  // formData.append("content", content);
  // formData.append("bgUrl", bgUrl);
  // formData.append("type", type);
  // formData.append("bounces", bounces);
  // formData.append("startTime", startTime);
  // formData.append("endTime", endTime);
  //
  // return request(`${host}/users/${userName}/competences/${competenceId}`,{
  //   method: `put`,
  //   body: formData
  // });
  return {
    data:{
      state: true
    }

  }
}

export async function exitCompetence(params) {
  return {
    data:{
      state: true
    }
  }
}

export async function deleteCompetence(params) {
  return {
    data: {
      state: true
    }
  }
}

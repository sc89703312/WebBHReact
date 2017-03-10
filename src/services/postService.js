/**
 * Created by lenovo on 2016/11/27.
 */
import request from '../utils/request';
import host from './hostConfig';


export async function queryFollowingPosts(params) {
  // let {userName, type} = params;
  // return request(`${host}/posts/${userName}/${type}`);
  return {
    data:{
      data:{
        postList:[
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
        ]

      }
    }
  }
}

export async function querySelfPosts(params) {
  return {
    data:{
      data:{
        postList:[
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          },
        ]

      }
    }
  }
}

export async function createPost(params) {
  // let {userName, title, content, subContent} = params;
  // let formData = new FormData();
  // formData.append("content", content);
  // formData.append("subContent", subContent);
  // formData.append("title", title);
  //
  // return request(`${host}/users/${userName}/posts`,{
  //   method: `post`,
  //   body: formData
  // });
  return {
    data:{
      data:{

      },
      state: true
    }
  }
}

export async function starPost(params) {
  // let {postId, userName} = params;
  // return request(`${host}/posts/${postId}/star/${userName}`,{
  //   method: `post`
  // });
  return {
    data:{
      data:{

      },
      state: true
    }
  }
}

export async function reportPost(params) {
  // let {postId, userName} = params;
  // return request(`${host}/posts/${postId}/report/${userName}`,{
  //   method: `post`
  // });
  return {
    data:{
      data:{

      },
      state: true
    }
  }
}

export async function getReportPosts(params) {
  // return request(`${host}/admin/posts`);
  return {
    data:{
      data:{
        postList:[
          {
            creator:{
              userName: '逢坂大河',
              createAt: '2016/12/12 14:00',
              avatarUrl: 'https://avatars3.githubusercontent.com/u/11706061?v=3',
            },
            title: '发表一条新动态',
            subContent: '测试新动态内容',
            content:'我家惠惠最萌惹',
            star: 12,
            report: 2,
          }
        ]

      }
    }
  }
}

export async function getActiveUsers(params) {
  return request(`${host}/admin/users`);
}

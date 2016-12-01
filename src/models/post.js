/**
 * Created by lenovo on 2016/10/29.
 */
import pathToRegexp from 'path-to-regexp';
import {querySelfPosts,queryFollowingPosts,
        starPost, reportPost, createPost,
        getActiveUsers, getReportPosts} from '../services/postService'
import cookie from 'react-cookie';

export default {
  namespace: `post`,
  state:{
    postList: [],
    type: [],
    active_users: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {

        if(location.pathname === '/admin'){
          dispatch({
            type: 'queryReportList',
            payload: {}
          });

          dispatch({
            type: `queryActiveUsers`,
            payload: {}
          })
        }

        const match = pathToRegexp(`/post/:type`).exec(location.pathname);
        if (match) {
          dispatch({
            type: 'queryList',
            payload: {
              type: match[1],
            }
          });

          dispatch({
            type: `changeCurType`,
            payload:{
              type: match[1]
            }
          })
        }
      });
    },
  },

  effects:{
    *queryList({payload},{call, put}){

      let type = payload.type;
      let data = "";
      if( type == 'self' ){
        data = yield call(querySelfPosts, cookie.load("userName"));
      }else{
        data = yield call(queryFollowingPosts, {
          userName: cookie.load("userName"),
          type: type
        });
      }

      console.log(data);
      yield put({
        type: `querySuccess`,
        payload: {
          data: data.data.data.postList
        }
      });
    },
    *starPost({payload},{call,put,select}){
      let postId = payload.postId;
      const data = yield call(starPost,{
        postId: postId,
        userName: cookie.load("userName")
      });

      const selfState = yield select(state=>state.post);
      yield put({
        type: `queryList`,
        payload:{
          type: selfState.type
        }
      })

    },
    *reportPost({payload},{call,put,select}){
      let postId = payload.postId;
      const data = yield call(reportPost,{
        postId: postId,
        userName: cookie.load("userName")
      });

      const selfState = yield select(state=>state.post);
      yield put({
        type: `queryList`,
        payload:{
          type: selfState.type
        }
      })
    },
    *createPost({payload},{call,put,select}){
      const data = yield call(createPost, {
        userName: cookie.load("userName"),
        title: payload.title,
        content: payload.content,
        subContent: payload.subContent
      });

      yield put({
        type: `changeCurType`,
        payload:{
          type: `self`
        }
      });

      yield put({
        type: `queryList`,
        payload:{
          type: `self`
        }
      });

    },
    *queryReportList({payload},{call,put,select}){
      const data = yield call(getReportPosts);
      if(data){
        yield put({
          type: `querySuccess`,
          payload:{
            data: data.data.postList
          }
        })
      }
    },

    *queryActiveUsers({payload},{call,put,select}){
      const data = yield call(getActiveUsers);
      if(data){
        yield put({
          type: `queryActiveUsersSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    }
  },
  reducers:{
    querySuccess(state,action){

      return {...state,
        postList: action.payload.data
      }
    },
    queryActiveUsersSuccess(state, action){
      return {
        ...state,
        active_users: action.payload.data
      }
    },
    changeCurType(state, action){
      return {
        ...state,
        type: action.payload.type
      }
    }
  }
}

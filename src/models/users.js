import {queryFollowing, queryFollower,searchUser, followOther, unfollowOther} from '../services/friendService';
import cookie from 'react-cookie';

export default {
  namespace: `users`,
  state:{
    following: [],
    follower: [],
    result: [],
    open_state: false
  },

  subscriptions:{
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/friend'){
          dispatch({
            type: `queryUserFollowing`,
            payload:{}
          });
          dispatch({
            type: `queryUserFollower`,
            payload:{}
          })
        }
      });
    },
  },

  effects:{
    *queryUserFollowing({payload},{put, call, select}){
      const data = yield call(queryFollowing, cookie.load("userName"));
      console.log(data);
      if(data){
        yield put({
          type: `queryFollowingSuccess`,
          payload: {
            data: data.data.data
          }
        })
      }
    },
    *queryUserFollower({payload},{put, call, select}){
      const data = yield call(queryFollower, cookie.load("userName"));
      console.log(data);
      if(data){
        yield put({
          type: `queryFollowerSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },
    *searchUser({payload}, {call, put, select}){
      let keywords = payload.keywords;
      let data = yield call(searchUser, keywords);
      console.log(data);
      if(data){
        yield put({
          type: `querySearchSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },
    *followOther({payload}, {call,put,select}){
      let followingName = payload.followingName;
      let userName = cookie.load("userName");
      const data = yield call(followOther,{
        userName: userName,
        followingName: followingName
      });
      console.log(data);
      if(data){
        let state = data.data.state;
        if(state){
          console.log("add successfully");
          yield put({
            type: `queryUserFollowing`,
            payload:{}
          })
        }else{
          console.log("have added");
        }
      }
    }
  },

  reducers:{
    queryFollowingSuccess(state,action){
      return {
        ...state,
        following: action.payload.data.followList
      }
    },
    queryFollowerSuccess(state, action){
      return {
        ...state,
        follower: action.payload.data.followList
      }
    },
    querySearchSuccess(state, action){
      return {
        ...state,
        result: action.payload.data.followList
      }
    },
    open_modal(state,action){
      return {...state, open_state: true}
    },
    close_modal(state, action){
      return {...state, open_state: false}
    },

  }
}

/**
 * Created by lenovo on 2016/10/29.
 */
import React from 'react';
import pathToRegexp from 'path-to-regexp';
import {queryUserBasicInfo, queryUserHealthInfo,
        queryUserTotalSport, queryUserWeeklySteps,
        queryUserWeeklyIntensity, queryUserSignInDays,modifyUserInfo} from '../services/service';
import cookie from 'react-cookie';

export default {
  namespace: `userinfo`,
  state: {
    avatarUrl: "https://avatars.githubusercontent.com/u/11706061?v=3",
    type: '建筑师',
    signIn: 0,
    usage: 1.9,
    position: `南京`,
    basicInfo:{},
    healthInfo:{
      BMI: 25,
      goal: {
        complete: 0,
        total: 7
      },
      kinds: [
        {
          percentage: 100,
          type: ``
        }
      ]
    },
    totalSport:{},
    weeklyStep:[],
    weeklyStrength:[],
    modify_flag: false,
    login_flag: true,
    success_flag:false,
    signin_flag:false,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          window.location.replace(window.location.origin+'/#/info/芽衣')
        }
        cookie.save('userName','芽衣', { path:'/' });
        const match = pathToRegexp(`/info/:userName`).exec(location.pathname);
        if(match){
          dispatch({
            type: `queryUserInfo`,
            payload:{
              userName: match[1]
            }
          });

          dispatch({
            type: `queryUserHealthInfo`,
            payload:{
              userName: match[1]
            }
          });

          dispatch({
            type: `queryUserSportTotal`,
            payload:{
              userName: match[1]
            }
          });

          dispatch({
            type: `queryUserWeeklySteps`,
            payload:{
              userName: match[1]
            }
          });

          dispatch({
            type: `queryUserWeeklyIntensity`,
            payload:{
              userName: match[1]
            }
          })

        }
      });
    },
  },

  effects: {
    *queryUserInfo({ payload }, { call, put }) {

      const data = yield call(queryUserBasicInfo, payload.userName);
      if(data){
        yield put({
          type: `querySuccess`,
          payload: {
            data: data.data.data
          }
        })
      }
    },

    *queryUserHealthInfo({ payload }, { call, put }){

      const data = yield call(queryUserHealthInfo, payload.userName);

      if(data){
        yield put({
          type: `queryHealthInfoSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },

    *queryUserSportTotal({payload}, {call,put}){
      const data = yield call(queryUserTotalSport, payload.userName);
      console.log(data);
      if(data){
        yield put({
          type: `queryTotalSportSuccess`,
          payload: {
            data: data.data.data
          }
        });
      }
    },

    *queryUserWeeklySteps({payload}, {call, put}){
      const data = yield call(queryUserWeeklySteps, payload.userName);
      console.log(data);
      if(data){
        yield put({
          type: `queryWeeklyStepsSuccess`,
          payload: {
            data: data.data.data
          }
        })
      }
    },

    *queryUserWeeklyIntensity({payload}, {call, put}){
      const data = yield call(queryUserWeeklyIntensity, payload.userName);
      if(data){
        yield put({
          type: `queryWeeklyIntensitySuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },

    *queryUserSignInDays({payload}, {call, put}){
      const data = yield call(queryUserSignInDays, payload.userName);
      if(data){
        yield put({
          type: `queryUserSignInSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },

    *basicInfoModify({ payload }, { call, put }){
      const data = yield call(modifyUserInfo,{
        userName: cookie.load("userName"),
        job: payload.job,
        height: payload.height,
        weight: payload.weight,
        birthDate: payload.birthDate,
        sex: payload.sex,
        address: payload.address,
        content: payload.content
      });

      console.log(data);

      yield put({
        type: `queryUserInfo`,
        payload:{
          userName: cookie.load("userName")
        }
      });

      yield put({
        type: `close_modal`,
        payload:{
        }
      });

      yield put({
        type: 'enable_success'
      })
    },
  },

  reducers: {

    querySuccess(state, action){
      const data = action.payload.data;
      console.log(data);
      return {...state,
        basicInfo: data
      }
    },
    queryHealthInfoSuccess(state, action){

      let dataW = action.payload.data;
      console.log(dataW);
      return {
        ...state,
        healthInfo: dataW
      }
    },
    queryTotalSportSuccess(state, action){
      return {
        ...state,
        totalSport: action.payload.data
      }
    },
    queryWeeklyStepsSuccess(state, action){

      console.log(action.payload.data);

      return {
        ...state,
        weeklyStep: action.payload.data.steps
      }
    },
    queryWeeklyIntensitySuccess(state, action){
      console.log(action.payload.data.weekIntensity);
      return {
        ...state,
        weeklyStrength: action.payload.data.weekIntensity
      }
    },
    queryUserSignInSuccess(state, action){
      return {
        ...state,
        signIn: action.payload.data.signIn
      }
    },

    open_modal(state, action){
      return {
        ...state,
        modify_flag: true
      }
    },
    close_modal(state, action){
      return {
        ...state,
        modify_flag: false
      }
    },

    enable_success(state, action){
      return{
        ...state,
        success_flag: true
      }
    },

    unable_success(state, action){
      return {
        ...state,
        success_flag: false
      }
    },

    login_in(state, action){
    },

    enable_sign(state, action){
      return {
        ...state,
        signin_flag: true
      }
    },

    unable_sign(state, action){
      return {
        ...state,
        signin_flag: false
      }
    }
  },
}

/**
 * Created by lenovo on 2016/10/29.
 */
import pathToRegexp from 'path-to-regexp';
import {queryCompetenceList, queryParticipatedList,
        queryCompetenceMembers,joinCompetence,createCompetence,
        modifyCompetence, exitCompetence, deleteCompetence} from '../services/competenceService';
import cookie from 'react-cookie';

export default {
  namespace: `competence`,
  state: {

    snack_flag: false,
    content: '',

    competenceList: [
      {
        creator:{
          avatarUrl: '',
          userName: ''
        }
      }
    ],
    members:[
      {
        userName: ``,
        avatarUrl: ``
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const match = pathToRegexp(`/competition/:type`).exec(location.pathname);
        if (match) {

          if(match[1] == 'create' || match[1] == 'joined'){
            dispatch({
              type: 'queryParticipatedList',
              payload: {
                type: match[1],
              }
            });
          }else{
            dispatch({
              type: 'queryList',
              payload: {
                type: match[1],
              }
            });
          }


        }
      });
    },
  },

  effects:{
    *queryList({payload},{call, put}){
      const type = payload.type;
      const data = yield call(queryCompetenceList, {
        type: type,
        userName: cookie.load("userName")
      });
      if(data){
      yield put({
        type: `queryListSuccess`,
        payload: {
          data: data.data.data
        }
      });
      }
    },
    *queryParticipatedList({payload},{call,put}){
      const type = payload.type;
      const data = yield call(queryParticipatedList,{
        userName: cookie.load("userName"),
        type: type
      });

      if(data){
        yield put({
          type: `queryListSuccess`,
          payload: {
            data: data.data.data
          }
        })
      }
    },
    *queryMembers({payload},{call, put}){
      const data = yield call(queryCompetenceMembers, payload.id);
      if(data){
        yield put({
          type: `queryMemberSuccess`,
          payload:{
            data: data.data.data
          }
        })
      }
    },
    *createCompetence({payload},{call,put}){
      const data = yield call(createCompetence, {
        title: payload.title,
        content: payload.content,
        bgUrl: `http://ww2.sinaimg.cn/bmiddle/75b1a75fjw1edft50ugczj21420poq9p.jpg`,
        type: payload.type,
        bounces: payload.bounces,
        startTime: payload.startTime,
        endTime: payload.endTime,
        tags: payload.tags,
        userName: cookie.load("userName")
      });

      console.log(data);
      window.location.replace(window.location.origin+"/#/competition/create");
    },
    *joinCompetence({payload},{call,put,select}){
      const data = yield call(joinCompetence, {
        userName: cookie.load("userName"),
        competenceId: payload.competenceId
      });
      console.log(data);
      yield put({
        type: `queryList`,
        payload:{
          type: `all`
        }
      });
    },
    *modifyCompetence({payload},{call,put,select}){

    },
    *exitCompetence({payload},{call,put, select}){
      const data = yield call(exitCompetence,{
        userName: cookie.load("userName"),
        competenceId: payload.competenceId
      });

      console.log(data);

      yield put({
        type: `queryParticipatedList`,
        payload:{
          type: `joined`
        }
      })

    },
    *deleteCom({payload},{call,put,select}){
      const data = yield call(deleteCompetence,{
        userName: cookie.load("userName"),
        competenceId: payload.competenceId
      });
      console.log(data);
    }
  },
  reducers:{
    queryListSuccess(state, action){
      console.log(action.payload.data.competenceList);

      let result = [];
        action.payload.data.competenceList.map(
          (object) => {
            if(object!=null){
              result = result.concat(object);
            }
          }
      );
      console.log(result);

      return {...state,
        competenceList: result
      }
    },
    queryMemberSuccess(state, action){
      let members = action.payload.data.members;
      console.log(members);
      return {...state,
        members: members
      }
    },

    enable_snack(state, action){
      return {
        ...state,
        snack_flag: true,
        content: action.payload.content
      }
    },

    unable_snack(state, action){
      return {
        ...state,
        snack_flag: false
      }
    },

  }
}

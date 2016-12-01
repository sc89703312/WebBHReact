/**
 * Created by lenovo on 2016/11/29.
 */
import cookie from 'react-cookie';
import {queryDailySport,queryDailySteps} from '../services/sportService';

export default {
  namespace: `daily`,
  state:{
    statInfo:{
      steps: 2311,
      distances: 4.5,
      calorie: 3912,
      speed: 0.4,
      description: ``
    },

    steps: [
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
      1000,
    ],
    description:``
  },

  subscriptions:{
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/dailySync'){
          dispatch({
            type: `queryDailyStat`,
            payload:{
              date: `2016-11-29`
            }
          });
          dispatch({
            type: `queryDailySteps`,
            payload:{
              date: `2016-11-29`
            }
          })
        }
      });
    },
  },

  effects:{

    *queryDailyStat({payload},{call,put,select}){

      const data = yield call(queryDailySport, {
        userName: cookie.load("userName"),
        date: payload.date
      });

      console.log(data);

      yield put({
        type:`queryStatSuccess`,
        payload:{
          data: data.data.data
        }
      })
    },
    *queryDailySteps({payload},{call,put,select}){

      const data = yield call(queryDailySteps, {
        userName: cookie.load("userName"),
        date: payload.date
      });

      console.log(data);

      yield put({
        type: `queryStepsSuccess`,
        payload:{
          data: data.data.data
        }
      })
    }

  },

  reducers:{
    queryStatSuccess(state, action){
      return {
        ...state,
        statInfo: action.payload.data
      }
    },
    queryStepsSuccess(state, action){
      return {
        ...state,
        steps:  action.payload.data.steps,
        description: action.payload.data.description
      }
    }
  }



}

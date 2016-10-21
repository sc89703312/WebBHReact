/**
 * Created by lenovo on 2016/10/16.
 */

import { Router, Route } from 'dva/router';
import React from 'react';
import key from 'keymaster';

export default {
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  },

  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1};
    },
  },
  effects: {
    *add(action, { call, put }) {
      console.log("add");
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
    },
  },
}
;
function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

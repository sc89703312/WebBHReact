/**
 * Created by lenovo on 2016/10/19.
 */
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import Main from '../components/MainLayout/MainLayout';

const MainContainer = ({ children }) => {
  return(
    <Main>
    </Main>
  );
};


export default connect()(MainContainer);

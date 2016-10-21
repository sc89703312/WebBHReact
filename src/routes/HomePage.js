/**
 * Created by lenovo on 2016/10/17.
 */
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import UserInfo from "../components/UserInfo/UserInfo";

const HomePage = () => {
  return (
    <UserInfo/>
  );
};
export default connect()(HomePage);

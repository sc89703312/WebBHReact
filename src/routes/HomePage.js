/**
 * Created by lenovo on 2016/10/17.
 */
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React, {PropTypes} from 'react';
import UserInfo from "../components/UserInfo/UserInfo";

const HomePage = ({userinfo}) => {
  return (
    <UserInfo userinfo={userinfo}/>
  );
};

HomePage.propTypes = {
  userinfo: PropTypes.object
};

function mapStateToProps({userinfo}) {
  return {userinfo}
}

export default connect(mapStateToProps)(HomePage);

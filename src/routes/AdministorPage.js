/**
 * Created by lenovo on 2016/11/30.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Homepage.less';
import PostContentList from './PostContentList';
import UserList from '../components/UserList';
import Paper from 'material-ui/Paper';

function AdministorPage({post}) {

  let active_users = post.active_users;

  return (
    <div className="row">
      <div className={styles["hide-only-small"]+" col-md-offset-1 col-md-4"}>
        <Paper className={styles["list-container"]}>
          <UserList userList={active_users}/>
        </Paper>
      </div>
      <div className="col-md-6" style={{marginTop: 16}}>
        <PostContentList/>
      </div>
    </div>
  );
}

function mapStateToProps({post}) {
  return {post}
}

export default connect(mapStateToProps)(AdministorPage);

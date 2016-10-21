/**
 * Created by lenovo on 2016/10/21.
 */
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import PostMenu from '../components/PostMenu';
import Post from '../components/Post';
import styles from './PostPage.less';

const PostPage = ({children}) =>{
  return (
    <div className="row">
      <div className={styles["hide-only-small"]+" col-md-2 col-md-offset-2 col-lg-offset-3"}>
        <PostMenu />
      </div>
      <div className={styles["show-only-medium"]+" col-xs-1"}></div>
      <div className="col-xs-10 col-md-6 col-lg-5" style={{marginTop: 16}}>

          <Post/>
          {children}
      </div>
    </div>
  );
};

export default connect()(PostPage);

/**
 * Created by lenovo on 2016/10/21.
 */
import PostContent from '../components/PostContent';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';

function PostContentList () {
  return(
    <div>
      <PostContent/>
      <PostContent/>
    </div>
  );
}

export default connect()(PostContentList);

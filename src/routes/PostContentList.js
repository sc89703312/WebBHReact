/**
 * Created by lenovo on 2016/10/21.
 */
import PostContent from '../components/PostContent';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';

function PostContentList ({post}) {

  const {postList} = post;

  return(
    <div>
      {getContentList(postList)}
    </div>
  );
}

function getContentList(contentList) {
  console.log(contentList);
  let index = 0;
  return(
    contentList.map((object)=>{
      return (
        <PostContent key={++index} postInfo={object}/>
      );
    })
  );
}



function mapStateToProps({post}) {
  return {post}
}

export default connect(mapStateToProps)(PostContentList);

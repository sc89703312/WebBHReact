/**
 * Created by lenovo on 2016/10/20.
 */
import CompetenceContent from '../components/CompetenceContent';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';

function CompetenceContentList () {
  return(
      <div>
        <CompetenceContent/>
        <CompetenceContent/>
      </div>
  );
}

export default connect()(CompetenceContentList);

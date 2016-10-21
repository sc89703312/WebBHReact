/**
 * Created by lenovo on 2016/10/21.
 */
import CompetenceCreate from '../components/CompetenceCreate';
import CompetenceContent from '../components/CompetenceContent';
import {Tabs, Tab} from 'material-ui/Tabs';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';


function CompetenceCreateList () {
  return(
    <Tabs>
      <Tab label="创建的竞赛"  style={{backgroundColor: "#fff", color: "#000"}}>
        <br/>
        <br/>
        <CompetenceCreate/>
        <CompetenceCreate/>
      </Tab>
      <Tab label="参与的竞赛"  style={{backgroundColor: "#fff", color: "#000"}}>
        <br/>
        <br/>
        <CompetenceContent/>
        <CompetenceContent/>
      </Tab>
    </Tabs>
  );
}

export default connect()(CompetenceCreateList);

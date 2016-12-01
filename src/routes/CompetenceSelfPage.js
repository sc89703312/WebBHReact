/**
 * Created by lenovo on 2016/10/21.
 */
import {Tabs, Tab} from 'material-ui/Tabs';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import CompetenceContentList from '../components/CompetenceContentList';
import React from 'react';
import {Link} from 'dva/router';

function CompetenceCreateList ({dispatch, competence}) {

  const {competenceList} = competence;

  function queryCreateList() {
    console.log('aa');
    dispatch({
      type: `competence/queryParticipatedList`,
      payload:{
        type: 'create'
      }
    })
  }

  function queryJoinedList() {
    dispatch({
      type: `competence/queryParticipatedList`,
      payload:{
        type: 'joined'
      }
    })
  }

  return(
    <Tabs>
      <Tab label="创建的竞赛" onActive={queryCreateList} style={{backgroundColor: "#fff", color: "#000"}}>
        <br/>
        <br/>
        <CompetenceContentList competenceList={competenceList} type={`create`}/>
      </Tab>
      <Tab label="参与的竞赛" onActive={queryJoinedList}  style={{backgroundColor: "#fff", color: "#000"}}>
        <br/>
        <br/>
        <CompetenceContentList competenceList={competenceList} type={`joined`}/>
      </Tab>
    </Tabs>
  );
}

function mapStateToProps({competence}) {
  return {competence}
}

export default connect(mapStateToProps)(CompetenceCreateList);

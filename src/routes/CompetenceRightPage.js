/**
 * Created by lenovo on 2016/10/29.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import CompetenceContentList from '../components/CompetenceContentList';

function CompetenceRightPage({competence}) {

  let {competenceList} = competence;

  return (
    <CompetenceContentList competenceList={competenceList}/>
  );
}

function mapStateToProps({competence}) {
  return {competence}
}

export default connect(mapStateToProps)(CompetenceRightPage);


import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import test from './components/MainLayout/MainLayout';
import CompetenceEdit from './components/CompetenceEdit';
import HomePage from './routes/HomePage';
import CompetencePage from './routes/CompetencePage';
import PostPage from './routes/PostPage';
import CompetenceCreateList from './routes/CompetenceSelfPage';
import PostContentList from './routes/PostContentList';
import FriendManage from './routes/FriendManage';
import DailySyncPage from './routes/DailySyncPage';
import CompetenceRightPage from './routes/CompetenceRightPage';
import LogInPage from './routes/LogInPage';
import AdministorPage from './routes/AdministorPage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={test}>
        <Route path="/login" component={LogInPage}/>
        <Route path="/admin" component={AdministorPage}/>
        <Route path="/info/:userName" component={HomePage}/>
        <IndexRoute  component={HomePage}/>
        <Route path="/competition" component={CompetencePage}>
          <Route path="/competition/edit" component={CompetenceEdit} />
          <Route path="/competition/create" component={CompetenceCreateList} />
          <Route path="/competition/:type" component={CompetenceRightPage} />
        </Route>
        <Route path="/post" component={PostPage}>
          <Route path="/post/:type" component={PostContentList} />
        </Route>
        <Route path="/friend" component={FriendManage} />
        <Route path="/dailySync" component={DailySyncPage} />
      </Route>
    </Router>
  );
};

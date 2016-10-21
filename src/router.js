import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import test from './components/MainLayout/MainLayout';
import CompetenceEdit from './components/CompetenceEdit';
import HomePage from './routes/HomePage';
import CompetencePage from './routes/CompetencePage';
import PostPage from './routes/PostPage';
import CompetenceContentList from './routes/CompetenceContentList';
import CompetenceCreateList from './routes/CompetenceCreateList';
import PostContentList from './routes/PostContentList';
import FriendManage from './routes/FriendManage';
import DailySyncPage from './routes/DailySyncPage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={test}>
        <IndexRoute  component={HomePage}/>
        <Route path="/competition" component={CompetencePage}>
          <IndexRoute  component={CompetenceContentList}/>
          <Route path="/competition/test" component={CompetenceEdit} />
          <Route path="/competition/list" component={CompetenceContentList} />
          <Route path="/competition/create" component={CompetenceCreateList} />
          <Route path="/competition/single" component={CompetenceContentList} />
          <Route path="/competition/multiple" component={CompetenceContentList} />
          <Route path="/competition/team" component={CompetenceContentList} />
          <Route path="/competition/time" component={CompetenceContentList} />
        </Route>
        <Route path="/post" component={PostPage}>
          <IndexRoute  component={PostContentList}/>
          <Route path="/post/list" component={PostContentList} />
          <Route path="/post/self" component={PostContentList} />
          <Route path="/post/competence" component={PostContentList} />
          <Route path="/post/achieve" component={PostContentList} />
          <Route path="/post/daily" component={PostContentList} />
        </Route>
        <Route path="/friend" component={FriendManage} />
        <Route path="/dailySync" component={DailySyncPage} />
      </Route>
    </Router>
  );
};

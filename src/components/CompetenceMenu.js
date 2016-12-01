/**
 * Created by lenovo on 2016/10/20.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import SocialGroup from 'material-ui/svg-icons/social/group';
import SocialGroupAdd from 'material-ui/svg-icons/social/group-add';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentAdd from 'material-ui/svg-icons/content/add'
import ImageTimer from 'material-ui/svg-icons/image/timer';
import ActionStars from 'material-ui/svg-icons/action/stars';
import ActionStore from 'material-ui/svg-icons/action/store';
import { Link } from 'dva/router';

const style = {
  paper: {
    display: 'inline-block',
    marginTop: 16,
    minWidth: 224
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

function CompetenceMenu () {
  return (
    <Paper style={style.paper}>
      <Subheader><span style={{fontSize: 18}}>活动管理</span></Subheader>
      <Menu>
        <MenuItem
          containerElement={<Link to="/competition/edit"/>}
          primaryText="新建比赛" leftIcon={<ContentAdd color="#F50057"/>} style={{color: "#F50057"}} />
        <MenuItem
          containerElement={<Link to="/competition/create"/>}
          primaryText="我的竞赛" leftIcon={<ActionStars color="#00BCD4"/>} style={{color: "#00BCD4"}}/>
        <MenuItem
          containerElement={<Link to="/competition/all"/>}
          primaryText="竞赛场" leftIcon={<ActionStore />} />
        <Divider />
        <MenuItem
          containerElement={<Link to="/competition/single"/>}
          primaryText="单人PK" leftIcon={<SocialPerson />} />
        <MenuItem
          containerElement={<Link to="/competition/multiple"/>}
          primaryText="多人竞赛" leftIcon={<SocialGroup />} />
        <MenuItem
          containerElement={<Link to="/competition/team"/>}
          primaryText="团队竞赛" leftIcon={<SocialGroupAdd />} />
        <MenuItem
          containerElement={<Link to="/competition/time"/>}
          primaryText="时间接力" leftIcon={<ImageTimer />} />
      </Menu>
    </Paper>
  );
}

export default CompetenceMenu

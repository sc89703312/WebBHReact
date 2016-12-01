/**
 * Created by lenovo on 2016/10/21.
 */
/**
 * Created by lenovo on 2016/10/20.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import SocialGroup from 'material-ui/svg-icons/social/group';
import SocialGroupAdd from 'material-ui/svg-icons/social/group-add';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ContentAdd from 'material-ui/svg-icons/content/add'
import ImageTimer from 'material-ui/svg-icons/image/timer';
import PlacesPool from 'material-ui/svg-icons/places/pool';
import ImageViewCompact from 'material-ui/svg-icons/image/view-compact';
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

function PostMenu () {
  return (
    <Paper style={style.paper}>
      <Subheader><span style={{fontSize: 18}}>动态管理</span></Subheader>
      <Menu>
        <MenuItem
          containerElement={<Link to="/post/list"/>}
          primaryText="好友圈" leftIcon={<ActionStore />} />
        <MenuItem
          containerElement={<Link to="/post/self"/>}
          primaryText="我的动态" leftIcon={<ActionStars color="#F50057"/>} style={{color: "#F50057"}} />
        <Divider />
        <MenuItem
          containerElement={<Link to="/post/competence"/>}
          primaryText="竞赛动态" leftIcon={<MapsDirectionsRun />} />
        <MenuItem
          containerElement={<Link to="/post/achieve"/>}
          primaryText="成就动态" leftIcon={<ImageViewCompact />} />
        <MenuItem
          containerElement={<Link to="/post/daily"/>}
          primaryText="运动动态" leftIcon={<PlacesPool />} />
      </Menu>
    </Paper>
  );
}

export default PostMenu;

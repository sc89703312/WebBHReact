/**
 * Created by lenovo on 2016/10/21.
 */
import React from 'react';
import SocialGroup from 'material-ui/svg-icons/social/group';
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {cyan500} from 'material-ui/styles/colors';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';

import Toggle from 'material-ui/Toggle';

const styles = {
  chip: {
    margin: 8,
  },
};

class PostContent extends React.Component{

  state = {
    expanded: false,
  };


  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };


  render(){
    return (
      <div style={{marginTop: 16}}>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{marginBottom: 32}}>
          <CardHeader
            title="逢坂大河"
            subtitle="14小时前"
            avatar="https://avatars.githubusercontent.com/u/11706061?v=3"
          />
          <CardTitle>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="多图预警"
              labelStyle={{fontFamily: "DengXian"}}
            />
          </CardTitle>
          <CardMedia
            expandable={true}
            overlay={<CardTitle title="登山计划" subtitle="小伙伴们快操练起来" />}
          >
            <img src="http://file1.jydoc.com/%E7%B4%A0%E6%9D%90%E5%BA%93/0715-16/3242-%E8%BF%90%E5%8A%A8%E4%BC%91%E9%97%B2-054.jpg" />
          </CardMedia>
          <CardText>
            <p style={{fontSize: 16}}>
              改我作业的助教最帅了!!!!改我作业的助教最帅了!!!!改我作业的助教最帅了!!!!改我作业的助教最帅了!!!!
              (如果助教是女生就最漂亮了)
            </p>
          </CardText>
          <CardActions>
            <FlatButton primary={true} icon={<ActionThumbUp/>} label="点赞" />
            <FlatButton secondary={true} icon={<ActionThumbDown/> } label="举报" onTouchTap={this.handleOpenMember}  />
          </CardActions>
        </Card>
      </div>

    );
  }
}

export default PostContent;

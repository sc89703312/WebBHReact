/**
 * Created by lenovo on 2016/10/20.
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
import Chip from 'material-ui/Chip';
import ActionAccessibility from 'material-ui/svg-icons/action/accessibility';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import AvAvTimer from 'material-ui/svg-icons/av/av-timer';
import Toggle from 'material-ui/Toggle';

const styles = {
  chip: {
    margin: 8,
  },
};

class CompetenceContent extends React.Component{

  state = {
    member_open: false,
    expanded: false,
  };

  handleOpenMember = () => {
    this.setState({member_open: true});
  };

  handleCloseMember = () => {
    this.setState({member_open: false});
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };


  render(){

    const actions = [
      <FlatButton
        label="好"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCloseMember}
      />,
    ];

    return (
      <div>
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
              label="查看活动宣传内容"
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
            <div className="row" style={{marginLeft: -7}}>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<ActionAccessibility/>} />
                单人PK
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<EditorAttachMoney/>} />
                奖金 500
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<DeviceAccessTime/>} />
                2016/10/20
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<AvAvTimer/>} />
                2016/10/31
              </Chip>
            </div>
          </CardText>
          <CardActions>
            <FlatButton primary={true} icon={<ContentAdd/>} label="加入" />
            <FlatButton secondary={true} icon={<SocialGroup/> } label="查看成员" onTouchTap={this.handleOpenMember}  />
          </CardActions>
        </Card>
        <Dialog
          title="成员列表"
          actions={actions}
          modal={false}
          open={this.state.member_open}
          onRequestClose={this.handleCloseMember}
        >
          <List>
            <ListItem
              primaryText="邻居王师傅"
              leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
              rightIcon={
                  <ToggleStar color={cyan500}/>
              }
            />
            <ListItem
              primaryText="村口王小二"
              leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
              rightIcon={
                <ToggleStar color={cyan500}/>
              }
            />
          </List>
        </Dialog>
      </div>

    );
  }
}

export default CompetenceContent;

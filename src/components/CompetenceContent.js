/**
 * Created by lenovo on 2016/10/20.
 */
import React, {PropTypes} from 'react';
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
import { Link } from 'dva/router';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import {connect} from 'dva';
import Snackbar from 'material-ui/Snackbar';

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

  queryMembers = () => {
    let id = this.props.competenceInfo.id;
    this.props.dispatch({
      type: `competence/queryMembers`,
      payload:{
        id: id
      }
    })
  };

  joinCompetence = () => {
    let competenceId = this.props.competenceInfo.id;
    this.props.dispatch({
      type: `competence/joinCompetence`,
      payload:{
        competenceId: competenceId
      }
    });

    this.props.dispatch({
      type: `competence/enable_snack`,
      payload:{
        content: '你已经成功参加'
      }
    });
  };

  exitCompetence = () => {
    let competenceId = this.props.competenceInfo.id;
    this.props.dispatch({
      type: `competence/exitCompetence`,
      payload:{
        competenceId: competenceId
      }
    });
    this.props.dispatch({
      type: `competence/enable_snack`,
      payload:{
        content: '你已经成功退出'
      }
    });
  };

  deleteCompetence = () => {
    let competenceId = this.props.competenceInfo.id;
    this.props.dispatch({
      type: `competence/deleteCom`,
      payload:{
        competenceId: competenceId
      }
    });
    this.props.dispatch({
      type: `competence/enable_snack`,
      payload:{
        content: '你已经成功删除'
      }
    });
  };

  snack_close = () => {
    this.props.dispatch({
      type: 'competence/unable_snack'
    })
  };

  handleOpenMember = () => {
    this.queryMembers();
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

  getUserTags = () => {
    let tags = this.props.competenceInfo.tags;
    console.log(tags);
    let index = 0;
    if(tags!=null){
      let tag_list = tags.split(' ');
      return (
        tag_list.map(
          (object) => {
            return (
              <Chip
                key={index++}
                style={styles.chip}
              >
                {object}
              </Chip>
            )
          }
        )
      )
    }
  };

  getContentBtn = (type) => {
    if(type === `create`){
      return (<FlatButton
        containerElement={<Link to="/competition/edit"/>}
        primary={true} icon={<EditorModeEdit/>} label="编辑" />);
    }else if(type === `joined`){
      return (<FlatButton
        onTouchTap={this.exitCompetence}
        primary={true} icon={<ActionExitToApp/>} label="退出" />);
    }
    else{
      return (<FlatButton onTouchTap={this.joinCompetence} primary={true} icon={<ContentAdd/>} label="加入" />);
    }
  };


  render(){

    let {avatarUrl, userName} = this.props.competenceInfo.creator;
    let members = this.props.competence.members;


    function getMemberList(members){
      let memberId = 1;
      if( members!= null ){
        return members.map((object)=>{
          return (
            <ListItem
              key = {++memberId}
              primaryText='逢坂大河'
              leftAvatar={<Avatar src='https://avatars3.githubusercontent.com/u/11706061?v=3' />}
              rightIcon={
                <ToggleStar color={cyan500}/>
              }
            />
          )
        });
      }

    }

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

        <Snackbar
          open={this.props.competence.snack_flag}
          message={this.props.competence.content}
          autoHideDuration={4000}
          action="undo"
          onRequestClose={this.snack_close}
        />

        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{marginBottom: 32}}>
          <CardHeader
            title={userName}
            subtitle={this.props.competenceInfo.createAt}
            avatar={avatarUrl}
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
            overlay={<CardTitle title={this.props.competenceInfo.title} subtitle={this.props.competenceInfo.content} />}
          >
            <img src={this.props.competenceInfo.bgUrl} />
          </CardMedia>
          <CardText>
            <div className="row" style={{marginLeft: -7}}>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<ActionAccessibility/>} />
                {this.props.competenceInfo.type}
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<EditorAttachMoney/>} />
                奖金 {this.props.competenceInfo.bounces}
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<DeviceAccessTime/>} />
                {this.props.competenceInfo.startTime}
              </Chip>
              <Chip
                style={styles.chip}
              >
                <Avatar icon={<AvAvTimer/>} />
                {this.props.competenceInfo.endTime}
              </Chip>
              {this.getUserTags()}
            </div>
          </CardText>
          <CardActions>
            <div className="row">
              <div className="col-xs-2">
                {this.getContentBtn(this.props.type)}
              </div>
              <div className="col-xs-10">
                <FlatButton secondary={true} icon={<SocialGroup/> } label="查看成员" onTouchTap={this.handleOpenMember}  />
              </div>
            </div>
          </CardActions>
        </Card>
        <Dialog
          title="成员列表"
          actions={actions}
          modal={false}
          open={this.state.member_open}
          onRequestClose={this.handleCloseMember}
          autoScrollBodyContent = {true}
        >
          <List>
            {getMemberList(members)}
          </List>
        </Dialog>
      </div>

    );
  }
}

CompetenceContent.propTypes = {
  type: PropTypes.string,
  competenceInfo: PropTypes.object,
  competence: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps({competence}) {
  return {competence}
}

export default connect(mapStateToProps)(CompetenceContent);

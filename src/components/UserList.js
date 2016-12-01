import React from 'react';
import {connect} from 'dva';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';
import SocialGroup from 'material-ui/svg-icons/social/group';
import {Link} from 'dva/router';

class UserList extends React.Component {

  state = {
    open: false,
  };

  getList = () => {
    let users = this.props.userList;
    let index = 0;
    return (users.map(
      (object) => {
        return (
          <Link key={index++} to={'/info/'+object.userName} style={{textDecoration: `none`}}>
            <ListItem
              primaryText={object.userName}
              leftAvatar={<Avatar src={object.avatarUrl} />}
              rightIcon={<CommunicationChatBubble />}
            />
          </Link>
        )
      }
    ))
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {

    console.log(this.props.userList);

    return (
      <div>
        <List>
          <Subheader>最近互动过的用户</Subheader>
          {this.getList()}
        </List>
      </div>
    );
  }
}

UserList.propTypes = {
  userList : React.PropTypes.array
};

export default UserList;

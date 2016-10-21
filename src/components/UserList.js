import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';
import SocialGroup from 'material-ui/svg-icons/social/group';

export default class UserList extends React.Component {

  state = {
    open: false,
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
    return (
      <div>
        <List>
          <Subheader>最近互动过的用户</Subheader>
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
            rightIcon={<CommunicationChatBubble />}
          />
          <ListItem
            primaryText="查看其他用户"
            leftAvatar={<Avatar icon={<SocialGroup/>}/>}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
              />,
              <ListItem
              primaryText="Brendan Lim"
              leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
              />,
              <ListItem
              primaryText="Brendan Lim"
              leftAvatar={<Avatar src="https://avatars.githubusercontent.com/u/11706061?v=3" />}
              />,
            ]}
          />
        </List>
      </div>
    );
  }
}

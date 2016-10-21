/**
 * Created by lenovo on 2016/10/18.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import {cyan500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box'
import ActionInput from 'material-ui/svg-icons/action/input'
import ActionAnnouncement from 'material-ui/svg-icons/action/announcement'
import ActionUpdate from 'material-ui/svg-icons/action/update';
import styles from './MyNavBar.less';
import { Link } from 'dva/router';

const fontStyle = {
  color: "#fff",
  fontSize: 16
};

export default class MyNavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <AppBar
        style={{boxShadow: null, border: 0}}
        title={<span style={styles.title}>砰砰</span>}
        showMenuIconButton={false}
        iconElementRight={
          <div className={styles["flex-container"]}>
            <FlatButton
              containerElement={<Link to="/competition"/>}
              backgroundColor={cyan500} label="竞赛" labelStyle={fontStyle}/>
            <FlatButton
              containerElement={<Link to="/post"/>}
              backgroundColor={cyan500} label="动态" labelStyle={fontStyle}/>
            <FlatButton
              containerElement={<Link to="/friend"/>}
              backgroundColor={cyan500} label="好友" labelStyle={fontStyle}/>
            <div>
              <FlatButton
                onTouchTap={this.handleTouchTap}
                backgroundColor={cyan500}
                labelStyle={fontStyle}
                label="芽衣"
                icon={<Avatar
                  src="https://avatars.githubusercontent.com/u/11706061?v=3"
                  size={35}
                  style={{marginLeft: 12}}
                />}
              />
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}
              >
                <Menu>
                  <MenuItem
                    containerElement={<Link to="/dailySync"/>}
                    leftIcon={
                    <ActionUpdate />
                  } primaryText="每日同步" />
                  <MenuItem
                    containerElement={<Link to="/"/>}
                    leftIcon={<ActionAccountBox />} primaryText="个人信息" />
                  <MenuItem leftIcon={<ActionInput />} primaryText="退出登录" />
                </Menu>
              </Popover>
            </div>


          </div>

        }
      />
    );
  }
}


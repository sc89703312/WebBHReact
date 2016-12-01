/**
 * Created by lenovo on 2016/10/17.
 */
import styles from './FriendManage.less';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import UserList from '../components/UserList';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


function FriendManage ({users, dispatch}){

  let {following,follower, open_state, result} = users;

  let keywords = '';

  function recordKeywords(event) {
    keywords = event.target.value
  }

  function handleOpen() {
   dispatch({
     type: `users/open_modal`,
     payload:{
     }
   });
   dispatch({
     type: `users/searchUser`,
     payload:{
       keywords: keywords
     }
   })
  }

  function handleClose() {
    dispatch({
      type: `users/close_modal`,
      payload:{

      }
    })
  }

  function getSearchResult() {
    let index = 0;
    return (result.map(
      (object) => {
        return (
          <ListItem
            key = {index++}
            onTouchTap={followOther.bind(this,object.userName, event)}
            primaryText={object.userName}
            leftAvatar={<Avatar src={object.avatarUrl} />}
          />
        )
      }
    ))
  }

  function followOther(userName, event) {
    dispatch({
      type: `users/followOther`,
      payload:{
        followingName: userName
      }
    })
  }

  const actions = [

    <FlatButton
      label="返回"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />,
  ];

  return (

    <div className={styles["container"] + " row"}>

      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <Paper>
              <div className="row">
                <div className="col-xs-10 " style={{paddingRight: 0}}>
                  <TextField
                    style={{marginLeft: 20}}
                    hintText="昵称: 逢坂大河"
                    fullWidth={true}
                    onChange={recordKeywords}
                  />
                </div>
                <div className={styles["hide-only-small"]+" col-xs-1"} style={{marginLeft: 25}}>
                  <IconButton onTouchTap={handleOpen}>
                    <ActionSearch />
                  </IconButton>

                  <Dialog
                    title="查询结果"
                    actions={actions}
                    modal={false}
                    open={open_state}
                    onRequestClose={handleClose}
                    autoScrollBodyContent={true}
                  >
                    <List>
                      {getSearchResult()}
                    </List>
                  </Dialog>

                </div>
              </div>
            </Paper>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8 col-md-4">
            <Paper className={styles["list-container"]}>
              <span className={styles["list-title"]}>关注列表</span>
              <UserList userList={following}/>
            </Paper>
          </div>
          <div className={styles["show-only-small"]+" col-xs-2"}></div>
          <div className={styles["show-only-small"]+" col-xs-2"}></div>
          <div className="col-xs-8 col-md-4">
            <Paper className={styles["list-container"]}>
              <span className={styles["list-title"]}>粉丝列表</span>
              <UserList userList={follower}/>
            </Paper>
          </div>
        </div>
      </div>

    </div>
  );
}

function mapStateToProps({users}) {
  return {users}
}

export default connect(mapStateToProps)(FriendManage);

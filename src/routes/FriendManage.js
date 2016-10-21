/**
 * Created by lenovo on 2016/10/17.
 */
import styles from './FriendManage.less';
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import UserList from '../components/UserList';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

function FriendManage (){
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
                  />
                </div>
                <div className={styles["hide-only-small"]+" col-xs-1"}>
                  <IconButton>
                    <ActionSearch />
                  </IconButton>
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
              <UserList/>
            </Paper>
          </div>
          <div className={styles["show-only-small"]+" col-xs-2"}></div>
          <div className={styles["show-only-small"]+" col-xs-2"}></div>
          <div className="col-xs-8 col-md-4">
            <Paper className={styles["list-container"]}>
              <span className={styles["list-title"]}>粉丝列表</span>
              <UserList/>
            </Paper>
          </div>
        </div>
      </div>

    </div>
  );
};
export default connect()(FriendManage);

/**
 * Created by lenovo on 2016/11/30.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Homepage.less';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

function LogInPage({dispatch}) {

  function login() {

    var re = /^[a-zA-Z]+$/gi;
    if(re.test(account)){
    }else{
      alert("Error Account");
      window.location.replace(window.location.origin+"/#/login");
    }

  }


  let account = ``;

  function handleAccountChange(event) {
    account = event.target.value;
    return {errorText:"The error text can be as long as you want, it will wrap."};
  }

  const actions = [

    <Link to="/info/芽衣">
      <FlatButton
        label="登陆"
        primary={true}
        keyboardFocused={true}
        onTouchTap = {login}
      />
    </Link>
      ,

    <Link to="/admin">
      <FlatButton
        label="管理员查看"
        primary={true}
      />
    </Link>
      ,
  ];

  return (
    <div>
      <Dialog
        title="登陆"
        actions={actions}
        modal={false}
        open={true}
      >
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  hintText="例如: 芽衣"
                  fullWidth={true}
                  floatingLabelText="请填写账户名"
                  floatingLabelFixed={false}
                  onChange={handleAccountChange}
                />
              </div>

              <div className="col-xs-12">
                <TextField
                  hintText="******"
                  fullWidth={true}
                  floatingLabelText="请输入密码"
                  floatingLabelFixed={false}
                  type="password"
                />
              </div>

              <div className="col-xs-12" style={{marginTop: 45}}>
                <Divider />
              </div>

            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default connect()(LogInPage);

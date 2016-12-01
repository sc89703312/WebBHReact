/**
 * Created by lenovo on 2016/11/30.
 */
/**
 * Created by lenovo on 2016/10/20.
 */
import { Router, Route } from 'dva/router';
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'
import {connect} from 'dva';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
    color: "#00BCD4"
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class UserModify extends React.Component{

  state = {
    job : ``,
    weight: 0,
    height: 0,
    birthDate: ``,
    sex: ``,
    address: ``,
    content: ``
  };

  convertDate = (date) => {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  };

  convertTime = (date) => {
    var h = date.getHours();
    h = h < 10 ? ('0'+h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return h+":"+minute;
  };

  handleJobChange = (event) => {
    this.setState({job: event.target.value})
  };

  handleHeightChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleWeightChange = (event) => {
    this.setState({weight: event.target.value});
  };

  handleBirthDateChange = (event, date) => {
    this.setState({birthDate: this.convertDate(date)});
  };

  handleSexChange = (event) => {
    this.setState({sex: event.target.value});
  };

  handleAddressChange = (event) => {
    this.setState({address: event.target.value})
  };

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  };

  handleModify = () =>{

    // console.log(this.state.job);
    // console.log(this.state.height);
    // console.log(this.state.weight);
    // console.log(this.state.birthDate);
    // console.log(this.state.sex);
    // console.log(this.state.address);
    // console.log(this.state.content);

    this.props.dispatch({
      type: `userinfo/basicInfoModify`,
      payload:{
        job: this.state.job,
        weight: this.state.weight,
        height: this.state.height,
        birthDate: this.state.birthDate,
        sex: this.state.sex,
        address: this.state.address,
        content: this.state.content,
      }
    })
  };

  render(){
    return (
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  hintText="一天写20小时代码的程序眼"
                  fullWidth={true}
                  floatingLabelText="填写职业"
                  floatingLabelFixed={false}
                  onChange={this.handleJobChange}
                />
              </div>

              <div className="col-xs-6">
                <TextField
                  hintText="1.81"
                  fullWidth={true}
                  floatingLabelText="身高(/m)"
                  floatingLabelFixed={false}
                  onChange={this.handleHeightChange}
                />
              </div>

              <div className="col-xs-6">
                <TextField
                  hintText="70"
                  fullWidth={true}
                  floatingLabelText="体重(/kg)"
                  floatingLabelFixed={false}
                  onChange={this.handleWeightChange}
                />
              </div>

              <div className="col-xs-6">
                <DatePicker hintText="出生日期"
                            onChange={this.handleBirthDateChange}
                            mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>
              <div className="col-xs-6">
                <DatePicker hintText="第一次使用本网站"
                            mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>

              <div className="col-xs-6" style={{marginTop: 15}}>
                性别
              </div>
              <div className="col-xs-6" style={{marginTop: 15}}>
                <RadioButtonGroup name="shipSpeed" defaultSelected="single" onChange={this.handleSexChange}>
                  <RadioButton
                    value="男"
                    label="男"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="女"
                    label="女"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
              </div>
              <div className="col-xs-5" style={{marginTop: 16}}>
                <Toggle
                  label="是否公开地址"
                  defaultToggled={true}
                />
              </div>
              <div className="col-xs-6 col-xs-offset-1">
                <TextField
                  hintText="汉口路22号"
                  fullWidth={true}
                  floatingLabelText="填写地址"
                  floatingLabelFixed={false}
                  onChange={this.handleAddressChange}
                />
              </div>
              <div className="col-xs-9" style={{paddingRight: 0}}>
                <TextField
                  hintText="运动使我快乐!"
                  fullWidth={true}
                  floatingLabelText="个人宣言"
                  floatingLabelFixed={false}
                  onChange={this.handleContentChange}
                />
              </div>
              <div className="col-xs-3" style={{paddingLeft: 0}}>
                <IconButton
                  iconStyle={styles.mediumIcon}
                  style={styles.medium}
                  onTouchTap ={this.handleModify}
                >
                  <ImageAddAPhoto />
                </IconButton>
              </div>


              <div className="col-xs-12" style={{marginTop: 45}}>
                <Divider />
              </div>

            </div>
          </div>
        </div>
    );
  }
}

UserModify.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(UserModify);

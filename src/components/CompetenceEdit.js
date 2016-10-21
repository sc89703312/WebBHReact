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

class CompetenceEdit extends React.Component{

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render(){
    return (
      <Paper style={{paddingBottom: 20}}>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  hintText="逃跑计划"
                  fullWidth={true}
                  floatingLabelText="编辑活动名称"
                  floatingLabelFixed={false}
                />
              </div>
              <div className="col-xs-6">
                <DatePicker hintText="开始日期" mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>
              <div className="col-xs-6">
                <TimePicker hintText="开始时间"
                            textFieldStyle={{width: "100%%"}}/>
              </div>
              <div className="col-xs-6">
                <DatePicker hintText="结束日期" mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>
              <div className="col-xs-6">
                <TimePicker hintText="结束时间"
                            textFieldStyle={{width: "100%%"}}/>
              </div>
              <div className="col-xs-6" style={{marginTop: 15}}>
                活动类型
              </div>
              <div className="col-xs-6" style={{marginTop: 15}}>
                <RadioButtonGroup name="shipSpeed" defaultSelected="single">
                  <RadioButton
                    value="single"
                    label="单人PK"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="multiple"
                    label="多人竞赛"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="team"
                    label="团队竞赛"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="time"
                    label="时间接力"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
              </div>
              <div className="col-xs-5" style={{marginTop: 16}}>
                <Toggle
                  label="是否有奖励"
                  defaultToggled={true}
                />
              </div>
              <div className="col-xs-6 col-xs-offset-1">
                <SelectField
                  floatingLabelText="奖励额度"
                  value={this.state.value}
                  onChange={this.handleChange}
                  labelStyle={{width: "100%"}}
                  style={{width: "100%"}}
                >
                  <MenuItem value={1} primaryText="￥100" />
                  <MenuItem value={2} primaryText="￥200" />
                  <MenuItem value={3} primaryText="￥500" />
                  <MenuItem value={4} primaryText="￥1000" />
                </SelectField>
              </div>
              <div className="col-xs-9" style={{paddingRight: 0}}>
                <TextField
                  hintText="快来参加吧"
                  fullWidth={true}
                  floatingLabelText="活动宣传语"
                  floatingLabelFixed={false}
                />
              </div>
              <div className="col-xs-3" style={{paddingLeft: 0}}>
                <IconButton
                  iconStyle={styles.mediumIcon}
                  style={styles.medium}
                >
                  <ImageAddAPhoto />
                </IconButton>
              </div>

              <div className="col-xs-12" style={{marginTop: 45}}>
                <Divider />
              </div>
              <div className="col-xs-12" style={{marginTop: 12}}>
                <FlatButton style={{float: "right"}} label="取消" labelStyle={{fontSize: 18,color: "#757575"}}/>
                <FlatButton style={{float: "right"}} label="确定" labelStyle={{fontSize: 18,color: "#00BCD4"}} />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default CompetenceEdit;

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
import Snackbar from 'material-ui/Snackbar';

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
    title: ``,
    startDate: ``,
    startTime: ``,
    endDate: ``,
    endTime: ``,
    type: ``,
    bounces: 0,
    content: ``,
    tags: ``
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

  handleChange = (event, index, value) => this.setState({value});

  handleTitleChange = (event) => {
    this.setState({title: event.target.value})
  };

  handleStartDateChange = (event, date) => {
    this.setState({startDate: this.convertDate(date)});
  };

  handleStartTimeChange = (event, date) => {
    this.setState({startTime: this.convertTime(date)});
  };

  handleEndDateChange = (event, date) => {
    this.setState({endDate: this.convertDate(date)});
  };

  handleEndTimeChange = (event, date) => {
    this.setState({endTime: this.convertTime(date)});
  };

  handleTypeChange = (event) => {
    this.setState({type: event.target.value});
  };

  handleBouncesChange = (event, index, value) => {
    this.setState({bounces: value});
  };

  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  };

  handleTagsChange = (event) =>{
    this.setState({tags: event.target.value})
  };

  snack_close = () =>{
    this.props.dispatch({
      type: 'competence/unable_snack'
    })
  };

  handleCreate = () =>{

    console.log(this.state.title);
    console.log(this.state.startDate);
    console.log(this.state.startTime);
    console.log(this.state.endDate);
    console.log(this.state.endTime);
    console.log(this.state.type);
    console.log(this.state.bounces);
    console.log(this.state.content);
    console.log(this.state.tags);
    this.props.dispatch({
      type: `competence/createCompetence`,
      payload:{
        title: this.state.title,
        startTime: this.state.startDate+" "+this.state.startTime,
        endTime: this.state.endDate+" "+this.state.endTime,
        content: this.state.content,
        bounces: this.state.bounces,
        type:    this.state.type,
        tags:    this.state.tags
      }
    });

    this.props.dispatch({
      type: 'competence/enable_snack',
      payload:{
        content: '你已经成功编辑提交'
      }
    })
  };

  render(){
    return (
      <Paper style={{paddingBottom: 20}}>

        <Snackbar
          open={this.props.competence.snack_flag}
          message={this.props.competence.content}
          autoHideDuration={4000}
          action="undo"
          onRequestClose={this.snack_close}
        />

        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="row">
              <div className="col-xs-12">
                <TextField
                  hintText="逃跑计划"
                  fullWidth={true}
                  floatingLabelText="编辑活动名称"
                  floatingLabelFixed={false}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div className="col-xs-6">
                <DatePicker hintText="开始日期"
                            onChange={this.handleStartDateChange}
                            mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>
              <div className="col-xs-6">
                <TimePicker hintText="开始时间"
                            onChange={this.handleStartTimeChange}
                            textFieldStyle={{width: "100%%"}}/>
              </div>
              <div className="col-xs-6">
                <DatePicker hintText="结束日期"
                            onChange={this.handleEndDateChange}
                            mode="landscape"
                            textFieldStyle={{width: "100%"}}/>
              </div>
              <div className="col-xs-6">
                <TimePicker hintText="结束时间"
                            onChange={this.handleEndTimeChange}
                            textFieldStyle={{width: "100%%"}}/>
              </div>
              <div className="col-xs-6" style={{marginTop: 15}}>
                活动类型
              </div>
              <div className="col-xs-6" style={{marginTop: 15}}>
                <RadioButtonGroup name="shipSpeed" defaultSelected="single" onChange={this.handleTypeChange}>
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
                  value={this.state.bounces}
                  onChange={this.handleBouncesChange}
                  labelStyle={{width: "100%"}}
                  style={{width: "100%"}}
                >
                  <MenuItem value={100} primaryText="￥100" />
                  <MenuItem value={200} primaryText="￥200" />
                  <MenuItem value={500} primaryText="￥500" />
                  <MenuItem value={1000} primaryText="￥1000" />
                </SelectField>
              </div>
              <div className="col-xs-9" style={{paddingRight: 0}}>
                <TextField
                  hintText="快来参加吧"
                  fullWidth={true}
                  floatingLabelText="活动宣传语"
                  floatingLabelFixed={false}
                  onChange={this.handleContentChange}
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

              <div className="col-xs-12">
                <TextField
                  hintText="远游爱好者/程序员协会/骑行"
                  fullWidth={true}
                  floatingLabelText="为自己的活动打上tag"
                  floatingLabelFixed={false}
                  onChange={this.handleTagsChange}
                />
              </div>

              <div className="col-xs-12" style={{marginTop: 45}}>
                <Divider />
              </div>
              <div className="col-xs-12" style={{marginTop: 12}}>
                <FlatButton style={{float: "right"}} label="取消" labelStyle={{fontSize: 18,color: "#757575"}}/>
                <FlatButton onTouchTap={this.handleCreate} style={{float: "right"}} label="确定" labelStyle={{fontSize: 18,color: "#00BCD4"}} />
              </div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

CompetenceEdit.propTypes = {
  dispatch: React.PropTypes.func,
  competence: React.PropTypes.object,
};

function mapStateToProps({competence}) {
  return {competence}
}

export default connect(mapStateToProps)(CompetenceEdit);

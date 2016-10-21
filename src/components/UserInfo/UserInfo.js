import { Router, Route } from 'dva/router';
import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './UserInfo.less';
import {cyan500,cyan700,green500,grey600} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ActionDone from 'material-ui/svg-icons/action/done';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import MapsDirections from 'material-ui/svg-icons/maps/directions'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import {fullWhite} from 'material-ui/styles/colors';
import SportGoalChart from '../SportGoalChart';
import WeekSportsChart from '../WeekSportsChart';
import HealthValueChart from '../HealthValueChart';
import SportTypeChart from '../SportTypeChart';
import MonthlySportChart from '../MonthlySportChart';

function UserInfo({children, location}) {

  let fontSizeStyle2 = {
    fontFamily: "DengXian",
    fontSize: 23,
    color: "#757575"
  };

  let fontSizeStyle = {
    fontFamily: "DengXian",
    fontSize: 17,
    color: "#757575"
  };

  let blockFontStyle ={
    fontSize: 22, marginLeft: 10,marginTop: 5,color:"#9E9E9E"
  };

  let basicInfoFontStyle = {
    marginBottom: 15,color: "#9E9E9E",fontFamily:"DengXian"
  };

  let basicInfoFontStyle2 = {
    marginBottom: 15,color: "#616161",fontFamily:"DengXian"
  };

  return (
      <div className="row" style={{marginTop: -1}}>
        <div className="col-xs-12">
          <Paper style={{height: 250, borderColor: "#00BCD4"}}>
            <div className={styles["profile-background"]} width="100%" style={{backgroundColor: "#00BCD4"}}/>
            <div className={styles["profile-info"]}>
              <span style={{fontSize: 24, color:"#424242"}}>程序员</span><br/>
              <span style={{fontSize: 12, color:"#757575"}}>用龄: 1.9年</span><br/>
              <span style={{fontSize: 12, color:"#757575"}}>地址: 南京</span>
            </div>
            <img
              className={styles["profile-avatar"]}
              src="https://avatars.githubusercontent.com/u/11706061?v=3"
              width={150}
              height={150}
            />
            <div className={styles["btn"]} style={{border:"1px solid #00BCD4"}}>
              <FlatButton
                backgroundColor={fullWhite}
                label="签到天数 15天"
                labelStyle={{color:"#00BCD4"}}
                icon={<ActionDone color={cyan500} />
                }
              />
            </div>
          </Paper>
        </div>
        <div className="col-xs-12" style={{marginTop: 32}}>
          <Paper>
            <div className="row" style={{paddingTop: 16}}>
              <div className="col-xs-2" style={{marginLeft: 150}}>
                <div className={styles["flex-container"]}>
                  <ActionAccountCircle style={{height: 38, color:"#9E9E9E"}} />
                  <span style={blockFontStyle}> 基本信息</span>
                </div>
                <div style={{marginLeft: 45}}>
                  <FlatButton
                    style={{color: "#BDBDBD"}}
                    backgroundColor={fullWhite}
                    label="修改"
                    icon={<EditorModeEdit />
                    }
                  />
                </div>
              </div>
              <div className="col-xs-3">
                <div className="row center-xs" style={{fontFamily:"DengXian"}}>
                  <div className="col-xs-6" style={{paddingRight: 0}}>
                    <div className="row end-xs">
                      <div className="col-xs-12" style={basicInfoFontStyle}>姓名</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>出生日期</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>最高学历</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>联系方式</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>一句话简介</div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="row start-xs">
                      <div className="col-xs-12" style={basicInfoFontStyle2}>机械工</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>2016-09-14</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>硕士</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>火星理工学院</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>测试看看</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-3">
                <div className="row center-xs" style={{fontFamily:"DengXian"}}>
                  <div className="col-xs-6" style={{paddingRight: 0}}>
                    <div className="row end-xs">
                      <div className="col-xs-12" style={basicInfoFontStyle}>姓名</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>出生日期</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>最高学历</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>联系方式</div>
                      <div className="col-xs-12" style={basicInfoFontStyle}>一句话简介</div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="row start-xs">
                      <div className="col-xs-12" style={basicInfoFontStyle2}>机械工</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>2016-09-14</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>硕士</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>火星理工学院</div>
                      <div className="col-xs-12" style={basicInfoFontStyle2}>测试看看</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-xs-12" style={{marginTop: 32}}>
          <Paper>
            <div className="row" style={{paddingTop: 16}}>
              <div className="col-xs-2" style={{marginLeft: 150}}>
                <div className={styles["flex-container"]}>
                  <ActionAccountCircle style={{height: 38, color:"#9E9E9E"}} />
                  <span style={blockFontStyle}> 健康情况</span>
                </div>
              </div>
              <div className="col-xs-2">
                <p style={{textAlign: "center", marginBottom: 0,
                  color: "#9E9E9E",fontFamily:"DengXian"}}>身体健康指数</p>
                <HealthValueChart value={12}/>
              </div>
              <div className="col-xs-2">
                <p style={{textAlign: "center", marginBottom: 0,
                  color: "#9E9E9E",fontFamily:"DengXian"}}>运动目标达成情况</p>
                <SportGoalChart achieveDay={6}/>
              </div>
              <div className="col-xs-2">
                <p style={{textAlign: "center", marginBottom: 0,
                  color: "#9E9E9E",fontFamily:"DengXian"}}>运动种类占比</p>
                <SportTypeChart/>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-xs-12" style={{marginTop: 32}}>
          <Paper>
            <div className="row" style={{paddingTop: 16}}>
              <div className="col-xs-2" style={{marginLeft: 150}}>
                <div className={styles["flex-container"]}>
                  <ActionAccountCircle style={{height: 38, color:"#9E9E9E"}} />
                  <span style={blockFontStyle}> 运动概况</span>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="row">
                  <div className="col-xs-4">
                    <center>
                      <Avatar
                        icon={<MapsDirectionsRun />}
                        color={fullWhite}
                        backgroundColor={cyan500}
                        size={105}
                      />
                      <p style={fontSizeStyle}>走了<span style={fontSizeStyle2}>2333</span>步</p>
                    </center>
                  </div>
                  <div className="col-xs-4">
                    <center>
                      <Avatar
                        icon={<MapsDirections />}
                        color={fullWhite}
                        backgroundColor={cyan500}
                        size={105}
                      />
                      <p style={fontSizeStyle}>走了<span style={fontSizeStyle2}>2333</span>公里</p>
                    </center>
                  </div>
                  <div className="col-xs-4">
                    <center>
                      <Avatar
                        icon={<MapsRestaurant />}
                        color={fullWhite}
                        backgroundColor={cyan500}
                        size={105}
                      />
                      <p style={fontSizeStyle}>消耗了<span style={fontSizeStyle2}>2333</span>大卡</p>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-xs-12" style={{marginTop: 32}}>
          <Paper>
            <div className="row" style={{paddingTop: 16}}>
              <div className="col-xs-2" style={{marginLeft: 150}}>
                <div className={styles["flex-container"]}>
                  <ActionAccountCircle style={{height: 38, color:"#9E9E9E"}} />
                  <span style={blockFontStyle}> 周步数量</span>
                </div>
              </div>
              <div className="col-xs-6">
                <WeekSportsChart data1={[1999,1809,4958,1245,1234,1234,1234]}/>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-xs-12" style={{marginTop: 32}}>
          <Paper>
            <div className="row" style={{paddingTop: 16}}>
              <div className="col-xs-2" style={{marginLeft: 150}}>
                <div className={styles["flex-container"]}>
                  <ActionAccountCircle style={{height: 38, color:"#9E9E9E"}} />
                  <span style={blockFontStyle}> 周强度量</span>
                </div>
              </div>
              <div className="col-xs-6">
                <MonthlySportChart />
              </div>
            </div>
          </Paper>
        </div>
      </div>
  );
};



export default UserInfo;

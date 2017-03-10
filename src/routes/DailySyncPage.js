/**
 * Created by lenovo on 2016/10/21.
 */
import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import React from 'react';
import styles from './DailySyncPage.less';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import DailyStepChart from '../components/DailyStepChart';
import MapsDirectionsWalk from 'material-ui/svg-icons/maps/directions-walk';
import MapsLocalDining from 'material-ui/svg-icons/maps/local-dining';
import MapsLocalGasStation from 'material-ui/svg-icons/maps/local-gas-station';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import DatePicker from 'material-ui/DatePicker';
import Snackbar from 'material-ui/Snackbar';
import {
  cyan500
} from 'material-ui/styles/colors';

function DailySyncPage({dispatch, daily}) {

  let {statInfo, steps, description} = daily;

  var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  };

  function snack_close(){
    dispatch({
      type: 'daily/unable_snack'
    })
  }

  function dateOnChange(event, date) {
    let curDate = formatDate(date);
    dispatch({
      type: `daily/queryDailyStat`,
      payload:{
        date: curDate
      }
    });

    dispatch({
      type: `daily/queryDailySteps`,
      payload:{
        date: curDate
      }
    });

    dispatch({
      type: 'daily/enable_snack'
    })
  }

  return (
    <div className={styles["container"]+" row"}>

      <Snackbar
        open={daily.snack_flag}
        message='已成功同步数据'
        action='undo'
        autoHideDuration={4000}
        onRequestClose={snack_close}
      />

      <div className="col-xs-2"></div>
      <div className="col-xs-8">
        <Paper style={{marginTop: 32}}>
          <div className="row">
            <div className="col-xs-10 " style={{paddingRight: 0, marginLeft: 16}}>
              <DatePicker
                textFieldStyle={{width: "100%"}}
                hintText="2016-11-29"
                onChange={dateOnChange}
              />
            </div>
            <div className={styles["hide-only-small"]+" col-xs-1"}>
              <IconButton>
                <ActionSearch />
              </IconButton>
            </div>
          </div>
        </Paper>
        <Paper className={styles["info-container"]}>
          <div className="row center-xs">
            <div className={styles["info-block"] + " col-md-3 col-xs-6"}>
              <Avatar
                icon={<MapsDirectionsWalk />}
                color="#fff"
                backgroundColor={cyan500}
                size={100}
              />
              <br/>
              <div className={styles["font-container-style"]}>
                <span className={styles["font-style"]}>走了<span className={styles["font-number-style"]}>{statInfo.steps}</span>步</span>
              </div>
            </div>
            <div className={styles["info-block"] + " col-md-3 col-xs-6"}>
              <Avatar
                icon={<ContentFlag />}
                color="#fff"
                backgroundColor={cyan500}
                size={100}
              />
              <br/>
              <div className={styles["font-container-style"]}>
              <span className={styles["font-style"]}>走过了<span className={styles["font-number-style"]}>{statInfo.distance}</span>公里</span>
              </div>
            </div>
            <div className={styles["info-block"] + " col-md-3 col-xs-6"}>
              <Avatar
                icon={<MapsLocalDining />}
                color="#fff"
                backgroundColor={cyan500}
                size={100}
              />
              <br/>
              <div className={styles["font-container-style"]}>
              <span className={styles["font-style"]}>消耗了<span className={styles["font-number-style"]}>{statInfo.energy}</span>千卡</span>
              </div>
            </div>
            <div className={styles["info-block"] + " col-md-3 col-xs-6"}>
              <Avatar
                icon={<MapsLocalGasStation />}
                color="#fff"
                backgroundColor={cyan500}
                size={100}
              />
              <br/>
              <div className={styles["font-container-style"]}>
              <span className={styles["font-style"]}>时速<span className={styles["font-number-style"]}>{statInfo.speed}</span>km/h</span>
              </div>
            </div>
          </div>
          <div className="row"></div>
          <div className="row"></div>
        </Paper>
        <Paper className={styles["info-container"]}>
          <div className="row center-xs">
            <div className="col-xs-4">
              <div style={{marginTop: 100}}>
                <span className={styles["font-style"]}>今天的运动强度:<span className={styles["font-number-style"]}>{statInfo.description}</span></span>
              </div>
              <div style={{marginTop: 12}}>
                <span className={styles["font-style"]}><span className={styles["font-number-style"]}>{description}</span>为运动高峰期</span>
              </div>
            </div>
            <div className="col-xs-8">
              <DailyStepChart steps={steps}/>
            </div>
          </div>

        </Paper>
      </div>
    </div>
  );
}

function mapStateToProps({daily}) {
  return {daily}
}

export default connect(mapStateToProps)(DailySyncPage);

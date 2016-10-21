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
import {
  cyan500
} from 'material-ui/styles/colors';

function DailySyncPage() {
  return (
    <div className={styles["container"]+" row"}>
      <div className="col-xs-2"></div>
      <div className="col-xs-8">
        <Paper style={{marginTop: 32}}>
          <div className="row">
            <div className="col-xs-10 " style={{paddingRight: 0, marginLeft: 16}}>
              <DatePicker
                textFieldStyle={{width: "100%"}}
                hintText="2016-10-21"
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
                <span className={styles["font-style"]}>走了<span className={styles["font-number-style"]}>2311</span>步</span>
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
              <span className={styles["font-style"]}>走过了<span className={styles["font-number-style"]}>4.5</span>公里</span>
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
              <span className={styles["font-style"]}>消耗了<span className={styles["font-number-style"]}>3912</span>千卡</span>
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
              <span className={styles["font-style"]}>时速<span className={styles["font-number-style"]}>12</span>km/h</span>
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
                <span className={styles["font-style"]}>今天的运动强度:<span className={styles["font-number-style"]}>适中</span></span>
              </div>
              <div style={{marginTop: 12}}>
                <span className={styles["font-style"]}><span className={styles["font-number-style"]}>8:00-12:00</span>为运动高峰期</span>
              </div>
            </div>
            <div className="col-xs-8">
              <DailyStepChart />
            </div>
          </div>

        </Paper>
      </div>
    </div>
  );
}

export default connect()(DailySyncPage);

/**
 * Created by lenovo on 2016/10/21.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
    color: "#E91E63"
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

function Post() {
  return(
    <Paper>
      <div className="row">
        <div className="col-xs-9" style={{marginLeft: 10, paddingRight: 0}}>
          <TextField
            floatingLabelText="发表动态，和好友一起崩坏"
            multiLine={true}
            fullWidth={true}
            rows={2}
          />
        </div>
        <div className="col-xs-2" style={{ paddingLeft: 0}}>
          <IconButton
            iconStyle={styles.mediumIcon}
            style={styles.medium}
          >
            <ImageAddAPhoto />
          </IconButton>
        </div>
      </div>

    </Paper>
  );
}

export default Post;

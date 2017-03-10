/**
 * Created by lenovo on 2016/10/21.
 */
import React,{PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Toggle from 'material-ui/Toggle';
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'dva';

const styles = {
  chip: {
    margin: 8,
  },
};

class PostContent extends React.Component{

  state = {
    expanded: false,
  };

  handleStarPost = (postId, event) => {
    this.props.dispatch({
      type: `post/starPost`,
      payload:{
        postId: postId
      }
    });
    this.props.dispatch({
      type: 'post/enable_snack',
      payload:{
        content: '点赞成功'
      }
    })
  };

  handleReportPost = (postId, event) => {
    this.props.dispatch({
      type: `post/reportPost`,
      payload:{
        postId: postId
      }
    });
    this.props.dispatch({
      type: 'post/enable_snack',
      payload:{
        content: '举报成功'
      }
    })
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  snack_close = () =>{
    this.props.dispatch({
      type: 'post/unable_snack'
    })
  };


  render(){
    return (
      <div style={{marginTop: 16}}>

        <Snackbar
          open={this.props.post.snack_flag}
          message={this.props.post.content}
          autoHideDuration={4000}
          action="undo"
          onRequestClose={this.snack_close}
        />

        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{marginBottom: 32}}>
          <CardHeader
            title={this.props.postInfo.creator.userName}
            subtitle={this.props.postInfo.createAt}
            avatar={this.props.postInfo.creator.avatarUrl}
          />
          <CardTitle>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="多图预警"
              labelStyle={{fontFamily: "DengXian"}}
            />
          </CardTitle>
          <CardMedia
            expandable={true}
            overlay={<CardTitle title={this.props.postInfo.title} subtitle={this.props.postInfo.subContent} />}
          >
            <img src="http://file1.jydoc.com/%E7%B4%A0%E6%9D%90%E5%BA%93/0715-16/3242-%E8%BF%90%E5%8A%A8%E4%BC%91%E9%97%B2-054.jpg" />
          </CardMedia>
          <CardText>
            <p style={{fontSize: 16}}>
              {this.props.postInfo.content}
            </p>
          </CardText>
          <CardActions>
            <FlatButton onTouchTap={this.handleStarPost.bind(this,this.props.postInfo.id,event)} primary={true} icon={<ActionThumbUp/>} label={"点赞 "+this.props.postInfo.star} />
            <FlatButton onTouchTap={this.handleReportPost.bind(this, this.props.postInfo.id, event)} secondary={true} icon={<ActionThumbDown/> } label={"举报 "+this.props.postInfo.report}  />
          </CardActions>
        </Card>
      </div>

    );
  }
}

PostContent.propTypes = {
  postInfo: PropTypes.object,
  dispatch: PropTypes.func,
  post: PropTypes.object
};

function mapStateToProps({post}) {
  return {post}
}

export default connect(mapStateToProps)(PostContent);

import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyNavBar from '../MyNavBar';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  fontFamily: [

    "Microsoft YaHei UI",
    "Microsoft Yahei",
    "PingFang SC",
    "Lantinghei SC",
    "Hiragino Sans GB",
    "WenQuanYi Micro Hei",
    "WenQuanYi Zen Hei",
    "Noto Sans CJK SC",
    "Microsoft JhengHei UI",
    "Microsoft JhengHei",
    "PingFang TC",
    "Lantinghei TC",
    "Noto Sans CJK TC",
    "Helvetica Neue",
    "Helvetica",
  ]
});

function test ({ children }) {

  //使得上下文可以访问到
  let getChildContext = function () {
    return {muiTheme};
  };

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <main>
        <nav>
          <MyNavBar />
        </nav>

        <header className="row">
          <div className="col-xs-12">
            <div className="box">
              { children }
            </div>
          </div>
        </header>
      </main>

    </MuiThemeProvider>
  );
}

test.propTypes = {
  children: PropTypes.element,
};

export default test;

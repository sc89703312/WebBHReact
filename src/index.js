import './index.html';
import './index.less';
import 'flexboxgrid/css/flexboxgrid.css';
import dva from 'dva';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// 1. Initialize
const app = dva({
  initialState: {
  products: [
    { name: 'dva', id: 1 },
    { name: 'antd', id: 2 },
  ],
  },
});

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));
app.model(require('./models/click'));
app.model(require('./models/test'));
app.model(require('./models/users'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import promiseFinally from 'promise.prototype.finally';
// import registerServiceWorker from './registerServiceWorker';

import userStore from './stores/userStore';
import commonStore from './stores/commonStore';
import profileStore from './stores/profileStore';
import authStore from './stores/authStore';
import { Provider } from 'mobx-react';


const stores = {
  userStore,
  commonStore,
  profileStore,
  authStore
};

// For easier debugging
window._____APP_STATE_____ = stores;


promiseFinally.shim();

const render = Component => {
  return ReactDOM.render(
    <Provider {...stores}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
// registerServiceWorker();

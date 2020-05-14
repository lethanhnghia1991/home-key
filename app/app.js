/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/electric.png';
import '!file-loader?name=[name].[ext]!./images/water.png';
import '!file-loader?name=[name].[ext]!./images/favicon.png';
import '!file-loader?name=[name].[ext]!./images/Kevin.png';
import '!file-loader?name=[name].[ext]!./images/Kevon.png';
import '!file-loader?name=[name].[ext]!./images/icon-maps.png';
import '!file-loader?name=[name].[ext]!./images/defaul-room.jpg';
import '!file-loader?name=[name].[ext]!./images/checked.png';
import '!file-loader?name=[name].[ext]!./images/background.jpg';
import '!file-loader?name=[name].[ext]!./images/electric.png';

import '!file-loader?name=[name].[ext]!./images/air_conditioner.png';
import '!file-loader?name=[name].[ext]!./images/broom.png';
import '!file-loader?name=[name].[ext]!./images/delivery.png';
import '!file-loader?name=[name].[ext]!./images/dropceiling.png';
import '!file-loader?name=[name].[ext]!./images/gate.png';
import '!file-loader?name=[name].[ext]!./images/laundry.png';
import '!file-loader?name=[name].[ext]!./images/shower.png';
import '!file-loader?name=[name].[ext]!./images/stairs.png';
import '!file-loader?name=[name].[ext]!./images/television.png';
import '!file-loader?name=[name].[ext]!./images/time.png';
import '!file-loader?name=[name].[ext]!./images/toiletbowl.png';
import '!file-loader?name=[name].[ext]!./images/wardrobe.png';
import '!file-loader?name=[name].[ext]!./images/washstand.png';
import '!file-loader?name=[name].[ext]!./images/wifi.png';
import '!file-loader?name=[name].[ext]!./images/ic_profile_blue.png';
import '!file-loader?name=[name].[ext]!./images/ic_notification.png';
import '!file-loader?name=[name].[ext]!./images/icon_add.png';
import '!file-loader?name=[name].[ext]!./images/edit.png';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

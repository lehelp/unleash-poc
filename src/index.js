import React from 'react';
import ReactDOM from 'react-dom';
import FlagProvider from '@unleash/proxy-client-react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const config = {
  url: 'http://localhost:4000/proxy',
  clientKey: 'proxy_secret',
  refreshInterval: 15,
  appName: 'unleash-poc',
  environment: 'local',
};

ReactDOM.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-njb2c3j4a1vu1eoh.us.auth0.com"
    clientId="c5O6EalgBczV1FOlElBuLOr6gxsNk1ch"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


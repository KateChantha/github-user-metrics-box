// src/auth/auth0-provider-with-history.js

import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  let domain;
  let clientId;

  if (process.env.NODE_ENV !== 'production') {
    domain = process.env.REACT_APP_AUTH0_DOMAIN;
    clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  } else {
    domain = process.env.AUTH0_DOMAIN;
    clientId = process.env.AUTH0_CLIENT_ID;
  }


  // const history = useHistory();
  // const onRedirectCallback = (appState) => {
  //   history.push(appState?.returnTo || window.location.pathname);
  // };

  return (
    <Auth0Provider
      domain="dev-vntum9u9.us.auth0.com"
      clientId="q4SxIEnrPnH1KUda8Yiwj4q3yPvRgzpE"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
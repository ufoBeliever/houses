import { LoginButton } from '../LoginButton';
import { LogoutButton } from '../LogoutButton';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

export const OAuthComponent = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_CLIENT_ID);
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
      });
    }

    gapi.load('client:auth2', start);
  });
  return <LoginButton />;
};

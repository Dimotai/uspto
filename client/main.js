import SimpleOauth2 from 'simple-oauth2';
import { h, render } from "preact";
import htm from "htm";
import App from "./components/app.js";

const html = htm.bind(h);

const oauth2Client = new SimpleOauth2({
    clientID: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    redirectUri: YOUR_REDIRECT_URI,
  });

render(async () => {
    await checkAuthentication();
    render(html`<${App} />`, window.app);
  });

  function checkAuthentication() {
    const accessToken = oauth2Client.getToken();
    if (!accessToken) {
      // Redirect to Google OAuth server
      const authorizationUrl = oauth2Client.authorize({
        scope: ['email', 'profile'],
      });
      window.location.href = authorizationUrl;
    }
  }

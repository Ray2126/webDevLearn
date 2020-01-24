import React, { Component } from "react";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "50428653856-8g6a7bcep80nnubnvl0osdg6klbl0lkk.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;

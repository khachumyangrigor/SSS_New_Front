import React from "react";
import { Redirect } from "react-router-dom";
const IS_CLIENT = false;

export class Page_404 extends React.Component {
  render = () => {
    if (IS_CLIENT) {
      return <Redirect to="/" />;
    } else return <div></div>;
  };
}

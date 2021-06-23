import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Routes } from "../routes";

export default function requireAuth(ComposedComponent) {
  class Authenticate extends React.Component {
    render() {
      if (!this.props.token) {
        return <Redirect to={Routes.Login.path} />;
      } else {
        axios.defaults.headers.common["Authorization"] = this.props.token;
        return <ComposedComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps(state) {
    return {
      token: state.login.login_data.token,
    };
  }

  return connect(mapStateToProps)(Authenticate);
}

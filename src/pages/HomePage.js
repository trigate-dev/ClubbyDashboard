import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Login from "./Login";
import TodayOverview from "./TodayOverview";
import HistoryOverview from "./HistoricalOverview";
import Settings from "./Settings";
import Signup from "./Signup";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import requireAuth from "../utils/requireAuth";
import axios from "axios";

axios.defaults.baseURL = "https://clubbybackend.herokuapp.com";
axios.defaults.headers.common["Content-Type"] = "application/json";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(
    localStorageIsSettingsVisible
  );

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer
              toggleSettings={toggleSettings}
              showSettings={showSettings}
            />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Login.path} component={Login} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    {/* <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} /> */}

    <RouteWithSidebar
      exact
      path={Routes.DashboardOverview.path}
      component={requireAuth(TodayOverview)}
    />
    <RouteWithSidebar
      exact
      path={Routes.Transactions.path}
      component={requireAuth(HistoryOverview)}
    />
    <RouteWithSidebar
      exact
      path={Routes.Settings.path}
      component={requireAuth(Settings)}
    />
  </Switch>
);

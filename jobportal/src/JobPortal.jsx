import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchJobs from "./SearchJobs";
import PostJobs from "./PostJobs";
import MyProfile from "./MyProfile";
import HomePage from "./HomePage";
import CreateProfile from "./CreateProfile";
import "./JobPortal.css";

export default function JobPortal() {
  return (
    <div>
      <Router>
        <div className="header">
          {/* <div
            className="navigation-header container"
            id="bootstrap-overrrides"
          > */}
            <div className="container navigation-header navigation-div u-nowrap flex-display-div">

                <Link to="/home/">
                  <img
                    className="log o navbar-brand"
                    alt="Logo"
                    src={require("./Image.jpg")}
                    height="80"
                    widht="80"
                  />
                </Link>

                <div className="link-div flex-display-ul">
                  <ul className="navbar-link u-inline u-vAlignTop u-padding-unset">
                    <li>
                      <Link to="/home/">
                        <b className="navbar-text">Home</b>
                      </Link>
                    </li>
                    <li>
                      <Link to="/postjobs/">
                        <b className="navbar-text">Post a Job</b>
                      </Link>
                    </li>
                    <li>
                      <Link to="/searchjobs/">
                        <b className="navbar-text">Search For Jobs</b>
                      </Link>
                    </li>

                    <li>
                      <Link to="/myprofile/">
                        <b className="navbar-text b-spacing">My Profile</b>
                      </Link>
                    </li>
                  </ul>
                </div>

            {/* </div> */}
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home/" component={HomePage} />
            <Route path="/searchjobs/" component={SearchJobs} />
            <Route
              path="/postjobs/"
              component={props => <PostJobs {...props} displayFlag={false} />}
            />
            <Route path="/createprofile/" component={CreateProfile} />
            <Route path="/myprofile/" component={MyProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

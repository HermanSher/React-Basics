import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="navigation-container">
          <Link className="nav-links" to="/">Home</Link>
          <Link className="nav-links" to="/about">About</Link>
          <Link className="nav-links" to="/account">Account</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

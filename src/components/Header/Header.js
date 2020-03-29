import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HamburgerButton } from "react-hamburger-button";

import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
  }
  handleClick() {
    this.setState({
      open: !this.state.open,
      isNavOpen: !this.state.isNavOpen
    });
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    const { isNavOpen } = this.state;
    return (
      <div className={`menu-items ${isNavOpen ? "show" : "hide"}`}>
        <Link onClick={this.handleClick.bind(this)} to="/workoutentry">
          Workout Entry
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/workoutlist">
          Workout History
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/about">
          About
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/nutrition">
          Influence Nutrition
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/staff">
          Staff
        </Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    const { isNavOpen } = this.state;
    return (
      <div className={`menu-items ${isNavOpen ? "show" : "hide"}`}>
        <Link onClick={this.handleClick.bind(this)} to="/about">
          About
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/nutrition">
          Influence Nutrition
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/staff">
          Staff
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/register">
          Register
        </Link>

        <Link onClick={this.handleClick.bind(this)} to="/login">
          Log in
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="nav-bar">
        <nav className="Header">
          <h1>
            <Link to="/">CrossFit Influence</Link>
          </h1>
          <div className="menu-button">
            <HamburgerButton
              className="menu-button"
              open={this.state.open}
              onClick={this.handleClick.bind(this)}
              strokeWidth={2.75}
              color="#A62631"
              animationDuration={0.65}
            />
          </div>
        </nav>
        <div className="menu-options">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </div>
    );
  }
}

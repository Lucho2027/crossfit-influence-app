import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Hyph } from "../Utils/Utils"
import TokenService from "../../services/token-service"
import IdleService from "../../services/idle-service"
import "./Header.css"

export default class Header extends Component {
	handleLogoutClick = () => {
		TokenService.clearAuthToken()
		/* when logging out, clear the callbacks to the refresh api and idle auto logout */
		TokenService.clearCallbackBeforeExpiry()
		IdleService.unRegisterIdleResets()
	}

	renderLogoutLink() {
		return (
			<div className="Header__logged-in">
				<Link onClick={this.handleLogoutClick} to="/">
					Logout
				</Link>
				<Hyph />
				<Link to="/workoutentry">Workout Entry</Link>
				<Hyph />
				<Link to="/workoutlist">Previous Workout</Link>
			</div>
		)
	}

	renderLoginLink() {
		return (
			<div className="Header__not-logged-in">
				<Link to="/about">About</Link>
				<Hyph />
				<Link to="/nutrition">Nutrition-n-Cross-Fit</Link>
				<Hyph />
				<Link to="/staff">Staff</Link>
				<Hyph />
				<Link to="/register">Register</Link>
				<Hyph />
				<Link to="/login">Log in</Link>
			</div>
		)
	}

	render() {
		return (
			<nav className="Header">
				<h1>
					<Link to="/">
						{/* <FontAwesomeIcon className="green" icon="cross" /> */}
						Influence
					</Link>
				</h1>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</nav>
		)
	}
}

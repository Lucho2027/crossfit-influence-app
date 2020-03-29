import React, { Component } from "react";
import { Section, Button } from "../../components/Utils/Utils";

import { Link } from "react-router-dom";

import "./LandingPage.css";

export default class LandingPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <div>
        <header role="banner">
          <div className="header-container">
            <h1>Cross Fit Influence</h1>
            <h2 className="header-content">
              {" "}
              Accuracy, Agility, Coordination,Balance, Speed, Power,
              flexibility,Strength, Stamina, & Cardiorespiritory Endurance
            </h2>
            <div className="header-content-button">
              <Button>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </header>
        <Section>
          <div className="memberships-container">
            <header className="membership-header">
              <h3 className="membership-header-content">Memberships</h3>
            </header>
            <p>
              On-Ramp Classes These will be 5-1 hour sessions which we will line
              up to fit your schedule as best we can. Every new member must
              complete the On-Ramp course to move on to group classes.
            </p>
          </div>
          <div className="pricing">
            <h4>Class Pricing:</h4>
            <ul>
              <li>3x Per Week = $75/ Month</li>
              <li>2x Per Week = $60/ Month</li>
              <li>Couples/Buddies = $180/Month</li>

              <li>Family = $250/Month (3 People)</li>
            </ul>
          </div>
        </Section>
        <div className="background-2">
          <h1>Group & Private Classes</h1>
          <div className="learn-more-button">
            <Button className="learn-more">
              <Link to="/about" alt="A summary of who CrossFit influence is">
                About
              </Link>
            </Button>
          </div>
        </div>
        <Section>
          <div className="schedule-container">
            <header className="schedule-header">
              <h3 className="schedule-header-content">
                Cross-Fit Influence Schedule
              </h3>
            </header>
            <p>Weekdays</p>
            <ul>
              <li>5:30 a.m. – 6:30 a.m.</li>
              <li>9am-10am (No 9am on Thursdays)</li>
              <li>4:00 p.m. – 5:00 p.m.</li>
              <li>5:00 p.m. – 6:00 p.m.</li>
              <li>6:00p.m. – 7:00 p.m. (NO 6pm class on Fridays)</li>
            </ul>
            <p>Saturday</p>
            <ul>
              <li>Open Gym 8-10am</li>
            </ul>
            <p>Sunday</p>
            <ul>
              <li>Open Gym 8-10am</li>
            </ul>
          </div>
        </Section>
        <div className="background-3">
          <h1>World-Class Trainers</h1>
          <div className="learn-more-button">
            <Button className="learn-more">
              <Link to="/staff" alt="A brief description about staff">
                Trainers
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

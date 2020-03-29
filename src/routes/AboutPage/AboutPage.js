import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./AboutPage.css";

export default class AboutPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <Section>
        <div className="image-container">
          <h1>About Us</h1>
          <h2>
            {" "}
            We are here to help you achieve your goals. Whether it is to go back
            get back in shape or to learn new excercises. We will make sure to
            work on getting you started on the form of the excercise.{" "}
          </h2>
        </div>

        <div className="location-container">
          <h4>We Are Located at:</h4>
          <p>708 Walnut Circle</p>

          <p>Wapella, IL. 61777</p>

          <p>(Directly off Interstate 51)</p>
        </div>
        <div className="contact-container">
          <div className="contact-container-1">
            <h4>Kelly Rempe</h4>
            <p>217-433-0669</p>
            <a href="mailto:kelly.crossfitinfluence@hotmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <div className="contact-container-2">
            <h4>Brian Rempe</h4>
            <p>217-620-3962</p>
            <a href="mailto:brian.crossfitinfluence@hotmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </Section>
    );
  }
}

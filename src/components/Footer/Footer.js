import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="contact" id="contact">
          <div className="container">
            <div className="section-heading">
              <h1>Contact Us</h1>
            </div>
            <ul className="nav-list">
              <li className="social_icon">
                <a
                  href="https://www.facebook.com/CrossFit-Influence-133593213419465"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social_icon">
                <a href="mailto:kelly.crossfitinfluence@hotmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer className="copyright">
          <p>&copy; 2020 Luis Rodriguez</p>
        </footer>
      </div>
    );
  }
}

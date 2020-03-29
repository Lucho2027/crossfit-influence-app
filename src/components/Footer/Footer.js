import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section class="contact" id="contact">
          <div class="container">
            <div class="section-heading">
              <h1>Contact Us</h1>
            </div>
            <ul class="nav-list">
              <li class="social_icon">
                <a
                  href="https://www.facebook.com/CrossFit-Influence-133593213419465"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="social_icon">
                <a href="mailto:kelly.crossfitinfluence@hotmail.com">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer class="copyright">
          <p>&copy; 2020 Luis Rodriguez</p>
        </footer>
      </div>
    );
  }
}

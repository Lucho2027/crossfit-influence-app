import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";

export default class NutritionPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <Section>
        <header>
          <h3>Influence Nutrition</h3>
        </header>

        <p>
          {" "}
          What is it? It’s a one on one program for members that want to improve
          the most important part of personal wellbeing.. NUTRITION!!! No matter
          how hard you work in the gym it’s the choices you make outside the gym
          that have the greatest impact on your overall health. You literally
          can NOT outwork a bad diet! believe us we’ve tried
        </p>

        <h4>What’s included?</h4>
        <div className="included-list">
          <ul className="whole-list">
            <li>Goal setting and coaching</li>

            <li>Measurement tracking</li>

            <li>Individualized lilans</li>

            <li>Weekly one on one meetings</li>

            <li>Daily motivational messages</li>

            <li>Additional goal specificprogramming</li>

            <li>Recipes and food prep ideas</li>
          </ul>
        </div>

        <h5>Cost: $30 a month </h5>

        <p>
          {" "}
          Let us help you with the hardest part of being healthy. FOOD!. It’s
          around us 24/7. It’s part of our culture and it’s part of who we are.
          We need it to live but usually end up choosing the things that cause
          us to end up in an early grave. Let us help you understand that you
          can eat and eat PLENTY without the guilt. You just need someone to
          help guide you and be your wingman.
        </p>
      </Section>
    );
  }
}

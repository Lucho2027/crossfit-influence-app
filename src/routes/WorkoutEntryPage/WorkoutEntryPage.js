import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import WorkoutEntryForm from "../../components/WorkoutEntryForm/WorkoutEntryForm";
import "./WorkoutEntryPage.css";
export default class WorkoutEntryPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleWorkoutEntrySuccess = user => {
    const { history } = this.props;
    history.push("/workoutlist");
  };

  render() {
    return (
      <Section className="WorkoutEntryPage">
        <h2>Let's burn some calories</h2>
        <WorkoutEntryForm
          onRegistrationSuccess={this.handleWorkoutEntrySuccess}
        />
      </Section>
    );
  }
}

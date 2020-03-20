import React, { Component } from "react";
import WorkoutListContext from "../../contexts/WorkoutListContext";
import WorkoutApiService from "../../services/workout-api-service";
import { Section } from "../../components/Utils/Utils";
import WorkoutListItem from "../../components/WorkoutListItem/WorkoutListItem";

export default class WorkoutListPage extends Component {
  static contextType = WorkoutListContext;

  componentDidMount() {
    this.context.clearError();
    WorkoutApiService.getWorkouts()
      .then(this.context.setWorkoutList)
      .catch(this.context.setError);
  }

  renderWorkouts() {
    const { workoutList = [] } = this.context;
    return workoutList.map(workout => (
      <WorkoutListItem key={workout.id} workout={workout} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="WorkoutListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderWorkouts()
        )}
      </Section>
    );
  }
}

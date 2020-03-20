import React, { Component } from "react";

const WorkoutListContext = React.createContext({
  workoutList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setWorkoutList: () => {}
});
export default WorkoutListContext;

export class WorkoutListProvider extends Component {
  state = {
    workoutList: [],
    error: null
  };

  setWorkoutList = workoutList => {
    this.setState({ workoutList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      workoutList: this.state.workoutList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setWorkoutList: this.setWorkoutList
    };
    return (
      <WorkoutListContext.Provider value={value}>
        {this.props.children}
      </WorkoutListContext.Provider>
    );
  }
}

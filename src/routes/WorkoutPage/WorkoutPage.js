import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WorkoutContext, { nullWorkout } from "../../contexts/WorkoutContext";
import WorkoutApiService from "../../services/workout-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import StyleIcon from "../../components/StyleIcon/StyleIcon";
import CommentForm from "../../components/CommentForm/CommentForm";
import { Button } from "../../components/Utils/Utils";
import "./WorkoutPage.css";

export default class WorkoutPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = WorkoutContext;

  componentDidMount() {
    const { workoutId } = this.props.match.params;
    this.context.clearError();
    WorkoutApiService.getWorkout(workoutId)
      .then(this.context.setWorkout)
      .catch(this.context.setError);
    WorkoutApiService.getWorkoutComments(workoutId)
      .then(this.context.setComments)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearWorkout();
  }

  handleDelete = () => {
    const { workout } = this.context;
    WorkoutApiService.deleteWorkout(workout.id).then(data =>
      this.props.history.push("/workoutlist")
    );
  };

  renderWorkout() {
    const { workout, comments } = this.context;
    return (
      <>
        <h2>{workout.title}</h2>
        <p>
          <WorkoutStyle workout={workout} />
          {workout.author.id && (
            <>
              <Hyph />
              <WorkoutAuthor workout={workout} />
            </>
          )}
          <Hyph />
          <NiceDate date={workout.date_created} />
        </p>

        <WorkoutContent workout={workout} />
        <Button onClick={this.handleDelete}> Delete</Button>
        <WorkoutComments comments={comments} />
        <CommentForm />
      </>
    );
  }

  render() {
    const { error, workout } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Workout doesn't exist` ? (
          <p className="red">Workout not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!workout.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderWorkout();
    }
    return <Section className="WorkoutPage">{content}</Section>;
  }
}

function WorkoutStyle({ workout }) {
  return (
    <span className="WorkoutPage__style">
      <StyleIcon style={workout.style} /> {workout.style}
    </span>
  );
}

function WorkoutAuthor({ workout = nullWorkout }) {
  return (
    <span className="WorkoutPage__author">{workout.author.full_name}</span>
  );
}

function WorkoutContent({ workout }) {
  return <p className="WorkoutPage__content">{workout.content}</p>;
}

function WorkoutComments({ comments = [] }) {
  return (
    <ul className="WorkoutPage__comment-list">
      {comments.map(comment => (
        <li key={comment.id} className="WorkoutPage__comment">
          <p className="WorkoutPage__comment-text">
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="WorkoutPage__comment-icon blue"
            />
            {comment.text}
          </p>
          <p className="WorkoutPage__comment-user">{comment.user.full_name}</p>
        </li>
      ))}
    </ul>
  );
}

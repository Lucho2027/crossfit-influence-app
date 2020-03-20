import React, { Component } from "react";
import WorkoutContext from "../../contexts/WorkoutContext";
import WorkoutApiService from "../../services/workout-api-service";
import { Button, Textarea } from "../Utils/Utils";
import "./CommentForm.css";

export default class CommentForm extends Component {
  static contextType = WorkoutContext;

  handleSubmit = ev => {
    ev.preventDefault();
    const { workout } = this.context;
    const { text } = ev.target;
    WorkoutApiService.postComment(workout.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <div className="text">
          <Textarea
            required
            aria-label="Type a comment..."
            name="text"
            id="text"
            cols="30"
            rows="3"
            placeholder="Type a comment.."
          ></Textarea>
        </div>
        <Button type="submit">Post comment</Button>
      </form>
    );
  }
}

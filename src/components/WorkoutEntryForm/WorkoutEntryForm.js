import React, { Component } from "react"
import WorkoutContext from "../../contexts/WorkoutContext"
import WorkoutApiService from "../../services/workout-api-service"
import { Button, Textarea } from "../Utils/Utils"

export default class WorkoutEntryForm extends Component {
	static contextType = WorkoutContext

	handleSubmit = ev => {
		ev.preventDefault()
		const { workout } = this.context
		const { title, content } = ev.target
		WorkoutApiService.postWorkout(title.value, content.value)
			.then(this.context.addWorkout)
			.then(() => {
				this.props.onRegistrationSuccess()
			})
			.catch(this.context.setError)
	}

	render() {
		return (
			<form className="WorkoutentryForm" onSubmit={this.handleSubmit}>
				<div className="title">
					<label className="work-out title"> Work out Title:</label>
					<Textarea
						required
						aria-label="Type a workout..."
						name="title"
						id="title"
						cols="30"
						rows="1"
						placeholder="Type a title for the workout.."
					></Textarea>
				</div>
				<div className="content">
					<label className="work-out content"> What are we doing today?</label>
					<Textarea
						required
						aria-label="Type a workout..."
						name="content"
						id="content"
						cols="30"
						rows="7"
						placeholder="Type a workout.."
					></Textarea>
				</div>
				<Button type="submit">Post workout</Button>
			</form>
		)
	}
}

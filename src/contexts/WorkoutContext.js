import React, { Component } from "react"

export const nullWorkout = {
	author: {},
	tags: []
}

const WorkoutContext = React.createContext({
	workout: nullWorkout,
	comments: [],
	error: null,
	setError: () => {},
	clearError: () => {},
	setWorkout: () => {},
	addWorkout: () => {},
	clearWorkout: () => {},
	setComments: () => {},
	addComment: () => {}
})

export default WorkoutContext

export class WorkoutProvider extends Component {
	state = {
		workout: nullWorkout,
		error: null
	}

	setError = error => {
		console.error(error)
		this.setState({ error })
	}

	clearError = () => {
		this.setState({ error: null })
	}

	setWorkout = workout => {
		this.setState({ workout })
	}

	setComments = comments => {
		this.setState({ comments })
	}

	clearWorkout = () => {
		this.setWorkout(nullWorkout)
		this.setComments([])
	}

	addComment = comment => {
		this.setComments([...this.state.comments, comment])
	}

	render() {
		const value = {
			workout: this.state.workout,
			comments: this.state.comments,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setWorkout: this.setWorkout,
			setComments: this.setComments,
			clearWorkout: this.clearWorkout,
			addComment: this.addComment
		}
		return (
			<WorkoutContext.Provider value={value}>
				{this.props.children}
			</WorkoutContext.Provider>
		)
	}
}

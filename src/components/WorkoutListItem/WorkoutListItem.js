import React, { Component } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NiceDate, Hyph } from "../Utils/Utils"
import StyleIcon from "../StyleIcon/StyleIcon"
import "./WorkoutListItem.css"

export default class WorkoutListItem extends Component {
	render() {
		const { workout } = this.props
		return (
			<Link to={`/workout/${workout.id}`} className="WorkoutListItem">
				<header className="WorkoutListItem__header">
					<h2 className="WorkoutListItem__heading">{workout.title}</h2>
					<WorkoutDate workout={workout} />
				</header>
				<footer className="WorkoutListItem__footer">
					<WorkoutStyle workout={workout} />
					{workout.author.id && (
						<>
							<Hyph />
							<WorkoutAuthor workout={workout} />
						</>
					)}
					<WorkoutCommentCount workout={workout} />
				</footer>
			</Link>
		)
	}
}

function WorkoutStyle({ workout }) {
	return (
		<span className="WorkoutListItem__style">
			<StyleIcon style={workout.style} /> {workout.style}
		</span>
	)
}

function WorkoutDate({ workout }) {
	return (
		<span className="WorkoutListItem__date">
			<NiceDate date={workout.date_created} />
		</span>
	)
}

function WorkoutAuthor({ workout }) {
	return (
		<span className="WorkoutListItem__author">{workout.author.full_name}</span>
	)
}

function WorkoutCommentCount({ workout }) {
	return (
		<span className="WorkoutListItem__comment-count fa-layers fa-fw">
			<FontAwesomeIcon size="lg" icon="comment" />
			<span className="fa-layers-text fa-inverse">
				{workout.number_of_comments}
			</span>
		</span>
	)
}

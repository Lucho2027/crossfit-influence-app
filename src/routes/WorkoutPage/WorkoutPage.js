import React, { Component } from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import WorkoutContext, { nullWorkout } from "../../contexts/WorkoutContext"
// import WorkoutApiService from "../../services/workout-api-service"
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils"
// import StyleIcon from "../../components/StyleIcon/StyleIcon"
// import CommentForm from "../../components/CommentForm/CommentForm"
import "./WorkoutPage.css"

export default class WorkoutPage extends Component {
	// // static defaultProps = {
	// //   match: { params: {} }
	// // };

	// // static contextType = WorkoutContext;

	// // componentDidMount() {
	// //   const { workoutId } = this.props.match.params;
	// //   this.context.clearError();
	// //   WorkoutApiService.getWorkout(workoutId)
	// //     .then(this.context.setWorkout)
	// //     .catch(this.context.setError);
	// //   WorkoutApiService.getWorkoutComments(workoutId)
	// //     .then(this.context.setComments)
	// //     .catch(this.context.setError);
	// // }

	// // componentWillUnmount() {
	// //   this.context.clearWorkout();
	// // }

	// // renderWorkout() {
	// //   const { workout, comments } = this.context;
	// //   return (
	// //     <>
	// //       <h2>{workout.title}</h2>
	// //       <p>
	// //         <WorkoutStyle workout={workout} />
	// //         {workout.author.id && (
	// //           <>
	// //             <Hyph />
	// //             <WorkoutAuthor workout={workout} />
	// //           </>
	// //         )}
	// //         <Hyph />
	// //         <NiceDate date={workout.date_created} />
	// //       </p>
	// //       <WorkoutContent workout={workout} />
	// //       <WorkoutComments comments={comments} />
	// //       <CommentForm />
	// //     </>
	// //   );
	// }

	render() {
		// const { error, workout } = this.context;
		// let content;
		// if (error) {
		//   content =
		//     error.error === `Workout doesn't exist` ? (
		//       <p className="red">Workout not found</p>
		//     ) : (
		//       <p className="red">There was an error</p>
		//     );
		// } else if (!workout.id) {
		//   content = <div className="loading" />;
		// } else {
		//   content = this.renderWorkout();
		// }
		return (
			<Section className="WorkoutPage">
				{/* {content} */}
				<header>
					<h1>Work out of the Day</h1>
					<h2> [Picture of the day]</h2>
				</header>
				<h2>Strength/Skill:</h2>
				<h3>Back Squats</h3>
				<ul>
					<li>3×5 30-50% (Warmup Sets)</li>
					<li>3×5 60%</li>
					<li>3×3 70%</li>
				</ul>

				<h2>WOD:</h2>
				<ul>
					<li>10 Rounds</li>
					<li>5 Hang Cleans 135/95</li>
					<li>10 Push Ups</li>
					<li>10 Box Jumps 24/20</li>
				</ul>
				<section>
					<header>
						<h1>Comments / Questions</h1>
					</header>
					<form class="questions">
						<div>
							<label for="message">Message</label>
							<input type="text" name="message" id="message" />
						</div>
						<button type="submit">Post</button>
						<button type="submit">Edit</button>
						<button type="submit">Delete</button>
					</form>
				</section>
			</Section>
		)
	}
}

// function WorkoutStyle({ workout }) {
//   return (
//     <span className="WorkoutPage__style">
//       <StyleIcon style={workout.style} /> {workout.style}
//     </span>
//   );
// }

// function WorkoutAuthor({ workout = nullWorkout }) {
//   return (
//     <span className="WorkoutPage__author">{workout.author.full_name}</span>
//   );
// }

// function WorkoutContent({ workout }) {
//   return <p className="WorkoutPage__content">{workout.content}</p>;
// }

// function WorkoutComments({ comments = [] }) {
//   return (
//     <ul className="WorkoutPage__comment-list">
//       {comments.map(comment => (
//         <li key={comment.id} className="WorkoutPage__comment">
//           <p className="WorkoutPage__comment-text">
//             <FontAwesomeIcon
//               size="lg"
//               icon="quote-left"
//               className="WorkoutPage__comment-icon blue"
//             />
//             {comment.text}
//           </p>
//           <p className="WorkoutPage__comment-user">{comment.user.full_name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

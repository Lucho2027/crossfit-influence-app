import TokenService from "../services/token-service"
import config from "../config"

const WorkoutApiService = {
	getWorkouts() {
		return fetch(`${config.API_ENDPOINT}/workouts`, {
			headers: {}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		)
	},
	getWorkout(workoutId) {
		return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		)
	},
	getWorkoutComments(workoutId) {
		return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}/comments`, {
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		)
	},
	postComment(workoutId, text) {
		return fetch(`${config.API_ENDPOINT}/comments`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				workout_id: workoutId,
				text
			})
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		)
	},
	postWorkout(title, content) {
		return fetch(`${config.API_ENDPOINT}/workouts`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title: title,
				content: content
			})
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		)
	},
	deleteWorkout(workoutId) {
		return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
			headers: {
				authorization: `bearer ${TokenService.getAuthToken()}`
			},
			method: "DELETE"
		})
	}
}

export default WorkoutApiService

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { WorkoutListProvider } from "../../contexts/WorkoutListContext"
import { WorkoutProvider } from "../../contexts/WorkoutContext"
import App from "./App"

it("renders without crashing", () => {
	const div = document.createElement("div")
	ReactDOM.render(
		<BrowserRouter>
			<WorkoutListProvider>
				<WorkoutProvider>
					<App />
				</WorkoutProvider>
			</WorkoutListProvider>
		</BrowserRouter>,
		div
	)
	ReactDOM.unmountComponentAtNode(div)
})

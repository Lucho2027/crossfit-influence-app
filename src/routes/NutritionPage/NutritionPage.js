import React, { Component } from "react"
import { Section } from "../../components/Utils/Utils"

export default class NutritionPage extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {}
		}
	}

	render() {
		return (
			<Section>
				<header>
					<h3>What is CrossFit?</h3>
				</header>

				<p>
					{" "}
					CrossFit is the principal strength and conditioning program for many
					police academies and tactical operations teams, military special
					operations units, champion martial artists, and hundreds of other
					elite and professional athletes worldwide. Our program delivers a
					fitness that is, by design, broad, general, and inclusive. Our
					specialty is not specializing. Combat, survival, many sports, and life
					reward this kind of fitness and, on average, punish the specialist.
				</p>

				<h4>
					CrossFit focuses on all 10 aspects of human skills: Accuracy, Agility,
					Coordination,Balance, Speed, Power, flexibility,Strength, Stamina, &
					Cardiorespiritory Endurance.
				</h4>

				<header>
					<h3>Influence Nutrition</h3>
				</header>

				<p>
					{" "}
					What is it? It’s a one on one program for members that want to improve
					the most important part of personal wellbeing.. NUTRITION!!! No matter
					how hard you work in the gym it’s the choices you make outside the gym
					that have the greatest impact on your overall health. You literally
					can NOT outwork a bad diet! believe us we’ve tried
				</p>

				<h4>What’s included?</h4>
				<p>Goal setting and coaching</p>
				<br />
				<p>Measurement tracking</p>
				<br />
				<p>Individualized plans</p>
				<br />
				<p>Weekly one on one meetings</p>
				<br />
				<p>Daily motivational messages</p>
				<br />
				<p>Additional goal specific programming</p>
				<br />
				<p>Recipes and food prep ideas</p>
				<br />
				<h5>Cost: $30 a month </h5>
				<br />

				<p>
					{" "}
					Let us help you with the hardest part of being healthy. FOOD!. It’s
					around us 24/7. It’s part of our culture and it’s part of who we are.
					We need it to live but usually end up choosing the things that cause
					us to end up in an early grave. Let us help you understand that you
					can eat and eat PLENTY without the guilt. You just need someone to
					help guide you and be your wingman.
				</p>
			</Section>
		)
	}
}

import React, { Component } from "react"
import { Section } from "../../components/Utils/Utils"

export default class LandingPage extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {}
		}
	}

	render() {
		return (
			<Section>
				<header role="banner">
					<h1>Cross Fit Influence</h1>
					<h2>
						{" "}
						Accuracy, Agility, Coordination,Balance, Speed, Power,
						flexibility,Strength, Stamina, & Cardiorespiritory Endurance
					</h2>
					<button> Join Now</button>
				</header>
				<section>
					<header>
						<h3>Memberships</h3>
					</header>

					<p>
						On-Ramp Classes These will be 5-1 hour sessions which we will line
						up to fit your schedule as best we can. Every new member must
						complete the On-Ramp course to move on to group classes.)
					</p>
					<br />
					<h4>Class Pricing:</h4>
					<ul>
						<li>3x Per Week = $75/ Month</li>
						<li>2x Per Week = $60/ Month</li>
						<li>Couples/Buddies = $180/Month</li>

						<li>Family = $250/Month (3 People)</li>
					</ul>
				</section>
				<section>
					<header>
						<h3>Group & Private Classes</h3>
						<a> Learn More -></a>
					</header>
				</section>
				<section>
					<header>
						<h3>World-Class Trainers</h3>
						<a> Learn More -></a>
					</header>
				</section>
				<section>
					<header>
						<h3>Cross-Fit Influence Schedule</h3>
					</header>
					<p>Weekdays</p>
					<ul>
						<li>5:30 a.m. – 6:30 a.m.</li>
						<li>9am-10am (No 9am on Thursdays)</li>
						<li>4:00 p.m. – 5:00 p.m.</li>
						<li>5:00 p.m. – 6:00 p.m.</li>
						<li>6:00p.m. – 7:00 p.m. (NO 6pm class on Fridays)</li>
					</ul>
					<p>Saturday</p>
					<ul>
						<li>Open Gym 8-10am</li>
					</ul>
					<p>Sunday</p>
					<ul>
						<li>Open Gym 8-10am</li>
					</ul>
				</section>
			</Section>
		)
	}
}

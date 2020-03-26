import React, { Component } from "react"
import { Section } from "../../components/Utils/Utils"

export default class AboutPage extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {}
		}
	}

	render() {
		return (
			<Section>
				<section>
					<header>
						<h3>About CrossFit Influence</h3>
					</header>

					<p>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
						sem dui, commodo non tortor eu, ullamcorper elementum enim. Fusce ac
						ligula quis felis aliquet lacinia. Curabitur vulputate vitae risus
						vitae venenatis. Nunc eu nisl lectus. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Maecenas tristique sapien ac justo
						vestibulum posuere. Nunc dapibus neque quis efficitur aliquam. Morbi
						nec nulla ipsum. Vivamus dictum sagittis massa at tincidunt..
					</p>

					<h4>CrossFit Influence</h4>
					<p>708 Walnut Circle</p>
					<br />
					<p>Wapella, IL. 61777</p>
					<br />
					<p>(Directly off Interstate 51)</p>
					<br />

					<h4>Kelly Rempe</h4>
					<p>217-433-0669</p>
					<br />
					<p>kelly.crossfitinfluence@hotmail.com</p>
					<br />

					<h4>Brian Rempe</h4>
					<p>217-620-3962</p>
					<br />
					<p>brian.crossfitinfluence@hotmail.com</p>
					<br />
				</section>

				<section>
					<header>
						<h3>Contact Us</h3>
					</header>
					<form className="contact-us-form">
						<div>
							<label forhtml="first-name">First name</label>
							<input
								placeholder="First Name"
								type="text"
								name="first-name"
								id="first-name"
							/>
						</div>
						<div>
							<label forhtml="last-name">Last name</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								placeholder="Last Name"
							/>
						</div>
						<div>
							<label forhtml="username">Email</label>
							<input type="text" name="username" id="username" />
						</div>
						<div>
							<label forhtml="subject">Subject</label>
							<input type="text" name="subject" id="subject" />
						</div>
						<div>
							<label forhtml="message">Message</label>
							<input type="text" name="message" id="message" />
						</div>
						<button type="submit">Send message</button>
					</form>
				</section>
			</Section>
		)
	}
}

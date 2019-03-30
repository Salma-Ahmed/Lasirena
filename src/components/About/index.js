import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class About extends Component {
	render() {
		const { about } = this.props;

		return (
			<section className="about lsr-bg d-flex flex-column align-items-center">
				<ReactWOW animation="fadeInUp">
					<div className="titles">
						<h2 className="title title__primary">about</h2>
						<h3 className="title title__secondary text-uppercase">lasirena group</h3>
					</div>
				</ReactWOW>
				<ReactWOW animation="fadeInUp">
					<p className="text-center about__desc mb-5 par par__primary">{about.short_des_en}</p>
				</ReactWOW>
				<ReactWOW animation="fadeInUp">
					<div className="about__statistics flex-column flex-md-row d-flex justify-content-between align-items-center">
						<p>
							<span>{about.projects}</span> <span>projects</span>
						</p>
						<p>
							<span>{about.years}</span> <span>years</span>
						</p>
						<p>
							<span>{about.unites}K</span> <span>unites</span>
						</p>
					</div>
				</ReactWOW>
			</section>
		);
	}
}

export default About;

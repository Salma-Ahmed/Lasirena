import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import uuid from 'uuid';

class About extends Component {
	render() {
		const { about } = this.props;

		return (
			<section className="about lsr-bg d-flex flex-column align-items-center">
				<div className="titles">
					<h2 className="title title__primary">about</h2>
					<h3 className="title title__secondary text-uppercase">lasirena group</h3>
				</div>
				<p>{about.short_des_en}</p>
				<div className="d-flex">
					<p>{about.projects}</p>
					<p>{about.years}</p>
					<p>{about.unites}</p>
				</div>
			</section>
		);
	}
}

export default About;

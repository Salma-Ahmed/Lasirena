import React, { Component } from 'react';

class ContactDetails extends Component {
	render() {
		return (
			<div className="contact__details d-flex flex-column justify-content-center align-items-center">
				<h2>join now</h2>
				<p>have a question? call us</p>
				<p className="hotline mb-3">19741</p>
				<h2 className="">follow us</h2>
				<div className="scl-icns" />
			</div>
		);
	}
}

export default ContactDetails;

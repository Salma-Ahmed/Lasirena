import React, { Component } from 'react';
import Form from '../Form';
import ContactDetails from '../ContactDetails';

class Contact extends Component {
	render() {
		return (
			<section className="contact gray-bg sec-pad">
				<div className="container d-flex align-items-center justify-content-center flex-column">
					<div className="titles">
						<h1 className="title title__primary">contact</h1>
						<h2 className="title title__secondary">get in touch</h2>
					</div>
					<div className="row wdth-100">
						<div className="col-md-6 col-lg-8">
							<Form />
						</div>
						<div className="col-md-6 col-lg-4">
							<ContactDetails />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;

import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
	state = {
		errors: {},
		src: '',
		name: '',
		email: '',
		message: '',
		isSubmitted: false
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const nameValue = e.target.name.value;
		const emailValue = e.target.email.value;
		const messageValue = e.target.message.value;
		const errors = {};
		const { src, name, email, message } = this.state;
		const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!nameValue) {
			errors.nameError = 'Please enter a name';
			e.target.name.focus();
		}
		if (!emailValue) {
			errors.emailError = 'Please enter an email';
			e.target.email.focus();
		} else {
			if (!regExp.test(emailValue)) {
				errors.emailError = 'Email is invalid';
				e.target.email.focus();
			}
		}
		if (!messageValue) {
			errors.messageError = 'Please enter a message';
			e.target.message.focus();
		}
		if (Object.keys(errors).length > 0) {
			console.log(errors);
			this.setState({
				errors
			});
		} else {
			axios.post('/2019/lasirena/Api/submitContact.php', { src, name, email, message }).then(result => {
				console.log(src, name, email, message);
				this.setState({
					isSubmitted: true
				});
			});
		}
	};
	render() {
		const { nameError, emailError, messageError } = this.state.errors;
		const { isSubmitted, src, name, email, message } = this.state;
		return (
			<>
				<form className="conatct__form" onSubmit={this.handleSubmit} style={isSubmitted ? { display: 'none' } : { display: 'block' }}>
					<div className="form-group d-none">
						<input type="text" name="src" id="src" value={src} />
					</div>
					<div className="form-group">
						<label className="sr-only" htmlFor="name">
							Name
						</label>
						<input type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.onChange} />
						{nameError && <p>{nameError}</p>}
					</div>
					<div className="form-group">
						<label className="sr-only" htmlFor="email">
							Email
						</label>
						<input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.onChange} />
						{emailError && <p>{emailError}</p>}
					</div>
					<div className="form-group">
						<label className="sr-only" htmlFor="message">
							Message
						</label>
						<textarea id="message" name="message" placeholder="Message" value={message} onChange={this.onChange} />
						{messageError && <p>{messageError}</p>}
					</div>
					<button type="submit">Send</button>
				</form>
				{isSubmitted && (
					<div className="thank-you">
						<p>Thank you, will contact you soon</p>
					</div>
				)}
			</>
		);
	}
}

export default Form;

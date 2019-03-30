import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactWOW from 'react-wow';
import uuid from 'uuid';

class Slider extends Component {
	state = {
		slided: false
	};
	onChange = () => {
		this.setState({
			slided: true
		});
	};
	render() {
		const { carousel } = this.props;
		const { slided } = this.state;

		return (
			<Carousel autoplay showThumbs={false} showArrows={false} showStatus={false} transitionTime={500} onChange={this.onChange}>
				{carousel.map(item => (
					<div key={uuid()}>
						<img src={`/2019/lasirena/uploads/MainSlider/${item.image}`} alt="lasirena-slider-img" />

						<div className="legend">
							<ReactWOW animation="fadeInDown" className={slided ? 'animated' : ''}>
								<h1>{item.title_en}</h1>
							</ReactWOW>
							<ReactWOW animation="fadeInUp" className={slided ? 'animated' : ''}>
								<p>{item.des_en}</p>
							</ReactWOW>
						</div>
					</div>
				))}
			</Carousel>
		);
	}
}

export default Slider;

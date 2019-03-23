import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import uuid from 'uuid';

class Slider extends Component {
	render() {
		const { carousel } = this.props;

		return (
			<Carousel autoplay showThumbs={false} showArrows={false} showStatus={false}>
				{carousel.map(item => (
					<div key={uuid()} className="container row">
						<img src="http://icclients.com/2019/lasirena/uploads/MainSlider/3lasirena-slider1.jpg" alt="lasirena-slider-img" />
						<div className="legend">
							<h1>{item.title_en}</h1>
							<p>{item.des_en}</p>
						</div>
					</div>
				))}
			</Carousel>
		);
	}
}

export default Slider;

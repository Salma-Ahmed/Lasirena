import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReactWOW from 'react-wow';
import uuid from 'uuid';

class News extends Component {
	state = {
		slided: false
	};
	onChange = () => {
		this.setState({
			slided: true
		});
	};
	render() {
		const { news } = this.props;
		const { slided } = this.state;
		var dateFormat = require('dateformat');
		return (
			<section className="news lsr-bg d-flex flex-column align-items-center">
				<ReactWOW animation="fadeInUp">
					<div className="titles">
						<h2 className="title title__primary">Recent</h2>
						<h3 className="title title__secondary text-uppercase">Events & News</h3>
					</div>
				</ReactWOW>
				<div className="container">
					<Carousel className="news__carousel" autoplay={true} showThumbs={false} showIndicators={false} showStatus={false} transitionTime={500} onChange={this.onChange}>
						{news.map(item => (
							<div key={uuid()}>
								<div>
									<span className="news__date">{dateFormat(item.date, 'd mmm yyyy')}</span>
									<img src={`/2019/lasirena/uploads/News/${item.image}`} alt="lasirena-slider-img" className="img-responsive" />
								</div>
								<div className="news__dets" data-animation-delay=".2s">
									<h1 className="news__title">{item.title_en}</h1>
									<p className="news__desc">{item.short_des_en}</p>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</section>
		);
	}
}

export default News;

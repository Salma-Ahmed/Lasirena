import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactWOW from 'react-wow';

class Category extends Component {
	render() {
		const { title, imgSrc } = this.props;

		return (
			<div className="category">
				<LazyLoadImage alt="category-img" effect="blur" className="category__img img-responsive animate-slow" src={`/2019/lasirena/uploads/Categories/${imgSrc}`} />
				<div className="category__overlay">
					<ReactWOW animation="fadeInDown">
						<h2 className="category__title">{title}</h2>
					</ReactWOW>
					<ReactWOW animation="fadeInUp">
						<a className="category__btn animate">know more</a>
					</ReactWOW>
					<span className="category__zoom animate">
						<span>
							<img src={require('../../assets/images/zoom.png')} />
						</span>
					</span>
				</div>
			</div>
		);
	}
}

export default Category;

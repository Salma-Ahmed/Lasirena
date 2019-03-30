import React, { Component } from 'react';
import Category from '../Category';
import uuid from 'uuid';

class Categories extends Component {
	render() {
		const { categories } = this.props;

		return (
			<section className="categories">
				<div className="d-flex flex-column flex-md-row">
					{categories.map(category => (
						<Category key={uuid()} imgSrc={category.image} title={category.title_en} />
					))}
				</div>
			</section>
		);
	}
}

export default Categories;

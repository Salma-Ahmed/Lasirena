import React, { Component } from 'react';
import Slider from '../Carousel';
import About from '../About';
import Categories from '../Categories';
import Contact from '../Contact';
import News from '../News';
class HomePage extends Component {
	state = {
		isLoaded: false,
		carousel: [],
		about: [],
		categories: [],
		news: []
	};

	componentDidMount() {
		fetch('/2019/lasirena/Api/HomePage.php')
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						carousel: result.main_slider,
						about: result.about,
						categories: result.project_categories,
						news: result.news
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { carousel, about, categories, news } = this.state;
		return (
			<>
				<Slider carousel={carousel} />
				<About about={about} />
				<Categories categories={categories} />
				<News news={news} />
				<Contact />
			</>
		);
	}
}

export default HomePage;

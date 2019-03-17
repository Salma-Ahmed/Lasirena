import React, { Component } from 'react';
import Slider from '../Carousel';
import About from '../About';

class HomePage extends Component {
	state = {
		isLoaded: false,
		carousel: [],
		about: []
	};

	componentDidMount() {
		fetch('/2019/lasirena/Api/HomePage.php')
			.then(res => res.json())
			.then(
				result => {
					console.log('hiii' + result.main_slider);
					this.setState({
						isLoaded: true,
						carousel: result.main_slider,
						about: result.about
					});
				},
				error => {
					console.log('hiii' + error);
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { carousel, about } = this.state;
		return (
			<>
				<Slider carousel={carousel} />
				<About about={about} />
			</>
		);
	}
}

export default HomePage;

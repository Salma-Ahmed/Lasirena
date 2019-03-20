import React, { Component } from 'react';
import HomePage from '../HomePage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faIgloo, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo, faSearch, faBars,fab);

class App extends Component {
	render() {
		return (
			<>
				<Navbar></Navbar>
				<HomePage />
				<Footer></Footer>
			</>
		);
	}
}

export default App;

import React, { Component } from 'react';
import HomePage from '../HomePage';
import Navbar from '../Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faSearch, faBars)

class App extends Component {
	render() {
		return (
			<>
				<Navbar></Navbar>
				<HomePage />
			</>
		);
	}
}

export default App;

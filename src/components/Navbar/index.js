import React, { Component } from 'react';
import Logo from '../../assets/images/nav-logo.png';
import Phone from '../../assets/images/phone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component{

    render(){
        return(
            <header>
                
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand d-lg-none" href="#"><img src={Logo} alt=""/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon="bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link no-p-l d-lg-block d-none" href="#"><img src={Phone} className="phone-logo" alt=""/></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link animate" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate no-p-r" href="#">Events</a>
                                </li>
                            </ul>

                            <a className="navbar-brand d-lg-block d-none" href="#"><img src={Logo} alt=""/></a>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link animate no-p-l" href="#">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate" href="#">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate" href="#">Installment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animate no-p-r" href="#"><FontAwesomeIcon icon="search" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link no-p-l d-lg-none" href="#"><img src={Phone} className="phone-logo" alt=""/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
			</header>
        )
    }

}

export default Navbar;
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../../assets/images/wht-logo.png';
import LogoTxt from '../../assets/images/logo-txt.png';
import PhoneIC from '../../assets/images/phn-ic.png';
import EmailIC from '../../assets/images/email-ic.png';
import MarkerIC from '../../assets/images/marker-ic.png';
import Arrow from '../../assets/images/sub-arrow.png';

class Footer extends Component{
    state = {
        isLoaded: false,
        info: []
    };
    componentDidMount(){
        fetch('/2019/lasirena/Api/getfooter.php')
        .then(res => res.json())
        .then(res => {
            this.setState({
                isLoaded: true,
                info: res.info
            });
            console.log(this.state.info);
        }, error => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }
    render(){
        return(
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="row">

                            <div className="col desc">
                                <img src={Logo} className="logo" alt="Lasirena Logo"/>
                                <div className="txt">
                                    <img src={LogoTxt} alt="Lasirena Text"/>
                                    <p>{this.state.info.des_en}</p>
                                    <div className="social">
                                        <a href={this.state.info.facebook} target="_blanck"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                        <a href={this.state.info.twitter} target="_blanck"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                        <a href={this.state.info.youtube} target="_blanck"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                                        <a href={this.state.info.instagram} target="_blanck"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col contact">
                                <h4>Contact</h4>
                                <div><img src={PhoneIC} alt=""/> <a href={`tel:${this.state.info.phone}`}><span>{this.state.info.phone}</span></a></div>
                                <div><img src={EmailIC} alt=""/> <a href={`mailto:${this.state.info.email}`}><span>{this.state.info.email}</span></a></div>
                                <div><img src={MarkerIC} alt=""/> <span>{this.state.info.address_en}</span></div>
                            </div>

                            <div className="col subscribe">
                                <h4>Get in Touch</h4>
                                <p>Stay up to date on exciting projects and upcoming events</p>
                                <div>
                                    <form>
                                        <input type="email" placeholder="Email address"/>
                                        <input type="submit" value="" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bot-footer">
                    <p className="text-center">Designed & Developed by <a href="https://icon-creations.com" target="_blanck">ICON CREATIONS</a></p>
                </div>

            </footer>
        )
    }
}

export default Footer;
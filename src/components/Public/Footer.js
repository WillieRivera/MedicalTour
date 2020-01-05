import React from 'react';

import { 
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Col,
    Row,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faGooglePlusG } from '@fortawesome/free-brands-svg-icons' 
import logo_footer from '../../assets/img/logo_footer.jpg';
import google_logo from '../../assets/img/google.png';
import apple_logo from '../../assets/img/apple.svg';

library.add(faFacebookF,faTwitter,faGooglePlusG); 


class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Row className="information">
                    <Col lg="10" xl="10">
                        <Row>
                            <Col className="my-xl-none col-xl-auto">
                                <img src={logo_footer}></img>
                            </Col>
                            <Col lg="4" xl="3">
                                <div className="footer_section">
                                    <div className="caption">
                                        <span>Site Navigation</span>
                                    </div>
                                    <div className="content">
                                        <li>
                                            <NavLink href="/Home">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/About">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/FAQ/booking">FAQ</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/ContactUs">Contact Us</NavLink>
                                        </li>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" xl="3">
                            <div className="footer_section">
                                    <div className="caption">
                                        <span>Informatino Center</span>
                                    </div>
                                    <div className="content">
                                        <li>
                                            <NavLink href="/FAQ/booking">How booking works?</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/FAQ/review">How reviews reveiw</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/FAQ/ethics">Ethic of Tourmed use</NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/FAQ/data_privacy">Data and Privacy</NavLink>
                                        </li>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" xl="3">
                                <div className="footer_section">
                                    <div className="caption">
                                        <span>GET IN TOUCH</span>
                                    </div>
                                    <div className="content">
                                        <li>
                                            <span>TOURMED UK LIMITED</span>
                                        </li>
                                        <li>
                                            <span>71-75 SHELTON STREET</span>
                                        </li>
                                        <li>
                                            <span>COVENT GARDEN</span>
                                        </li>
                                        <li>
                                            <span>LONDON</span>
                                        </li>
                                        <li>
                                            <span>UNITED KINGDOM</span>
                                        </li>
                                        <li>
                                            <span>WC2H 9jQ</span>
                                        </li>
                                        <li>
                                            <span>Company No. 10943354</span>
                                        </li>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="2" xl="2" className="logos">
                        <img className="google_logo"src={google_logo}></img>
                        <img className="apple_logo" src={apple_logo}></img>
                    </Col>
                    
                </Row>
                <Row className="copyright_contact">
                    <Col lg="4" xl="4" className="copyright">
                        <span>&copy;Tourmed 2019 &nbsp;|&nbsp;All rights reserved </span>
                    </Col>
                    <Col lg="5" xl="4" className="policy">
                        <span>Privacy Policy &nbsp;|&nbsp; Terms and Conditions </span>
                    </Col>
                    <Col lg="3" xl="4" className="contact">
                        <FontAwesomeIcon size="2x" icon={['fab', 'facebook-f']} ></FontAwesomeIcon>
                        <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} ></FontAwesomeIcon>
                        <FontAwesomeIcon size="2x" icon={['fab', 'google-plus-g']} ></FontAwesomeIcon>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default Footer;
import React from 'react';
import '../../styles/components/contact_us.css';
import contact_back from '../../assets/img/contact_back.jpg'
import { Button, Form,FormGroup,Label,Input, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faGlobe,faEnvelope } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends React.Component{
    render(){
        return(
            <div class="contact_us">
                <Row>
                    <Col lg="4" xl="4" className="img_side">

                        <img src={contact_back}/>

                    </Col>
                    <Col lg="12" xl="8">
                        <div className="contact_form">
                            <div className="caption">
                                CONTACT US
                            </div>
                            <Row>
                                <Col lg="4" xl="4" className="contact_info">
                                    <div class="location">
                                        <div>
                                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p>
                                                TOURMED UK UNITED<br/>
                                                71-75 SHELTON STREET<br/>
                                                COVENT GARDEN<br/>
                                                LONDON<br/>
                                                UNITED KINGDOM<br/>
                                                WC2H 9jQ<br/>
                                            </p>
                                            
                                        </div>
                                        <div className="clear"></div>
                                    </div>

                                    <div className="clear"></div>
                                    <div class="email">
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p>support@tourmed.uk</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>

                                    <div className="clear"></div>
                                    <div class="url">
                                        <div>
                                            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                                        </div>
                                        <div>
                                            <p>www.tourmed.uk</p>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="clear"></div>
                                </Col>
                                <Col lg="8" xl="8">
                                    <Form className="modal_send_message">
                                        <FormGroup>
                                            <Row>
                                                <Col lg="6" xl="6">
                                                    <Input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                                                </Col>
                                                <Col lg="6" xl="6">
                                                    <Input type="email" name="email" id="email" placeholder="Your E-mail" />
                                                </Col>
                                            </Row>
                                            
                                        </FormGroup>

                                        <FormGroup className="doctor_patient">
                                                <label className="radio_container">Doctor
                                                    <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="radio_container">Patient
                                                    <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <div class="clear"></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name="subject" id="subject" placeholder="Subject" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="textarea" name="comment" id="comment" placeholder="Comment" />
                                        </FormGroup>
                                        <Row>
                                            <Col lg="6" xl="6">
                                            </Col>
                                            <Col lg="6" xl="6">
                                                <Button block type="submit">
                                                    Send message
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ContactUs;
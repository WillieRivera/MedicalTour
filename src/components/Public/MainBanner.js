import React from 'react';
import home_back_img from '../../assets/img/home_back.jpg';
import home_back_img_pure from '../../assets/img/home_back_pure.jpg'
import '../../styles/components/main_banner.css';
import {
    Button,
    Jumbotron,
    Row,
    Column
    } from 'reactstrap';

class MainHome extends React.Component{
    render(){
        return(
            <div className="banner">
                <img src={home_back_img} className="img_title"/>
                <img src={home_back_img_pure} className="img_notitle"/>
                <Row className="banner_text">
                    <p className="tourmed_intro">

                        <div className="text1">
                            <span >TOURMED U.K</span>
                        </div>
                        <div className="text2">
                            <span >NUMBER 1</span>
                        </div>
                        <div className="text3">
                            <span >FOR TOURIST</span>
                        </div>
                        
                    </p>
                    <div className="btn_list">
                        <a href="/doctor_login">
                            <Button className="btn_doctor">I AM A DOCTOR</Button>
                        </a>
                        <a href="/patient_login">
                            <Button className="btn_booking">I NEED A DOCTOR</Button>
                        </a>
                    </div>
                </Row>
            </div>
        );
    }
}

export default MainHome;
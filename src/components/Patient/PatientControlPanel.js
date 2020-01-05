import React from 'react';
import {Row,Col,Button} from 'reactstrap';
import PatientControlSideBar from './PatientControlSideBar';
import DoctorSearchBox from './DoctorSearchBox';
import DoctorProfileCard from './DoctorProfileCard';
import '../../styles/components/patient_control_panel.css';

class PatientControlPanel extends React.Component{
    super(){

    }

    render(){
        return(
            <div className="patient_control_panel">
                <Row>
                    <Col lg="3" xl="3">
                        <PatientControlSideBar step="0" />
                    </Col>
                    <Col lg="9" xl="9">
                        <div className="caption_filter">
                            <span>FILTER</span>
                        </div>
                        <Row>
                            <Col lg="5" xl="5">
                                <DoctorSearchBox />
                            </Col>
                            <Col lg="7" xl="7">
                                <div class="doctor_profiles">
                                    <DoctorProfileCard></DoctorProfileCard>
                                    <DoctorProfileCard></DoctorProfileCard>
                                    <DoctorProfileCard></DoctorProfileCard>
                                    <DoctorProfileCard></DoctorProfileCard>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PatientControlPanel;
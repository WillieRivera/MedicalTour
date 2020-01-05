import React from 'react';
import '../../styles/components/carousel.css';
import '../../styles/components/doctor_home.css';
import {
    Button,
    Row,
    Col,
    } from 'reactstrap';
import CarouselDoctor from './CarouselDoctor';
import {withRouter} from 'react-router-dom';
class DoctorHome extends React.Component{


    render(){
        const style={
            alignItems:'center'
        }
        return(
            <div className="doctor_home">
                <Row style={style}>
                    <Col lg="12" xl="12">
                        <CarouselDoctor>

                        </CarouselDoctor>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(DoctorHome);
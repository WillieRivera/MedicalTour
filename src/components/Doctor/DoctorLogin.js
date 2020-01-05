import React from 'react';
import '../../styles/components/carousel.css';
import '../../styles/components/login_form.css';
import {
    Button,
    Row,
    Col,
    } from 'reactstrap';
import CarouselDoctor from './CarouselDoctor';
import DoctorLoginForm from './DoctorLogInForm';
import {withRouter} from 'react-router-dom';

class DoctorLogin extends React.Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            redirect: false,
        };
    }

    componentDidMount() {
        
          fetch(process.env.REACT_APP_BACKEND_API+'/checkToken',{
            credentials: 'include'
          })
          .then((response) => response.json())
          .then((responseJson) => {
            
            if(responseJson.email)
            {
                if(responseJson.user_type=='patient')
                {
                    alert("You already logged in as a patient");
                    this.props.history.push('/patient_home');
                }
                else
                {
                    this.props.history.push('/doctor_home');
                }
            }
            else{
                this.setState({loading:false});
            }
          })
          .catch((error) => {
            this.setState({loading:false});
            console.error(error);
          });
      }

    render(){
        const {loading}=this.state;
        if(loading){
            return null;
        }
        const style={
            alignItems:'center'
        }
        return(
            <div className="doctorlogin">
                <Row style={style}>
                    <Col lg="4" xl="4" className="loginform_col">

                        <DoctorLoginForm>

                        </DoctorLoginForm>

                    </Col>
                    <Col lg="8" xl="8">
                        <CarouselDoctor>

                        </CarouselDoctor>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(DoctorLogin);
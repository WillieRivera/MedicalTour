import React from 'react';
import '../../styles/components/patient_signup.css';
import StatusLeftSideBar from './PatientRegSubForms/StatusLeftSideBar';
import FormPersonalInfo from './PatientRegSubForms/FormPersonalInfo';
import FormHomeAddress from './PatientRegSubForms/FormHomeAddress';
import FormMedicalInfo from './PatientRegSubForms/FormMedicalInfo.js';
import FormHealthInsurance from './PatientRegSubForms/FormHealthInsurance';
import FormTravelInsurance from './PatientRegSubForms/FormTravelInsurance';
import FormTravelDestination from './PatientRegSubForms/FormTravelDestination';
import FormUploadDocumentation from './PatientRegSubForms/FormUploadDocumentation';
import {
    Button,
    Row,
    Col,
    } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft,faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
    

class PatientSignUp extends React.Component{
    constructor(){
        super();
        this.state={
            step:1,
            email_phone_verified:0,
            fields:{
                person_info:{
                    firstname:"",
                    lastname:"",
                    birthday:"",
                    sex:1,
                    email:"",
                    language1:"",
                    language2:"",
                    phone_number:"",
                    password:"",
                    confirm_password:"",
                    agree:0
                },
                home_address:{
                    building_number:"",
                    street_name:"",
                    city:"",
                    state_province:"",
                    country:"",
                    postal_code:"",
                    phone_code:"",
                    email_code:"",
                },
                medical_info:{
                    existing_problem:"",
                    taking_medication:"",
                    allergic_drug_foods:""
                },
                local_health_insurance:{
                    home_country:"",
                    health_insurance:""
                },
                travel_insurance:{
                    dest_country:"",
                    travel_insurance:""
                },
                travel_destination:{
                    hotel_name:"",
                    room_flat_number:"",
                    hotel_residency_phone:"",
                    contact_phone_destination:"",
                    street_name:"",
                    city:"",
                    state_province:"",
                    country:"",
                },
                documents_upload:{
                    profile_image:"",
                    passport:"",
                    local_insurance_card:"",
                    travel_insurance_policy:"",
                    security_question:"",
                    security_answer:""
                }
            }
        }
        this.nextStep=this.nextStep.bind(this);
        this.prevStep=this.prevStep.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleMailVerifyClick=this.handleMailVerifyClick.bind(this);
        this.handlePhoneVerifyClick=this.handlePhoneVerifyClick.bind(this);
    }

    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });
    }

    nextStep=()=>{
        const {step}=this.state;
        if(step==1)
        {
            
            if((this.state.fields.person_info.firstname=="")||(this.state.fields.person_info.lastname=="")||(this.state.fields.person_info.email=="")||
            (this.state.fields.person_info.sex==2)||(this.state.fields.person_info.phone_number=="")||(this.state.fields.person_info.password=="")||
            (this.state.fields.person_info.agree==0))
            {
                alert("You didn't complete your information");
                return;
            }
            if(this.state.fields.person_info.password!=this.state.fields.person_info.confirm_password)
            {
                alert("Password doesn't match");
                return;
            }
            
        }
        if(step==2)
        {

            const jsondata={
                email:this.state.fields.person_info.email,
                phone:this.state.fields.person_info.phone_number,
                phone_code:this.state.fields.home_address.phone_code,
                email_code:this.state.fields.home_address.email_code
            }
            
            fetch(process.env.REACT_APP_BACKEND_API+'/verify/check', {
                method: 'POST',
                body: JSON.stringify(jsondata),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res);
                if (res.status === 200) {

                    alert("email and phonenumber confirmed");
                    this.setState({email_phone_verified:1});
                    this.setState({
                        step:step+1
                    });

                } else {
                    alert("Please confirm email and phonenumber");
                    return;
                }
            })
            
        }
        else{
            this.setState({
                step:step+1
            });
        }
    }

    handleMailVerifyClick(e){

        const jsondata={
            email:this.state.fields.person_info.email
        }
        alert("Sending Email");
        fetch(process.env.REACT_APP_BACKEND_API+'/verify/sendEmail', {
            method: 'POST',
            body: JSON.stringify(jsondata),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log(res);
            if (res.status === 200) {
                alert("Code Successfully sent");
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert('Error Sending Email');
          });



        e.preventDefault();
    }

    handlePhoneVerifyClick(e){
        const jsondata={
            phone:this.state.fields.person_info.phone_number
        }
        alert("Sending message to the phone");
        fetch(process.env.REACT_APP_BACKEND_API+'/verify/sendPhone', {
            method: 'POST',
            body: JSON.stringify(jsondata),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            console.log(res);
            if (res.status === 200) {
                alert("Code Successfully sent");
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert('Error Sending message to the phone');
          });



        e.preventDefault();
    }

    handleSubmit(e){
    
        
        //data.append('file', this.state.selectedFile)
        const data = new FormData();
        const fields = JSON.stringify(this.state.fields);
        console.log(fields);

        data.append('fields', fields);
        data.append('profile_image',this.state.fields.documents_upload.profile_image);
        data.append('passport',this.state.fields.documents_upload.passport);
        data.append('local_insurance_card',this.state.fields.documents_upload.local_insurance_card);
        data.append('travel_insurance_policy',this.state.fields.documents_upload.travel_insurance_policy);
        

        
        

        fetch(process.env.REACT_APP_BACKEND_API+"/register/patient",{
            method:'POST',
            credentials: 'include',
            body:data
        })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.text())
        .then(
        res=>{
            
            alert(res);
            this.props.history.push('/patient_login');
            
        })
        
        e.preventDefault();
    }


    handleChange = (step,input) => e =>{
    
        const {fields}=this.state;

        
        const current_fields=fields;
        if(e.target.type=='file'){
            current_fields[step][input]=e.target.files[0]
            console.log(current_fields[step][input]);
        }
        else{
            current_fields[step][input]=e.target.value;
        }
        

        this.setState({
            fields:current_fields
        });

    }

    render(){
        let cur_step=this.state.step;
        const {person_info,home_address,medical_info,local_health_insurance,travel_insurance,travel_destination,documents_upload}=this.state.fields;
        const handleChange=this.handleChange;
        const handleSubmit=this.handleSubmit;
        const handleMailVerifyClick=this.handleMailVerifyClick;
        const handlePhoneVerifyClick=this.handlePhoneVerifyClick;

        const style={
            alignItems:'center'
        }
        const prevStep=this.prevStep;
        const nextStep=this.nextStep;
        return(
            
            <div className="patient_signup">
                <Row >
                    <Col xl="5" className="step_status">                                                                                                                         
                        <StatusLeftSideBar step={this.state.step}>

                        </StatusLeftSideBar>

                    </Col>
                    <Col xl="7" className="current_form">

                        {/* Current Step Form Presentation */}
                        {(function() {
                            switch(cur_step) {
                                case 1:
                                    return <FormPersonalInfo values={person_info} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 2:
                                    return <FormHomeAddress values={home_address} handleChange={handleChange} handleSubmit={handleSubmit}
                                    handleMailVerifyClick={handleMailVerifyClick} handlePhoneVerifyClick={handlePhoneVerifyClick}/>;
                                case 3:
                                    return <FormMedicalInfo values={medical_info} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 4:
                                    return <FormHealthInsurance values={local_health_insurance} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 5:
                                    return <FormTravelInsurance values={travel_insurance} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 6:
                                    return <FormTravelDestination values={travel_destination} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 7:    
                                    return <FormUploadDocumentation values={documents_upload} handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                default:
                                    return null;
                            }
                        })()}

                        <div className="pagination">
                            
                            {(function() {
                                    if(cur_step>1)
                                    {
                                        return(
                                            <button onClick={prevStep}>
                                                <FontAwesomeIcon  icon={faChevronCircleLeft}  ></FontAwesomeIcon>
                                            </button>
                                        )
                                    }
                            })()}
                            
                            {(function() {
                                    if(cur_step<7)
                                    {
                                        return(
                                            <button onClick={nextStep}>
                                                <FontAwesomeIcon  icon={faChevronCircleRight} ></FontAwesomeIcon>  
                                            </button>
                                        )
                                    }
                            })()}
                            
                            
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PatientSignUp;
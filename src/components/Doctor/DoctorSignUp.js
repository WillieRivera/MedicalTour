import React from 'react';
import '../../styles/components/doctor_signup.css';
import StatusLeftSideBar from './DoctorRegSubForms/StatusLeftSideBar';
import FormPersonalInfo from './DoctorRegSubForms/FormPersonalInfo';
import FormEducationTraining from './DoctorRegSubForms/FormEducationTraining';
import FormCertificationLicence from './DoctorRegSubForms/FormCertLicence';
import FormClinicAddress from './DoctorRegSubForms/FormClinicAddress';
import FormInsuranceAcceptance from './DoctorRegSubForms/FormInsuranceAcceptance';
import FormHomeAddress from './DoctorRegSubForms/FormHomeAddress';
import FormUploadDocumentation from './DoctorRegSubForms/FormUploadDocumentation';
import {
    Button,
    Row,
    Col,
    } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft,faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
    

class DoctorSignUp extends React.Component{
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
                education_training:{
                    medical_school_name:"",
                    hospital_internship:"",
                    hospital_residency:"",
                    hospital_fellowship:"",
                    licence_number:"",
                    experience_year:""
                },
                certificate_licence:{
                    speciality:"",
                    highest_certification_title:"",
                    awards_honors:"",
                    publications_link:"",
                    professional_statement:""
                },
                clinic_address:{
                    clinic_name:"",
                    street_name_building_number:"",
                    city:"",
                    state_province:"",
                    country:"",
                    postal_code:""
                },
                insurance_acceptance:{
                    if_accpet_insurance:1,
                    local_insurance:"",
                    travel_insurance:"",
                    fee_local_clinic_visit:0,
                    fee_local_home_visit:0,
                    fee_nonlocal_clinic_visit:0,
                    fee_nonlocal_home_visit:0
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
                documents_upload:{
                    profile_image:"",
                    medical_licence:"",
                    highest_certificate:"",
                    clinic_licence:"",
                    clinic_utility_bill:"",
                    home_utility_bill:""
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
                alert(this.state.fields.person_info.password);
                alert(this.state.fields.person_info.confirm_password);
                alert("Password doesn't match");
                return;
            }
            
        }
        if(step==6)
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
        data.append('medical_licence',this.state.fields.documents_upload.medical_licence);
        data.append('highest_certificate',this.state.fields.documents_upload.highest_certificate);
        data.append('clinic_licence',this.state.fields.documents_upload.clinic_licence);
        data.append('clinic_utility_bill',this.state.fields.documents_upload.clinic_utility_bill);
        data.append('home_utility_bill',this.state.fields.documents_upload.home_utility_bill);
        
        

        fetch(process.env.REACT_APP_BACKEND_API+"/register/doctor",{
            method:'POST',
            body:data,
            credentials: 'include'
        })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.text())
        .then(
        res=>{
            
            alert(res);
            this.props.history.push('/doctor_home');
            
        })
        
        e.preventDefault();
    }

    handleChange = (step,input) => e =>{
    
        const {fields}=this.state;

        
        const current_fields=fields;
        if(e.target.type=='file'){
            current_fields[step][input]=e.target.files[0]
        }
        else{
            current_fields[step][input]=e.target.value;
        }
        



        this.setState({
            fields:current_fields
        });

        //alert(this.state.fields.person_info.sex);
        
        
    }

    render(){

        const cur_step=this.state.step;
        const {person_info,education_training,certificate_licence,clinic_address,insurance_acceptance,home_address,documents_upload}=this.state.fields;
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
            
            <div className="doctor_signup">
                <Row style={style}>
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
                                    return <FormEducationTraining values={education_training}  handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 3:
                                    return <FormCertificationLicence values={certificate_licence}  handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 4:
                                    return <FormClinicAddress values={clinic_address}  handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 5:
                                    return <FormInsuranceAcceptance values={insurance_acceptance}  handleChange={handleChange} handleSubmit={handleSubmit}/>;
                                case 6:
                                    return <FormHomeAddress values={home_address}  handleChange={handleChange} handleSubmit={handleSubmit} 
                                    handleMailVerifyClick={handleMailVerifyClick} handlePhoneVerifyClick={handlePhoneVerifyClick}
                                    />;
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

export default withRouter(DoctorSignUp);
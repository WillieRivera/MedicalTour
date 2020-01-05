import React, { useState } from "react";
import { Button, Form,FormGroup,Label,Input} from "reactstrap";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser,faQuestion,faPen } from "@fortawesome/free-solid-svg-icons";
import {withRouter} from 'react-router-dom';

class PatientLoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      question:"",
      answer:""
    }
    
    this.setEmail=this.setEmail.bind(this);
    this.setPassword=this.setPassword.bind(this);
    this.setQuestion=this.setQuestion.bind(this);
    this.setAnswer=this.setAnswer.bind(this);

    this.validateForm=this.validateForm.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  setAnswer(e){
    this.setState({answer:e.target.value});
  }

  setQuestion(e){
    this.setState({question:e.target.value});
  }

  setEmail(e){
    this.setState({email:e.target.value});
    this.validateForm();
  }

  setPassword(e){
    this.setState({password:e.target.value});
    this.validateForm();
  }

  validateForm() {
    return (this.state.email.length > 0 && this.state.password.length > 0);
  }





  handleSubmit(event) {

    event.preventDefault();
    fetch(process.env.REACT_APP_BACKEND_API+'/login/patient', {
      method: 'POST',
      body: JSON.stringify(this.state),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        alert("Successfully Logged In");
        this.props.history.push('/patient_home');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });

  }

  render(){
      return (
        <div className="Login">
          <Form onSubmit={this.handleSubmit} className="modal-login">
            <FormGroup>
                <FontAwesomeIcon  icon={faUser} ></FontAwesomeIcon>  
                <Input type="email" name="email" id="Email_Phone" placeholder="Email or phone" value={this.state.email} onChange={this.setEmail}/>
            </FormGroup>
            <FormGroup>
                <FontAwesomeIcon  icon={faLock} ></FontAwesomeIcon>  
                <Input type="password" name="password" id="Password" placeholder="Password" value={this.state.password} onChange={this.setPassword}/>
            </FormGroup>
            <FormGroup>
                <FontAwesomeIcon  icon={faQuestion} ></FontAwesomeIcon>  
                <Input type="question" name="question" id="Question" placeholder="Security Question" value={this.state.question} onChange={this.setQuestion}/>
            </FormGroup>
            <FormGroup>
                <FontAwesomeIcon  icon={faPen} ></FontAwesomeIcon>  
                <Input type="answer" name="answer" id="Answer" placeholder="Answer" value={this.state.question} onChange={this.setAnswer}/>
            </FormGroup>
            <Button block disabled={!this.validateForm()} type="submit" className="round_btn login_btn">
              Login
            </Button>
            <FormGroup className="forgot_pass">
                <a href="/forget_password">
                  Forgot Password?
                </a>
            </FormGroup>
            <FormGroup className="submit_section">
                <p>
                  Not a memebr yet?
                </p>
                <p>
                  <a href="/doctor_signup">Doctor Signup</a>&nbsp;|&nbsp;<a href="/patient_signup">Patient Signup</a>
                </p>
            </FormGroup>
          </Form>
        </div>
    );
  }
}
export default withRouter(PatientLoginForm);

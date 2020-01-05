import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";
import LanguageBox from './LanguageCombo';



export default function FormPersonalInfo(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const {values,handleChange}=props;

  return (
    
    <div className="form_personal_info">
      <div className="form_caption">
        Give us more details about yourself
      </div>
      <Form onSubmit={handleSubmit}>

        {/* FirstName-LastName */}
        <FormGroup>
            <Row>
              <Col lg="6" xl="6">
                <Input type="text" name="firstname" id="FirstName" placeholder="First Name" defaultValue={values.firstname}
                 onChange={handleChange('person_info','firstname')}
                />
              </Col>
              <Col lg="6" xl="6">
                <Input type="text" name="lastname" id="LastName" placeholder="Last Name" defaultValue={values.lastname}
                onChange={handleChange('person_info','lastname')}
                />
              </Col>
            </Row>
        </FormGroup>

        {/* birth,male,female */}
        <FormGroup>
          <Row>
            <Col lg="6" xl="6">
                <Input type="date" name="birth" id="Birth" placeholder="" defaultValue={values.birthday}
                onChange={handleChange('person_info','birthday')} placeholder="Choose your birthday"
                />
            </Col>
            <Col lg="6" xl="6">
                <Row className="sex_input">
                  <Col lg="6" xl="6">
                        {(function() {
                            switch(values.sex) {
                                case 1:
                                case '1':
                                    return <input type="radio" name="gender" value="1" onClick={handleChange('person_info','sex')} checked/>;
                                case 2:
                                case '2':
                                case 0:
                                case '0':
                                    return <input type="radio" name="gender" value="1" onClick={handleChange('person_info','sex')} />;
                            }
                        })()}
                        Male
                  </Col>
                  <Col lg="6" xl="6">
                        {(function() {
                            switch(values.sex) {
                                case 0:
                                case '0':
                                    return <input type="radio" name="gender" value="0" onClick={handleChange('person_info','sex')} checked/>;
                                case 2:
                                case '2':
                                case 1:
                                case '1':
                                    return <input type="radio" name="gender" value="0" onClick={handleChange('person_info','sex')} />;
                            }
                        })()}
                        Female
                  </Col>
                </Row>
            </Col>
          </Row>
        </FormGroup>

        {/* Email */}
        <FormGroup>
            <Input type="email" name="email" id="Email" placeholder="E-mail" defaultValue={values.email}
                onChange={handleChange('person_info','email')}/>
        </FormGroup>

        {/*Language1,Language2*/}
        <FormGroup>
          <Row>
            <Col lg="6" xl="6">
              <LanguageBox placeholder="Language 1" defaultValue={values.language1} step="person_info" input="language1"
                handleChange={handleChange}></LanguageBox>
            </Col>
            <Col lg="6" xl="6">
              <LanguageBox placeholder="Language 2" defaultValue={values.language2} step="person_info" input="language2"
                handleChange={handleChange}></LanguageBox>
            </Col>
          </Row>
        </FormGroup>


        {/*Phone number*/}
         <FormGroup>
            <Input type="tel" name="phonenumber" id="PhoneNumber" placeholder="Phone Number" defaultValue={values.phone_number}
                onChange={handleChange('person_info','phone_number')}/>
         </FormGroup>

        
        {/*Password,Reset Password*/}
        <FormGroup>
            <Row>
              <Col lg="6" xl="6">
                <Input type="password" name="password" id="password" placeholder="Password" defaultValue={values.password} 
                onChange={handleChange('person_info','password')} />
              </Col>
              <Col lg="6" xl="6">
                <Input type="password" name="repeatpassword" id="repeatpassword" placeholder="Repeat password" defaultValue={values.confirm_password} 
                onChange={handleChange('person_info','confirm_password')}/>
              </Col>
            </Row>
        </FormGroup>

        {/*term_condition*/}
        <FormGroup>
          <Row className="term_section">
              {(function() {
                switch(values.agree) {
                    case 0:
                    case '0':
                        return <Input type="checkbox" name="term_condition" id="term_condition" value="1" onClick={handleChange('person_info','agree')}/>;
                    case 1:
                    case '1':
                        return <Input type="checkbox" name="term_condition" id="term_condition" value="0" onClick={handleChange('person_info','agree')} checked/>;
                }
            })()}
            
            <span>
              I agree to the <span style={{color:'rgb(76,128,229)'}}>Terms and Conditions</span>
            </span>
          </Row>
        </FormGroup>

      </Form>
    </div>
  );
}
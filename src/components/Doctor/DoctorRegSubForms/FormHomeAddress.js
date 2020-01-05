import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";



export default function FormHomeAddress(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleclick(event){
      alert("123");
      event.preventDefault();
  }
  const{values,handleChange,handleMailVerifyClick,handlePhoneVerifyClick}=props;

  return (
    <div className="form_home_address">
        <div className="form_caption">
            Enter your address to complete the verification process
        </div>
        <Form onSubmit={handleSubmit}>

            {/* Building number */}
            <FormGroup>
                <Row>
                    <Input type="text" name="building_number" id="building_number" placeholder="Building number" defaultValue={values.building_number}
                onChange={handleChange('home_address','building_number')} />
                </Row>
            </FormGroup>

            {/* Street name */}
            <FormGroup>
                <Row>
                    <Input type="text" name="street_name" id="street_name" placeholder="Street name" defaultValue={values.street_name}
                onChange={handleChange('home_address','street_name')}/>
                </Row>
            </FormGroup>
            
            {/* state,postal code*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="state_province" id="state_province" placeholder="State/province" defaultValue={values.state_province}
                onChange={handleChange('home_address','state_province')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="postcode" id="postcode" placeholder="Postal code" defaultValue={values.postal_code}
                onChange={handleChange('home_address','postal_code')}/>
                    </Col>
                </Row>
            </FormGroup>


            {/* city,country */}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="city" id="city" placeholder="City" defaultValue={values.city}
                onChange={handleChange('home_address','city')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="country" id="country" placeholder="Country" defaultValue={values.country}
                onChange={handleChange('home_address','country')}/>
                    </Col>
                </Row>
            </FormGroup>


            {/* Verify phone now*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="button" value="Verify phone now" className="phone_verify" onClick={handlePhoneVerifyClick}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="phone_code" id="phone_code" placeholder="Enter code here" defaultValue={values.phone_code}
                onChange={handleChange('home_address','phone_code')}/>
                    </Col>
                </Row>
            </FormGroup>

            {/* Verify E-mail*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="button"   value="Verify E-mail" className="mail_verify" onClick={handleMailVerifyClick}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="email_code" id="email_code" placeholder="Enter code here"  defaultValue={values.email_code}
                onChange={handleChange('home_address','email_code')}/>
                    </Col>
                </Row>
            </FormGroup>


        </Form>
    </div>
  );
}
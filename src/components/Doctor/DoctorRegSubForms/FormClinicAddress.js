import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";


//const battuta_api_key="06fe4616ce7c9c4c367d8300dd4501c3";


export default function FormClinicAddress(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const{values,handleChange}=props;

  return (
    <div className="form_clinc_address">
        <div className="form_caption">
            Build your reputation and let patients know you better
        </div>
        <Form onSubmit={handleSubmit}>

            {/* Clinic name */}
            <FormGroup>
                <Row>
                    <Input type="text" name="clinic_name" id="clinic_name" placeholder="Clinic name" defaultValue={values.clinic_name}
                onChange={handleChange('clinic_address','clinic_name')}/>
                </Row>
            </FormGroup>

            {/* Street addresss including building number */}
            <FormGroup>
                <Row>
                    <Input type="text" name="street_address" id="street_address" placeholder="Street addresss including building number"  defaultValue={values.street_name_building_number}
                onChange={handleChange('clinic_address','street_name_building_number')} />
                </Row>
            </FormGroup>
            
            {/* state,postal code*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="state_province" id="state_province" placeholder="State/province"  defaultValue={values.state_province}
                onChange={handleChange('clinic_address','state_province')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="postcode" id="postcode" placeholder="Postal code"  defaultValue={values.postal_code}
                onChange={handleChange('clinic_address','postal_code')} />
                    </Col>
                </Row>
            </FormGroup>


            {/* city,country */}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="city" id="city" placeholder="City"  defaultValue={values.city}
                onChange={handleChange('clinic_address','city')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="country" id="country" placeholder="Country"  defaultValue={values.country}
                onChange={handleChange('clinic_address','country')}/>
                    </Col>
                </Row>
            </FormGroup>


            {/* Clinic contact phone*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" disabled  placeholder="Clinic contact phone:" />
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="clinic_phone" id="clinic_phone" placeholder="Enter phone number here"  defaultValue={values.clinic_contact_phone}
                onChange={handleChange('clinic_address',' clinic_contact_phone')}/>
                    </Col>
                </Row>
            </FormGroup>

            {/* Clinic licence number*/}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" disabled  placeholder="Clinic licence number:" />
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="clinic_licence" id="clinic_licence" placeholder="Enter licence number here"  defaultValue={values.clinic_licence_number}
                onChange={handleChange('clinic_address','clinic_licence_number')}/>
                    </Col>
                </Row>
            </FormGroup>


        </Form>
    </div>
  );
}
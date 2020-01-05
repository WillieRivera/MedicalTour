import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";
import CountryBox from './CountryCombo';


export default function FormHealthInsurance(props) {

  

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const {values,handleChange}=props;

  return (
    <div className="form_health_insurance">
      <div className="form_caption">
        Help us to find your doctors within your insurance network
      </div>
      <Form onSubmit={handleSubmit}>

        
        {/* title */}
        <FormGroup>
            <Input type="text" disabled name="label"  id="label" placeholder="Add your local health insurance in your home country" />
        </FormGroup>


        {/* Home Country */}
        <FormGroup>
            <CountryBox placeholder="Home Country" defaultValue={values.home_country} step="local_health_insurance" input="home_country"
                handleChange={handleChange}/>
        </FormGroup>

        {/* health insurance at home */}
        <FormGroup>
            <Input type="select"  defaultValue={values.existing_problem} onChange={handleChange('local_health_insurance','health_insurance')}>
                <option value="" disabled selected hidden>Find your health insurance at home</option>
                <option value="Individual Health Quotes">Individual Health Quotes</option>
                <option value="HealthInsurance.net">HealthInsurance.net</option>
                <option value="NationalGeneral">NationalGeneral</option>
            </Input>
        </FormGroup>

        

      </Form>
    </div>
  );
}
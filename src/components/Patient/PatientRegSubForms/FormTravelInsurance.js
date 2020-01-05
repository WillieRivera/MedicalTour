import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";
import CountryBox from './CountryCombo';


export default function FormTravelInsurance(props) {

  

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
        What travel insurance is recognized in your destination?
      </div>
      <Form onSubmit={handleSubmit}>

        


        {/* destination */}
        <FormGroup>
            <CountryBox placeholder="Select destination" defaultValue={values.dest_country} step="travel_insurance" input="dest_country"
                handleChange={handleChange}/>
        </FormGroup>

        {/* health insurance at home */}
        <FormGroup>
            <Input type="select" defaultValue={values.travel_insurance} onChange={handleChange('travel_insurance','travel_insurance')}>
                <option value="" disabled selected hidden>Choose a travel insurance</option>
                <option value="Individual Health Quotes">Individual Health Quotes</option>
                <option value="HealthInsurance.net">HealthInsurance.net</option>
                <option value="NationalGeneral">NationalGeneral</option>
            </Input>
        </FormGroup>

        

      </Form>
    </div>
  );
}
import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";



export default function FormMedicalInfo(props) {

  

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
        Let the booked doctor help you properly
      </div>
      <Form onSubmit={handleSubmit}>

        
        {/* health problem */}
        <FormGroup>
            <p>Do you have any existing health problem?</p>
            <Input type="select" defaultValue={values.existing_problem} onChange={handleChange('medical_info','existing_problem')}>
                <option value="" disabled selected hidden>Choose more than one if you need to</option>
                <option value="Physical Activity and Nutrition">Physical Activity and Nutrition</option>
                <option value="Overweight and Obesity">Overweight and Obesity</option>
                <option value="Substance Abuse">Substance Abuse</option>
            </Input>
        </FormGroup>

        {/* medication */}
        <FormGroup>
            <p>Are you currently taking medications?</p>
            <Input type="select"  defaultValue={values.taking_medication} onChange={handleChange('medical_info','taking_medication')}>
                <option value="" disabled selected hidden>Choose more than one if you need to</option>
                <option value="Acetaminophen">Acetaminophen</option>
                <option value="Adderall">Adderall</option>
                <option value="Alprazolam">Alprazolam</option>
            </Input>
        </FormGroup>


        {/* allergy */}
        <FormGroup>
            <p>Do you have any allergies?</p>
            <Input type="select"  defaultValue={values.allergic_drug_foods} onChange={handleChange('medical_info','allergic_drug_foods')}>
                <option value="" disabled selected hidden>Choose more than one if you need to</option>
                <option value="Diphenhydramine">Diphenhydramine </option>
                <option value="Chlorpheniramine">Chlorpheniramine </option>
                <option value="Brompheniramine">Brompheniramine </option>
            </Input>
        </FormGroup>
        

      </Form>
    </div>
  );
}
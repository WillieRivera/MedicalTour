import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";


export default function FormInsuranceAcceptance(props) {

  

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const {values,handleChange}=props;

  return (
    <div className="form_insurance_acceptance">
      <div className="form_caption">
        Enter your insurance informations
      </div>
      <Form onSubmit={handleSubmit}>

        


        {/* accept */}
        <FormGroup>
            <Input type="select" defaultValue={values.if_accpet_insurance} onChange={handleChange('insurance_acceptance','if_accpet_insurance')}>
                <option value="2" disabled selected hidden>Do you accept insurance</option>
                <option value="1">Yes, I do</option>
                <option value="0">No, I don't</option>
            </Input>
        </FormGroup>
        

        <FormGroup style={{padding:'20px 20px'}}>
            You can choose more than one country
        </FormGroup>

        {/* local insurance */}
        <FormGroup>
            <Input type="select" defaultValue={values.local_insurance} onChange={handleChange('insurance_acceptance','local_insurance')}>
                <option value="" disabled selected hidden>Local insurance</option>
                <option value="Individual Health Quotes">Individual Health Quotes</option>
                <option value="HealthInsurance.net">HealthInsurance.net</option>
                <option value="NationalGeneral<">NationalGeneral</option>
            </Input>
        </FormGroup>

        {/* travel insurance */}
        <FormGroup>
            <Input type="select" defaultValue={values.travel_insurance} onChange={handleChange('insurance_acceptance','travel_insurance')}>
                <option value="" disabled selected hidden>Travel insurance</option>
                <option value="Individual Health Quotes">Individual Health Quotes</option>
                <option value="HealthInsurance.net">HealthInsurance.net</option>
                <option value="NationalGeneral<">NationalGeneral</option>
            </Input>
        </FormGroup>

        <FormGroup style={{padding:'0px 20px'}} className="fees">
            <div>
                <span>Fees for clinic visits(locals)</span>
                <Input type="number" name="clinic_vist_local_fee" id="clinic_vist_local_fee" placeholder=""  defaultValue={values.fee_local_clinic_visit}
                 onChange={handleChange('insurance_acceptance','fee_local_clinic_visit')}/>
            </div>
            <div>
                <span>Fees for home visits(locals)</span>
                <Input type="number" name="clinic_vist_local_fee" id="clinic_vist_local_fee" placeholder="" defaultValue={values.fee_local_home_visit}
                 onChange={handleChange('insurance_acceptance','fee_local_home_visit')}/>
            </div>
            <div>
                <span>Fees for clinic visits(non locals)</span>
                
                <span class="input-group-addon">
                    $&nbsp;<Input type="number" name="clinic_vist_local_fee" id="clinic_vist_local_fee" placeholder="" defaultValue={values.fee_nonlocal_clinic_visit} 
                    onChange={handleChange('insurance_acceptance','fee_nonlocal_clinic_visit')}/>
                </span>
            </div>
            <div>
                <span>Fees for home visits(non locals)</span>
                <span class="input-group-addon">
                    $&nbsp;<Input type="number" name="clinic_vist_local_fee" id="clinic_vist_local_fee" placeholder="" defaultValue={values.fee_nonlocal_home_visit} 
                    onChange={handleChange('insurance_acceptance','fee_nonlocal_home_visit')} />
                </span>
            </div>
        </FormGroup>

        

      </Form>
    </div>
  );
}
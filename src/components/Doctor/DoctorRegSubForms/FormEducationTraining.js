import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";



export default function FormEducationTraining(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const state=[
    {
        'id':'medical_school',
        'type':'text',
        'fieldname':'medical_school_name',
        'placeholder':'Enter medical school name',
    },
    {
        'id':'hospital_internship',
        'type':'text',
        'fieldname':'hospital_internship ',
        'placeholder':'Enter hospital of internship',
    },
    {
        'id':'hospital_residency',
        'type':'text',
        'fieldname':'hospital_residency',
        'placeholder':'Enter hospital of residency',
    },
    {
        'id':'hospital_fellowship',
        'type':'text',
        'fieldname':'hospital_fellowship',
        'placeholder':'Enter hospital of fellowship',
    },
    {
        'id':'licence_number',
        'type':'textarea',
        'fieldname':'licence_number',
        'placeholder':'Enter provide licence number',
    },
    {
        'id':'expeirence_year',
        'type':'number',
        'fieldname':'expeirence_year',
        'placeholder':'experience_year',
    },
    
  ]


  const{values,handleChange}=props;

  return (
    <div className="education_training">
        <div className="form_caption">
            Enter your education informations
        </div>
        <Form onSubmit={handleSubmit}>
            {
                state.map(function(input_item,index){
                    return(
                        <FormGroup key={index}>
                            <Row>
                                <Input type={input_item.type}  id={input_item.id} placeholder={input_item.placeholder} defaultValue={values[input_item.fieldname]}
                                onChange={handleChange('education_training',input_item.fieldname)} />
                            </Row>
                        </FormGroup>
                    )
                })
            }
            


        </Form>
    </div>
  );
}
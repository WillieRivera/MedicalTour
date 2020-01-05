import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";
import { statement } from "@babel/template";



export default function FormCertificationLicence(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state=[
    {
        'id':'cert_title',
        'placeholder':'Highest certification title',
        'fieldname':'highest_certification_title',
    },
    {
        'id':'awards_honors ',
        'placeholder':'Awards and Honors',
        'fieldname':'awards_honors',
    },
    {
        'id':'publication_link',
        'placeholder':'Enter Publications link',
        'fieldname':'publications_link',
    }
  ]

  const{values,handleChange}=props;

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="education_training">
        <div className="form_caption">
            Build your reputation and let patients know you better
        </div>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Row>
                    <Input type="select" defaultValue={values.speciality} onChange={handleChange('certificate_licence','speciality')}>
                        <option value="" disabled selected hidden>Speciality</option>
                        <option value="Family Medicine">Family Medicine</option>
                        <option value="Psychiatry">Psychiatry</option>
                        <option value="Internal Medicine">Internal Medicine</option>
                        <option value="Hospitalists">Hospitalists</option>
                    </Input>
                </Row>
            </FormGroup>
            {
                state.map(function(input_item,index){
                    return(
                        <FormGroup key={index}>
                            <Row>
                                <Input type="text"  id={input_item.id} placeholder={input_item.placeholder} defaultValue={values[input_item.fieldname]}
                                onChange={handleChange('certificate_licence',input_item.fieldname)} />
                            </Row>
                        </FormGroup>
                    )
                })
            }
            

            {/* Professional statement */}
            <FormGroup>
                <Row>
                    <Input type="textarea" name="licence_number" id="licence_number" placeholder="Professional statement" defaultValue={values.professional_statement}
                onChange={handleChange('certificate_licence','professional_statement')} />
                </Row>
            </FormGroup>



        </Form>
    </div>
  );
}
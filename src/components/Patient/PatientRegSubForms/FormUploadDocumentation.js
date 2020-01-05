import React, { useState } from "react";
import { CustomInput, Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";



export default function FormUploadDocumentation(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }


  const files=[
    'profile_image',
    'passport',
    'local_insurance_card',
    'travel_insurance_policy',
  ]

  const {values,handleChange,handleSubmit}=props;

  return (
    <div className="form_patient_docuemtns">
        <div className="form_caption">
            Upload documentations
        </div>
        <Form onSubmit={handleSubmit}>

            
            {/* Profile image */}
            <FormGroup>
                {
                    files.map((item,index)=>{
                        return(
                            <Row key={index}>
                                <CustomInput type="file" label={item.replace('_',' ')} id={item} name={item} onChange={handleChange('documents_upload',item)} />
                            </Row>
                        );
                    })
                }
            </FormGroup>
            

            {/* Security question */}
            <FormGroup>
              <Row>
                <Input type="select" defaultValue={values.security_question} onChange={handleChange('documents_upload','security_question')}>
                    <option value="" disabled selected hidden>Add a security question?</option>
                    <option value="">My favourite movie</option>
                    <option value="">My first pet name</option>
                    <option value="">My favourtie music</option>
                </Input>
              </Row>
            </FormGroup>
            
            {/* Security Answer */}
            <FormGroup>
                <Row>
                    <Input type="text" name="security_answer" id="security_answer" placeholder="Answer security question" defaultValue={values.security_answer}
                     onChange={handleChange('documents_upload','security_answer')}/>
                </Row>
            </FormGroup>

            <FormGroup className="submit_btn">
                <Row>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Row>
            </FormGroup>
        </Form>
    </div>
  );
}
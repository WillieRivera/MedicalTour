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
    'medical_licence',
    'highest_certificate',
    'clinic_licence',
    'clinic_utility_bill',
    'home_utility_bill'
  ]

  const {values,handleChange,handleSubmit}=props;

  return (
    
    <div className="form_home_address">
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
                                <CustomInput type="file" label={item.replace('_',' ')} id={item} name={item}
                                onChange={handleChange('documents_upload',item)} />
                            </Row>
                        );
                    })
                }
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
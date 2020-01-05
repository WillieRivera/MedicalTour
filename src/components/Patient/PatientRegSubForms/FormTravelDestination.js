import React, { useState } from "react";
import { Row,Col,Button, Form,FormGroup,Label,Input} from "reactstrap";


//const battuta_api_key="06fe4616ce7c9c4c367d8300dd4501c3";


export default function FormTravelDestination(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function validateForm() {
    //return email.length > 0 && password.length > 0;
    return 1;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const {values,handleChange}=props;
  
  return (
    <div className="form_travel_destination">
        <div className="form_caption">
            Build your reputation and let patients know you better
        </div>
        <Form onSubmit={handleSubmit}>


            
            
            {/* country,city */}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="Country" id="Country" placeholder="Country" defaultValue={values.country} 
                        onChange={handleChange('travel_destination','country')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="City" id="City" placeholder="City" defaultValue={values.city} 
                        onChange={handleChange('travel_destination','city')}/>
                    </Col>
                </Row>
            </FormGroup>


            {/* Hotel Name */}
            <FormGroup>
                <Input type="text" name="Hotel" id="Hotel" placeholder="Hotel Name" defaultValue={values.hotel_name} 
                        onChange={handleChange('travel_destination','hotel_name')} />
            </FormGroup>

           
            {/* Room/Flat number */}
            <FormGroup>
                <Input type="text" name="Room" id="Room" placeholder="Room/Flat Number" defaultValue={values.room_flat_number} 
                        onChange={handleChange('travel_destination','room_flat_number')}/>
            </FormGroup>



            {/* Hotel/residency phone */}
            <FormGroup>
                <Input type="text" name="phone" id="phone" placeholder="Hotel/residency phone" defaultValue={values.hotel_residency_phone} 
                        onChange={handleChange('travel_destination','hotel_residency_phone')}/>
            </FormGroup>



            {/* Street */}
            <FormGroup>
                <Input type="text" name="Street" id="Street" placeholder="Street" defaultValue={values.street_name} 
                        onChange={handleChange('travel_destination','street_name')}/>
            </FormGroup>


            {/* state,contactphone */}
            <FormGroup>
                <Row>
                    <Col lg="6" xl="6">
                        <Input type="text" name="state" id="state" placeholder="State/province" defaultValue={values.state_province} 
                        onChange={handleChange('travel_destination','state_province')}/>
                    </Col>
                    <Col lg="6" xl="6">
                        <Input type="text" name="contactphone" id="contactphone" placeholder="Contact phone in your destination" defaultValue={values.contact_phone_destination} 
                        onChange={handleChange('travel_destination','contact_phone_destination')}/>
                    </Col>
                </Row>
            </FormGroup>

        </Form>
    </div>
  );
}
import React from 'react';
import '../../styles/components/about.css';
import about_back from '../../assets/img/about_back.jpg'
import { Button, Form,FormGroup,Label,Input, Row, Col} from 'reactstrap';


class About extends React.Component{
    render(){
        return(
            <div class="contact_us">
                <Row>
                    <Col lg="4" xl="5" className="img_side">

                        <img src={about_back}/>

                    </Col>
                    <Col lg="12" xl="7">
                        <div className="about_info">
                            <div className="caption">
                                ABOUT
                            </div>
                            <div className="content">
                                <p>
                                    Imagine for a moment <br/>
                                    A trip to an Alien planet <br/>
                                    You may think of Mars but anywhere outside your familiar territory<br/>
                                    could be alien to you. <br/>
                                    Now.. Imagine the trip and how amazing are the scenes but ….<br/>

                                    Ouch!  ……. An alien bug!  <br/>
                                    Well… you need help in that alien land and figuring <br/>
                                    this is stage one, some of us just do not get it <br/>
                                    Then your head starts spinning in 4 corners<br/>
                                    Where to find a good alien doctor, <br/>
                                    how to get there, what about the alien language barrier?  .<br/>
                                    Does my insurance even cover this ?  and finally comes the panic , I need to go home. <br/>
                                    <b>
                                        What if...<br/>
                                        In few clicks you can find a highly rated, nearby alien doctor with verified European <br/>
                                        qualification from earth who can visit you in the comfort of your room <br/>
                                        or send you a transport vessel to his clinic who happened to speak your language <br/>
                                        and work with your insurance. <br/>
                                        WAW
                                    </b>
                                     ….What are the odds!!!!<br/>
                                    Tourmed does this for you…… every hour in every day.<br/>

                                    You can find a doctor through an advice of a receptionist or a tour guide <br/>
                                    but do this 2 voices compare to hundreds  of travelers with the like mind <br/>
                                    of you who tried and verified, can you find the needle in the haystack any other way, <br/>
                                    in alien lands an informed decision is what you need for your safety and your family <br/>
                                    and this is why Tourmed was created. your health care experience will not be perfect <br/>
                                    but will be the closest to one and we will do our best to address the needs <br/>
                                    for more features and cover more ground and dig deeper to find the best there is <br/>
                                    so you can get the care you deserve in alien lands better and better <br/>
                                    and this is what we call <br/>
                                </p>
                            </div>
                            <div className="caption_footer">
                                The Tourmed Promise
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;
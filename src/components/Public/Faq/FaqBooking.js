import React from 'react';
import '../../../styles/components/faq.css';
import search_icon from '../../../assets/svg/search.svg';
import balance_icon from '../../../assets/svg/balance.svg';
import rating_icon from '../../../assets/svg/rating.svg';
import security_icon from '../../../assets/svg/security.svg';
import { Button, Form,FormGroup,Label,Input, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser,faQuestion,faPen } from "@fortawesome/free-solid-svg-icons";
import ReadMore from '.././ReadMore';

class FaqBooking extends React.Component{
    constructor(){
        super();
        this.state={
            cur_step:0,
            steps:[
                {
                    title:'How booking works',
                    icon:search_icon,
                    url:'/FAQ/booking'
                },
                {
                    title:'How reviews review',
                    icon:rating_icon,
                    url:'/FAQ/review'
                },
                {
                    title:'Ethics of Tourmed use',
                    icon:balance_icon,
                    url:'/FAQ/ethics'
                },
                {
                    title:'Data and privacy',
                    icon:security_icon,
                    url:'/FAQ/data_privacy'
                }
            ],

            faq1:'Search results and rankings (the order in which doctors are '
                +'listed in a particular set of search results) are unique to every'
                +'patient, and regularly fluctuate based on the patient-centric '
                +'criteria described above. Results may also fluctuate as doctor '
                +'availability changes from hour to hour...',
            faq2:'Doctors that sign up to be listed on Tourmed.com go through '
                +'our verification process during onboarding. For starters, '
                +'we confirm they have an active medical license and are in good '
                +'standing to practice in the state in which their profile is listed. '
                +'We also confirm their specialty, medical...'
        }
        this.handleClick=this.handleClick.bind(this);
        //this.handleClick
    }

    handleClick = index => e => {
        
        this.setState({cur_step:index});
        
    }

    componentDidMount() {
        //console.log('mounted width - ', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
    }

    getWrapperWidth () {
        /*if (this.wrapper) {
            console.log('get wrapper width', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
        } else {
            console.log('get wrapper - no wrapper');
        }*/
    }

    render(){
        let cur_step=this.state.cur_step;
        let handleClick=this.handleClick;
        const {faq1,faq2}=this.state;

        return(
            <div className="faq">
                <Row>
                    <Col lg="12" xl="5" className="side_menu">

                        <ul className="faq_menu">

                            {
                                this.state.steps.map(function(step,index){
                                    return(
                                        <li key={index} className={`${index === cur_step && "active"}`}>
                                            <img src={step.icon} />
                                            <span onClick={handleClick(index)}>
                                                <a href={step.url}>
                                                    {step.title}
                                                </a>   
                                            </span>
                                        </li>
                                    )
                                })
                            }

                        </ul>

                    </Col>
                    <Col lg="12" xl="7">
                        <div className="about_info">
                            <div className="caption">
                                FAQ
                            </div>
                            <div className="faq_content">

                                <div className="read_more_box" ref={node => this.wrapper = node}>
                                    <div className="read_caption">
                                        How often do search results and rankings change?
                                    </div>
                                    <div className="read_content">

                                        <ReadMore 
                                            text={faq1}
                                            numberOfLines={5}
                                            lineHeight={1.4}
                                            showLessButton={true}
                                            onContentChange={this.getWrapperWidth}
                                        />
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                
                                <div className="read_more_box" ref={node => this.wrapper = node}>
                                    <div className="read_caption">
                                        How do you vet doctos before they appear in your search results?
                                    </div>
                                    <div className="read_content">

                                        <ReadMore 
                                            text={faq2}
                                            numberOfLines={5}
                                            lineHeight={1.4}
                                            showLessButton={true}
                                            onContentChange={this.getWrapperWidth}
                                        />
                                        <div className="clear"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FaqBooking;
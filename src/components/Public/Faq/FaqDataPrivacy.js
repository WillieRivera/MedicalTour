import React from 'react';
import '../../../styles/components/faq.css';
import search_icon from '../../../assets/svg/search.svg';
import balance_icon from '../../../assets/svg/balance.svg';
import rating_icon from '../../../assets/svg/rating.svg';
import security_icon from '../../../assets/svg/security.svg';
import { Button, Form,FormGroup,Label,Input, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser,faQuestion,faPen, faRubleSign } from "@fortawesome/free-solid-svg-icons";
import ReadMore from '.././ReadMore';

class FaqDataPrivacy extends React.Component{
    constructor(){
        super();
        this.state={
            cur_step:3,
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
            faq1:'To book a doctor`s appointment on Tourmed, you only need to '
                +'share basic information, such as your name, email, sex, phone '
                +'number and date of birth. You also have the option to enter '
                +'additional information, such as your insurance carrier, to help '
                +'you find the right healthcare provider.',
            faq2:'When you book an appointment, we securely share your name, '
                +'insurance details (if you provide them), date of birth, sex, '
                +'chosen appointment time and certain other relevant '
                +'information with your doctor. For example, if you choose to '
                +'use Tourmed Check-In (instead of a clipboard...'


            
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
            <div className="faq" >
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
                        <div className="about_info colorRedcaption">
                            <div className="caption">
                                FAQ
                            </div>
                            <div className="faq_content">

                                <div className="read_more_box" ref={node => this.wrapper = node}>
                                    <div className="read_caption" >
                                        What data do we collect?
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
                                        How do we use and share data?
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

export default FaqDataPrivacy;
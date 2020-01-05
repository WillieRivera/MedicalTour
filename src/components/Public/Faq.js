import React from 'react';
import '../../styles/components/faq.css';
import search_icon from '../../assets/svg/search.svg';
import balance_icon from '../../assets/svg/balance.svg';
import rating_icon from '../../assets/svg/rating.svg';
import security_icon from '../../assets/svg/security.svg';
import { Button, Form,FormGroup,Label,Input, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser,faQuestion,faPen } from "@fortawesome/free-solid-svg-icons";
import ReadMore from './ReadMore';

class Faq extends React.Component{
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
            faqs:[
                {
                    text:'Search results and rankings (the order in which doctors are '
                        +'listed in a particular set of search results) are unique to every'
                        +'patient, and regularly fluctuate based on the patient-centric '
                        +'criteria described above. Results may also fluctuate as doctor '
                        +'availability changes from hour to hour...'
                }
            ]
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
                                            text="Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser of tickets/festival passes is not present in your face. This is all."
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
                                        How often do search results and rankings change?
                                    </div>
                                    <div className="read_content">

                                        <ReadMore 
                                            text="Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser of tickets/festival passes is not present in your face. This is all."
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

export default Faq;
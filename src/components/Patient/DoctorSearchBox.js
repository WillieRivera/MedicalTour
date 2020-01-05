import React,{Fragment} from 'react';
import {Row,Col,Button} from 'reactstrap';


class DoctorSearchBox extends React.Component{
    
    constructor(){
        super();
        this.state={
            choices:[

                {
                    title:'DOCTOR',
                    first:'GENERAL PRACTITIONER',
                    second:'SPECIALIST',
                    selected:1
                },
                {
                    title:'TIME',
                    first:'NOW',
                    second:'SCHEDULE',
                    selected:0
                },
                {
                    title:'PLACE',
                    first:'HOME VISIT',
                    second:'CLINIC VISIT',
                    selected:1
                },
                {
                    title:'INSURANCE',
                    first:'INSURANCE',
                    second:'CASH',
                    selected:0
                }

            ]
        }
    }

    handleClick = (index, selected) => e => {
        
        let { choices } = this.state;

        
        choices[index].selected=selected;
        
        this.setState({
            choices
        });
     
    }

    render(){
        let handleClick=this.handleClick;
        return(
            <div className="doctor_search_box">

                <Row>
                    <Button>FIND A DOCTOR</Button>
                </Row>

                {
                    this.state.choices.map(function(choice,index){
                        return(
                            <div className="select_item" key={index}>

                                <Row>
                                    <div>
                                        {choice.title}
                                    </div>
                                </Row>
                                <Row className="two_btn_select">
                                    <Col lg="6" xl="6">
                                        <Button className={`${choice.selected === 0 && "active"}`} onClick={handleClick(index,0)}>
                                            {choice.first}
                                        </Button>
                                    </Col>
                                    <Col lg="6" xl="6">
                                        <Button className={`${choice.selected === 1 && "active"}`} onClick={handleClick(index,1)}>
                                            {choice.second}
                                        </Button>
                                    </Col>
                                </Row>


                            </div>
                        )
                    })
                }


                <Row>
                    <Button className="btn_search">SEARCH</Button>
                </Row>

            </div>
        );
    }
}

export default DoctorSearchBox;
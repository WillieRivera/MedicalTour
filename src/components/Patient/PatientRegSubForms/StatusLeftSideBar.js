import React from 'react';
import {Button,Row,Col,Badge} from 'reactstrap';

class StatusLeftSideBar extends React.Component{

    constructor(){
        super();
        this.state={
            steps:[
                'Personal Information',
                'Home Address',
                'Medical Information',
                'Local Health Insurance',
                'Travel Insurance',
                'Travel Destination',
                'Documentations Upload'
            ]
        }
    }

    render(){
        let cur_step=this.props.step-1;
        return(
            <div class="status_side_bar">
                <ul>
                    {
                        
                        this.state.steps.map(function(step,index){
                            if(index==cur_step)
                            {  
                                return(
                                    
                                        <li key={index} className="active"> 
                                            <Badge color="secondary">{index+1}</Badge>
                                            
                                            {step}

                                            <div className="clear">
                                            </div>
                                        </li>
                                )
                            }
                            else
                            {
                                return(
                                    <li key={index} > 
                                        <Badge color="secondary">{index+1}</Badge>
                                        
                                        {step}

                                        <div className="clear">
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                            
                </ul>
                <div className="clear">
                </div>    
            </div>
        );
    }
}

export default StatusLeftSideBar;
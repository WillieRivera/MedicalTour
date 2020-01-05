import React from 'react';

class PatientControlSideBar extends React.Component{

    constructor(){
        
        super();

        this.state={
            steps:[
                'PROFILE',
                'DASHBOARD',
                'MY APPOINTMENT',
                'MY REQUEST',
                'DOCTORS',
                'ACCOUNTING',
                'NOTIFICATIONS',
                'TRAVEL'
            ]
        }
    }

    render(){
        const cur_step=this.props.step;
        return(
            <div className="patient_control_sidebar">
                <ul>
                    {
                        this.state.steps.map(function(step,index){
                            return(
                                <li key={index} className={`${index === cur_step && "active"}`}>
                                    <span >
                                        {step}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default PatientControlSideBar;
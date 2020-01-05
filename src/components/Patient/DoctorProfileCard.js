import React from 'react';
import '../../styles/components/profilecard.css';
import {FaStar,FaChevronRight} from 'react-icons/fa';
import avatarImg from '../../assets/img/avatar.jpg';


class DoctorProfileCard extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="doctor_profile_card">
                <div class="photo_arrow">
                    
                    
                    <div className="left">
                        <div className="avatar">
                            <img src={avatarImg}/>
                        </div>
                        <div className="description">
                            <span>
                                EMILY DANIELS
                            </span>
                            <span>
                                MRCP
                            </span>
                            <span>
                                ENGLISH
                            </span>
                        </div>
                        <div className="clear"></div>
                    </div>


                    <div className="right arrow">
                        <FaChevronRight size={30}/>
                    </div>

                    <div className="clear"></div>
                </div>


                <div className="patients_fee">


                    <div className="left">
                        <span>
                            LOCAL 5
                        </span>
                        <span className="travellers">
                            <FaStar />TRAVELLERS 3<FaStar />
                        </span>
                    </div>

                    <div className="right">
                        <span className="home">
                            HOME 100 $ 
                        </span>
                        <span className="clinic">
                            CLINIC 50 $ 
                        </span>
                    </div>

                    <div className="clear"></div>

                </div>
            </div>
        );
    }
}

export default DoctorProfileCard;
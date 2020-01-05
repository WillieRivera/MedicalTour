import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Header from './components/Public/Header';
import Footer from './components/Public/Footer'
import MainBanner from './components/Public/MainBanner';
import DoctorLogin from './components/Doctor/DoctorLogin';
import DoctorSignUp from './components/Doctor/DoctorSignUp';
import PatientSingUp from './components/Patient/PatientSignUp';
import PatientLogin from './components/Patient/PatientLogin';
import ContactUs from './components/Public/ContactUs';
import About from './components/Public/About';
import Faq from './components/Public/Faq';
import FaqBooking from './components/Public/Faq/FaqBooking';
import FaqReview from './components/Public/Faq/FaqReview';
import FaqEthics from './components/Public/Faq/FaqEthics';
import FaqDataPrivacy from './components/Public/Faq/FaqDataPrivacy';
import PatientControlPanel from './components/Patient/PatientControlPanel';
import DoctorHome from './components/Doctor/DoctorHome';


import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    document.title = 'Tourmed';
  }
  render() {
    return (
        <Router>
          <div className="mycontainer">
              <Header></Header>
              <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans" />
              <Switch>
                <Route path="/doctor_login" component={DoctorLogin}/>
                <Route path="/patient_login" component={PatientLogin}/>
                <Route path="/doctor_signup" component={DoctorSignUp}/>
                <Route path="/patient_signup" component={PatientSingUp}/>
                <Route path="/ContactUs" component={ContactUs}/>
                <Route path="/About" component={About}/>

                <Route exact path="/FAQ" component={Faq}/>
                <Route path="/FAQ/booking" component={FaqBooking}/>
                <Route path="/FAQ/review" component={FaqReview}/>
                <Route path="/FAQ/ethics" component={FaqEthics}/>
                <Route path="/FAQ/data_privacy" component={FaqDataPrivacy}/>
                
                <Route path="/doctor_home" component={DoctorHome}/>
                <Route path="/patient_home" component={PatientControlPanel}/>
                <Route path="/" component={MainBanner} />
              </Switch>
              <Footer></Footer>
          </div>
        </Router>
  )};
}

export default App;

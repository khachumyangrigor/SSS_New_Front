import React from 'react';
// import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
// import CoachesForm from './form.jsx';
import FootterNew from '../../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
// import Header from '../../headNew/head.jsx';
// 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import * as EmailValidator from 'email-validator';

import  '../form/forms.css';
import  './style.css';

import baner from './baner1.png'
class AfterCovid19 extends React.Component{
    constructor(){
        super();
        this.state={
            errorSbm: '',
            send:false
        };
        this.afterCovid19Form={
            name:'',
            lname:'',
            gender:'',
            email: '',
            questions: ''
        }
    }

    handleGender = event => this.afterCovid19Form.gender = event.target.value;
    
    handleBasicButtons=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.afterCovid19Form[name]=text;
    }

    handleSubmit = () => { 
        if(this.state.send)return  window.location.reload();    
        const { name, lname,gender,email} = this.afterCovid19Form;
        let error = '';
        if (name === "") error = 'firstName';
        else if (lname === "") error = 'lastName';
        else if (gender === "") error = 'gender';
        else if (email === "" || EmailValidator.validate(email) !== true) error = 'email';

        if (error !== '') {
            scrollToComponent(this.refs[error], {
                offset: this.refs[error].offsetHeight + 100,
                align: 'bottom',
                duration: 800
            });
            this.refs.firstName.style.borderBottom = "0px solid #f20707";
            this.refs.lastName.style.borderBottom = "0px solid #f20707";
            this.refs.gender.style.borderBottom = "0px solid #f20707";
            this.refs.email.style.borderBottom = "0px solid #f20707";
            this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else{
            fetch('https://www.apis.seasidestartupsummit.com/aplications/after-covid19.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Host': 'https://www.apis.seasidestartupsummit.com/',
                    'Origin': 'https://seasidestartupsummit.com/',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.afterCovid19Form),
            })
                .then(resp => resp.json().then(jsonResp => {
                    return resp.ok ? jsonResp : Promise.reject(jsonResp);
                })
                )
                .then(
                    data => {
                        if (data.resp === 'ok') {
                            this.setState({ send: true });
                            this.refs.submitBtn.innerHTML = `Apply Again`;
                            this.refs.form.innerHTML = `<p class="successErr">Your application is taken forward. <br/> Please check your email: <b>${this.afterCovid19Form.email}</b><p>`;
                            this.afterCovid19Form={
                                name:'',
                                lname:'',
                                gender:'',
                                email: '',
                                questions: ''
                            }
                            this.setState({ errorSbm: '' });
                        }
                        else if(data.resp === 'mail') {
                            this.setState({ errorSbm: 'This Mail Already Exist' });
                        }
                        else{
                            this.setState({ errorSbm: data.resp/*'Sorry something went wrong. Please Try Again'*/ });
                        }
                    }
                )
                .catch(error => console.log(error));
        }

    }

    
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>Virtual Campfire Talk with Mr. President | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew_coaches">
                <div className="formBaner">
                    <img src={baner} alt="baner"/>
                </div>
                {/* <Header/> */}
                {/* <div className="teamleadForm_title_body" >
                    <h3 className="subtitle">Startup World after COVID-19</h3>
                    <p>Virtual Campfire Talk with Mr. President</p>
                </div>
                <div className="teamleadForm_title" style={{"height": "6vh"}}><h3 className="subtitle"></h3></div> */}
                <div className="form_body" ref="form" style={{"justifyContent": "center","paddingLeft": "0px"}}>
                    <div className="form_body_flex" style={{"marginTop":"0px"}}>
                        <div>
                            <TextField ref="firstName" name="name" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lastName"  name="lname" onChange={this.handleBasicButtons} label="Last Name *" />
                            <div className="gender">
                                <RadioGroup aria-label="gender"  onChange={this.handleGender}>
                                    <span className="genderSpan" ref="gender">Gender *</span>
                                    <FormControlLabel value="male"  control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                </RadioGroup>
                            </div>
                            <TextField ref="email" name="email"  onChange={this.handleBasicButtons} label="E-mail address *" />
                            <div className="textAreaBox aftercovid19">
                                 <div><h6 ref="doingInfo">Do you have a question for the President?</h6></div>
                                 <textarea onChange={this.handleBasicButtons} name="questions" ref="questions"></textarea>
                            </div>
                            {/* <TextField ref="questions" name="questions"  onChange={this.handleBasicButtons} label="Do you have a question for the President" /> */}
                            <span style={{"fontSize":"0.9rem","color":"#707070"}} >* Taking into account time constraints of the event and the number of questions, please, be aware that your question may not be included.</span>
                        </div>
                    </div>
                </div>
                <div className="formFootter">
                    <button onClick={this.handleSubmit} ref="submitBtn">Apply</button>
                    <p>{this.state.errorSbm}</p>
                </div>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        );
    }
}
export default AfterCovid19;
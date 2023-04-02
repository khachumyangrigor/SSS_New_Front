import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';

// 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import * as EmailValidator from 'email-validator';

import  './forms.css';
import  './style.css';

class EgyptCompany extends React.Component{
    constructor(){
        super();
        this.state={
            errorSbm: '',
            send:false
        };
        this.form={
            company:'',
            positionComp:'',
            name:'',
            lname: '',
            emial: '',
            phone: '',
            participate: '',
            participateAs: '',
            reson: '',
        }
    }

    handleParticipate = event =>{
        this.form.participate = event.target.value;
        if(event.target.value==='yes'){
            this.refs.participateCond.style.height="auto";
        }
        else{
            this.refs.participateCond.style.height="0px";
            this.form.participateAs='';
        }
    }


    handleparticipateStatus=event=>{
        let arr=this.form.participateAs!==''?this.form.participateAs.split(','):[];
        if(event.target.checked){
            arr.push(event.target.value);
            this.form.participateAs=arr.join(',');
        }
        else{
            for(let i=0;i<arr.length;i++){
                if(arr[i]===event.target.value){
                    arr.splice(i,1);
                    break;
                }
            }
            this.form.participateAs=arr.join(',');
        }
    }

    handleBasicButtons=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.form[name]=text;
    }
    handleTextarea=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.form[name]=text;
    }

    handleSubmit = () => { 
        if(this.state.send)return  window.location.reload();    
        const {company,positionComp, name, lname, emial, phone, participate, participateAs,reson} = this.form;
        let error = '';
        if (company === "") error = 'company';
        else if (positionComp === "") error = 'positionComp';
        else if (name === "") error = 'name';
        else if (lname === "") error = 'lname';
        else if (emial === "" || EmailValidator.validate(emial) !== true) error = 'emial';
        else if (phone === "") error = 'phone';
        else if (participate === "") error = 'participate';
        else if (participate === "yes" && participateAs==="") error = 'participateAs';
        else if (reson==="") error = 'resonH';

        if (error !== '') {
            scrollToComponent(this.refs[error], {
                offset: this.refs[error].offsetHeight + 100,
                align: 'bottom',
                duration: 800
            });
            this.refs.company.style.borderBottom = "0px solid #f20707";
            this.refs.positionComp.style.borderBottom = "0px solid #f20707";
            this.refs.name.style.borderBottom = "0px solid #f20707";
            this.refs.lname.style.borderBottom = "0px solid #f20707";
            this.refs.emial.style.borderBottom = "0px solid #f20707";
            this.refs.phone.style.borderBottom = "0px solid #f20707";
            this.refs.participate.style.borderBottom = "0px solid #f20707";
            this.refs.participateAs.style.borderBottom = "0px solid #f20707";
            this.refs.resonH.style.borderBottom = "0px solid #f20707";

            this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else{
            fetch('https://www.apis.seasidestartupsummit.com/aplications/egypt2020-company.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.form),
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
                            // this.refs.formelem.innerHTML = `<p class="successErr">Your application is taken forward. <br/> Please check your email: <b>${this.form.email}</b><p>`;
                            this.refs.formelem.innerHTML = `<p class="successErr">Your application is taken forward.<p>`;
                            this.form={
                                company:'',
                                positionComp:'',
                                name:'',
                                lname: '',
                                emial: '',
                                phone: '',
                                participate: '',
                                participateAs: '',
                                reson: '',
                            }
                            this.setState({ errorSbm: '' });
                        }
                        else if(data.resp === 'mail') {
                            this.setState({ errorSbm: 'This Mail Already Exist' });
                        }
                        else{
                            this.setState({ errorSbm:'Sorry something went wrong. Please Try Again' });
                        }
                    }
                )
                .catch(error => this.setState({ errorSbm:'Sorry something went wrong. Please Try Again' }) );
        }

    }

    
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>SSSHoliday Sharm El Sheikh Egypt</title>
            </Helmet>
            <div className="egipt_2020">
                <div className="egiptbnaer"></div>
                <Header/>
                <div className="part1Egypt">
                    <div>
                        <h2>What will you get from it?</h2>
                        <p>#SSSholidays2020 is a 7-day event which will take place in a resort setting, with representatives of the Startup Ecosystem of Armenia and a host country. During these days panel discussions will be organized, as well as Campfire Talks, etc.  </p>
                        <small>*Fill in this form to participate in #SSSholidays2020 and our organizers will look at your candidacy, contact you and send you more detailed information about the event.</small>
                    </div>
                </div>
                <div className="teamleadForm_title_body">
                    <h3 className="subtitle">Apply Here</h3>
                    <p>Please complete the form and tell us about you as much as possible.</p>
                </div>
                <div className="teamleadForm_title" ><h3 className="subtitle"></h3></div>
                <div ref="formelem">
                <div className="form_body"   style={{"justifyContent": "center","paddingLeft": "0px"}}>
                    <div className="form_body_flex" style={{"marginTop":"0px"}}>
                        <div>
                            <TextField ref="company" name="company" onChange={this.handleBasicButtons} label="Company’s Name *" />
                            <TextField ref="positionComp" name="positionComp" onChange={this.handleBasicButtons} label="Your Position in the company *" />
                        </div>
                        <div>
                            <TextField ref="name" name="name" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lname"  name="lname" onChange={this.handleBasicButtons} label="Last Name *" />
                            <TextField ref="emial" name="emial"  onChange={this.handleBasicButtons} label="E-mail address *" />
                            <TextField ref="phone" name="phone"  onChange={this.handleBasicButtons} label="Phone number *" />
                        </div>
                    </div>
                </div>
                <div className="teamleadForm_title" >
                    <div className="form_body_header">
                        <h4 ref="participate">Has your company ever participated in one of Seaside Startup Summits? *</h4>
                        <RadioGroup aria-label="gender"  onChange={this.handleParticipate}>
                            <div>
                                <FormControlLabel value="yes"  control={<Radio color="primary" />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <div className="form_body">
                    <div style={{"marginTop":"0px", "height":"0px","overflow":"hidden"}} className="jarmaDiv" ref="participateCond">
                        <h4 ref="participateAs">My Company Participated in SSS as a ...?*</h4>
                        <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="co-organizer" color="primary" />} label="Co-organizer" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="sponsor" color="primary" />} label="Sponsor" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="partner" color="primary" />} label="Partner" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="Participant of SSS Expo" color="primary" />} label="Participant of SSS Expo" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="Other" color="primary" />} label="Other" />
                        </FormGroup>
                    </div>
                    <div className="textAreaBox jarmaDiv">
                        <div><h6 ref="resonH">What is the reason for your participation in the SSSholidays2020?</h6></div>
                        <textarea onInput={this.handleTextarea} name="reson" ref="reson"></textarea>
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
export default EgyptCompany;
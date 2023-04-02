import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import Header from '../headNew/head.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
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

class EgyptIndividual extends React.Component{
    constructor(){
        super();
        this.state={
            errorSbm: '',
            send:false
        };
        this.form={
            name:'',
            lname:'',
            email: '',
            phone:'',
            compRepresent:'',
            compRepresentText:'',
            compRepresentText2:'',
            participate:'',
            participateStatus:'',
            curentStatus:'',
            lasttext:'',
        }
    }

    handleCompRepresent = event => {
        this.form.compRepresent = event.target.value;
        if(event.target.value==='yes'){
            this.refs.compRepresentCond.style.height="auto";
        }
        else{
            this.refs.compRepresentCond.style.height="0px";
            this.form.compRepresentText='';
            this.form.compRepresentText2='';
        }
    }
    handleParticipate = event =>{
        this.form.participate = event.target.value;
        if(event.target.value==='yes'){
            this.refs.participateCond.style.height="auto";
        }
        else{
            this.refs.participateCond.style.height="0px";
            this.form.participateStatus='';
        }
    }
    handleReson = event =>{
        this.form.curentStatus = event.target.value;
    } 

    handleparticipateStatus=event=>{
        let arr=this.form.participateStatus!==''?this.form.participateStatus.split(','):[];
        if(event.target.checked){
            arr.push(event.target.value);
            this.form.participateStatus=arr.join(',');
        }
        else{
            for(let i=0;i<arr.length;i++){
                if(arr[i]===event.target.value){
                    arr.splice(i,1);
                    break;
                }
            }
            this.form.participateStatus=arr.join(',');
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
        const {name,lname,email,phone,compRepresent,compRepresentText,compRepresentText2,participate,participateStatus,curentStatus,lasttext} = this.form;
        let error = '';
        if (name === "") error = 'firstName';
        else if (lname === "") error = 'lastName';
        else if (email === "" || EmailValidator.validate(email) !== true) error = 'email';
        else if (phone === "") error = 'phone';
        else if (compRepresent === "") error = 'compRepresent';
        else if (compRepresent === "yes" && compRepresentText==="") error = 'compRepresentText';
        else if (compRepresent === "yes" && compRepresentText2==="") error = 'compRepresentText2';
        else if (participate === "") error = 'participate';
        else if (participate === "yes" && participateStatus==="") error = 'participateStatus';
        else if (curentStatus === "") error = 'curentStatus';
        else if (lasttext === "") error = 'lasttextH';

        if (error !== '') {
            scrollToComponent(this.refs[error], {
                offset: this.refs[error].offsetHeight + 100,
                align: 'bottom',
                duration: 800
            });
            this.refs.firstName.style.borderBottom = "0px solid #f20707";
            this.refs.lastName.style.borderBottom = "0px solid #f20707";
            this.refs.email.style.borderBottom = "0px solid #f20707";
            this.refs.phone.style.borderBottom = "0px solid #f20707";
            this.refs.compRepresent.style.borderBottom = "0px solid #f20707";
            this.refs.compRepresentText.style.borderBottom = "0px solid #f20707";
            this.refs.compRepresentText2.style.borderBottom = "0px solid #f20707";
            this.refs.participate.style.borderBottom = "0px solid #f20707";
            this.refs.participateStatus.style.borderBottom = "0px solid #f20707";
            this.refs.curentStatus.style.borderBottom = "0px solid #f20707";
            this.refs.lasttextH.style.borderBottom = "0px solid #f20707";

            this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else{
            fetch('https://www.apis.seasidestartupsummit.com/aplications/egypt2020-individual.php', {
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
                                name:'',
                                lname:'',
                                email: '',
                                phone:'',
                                compRepresent:'',
                                compRepresentText:'',
                                compRepresentText2:'',
                                participate:'',
                                participateStatus:'',
                                curentStatus:''
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
                        <p>#SSSholidays2020 is a 7-day event which will take place in a resort setting, with representatives of the Startup Ecosystem of Armenia and a host country. During these days panel discussions will be organized, as well as Campfire Talks, etc. </p>
                        <small>*Fill in this form to participate in #SSSholidays2020 and our organizers will look at your candidacy, contact you and send you more detailed information about the event.</small>
                    </div>
                </div>
                <div className="teamleadForm_title_body">
                    <h3 className="subtitle">Apply Here</h3>
                    <p>Please complete the form and tell us about you as much as possible.</p>
                </div>
                <div className="teamleadForm_title" ><h3 className="subtitle">Identification</h3></div>
                <div className="form_body" ref="formelem" style={{"justifyContent": "center","paddingLeft": "0px"}}>
                    <div className="form_body_flex" style={{"marginTop":"0px"}}>
                        <div>
                            <TextField ref="firstName" name="name" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lastName"  name="lname" onChange={this.handleBasicButtons} label="Last Name *" />
                            <TextField ref="email" name="email"  onChange={this.handleBasicButtons} label="E-mail address *" />
                            <TextField ref="phone" name="phone"  onChange={this.handleBasicButtons} label="Phone number *" />
                        </div>
                    </div>
                    <div className="form_body_flex" >
                        <div className="form_body_grid">
                            <h4 ref="compRepresent" style={{"marginBottom":"0px"}}>Do you represent a Company? *</h4>
                            <RadioGroup aria-label="gender"  onChange={this.handleCompRepresent}>
                                <div className="form_body_grid">
                                    <FormControlLabel value="yes"  control={<Radio color="primary" />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="form_body_flex collapseBox" ref="compRepresentCond" style={{"height":"0px","overflow":"hidden"}}>
                            <TextField ref="compRepresentText" name="compRepresentText" autoComplete='off'  onChange={this.handleBasicButtons} label="Company’s Name *" />
                            <TextField ref="compRepresentText2" name="compRepresentText2"  autoComplete='off' onChange={this.handleBasicButtons} label="Your Position in the company" />
                        </div>
                    </div>
                    <div className="form_body_flex" >
                        <div className="form_body_grid">
                            <div className="form_body_grid">
                                <h4 ref="participate">Have you ever been in one of Seaside Startup Summit *</h4>
                                <RadioGroup aria-label="gender"  onChange={this.handleParticipate}>
                                    <div className="form_body_grid">
                                        <FormControlLabel value="yes"  control={<Radio color="primary" />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="form_body_flex" style={{"marginTop":"0px"}}>
                                <h4 ref="curentStatus">Would you like to stay in a tent a day?</h4>
                                <div style={{"marginLeft":"0px"}}>
                                    <RadioGroup aria-label="gender"  onChange={this.handleReson}>
                                        <div>
                                            <FormControlLabel value="yes"  control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div ref="participateCond" style={{"height":"0px","overflow":"hidden"}}>
                            <h4 ref="participateStatus">What was your position?</h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="startup" color="primary" />} label="Startup" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="investor" color="primary" />} label="Investor" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="partner" color="primary" />} label="Partner" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="speaker" color="primary" />} label="Speaker" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="mentor" color="primary" />} label="Mentor" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="membor of a jury" color="primary" />} label="Membor Of A Jury" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="coach" color="primary" />} label="Coach" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="team lead" color="primary" />} label="Team Lead" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="volunteer" color="primary" />} label="Volunteer" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="visitor" color="primary" />} label="Visitor" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="guest" color="primary" />} label="Guest" />
                                <FormControlLabel control={<Checkbox onChange={this.handleparticipateStatus} value="other" color="primary" />} label="Other" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="textAreaBox">
                        <div><h6 ref="lasttextH">What is the reason for your participation in the SSSholidays2020?</h6></div>
                        <textarea onInput={this.handleTextarea} name="lasttext" ref="lasttext"></textarea>
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
export default EgyptIndividual;
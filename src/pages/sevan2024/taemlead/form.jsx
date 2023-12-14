import React from 'react';
import { Fragment } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import scrollToComponent from 'react-scroll-to-component';
import * as EmailValidator from 'email-validator';

import  '../form/forms.css';

class TeamLeadForm extends React.Component {
    constructor(){
        super();
        this.state={
            selectedDate:null,
            adminExpTextLenght:'',
            workingTextLenght:'',
            motivationLenght:'',
            birthdayError:false,
            errorSbm: window.localStorage.getItem('msg'),
        };

        this.teamlead={
            name:'',
            lname:'',
            birthday:'',
            nationality:'',
            gender:'',
            address:'',
            email: '',
            mobile: '',
            fb: '',
            linkedIn: '',
            currentStatus: {
                times: '',
                texts:''
            },
            edu_name:'',
            edu_year:'',
            edu_area:'',
            skills:{
                skill1:'',
                skill2:'',
                skill3:'',
            },
            otherSkil:'',
            adminExp:'',
            adminExpText:'',
            prevEvnet:'',
            prevEvnetName:'',
            motivation:''
        }
        window.localStorage.clear();
    }
    handleDateChange=date=>{
        this.setState({selectedDate:date});
        this.teamlead.birthday=date;
    }

    handleGender = event => this.teamlead.gender = event.target.value;
    
    handleBasicButtons=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.teamlead[name]=text;
    }

    handleCurrentStatus = event =>this.teamlead.currentStatus.times = event.target.value;

    handleWorkingText=event=>{
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 51) {
                this.setState({ workingTextLenght: 0 });
                this.refs.textArea1.style.borderBottom="2px solid #f20707";
            }
            else if(this.state.workingTextLenght===0){
                this.setState({ workingTextLenght: null });
                this.refs.textArea1.style.borderBottom="0px solid #f20707";
            }
        }
        this.teamlead.currentStatus.texts=text;
    }
    checkBoxDisable = (disable, iStart, iEnd) => {
        if (disable) {
            for (let i = iStart; i < iEnd; i++) {
                let inputCheked = document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('input')[0].checked;
                if (!inputCheked) {
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].classList.add('Mui-disabled');
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].classList.add('Mui-disabled');
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].setAttribute("aria-disabled", false);
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].setAttribute("tabindex", -1);
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('input')[0].disabled = "true";
                }
            }
        }
        else {
            for (let i = iStart; i < iEnd; i++) {
                let inputCheked = document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('input')[0].checked;
                if (!inputCheked) {
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].classList.remove('Mui-disabled');
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].classList.remove('Mui-disabled');
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].setAttribute("aria-disabled", true);
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('span')[0].removeAttribute("tabindex");
                    document.getElementsByClassName('MuiFormControlLabel-root')[i].getElementsByTagName('input')[0].disabled = false;
                }
            }
        }
    }
    handleExperience = event => {
        let checked = event.target.checked;
        let val = event.target.value;

        const { skills } = this.teamlead;
        if (checked) {
            if (skills.skill1 === "") skills.skill1 = val;
            else if (skills.skill2 === "") skills.skill2 = val;
            else if (skills.skill3 === "") skills.skill3 = val; 
        }
        else {
            if (skills.skill1 === val) skills.skill1 = "";
            else if (skills.skill2 === val) skills.skill2 = "";
            else if (skills.skill3 === val)  skills.skill3 = "";
        }
        let disable;
        if (skills.skill1 !== "" && skills.skill2 !== "" && skills.skill3 !== "") disable = true;
        else disable = false;
        this.checkBoxDisable(disable, 6, 20);
    }
    
    handleAdminExp = event =>this.teamlead.adminExp = event.target.value;
    
    handleAdminExpText=event=>{
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 101) {
                this.setState({ adminExpTextLenght: 0 });
                this.refs.textArea2.style.borderBottom="2px solid #f20707";
            }
            else if(this.state.adminExpTextLenght===0){
                this.setState({ adminExpTextLenght: null });
                this.refs.textArea2.style.borderBottom="0px solid #f20707";
            }
        }
        this.teamlead.adminExpText=text;
    }
    handlePrevEvnet = event =>this.teamlead.prevEvnet = event.target.value;
   
    handleMotivationText=event=>{
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 101) {
                this.setState({ motivationLenght: 0 });
                this.refs.textArea3.style.borderBottom="2px solid #f20707";
            }
            else if(this.state.motivationLenght===0){
                this.setState({ motivationLenght: null });
                this.refs.textArea3.style.borderBottom="0px solid #f20707";
            }
        }
        this.teamlead.motivation=text;
    }   
    handleSubmit = () => {
        const { name, lname, birthday, nationality, gender, address, email, mobile, currentStatus, edu_name, edu_year, edu_area, skills,adminExp,adminExpText,prevEvnet,prevEvnetName,motivation} = this.teamlead;
        let error = '';
        if (name === "") error = 'firstName';
        else if (lname === "") error = 'lastName';
        else if (birthday === "") error = 'birthday';
        else if (nationality === "") error = 'nationality';
        else if (gender === "") error = 'gender';
        else if (address === "") error = 'address';
        else if (mobile === "") error = 'mobile';
        else if (email === "" || EmailValidator.validate(email) !== true) error = 'email';
        else if (currentStatus.times === "") error = 'currentStatus';
        else if ( this.state.workingTextLenght===0) error = 'textArea1';
        else if (edu_name==="") error = 'edu_name';
        else if (edu_year==="") error = 'edu_year';
        else if (edu_area==="") error = 'edu_area';
        else if (skills.skill1 === "" && skills.skill2 === "" && skills.skill3 === "") error = 'skills';
        else if (adminExp==="") error = 'adminExp';
        else if (adminExp==="yes" && adminExpText==="") error = 'adminExpText';
        else if (this.state.adminExpTextLenght===0) error = 'textArea2';
        else if (prevEvnet==="") error = 'prevEvnet';
        else if (prevEvnet==="yes" && prevEvnetName==="") error = 'prevEvnetName';
        else if (motivation==="") error = 'motivation';
        else if (this.state.motivationLenght===0) error = 'textArea3';
        if (error !== '') {
            scrollToComponent(this.refs[error], {
                offset: this.refs[error].offsetHeight + 100,
                align: 'bottom',
                duration: 800
            });
            this.setState({birthdayError:false});
            for (var ref in this.refs) {
                this.refs[ref].style.borderBottom = "0px solid #f20707";
            }
            if(error==='birthday'){
                this.setState({birthdayError:true});
            }
            else this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else{
            fetch('https://www.apis.seasidestartupsummit.com/aplications/teamleads.php', {
                method: 'POST',
                //credentials: "same-origin",
                headers: {
                    'Accept': 'application/json',
                    'Host': 'https://www.apis.seasidestartupsummit.com/',
                    'Origin': 'https://test.seasidestartupsummit.com/',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.teamlead),
            })
                .then(resp => resp.json().then(jsonResp => {
                    return resp.ok ? jsonResp : Promise.reject(jsonResp);
                })
                )
                .then(
                    data => {
                        if (data.resp === 'ok') {
                           window.localStorage.setItem('msg', 'Your application is taken forward. SSS Team will contact you if you are shortlisted.');
                           window.location.reload();
                        }
                        else if(data.resp === 'mail') {
                            this.setState({ errorSbm: 'This Mail Already Exist' });
                        }
                        else {
                            this.setState({ errorSbm: 'Something went wrong Try Again' });
                        }
                    }
                )
                .catch(error => console.log(error));
        }
    }
    
    render=()=>{
        return(
            <Fragment>
                <div className="teamleadForm_title_body">
                    <h3 className="subtitle">Apply Here</h3>
                    <p>Please complete the form and tell us about you as much as possible.</p>
                </div>
                <div className="teamleadForm_title" ><h3 className="subtitle">Identification</h3></div>
                <div className="form_body">
                    <div className="form_body_flex">
                        <div ref="birthday">
                            <TextField ref="firstName" name="name" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lastName" name="lname" onChange={this.handleBasicButtons} label="Family Name *" />
                            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                                <KeyboardDatePicker 
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date of Birth*"
                                    format="dd/MM/yyyy"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    error={this.state.birthdayError}
                                    KeyboardButtonProps={{'aria-label': 'change date'}}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div>
                            <TextField ref="nationality" name="nationality" onChange={this.handleBasicButtons} label="Nationality *" />
                            <div className="gender">
                                <RadioGroup aria-label="gender"  onChange={this.handleGender}>
                                    <span className="genderSpan" ref="gender">Gender *</span>
                                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volunteersForm_title" ><h3 className="subtitle">Contact Information</h3></div>
                <div className="form_body">
                            <TextField ref="address" name="address" onChange={this.handleBasicButtons} label="Permanent Address*" />
                    <div className="form_body_flex">
                        <div>
                            <TextField ref="mobile" name="mobile" onChange={this.handleBasicButtons} label="Phone Number *" />
                            <TextField name="fb" onChange={this.handleBasicButtons} label="Facebook Profile link (If available)" />
                            <TextField name="linkedIn"   onChange={this.handleBasicButtons} label="LinkedIn Profile link (If available)" />
                        </div>
                        <div>
                            <TextField ref="email" name="email" onChange={this.handleBasicButtons} label="E-mail address *" />
                        </div>
                    </div>
                    <div className="form_body_flex_textbox">
                        <div className="form_body_grid">
                            <h4 ref="currentStatus">Current Status *</h4>
                            <RadioGroup aria-label="CurrentStatus" name="currentStatus" onChange={this.handleCurrentStatus}>
                                <FormControlLabel value="Part time student" control={<Radio color="primary" />} label="Part-time student" />
                                <FormControlLabel value="Full time student" control={<Radio color="primary" />} label="Full-time student" />
                                <FormControlLabel value="Part time worker" control={<Radio color="primary" />} label="Part-time worker" />
                                <FormControlLabel value="Full time worker" control={<Radio color="primary" />} label="Full-time worker" />
                            </RadioGroup>
                        </div>
                        <div className="textAreaBox">
                            <div><h6 ref="doingInfo"> If working, what is it that you do? <span ref="textArea1"> (Max 50 words)</span></h6></div>
                            <textarea onChange={this.handleWorkingText} maxLength={this.state.workingTextLenght}></textarea>
                        </div>
                    </div>     
                </div>
                <div className="volunteersForm_title" ><h3 className="subtitle">Education and Skills</h3></div>
                <div className="form_body">
                    <div className="form_body_grid2">
                        <div className="textButtonBox">
                            <TextField ref="edu_name"  name="edu_name" onChange={this.handleBasicButtons} label="Name of Educational Institution*" />
                            <TextField ref="edu_year" name="edu_year" onChange={this.handleBasicButtons} label="Year of graduation*" />
                            <TextField ref="edu_area" name="edu_area" onChange={this.handleBasicButtons} label="Area of Study*" />
                        </div>
                    </div>
                    <div className="form_body_flex2">
                        <div>
                            <h4 ref="skills">What are the skills, that you consider yourself strong in? * <span>(Select Max. 3)</span> </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Communication skills" color="primary" />} label="Communication skills" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Digital Marketing" color="primary" />} label="Digital Marketing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Computer and electronics skills" color="primary" />} label="Computer and electronics skills" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Programming" color="primary" />} label="Programming" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Copywriting/Content writing" color="primary" />} label="Copywriting/Content writing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Photography" color="primary" />} label="Photography" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Graphic design" color="primary" />} label="Graphic design" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Video creation/editing" color="primary" />} label="Video creation/editing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Blogging" color="primary" />} label="Blogging" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Other" color="primary" />} label="Other" />
                                <TextField  name="otherSkil" onChange={this.handleBasicButtons} label="Please identify other if needed" />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="volunteersForm_title" ><h3 className="subtitle">Relevant TeamLead Experience & Motivation Questions</h3></div>
                <div className="form_body">
                    <div className="form_body_grid2">   
                        <h4 ref="adminExp" >Do you have administrative experience? </h4>
                        <RadioGroup aria-label="CurrentStatus" name="currentStatus" onChange={this.handleAdminExp}>
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </div>
                    <div>
                        <div className="textAreaBox long extra">
                            <div className="extra">
                                <h6 ref="adminExpText"> If yes, please provide details and answers to the following questions  <span ref="textArea2"> (Max 100 words)</span></h6>
                                <h5>(What type of administrative activity have you conducted (Where & When) ?,  What were your main responsibilities ?, What kind of operations have you been mainly involved in ? ) </h5>
                            </div>
                            <textarea onChange={this.handleAdminExpText} maxLength={this.state.adminExpTextLenght}></textarea>
                        </div>
                    </div>
                </div>
                <div className="form_body">
                    <div className="form_body_grid2">   
                        <h4 ref="prevEvnet">Have you previously taken part in those kind of events? </h4>
                        <RadioGroup aria-label="prevEvnet" name="prevEvnet" onChange={this.handlePrevEvnet}>
                            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                        <TextField ref="prevEvnetName" name="prevEvnetName" onChange={this.handleBasicButtons} label="Mention the events" />
                    </div>
                    <div className="form_body_grid2">
                        <div className="textAreaBox long">
                            <div><h6 ref="motivation"> What is your motivation to apply to SSS ? * <span ref="textArea3"> (Max 100 words) </span></h6></div>
                            <textarea onChange={this.handleMotivationText} maxLength={this.state.motivationLenght}></textarea>
                        </div>
                    </div>
                </div>
                <div className="formFootter">
                    <button onClick={this.handleSubmit}>Submit</button>
                    <p>{this.state.errorSbm}</p>
                </div>
            </Fragment>
        )
    }
}
export default TeamLeadForm;
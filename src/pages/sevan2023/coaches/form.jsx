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
// import Textarea from 'react-textarea-count';

import  '../form/forms.css';

class CoachesForm extends React.Component {
    constructor(){
        super();
        this.state={
            selectedDate:null,
            workingTextLenght:'',
            motivationLenght:'',
            birthdayError:false,
            errorSbm: window.localStorage.getItem('msg'),
        };

        this.coach={
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
            currentCopmName:'',
            currentCopmPos:'',
            otherSkil:'',
            experience:'',
            startupNum:'',
            participated:{
                p1:'',
                p2:'',
                p3:'',
                p4:'',
                p5:'',
                p6:'',
                p7:'',
            },
            aboutSevan:'',
            motivation:'',
            directions:''
        }
        window.localStorage.clear();
    }
    handleDateChange=date=>{
        this.setState({selectedDate:date});
        this.coach.birthday=date;
    }

    handleGender = event => this.coach.gender = event.target.value;
    
    handleBasicButtons=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.coach[name]=text;
    }

    handleCurrentStatus = event =>this.coach.currentStatus.times = event.target.value;

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
            this.coach.currentStatus.texts=text;
        }
        
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

        const { skills } = this.coach;
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
        this.checkBoxDisable(disable, 9, 18);
    }

    handleDirections = event =>this.coach.directions = event.target.value;

    handleExperienceCoach = event =>this.coach.experience = event.target.value;
    handleStartupnum = event =>this.coach.startupNum = event.target.value;
    
    handlePartisipated=event=>{
        let val = event.target.value;
        this.coach.participated[event.target.name]=val;
    }
    handleAboutSevan = event =>this.coach.aboutSevan = event.target.value;
    handleMotivationText=event=>{
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 101) {
                this.setState({ motivationLenght: 0 });
                this.refs.textArea2.style.borderBottom="2px solid #f20707";

            }
            else if(this.state.motivationLenght===0){
                this.setState({ motivationLenght: null });
                this.refs.textArea2.style.borderBottom="0px solid #f20707";
            }
        }
        this.coach.motivation=text;
    }   
    handleSubmit = () => {
        const { name, lname, birthday, nationality, gender, address, email, mobile, currentStatus, edu_name, edu_year, edu_area, skills, experience, startupNum, aboutSevan, motivation,directions} = this.coach;
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
        else if (this.state.workingTextLenght=== 0) error = 'textArea1';
        else if (edu_name==="") error = 'edu_name';
        else if (edu_year==="") error = 'edu_year';
        else if (edu_area==="") error = 'edu_area';
        else if (directions==="") error = 'directions';
        else if (skills.skill1 === "" && skills.skill2 === "" && skills.skill3 === "") error = 'skills';
        else if (experience==="") error = 'experience';
        else if (startupNum==="") error = 'startupNum';
        else if (aboutSevan==="") error = 'aboutSevan';
        else if (motivation==="") error = 'motivation';
        else if (this.state.motivationLenght===0) error = 'textArea2';

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
            fetch('https://www.apis.seasidestartupsummit.com/aplications/coaches.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Host': 'https://www.apis.seasidestartupsummit.com/',
                    'Origin': 'https://test.seasidestartupsummit.com/',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.coach),
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
                            <TextField ref="firstName"  name="name" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lastName" name="lname" onChange={this.handleBasicButtons} label="Family Name *" />
                            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                                <KeyboardDatePicker 
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date of Birth*"
                                    format="dd/MM/yyyy"
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{'aria-label': 'change date'}}
                                    error={this.state.birthdayError}
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
                            <TextField  name="currentCopmName" onChange={this.handleBasicButtons} label="Company name" />
                            <TextField  name="currentCopmPos" onChange={this.handleBasicButtons} label="Position" />

                        </div>
                        <div className="textAreaBox">
                            <div><h6 ref="doingInfo"> If working, what is it that you do? <span ref="textArea1"> (Max 50 words)</span></h6></div>
                            <textarea onChange={this.handleWorkingText} maxLength={this.state.workingTextLenght} ></textarea>
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
                    <div className="form_body_grid2" style={{marginTop:"40px"}}>
                        <h4 ref="directions">We have three main Coaching directions this year. If you participated as a Coach, which one of these would you prefer?</h4>
                        <RadioGroup aria-label="directions" name="directions" onChange={this.handleDirections}>
                            <FormControlLabel value="marketing" control={<Radio color="primary" />} label="Marketing Specialist" />
                            <FormControlLabel value="business_development" control={<Radio color="primary" />} label="Business development/ Sales Specialist" />
                            <FormControlLabel value="methodologist" control={<Radio color="primary" />} label="Methodologist" />
                        </RadioGroup>
                    </div>
                    <div className="form_body_flex2">
                        <div>
                            <h4 ref="skills">What are the skills, that you consider yourself strong in? * <span>(Select Max. 3)</span> </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Communication skills" color="primary" />} label="Communication skills" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Sales and marketing" color="primary" />} label="Sales and marketing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Programming" color="primary" />} label="Programming" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Finance" color="primary" />} label="Finance" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Investment" color="primary" />} label="Investment" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Public speaking" color="primary" />} label="Public speaking" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="E-Commerce" color="primary" />} label="E-Commerce" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Educational technology" color="primary" />} label="Educational technology" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Crowdfunding" color="primary" />} label="Crowdfunding" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Presentation preparation" color="primary" />} label="Presentation preparation" />
                                <TextField  name="otherSkil" onChange={this.handleBasicButtons} label="Please identify other if needed" />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div className="volunteersForm_title" ><h3 className="subtitle">Relevant Coach Experience & Motivation Questions</h3></div>
                <div className="form_body">
                    <div className="form_body_grid">
                        <h4 ref="experience">Experience as a Coach *</h4>
                        <RadioGroup aria-label="experience" name="experience" onChange={this.handleExperienceCoach}>
                            <FormControlLabel value="N/A" control={<Radio color="primary" />} label="N/A" />
                            <FormControlLabel value="1-2 years" control={<Radio color="primary" />} label="1-2 years" />
                            <FormControlLabel value="3-5 years" control={<Radio color="primary" />} label="3-5 years" />
                            <FormControlLabel value="5+ years" control={<Radio color="primary" />} label="5+ years" />
                        </RadioGroup>
                    </div>
                    <div className="form_body_flex2">
                        <div className="form_body_grid">
                            <h4 ref="startupNum">Number of startups you have coached*</h4>
                            <RadioGroup aria-label="startupNum" name="startupNum" onChange={this.handleStartupnum}>
                                <FormControlLabel value="N/A" control={<Radio color="primary" />} label="N/A" />
                                <FormControlLabel value="1-2" control={<Radio color="primary" />} label="1-5" />
                                <FormControlLabel value="5-10" control={<Radio color="primary" />} label="5-10" />
                                <FormControlLabel value="10+" control={<Radio color="primary" />} label="10+" />
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="form_body_flex2">
                        <div className="form_body_grid">
                            <h4>Have you participated in any of our previous Summits?</h4>
                            <FormGroup>
                                <FormControlLabel name="p7" control={<Checkbox onChange={this.handlePartisipated} value="SSSholidays UAE RAK" color="primary" />} label="SSSholidays UAE RAK" />
                                <FormControlLabel name="p1" control={<Checkbox onChange={this.handlePartisipated} value="Sevan Startup Summit 2019" color="primary" />} label="Sevan Startup Summit 2019" />
                                <FormControlLabel name="p1" control={<Checkbox onChange={this.handlePartisipated} value="Sevan Startup Summit 2019" color="primary" />} label="Sevan Startup Summit 2019" />
                                <FormControlLabel name="p2" control={<Checkbox onChange={this.handlePartisipated} value="Sevan Startup Summit 2018" color="primary" />} label="Sevan Startup Summit 2018" />
                                <FormControlLabel name="p3" control={<Checkbox onChange={this.handlePartisipated} value="Seaside Startup Summit 2018: GOA" color="primary" />} label="Seaside Startup Summit 2018: GOA" />
                                <FormControlLabel name="p4" control={<Checkbox onChange={this.handlePartisipated} value="Seaside Startup Summit 2018: UAE" color="primary" />} label="Seaside Startup Summit 2018: UAE" />
                                <FormControlLabel name="p5" control={<Checkbox onChange={this.handlePartisipated} value="Sevan Startup Summit 2017" color="primary" />} label="Sevan Startup Summit 2017" />
                                <FormControlLabel name="p6" control={<Checkbox onChange={this.handlePartisipated} value="Sevan Startup Summit 2016" color="primary" />} label="Sevan Startup Summit 2016" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="form_body_flex2">
                        <div className="form_body_grid">
                            <h4 ref="aboutSevan">How did you hear about Sevan Startup Summit 2022? *</h4>
                            <RadioGroup aria-label="aboutSevan" name="aboutSevan" onChange={this.handleAboutSevan}>
                                <FormControlLabel value="Facebook" control={<Radio color="primary" />} label="Facebook" />
                                <FormControlLabel value="Our Website" control={<Radio color="primary" />} label="Our Website" />
                                <FormControlLabel value="Our industry partners" control={<Radio color="primary" />} label="Our industry partners" />
                                <FormControlLabel value="Previous summit participants" control={<Radio color="primary" />} label="Previous summit participants" />
                                <FormControlLabel value="Other" control={<Radio color="primary" />} label="Other" />
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="form_body_grid2">
                        <div className="textAreaBox long">
                            <div><h6 ref="motivation"> What is your motivation to apply to SSS ? * <span ref="textArea2"> (Max 100 words) </span></h6></div>
                            <textarea onChange={this.handleMotivationText} maxLength={this.state.motivationLenght}></textarea>
                        </div>
                    </div>
                </div>
                <div className="formFootter">
                    <button onClick={this.handleSubmit}>Submit</button>
                    <p>{this.state.errorSbm}</p>
                </div>
            </Fragment>
        );
    }
}

export default CoachesForm;
import React from 'react';
import { Fragment } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import scrollToComponent from 'react-scroll-to-component';
import * as EmailValidator from 'email-validator';

import  '../form/forms.css';

class SpeakerForm extends React.Component {
    constructor() {
        super();
        this.state = {
            bioTextCout: 100,
            bioLenght: '',
            expectationsLenght: '',
            errorSbm: window.localStorage.getItem('msg'),
            imgError: 'Profile Picture (attach photo) *',
            imgErrorhiden: 'yes',
        }
        this.speaker = {
            opportunities: {
                workshop: false,
                mentorships: false,
                camfireTalk: false,
                keynotSpeach: false
            },
            firstName: '',
            lastName: '',
            nationality: '',
            gender: '',
            email: '',
            mobile: '',
            fb: '',
            linkedIn: '',
            currentStatus: {
                time: '',
                doing: '',
                compName: '',
                position: ''
            },
            experienceFild: {
                exp1: '',
                exp2: '',
                exp3: ''
            },
            experienceIndusrtry: {
                exp1: '',
                exp2: '',
                exp3: ''
            },
            personalBio: '',
            img: '',
            topEvens: {
                event1: '',
                event2: '',
                event3: ''
            },
            hearAbout: '',
            expectations: '',
            participants_format:''
        };
        window.localStorage.clear();
    }
    handleOpportunities = (event, fild) => {
        let checked = event.target.checked;
        const { opportunities } = this.speaker;
        switch (fild) {
            case 1:
                if (checked) opportunities.workshop = true;
                else opportunities.workshop = false;
                break;
            case 2:
                if (checked) opportunities.mentorships = true;
                else opportunities.mentorships = false;
                break;
            case 3:
                if (checked) opportunities.camfireTalk = true;
                else opportunities.camfireTalk = false;
                break;
            case 4:
                if (checked) opportunities.keynotSpeach = true;
                else opportunities.keynotSpeach = false;
                break;
            default: break;
        }
    }
    handleBasicButtons = (event, fild) => {
        let text = event.target.value;
        switch (fild) {
            case 1:
                this.speaker.firstName = text;
                break;
            case 2:
                this.speaker.nationality = text;
                break;
            case 3:
                this.speaker.mobile = text;
                break;
            case 4:
                this.speaker.fb = text;
                break;
            case 5:
                this.speaker.linkedIn = text;
                break;
            case 6:
                this.speaker.lastName = text;
                break;
            case 7:
                this.speaker.email = text;
                break;
            default: break;
        }
    }
    handleGender = event => this.speaker.gender = event.target.value;

    handleCurrentStatus = event => this.speaker.currentStatus.time = event.target.value;

    handleCurrentStatusText = (event, fild) => {
        const { currentStatus } = this.speaker;
        let text = event.target.value;
        switch (fild) {
            case 1:
                currentStatus.doing = text;
                break;
            case 2:
                currentStatus.compName = text;
                break;
            case 3:
                currentStatus.position = text;
                break;
            default: break;
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

        const { experienceFild } = this.speaker;
        if (checked) {
            if (experienceFild.exp1 === "") experienceFild.exp1 = val;
            else if (experienceFild.exp2 === "") experienceFild.exp2 = val;
            else if (experienceFild.exp3 === "") { experienceFild.exp3 = val; }

        }
        else {
            if (experienceFild.exp1 === val) experienceFild.exp1 = "";
            else if (experienceFild.exp2 === val) experienceFild.exp2 = "";
            else if (experienceFild.exp3 === val) { experienceFild.exp3 = ""; }
        }
        let disable;
        if (experienceFild.exp1 !== "" && experienceFild.exp2 !== "" && experienceFild.exp3 !== "") disable = true;
        else disable = false;
        this.checkBoxDisable(disable, 10, 30);
    }

    handleParticipantsFormat = event =>this.speaker.participants_format = event.target.value;

    handleExperienceIndusrtry = event => {
        let checked = event.target.checked;
        let val = event.target.value;

        const { experienceIndusrtry } = this.speaker;
        if (checked) {
            if (experienceIndusrtry.exp1 === "") experienceIndusrtry.exp1 = val;
            else if (experienceIndusrtry.exp2 === "") experienceIndusrtry.exp2 = val;
            else if (experienceIndusrtry.exp3 === "") { experienceIndusrtry.exp3 = val; }

        }
        else {
            if (experienceIndusrtry.exp1 === val) experienceIndusrtry.exp1 = "";
            else if (experienceIndusrtry.exp2 === val) experienceIndusrtry.exp2 = "";
            else if (experienceIndusrtry.exp3 === val) { experienceIndusrtry.exp3 = ""; }
        }
        let disable;
        if (experienceIndusrtry.exp1 !== "" && experienceIndusrtry.exp2 !== "" && experienceIndusrtry.exp3 !== "") disable = true;
        else disable = false;
        this.checkBoxDisable(disable, 30, 45);
    }
    handleBioText = event => {
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 101) {
                this.setState({ bioLenght: 0 });
                this.refs.textArea1.style.borderBottom="2px solid #f20707";
            }
            else if(this.state.bioLenght===0){
                this.setState({ bioLenght: null })
                this.refs.textArea1.style.borderBottom="0px solid #f20707";
            };
        }
        this.speaker.personalBio = text;
    }
    handleAttach = event => {
        const fileInput = event.target;
        let type = (fileInput.files[0].type).split('/')[1];
        if (type !== "jpeg" && type !== "png"){
            this.setState({ imgError: 'Accepted file format is JPG or PNG *', imgErrorhiden: 'yes' });
            this.refs.imgText.style.borderBottom = "2px solid #f20707";
        } 
        else if (fileInput.files[0].size > 2097152){
            this.setState({ imgError: 'Attachment failure. The maximum file size is 2 MB. *', imgErrorhiden: 'yes' });
            this.refs.imgText.style.borderBottom = "2px solid #f20707";
        } 
        else {
            this.setState({ imgError: fileInput.files[0].name, imgErrorhiden: 'no' });
            this.speaker.img = fileInput.files[0];
            this.refs.imgText.style.borderBottom = "0px solid #f20707";
        }
    }
    handleOtherEvent = (event, fild) => {
        const { topEvens } = this.speaker;
        let text = event.target.value;
        switch (fild) {
            case 1:
                topEvens.event1 = text;
                break;
            case 2:
                topEvens.event2 = text;
                break;
            case 3:
                topEvens.event3 = text;
                break;
            default: break;
        }
    }
    handleExpectationsText = event => {
        let text = event.target.value;
        if(text.match(/\S+/g)){
            if (text.match(/\S+/g).length !== null && text.match(/\S+/g).length > 51) {
                this.setState({ expectationsLenght: 0 });
                this.refs.textArea2.style.borderBottom="2px solid #f20707";
            }
            else if(this.state.expectationsLenght===0){
                this.setState({ expectationsLenght: null });
                this.refs.textArea2.style.borderBottom="0px solid #f20707";
            }
        }
        this.speaker.expectations = text;
    }
    handleAboutSummit = event => this.speaker.hearAbout = event.target.value;
    handleSubmit = () => {
        const { opportunities, firstName, lastName, nationality, gender, email, mobile, currentStatus, experienceFild, personalBio, img, experienceIndusrtry, topEvens, hearAbout, expectations,participants_format} = this.speaker;
        let error = '';
        if (opportunities.workshop === false && opportunities.mentorships === false && opportunities.camfireTalk === false && opportunities.keynotSpeach === false) error = 'opportunities';
        else if (participants_format === "") error = 'participants_format';
        else if (firstName === "") error = 'firstName';
        else if (lastName === "") error = 'lastName';
        else if (nationality === "") error = 'nationality';
        else if (gender === "") error = 'gender';
        else if (email === "" || EmailValidator.validate(email) !== true) error = 'email';
        else if (mobile === "") error = 'mobile';
        else if (currentStatus.time === "" || currentStatus.doing === "") error = 'currentStatus';
        else if (experienceFild.exp1 === "" && experienceFild.exp2 === "" && experienceFild.exp3 === "") error = 'experienceFild';
        else if (experienceIndusrtry.exp1 === "" && experienceIndusrtry.exp2 === "" && experienceIndusrtry.exp3 === "") error = 'experienceIndusrtry';
        else if (personalBio === "") error = 'personalBio';
        else if (this.state.bioLenght === 0) error = 'textArea1';
        else if (img === "" || this.state.imgErrorhiden === "yes") error = 'img';
        else if (topEvens.event1 === "" && topEvens.event2 === "" && topEvens.event3 === "") error = 'topEvent';
        else if (hearAbout === "") error = 'hearAbout';
        else if (expectations === "") error = 'expectations';
        else if (this.state.expectationsLenght === 0) error = 'textArea2';
        if (error !== '') {
            scrollToComponent(this.refs[error], {
                offset: this.refs[error].offsetHeight + 100,
                align: 'bottom',
                duration: 800
            });
            for (var ref in this.refs) {
                this.refs[ref].style.borderBottom = "0px solid #f20707";
            }
            this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else {

            const formData = new FormData();
            formData.append('file', this.speaker.img);
            fetch('https://www.apis.seasidestartupsummit.com/aplications/speakerimg.php', {
                method: 'POST',
                body: formData,
            })
                .then(resp => resp.json().then(jsonResp => {
                    return resp.ok ? jsonResp : Promise.reject(jsonResp);
                }))
                .then(
                    data => {
                        console.log(data.resp);
                        if (data.resp !== 'error') {
                            this.speaker.img = data.resp;
                            fetch('https://www.apis.seasidestartupsummit.com/aplications/speaker.php', {
                                method: 'POST',
                                //credentials: "same-origin",
                                headers: {
                                    'Accept': 'application/json',
                                    'Host': 'https://www.apis.seasidestartupsummit.com/',
                                    'Origin': 'https://test.seasidestartupsummit.com/',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(this.speaker),
                            })
                                .then(resp => resp.json().then(jsonResp => {
                                    return resp.ok ? jsonResp : Promise.reject(jsonResp);
                                })
                                )
                                .then(
                                    data => {
                                        if (data.resp === 'ok') {
                                            //this.setState({ errorSbm: 'Your application is taken forward. SSS Team will contact you if you are shortlisted.' });
                                            window.localStorage.setItem('msg', 'Your application is taken forward. SSS Team will contact you if you are shortlisted.');
                                            window.location.reload();
                                        }
                                        else {
                                            this.setState({ errorSbm: 'Something went wrong Try Again' });
                                        }

                                    }
                                )
                                .catch(error => console.log(error));
                        }
                    }
                )
        }
    }

    render = () => {
        return (
            <Fragment>
                <div className="speakerInfo">
                    <h3>Apply Here</h3>
                    <p>Please complete the speaker request form and tell  us about you and your seminars as much as possible. Please also upload a professional headshot image, as we may use this if you have been chosen. Please note that we cannot accept all speaker requests and applications.</p>
                </div>
                <div className="speakerTitle">
                    <h3>Identification</h3>
                </div>
                <div className="form_body">
                    <div className="form_body_grid" >
                        <h4 ref="opportunities">Which of the following opportunities are you interested in? *</h4>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={this.state.checked} value="workshop" color="primary" onChange={(e) => this.handleOpportunities(e, 1)} />} label="Workshop" />
                            <FormControlLabel control={<Checkbox checked={this.state.checked} value="mentorship" color="primary" onChange={(e) => this.handleOpportunities(e, 2)} />} label="Mentorship" />
                            <FormControlLabel control={<Checkbox checked={this.state.checked} value="campfireTalk" color="primary" onChange={(e) => this.handleOpportunities(e, 3)} />} label="Campfire Talk" />
                            <FormControlLabel control={<Checkbox checked={this.state.checked} value="keynote" color="primary" onChange={(e) => this.handleOpportunities(e, 4)} />} label="Keynote Speech" />
                        </FormGroup>
                    </div>
                    <div className="form_body_grid" style={{marginTop:"40px"}}>
                        <h4 ref="participants_format">Which participation format would you prefer? *</h4>
                        <RadioGroup aria-label="participants_format" name="participants_format" onChange={this.handleParticipantsFormat}>
                            <FormControlLabel value="online" control={<Radio color="primary" />} label="Online" />
                            <FormControlLabel value="offline" control={<Radio color="primary" />} label="Offline" />
                        </RadioGroup>
                    </div>
                    <div className="form_body_flex" >
                        <div>
                            <TextField ref="firstName" onChange={(e) => this.handleBasicButtons(e, 1)} label="First Name *" />
                            <TextField ref="lastName" onChange={(e) => this.handleBasicButtons(e, 6)} label="Family Name *" />
                            <TextField ref="nationality" onChange={(e) => this.handleBasicButtons(e, 2)} label="Nationality *" />
                            <TextField ref="mobile" onChange={(e) => this.handleBasicButtons(e, 3)} label="Phone Number *" />
                            <TextField ref="email" onChange={(e) => this.handleBasicButtons(e, 7)} label="E-mail address *" />
                        </div>
                        <div>
                            <div className="gender">
                                <RadioGroup aria-label="gender" name="gender" onChange={this.handleGender}>
                                    <span className="genderSpan" ref="gender">Gender *</span>
                                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                </RadioGroup>
                            </div>
                            <TextField onChange={(e) => this.handleBasicButtons(e, 4)} label="Facebook Profile link (If available)" />
                            <TextField onChange={(e) => this.handleBasicButtons(e, 5)} label="LinkedIn Profile link (If available)" />
                        </div>
                    </div>
                </div>
                <div className="speakerTitle">
                    <h3>Experience</h3>
                </div>
                <div className="form_body">
                    <div className="form_body_grid2">
                        <h4 ref="currentStatus">Current Status *</h4>
                        <RadioGroup aria-label="CurrentStatus" name="currentStatus" onChange={this.handleCurrentStatus}>
                            <FormControlLabel value="Part time worker" control={<Radio color="primary" />} label="Part-time worker" />
                            <FormControlLabel value="Full time worker" control={<Radio color="primary" />} label="Full-time worker" />
                        </RadioGroup>
                        <div className="textButtonBox">
                            <TextField onChange={(e) => this.handleCurrentStatusText(e, 1)} label="What is it that you do... *" />
                            <TextField onChange={(e) => this.handleCurrentStatusText(e, 2)} label="Company name" />
                            <TextField onChange={(e) => this.handleCurrentStatusText(e, 3)} label="Position" />
                        </div>
                    </div>
                    <div className="form_body_flex2">
                        <div>
                            <h4 ref="experienceFild">Field of Experience * <span>(Select Max. 3)</span> </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Business Management" color="primary" />} label="Business Management" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Business Models" color="primary" />} label="Business Models" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Business and SDG alignment" color="primary" />} label="Business and SDG alignment" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Corporate Finance" color="primary" />} label="Corporate Finance" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Customer Acquisition " color="primary" />} label="Customer Acquisition " />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Cyber Security" color="primary" />} label="Cyber Security" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Design Thinking" color="primary" />} label="Design Thinking" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Digital Marketing" color="primary" />} label="Digital Marketing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Fundraising: Crowdfunding" color="primary" />} label="Fundraising: Crowdfunding" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Fundraising: Venture Capital" color="primary" />} label="Fundraising: Venture Capital" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Franchising" color="primary" />} label="Franchising" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Investment management" color="primary" />} label="Investment management" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Impact measurement" color="primary" />} label="Impact measurement" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Presentations and pitching" color="primary" />} label="Presentations and pitching" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Project management" color="primary" />} label="Project management" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Public speaking" color="primary" />} label="Public speaking" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Sales and Marketing" color="primary" />} label="Sales and Marketing" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="SEO" color="primary" />} label="SEO" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Startup Law" color="primary" />} label="Startup Law" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperience} value="Team Management" color="primary" />} label="Team Management" />
                            </FormGroup>
                        </div>
                        <div>
                            <h4 ref="experienceIndusrtry">Industry or Technology of Experience * <span> (Select Max. 3)</span></h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="AgroTech" color="primary" />} label="AgroTech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="FoodTech" color="primary" />} label="FoodTech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="BioTech" color="primary" />} label="BioTech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Edutech" color="primary" />} label="Edutech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Fintech" color="primary" />} label="Fintech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Greentech-Cleantech" color="primary" />} label="Greentech & Cleantech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="HealthTech" color="primary" />} label="HealthTech" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="IoT-Smart-City" color="primary" />} label="IoT & Smart City" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Social-Enterprises" color="primary" />} label="Social Enterprises" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Travel-Tourism" color="primary" />} label="Travel & Tourism" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="AR-VR" color="primary" />} label="AR/VR" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="AI-Machine-Learning" color="primary" />} label="AI/Machine Learning" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Blockchain" color="primary" />} label="Blockchain" />
                                <FormControlLabel control={<Checkbox onChange={this.handleExperienceIndusrtry} value="Gaming" color="primary" />} label="Gaming" />
                            </FormGroup>
                        </div>
                    </div>
                    <div>
                        <div className="textAreaBox">
                            <div><h6 ref="personalBio"><i><img src={require('./img/minIcon/person.png')} alt="icon" /></i> Personal Bio * <span ref="textArea1"> (Max {this.state.bioTextCout} words)</span></h6></div>
                            <textarea ref="bio" placeholder="Please keep in mind, that the provided information will be used in all further communications and marketing materials" maxLength={this.state.bioLenght} onChange={this.handleBioText}></textarea>
                        </div>
                    </div >
                    <div className="attachFile" ref="img">
                        <label htmlFor="attachPhoto" className="attachIcon">
                            <img src={require('./img/icon/attach.png')} alt="Attach"/>
                        </label>
                        <label htmlFor="attachPhoto" className="attachText"  ref="imgText">{this.state.imgError}</label>
                        <input type="file" onChange={this.handleAttach} id="attachPhoto" hidden={true} />
                    </div>
                </div >
                <div className="speakerTitle">
                    <h3>Other Information</h3>
                </div>
                <div className="form_body">
                    <div className="form_body_grid2">
                        <h4 ref="topEvent">Top 3 Events Where You Have Been Participated as a Speaker/Mentor *</h4>
                        <div className="textButtonBox">
                            <TextField onChange={(e) => this.handleOtherEvent(e, 1)} label="Name of the event" />
                            <TextField onChange={(e) => this.handleOtherEvent(e, 2)} label="Name of the event" />
                            <TextField onChange={(e) => this.handleOtherEvent(e, 3)} label="Name of the event" />
                        </div>
                    </div>
                    <div className="form_body_grid2 second">
                        <h4 ref="hearAbout">How did you hear about Sevan Startup Summit 2022? *</h4>
                        <RadioGroup aria-label="aboutSummit" name="aboutSummit" onChange={this.handleAboutSummit}>
                            <FormControlLabel value="facebook" control={<Radio color="primary" />} label="Facebook" />
                            <FormControlLabel value="our Website" control={<Radio color="primary" />} label="Our Website" />
                            <FormControlLabel value="our industry partners" control={<Radio color="primary" />} label="Our industry partners" />
                            <FormControlLabel value="previous summit participants" control={<Radio color="primary" />} label="Previous summit participants" />
                        </RadioGroup>
                    </div>
                    <div>
                        <div className="textAreaBox long">
                            <div><h6 ref="expectations"><i><img src={require('./img/minIcon/msg.png')} alt="icon" /></i> What are your expectations from the Summit? * <span ref="textArea2"> (Max 50 words)</span></h6></div>
                            <textarea onChange={this.handleExpectationsText} maxLength={this.state.expectationsLenght}></textarea>
                        </div>
                    </div>
                </div>
                <div className="formFootter">
                    <button onClick={this.handleSubmit}>Submit</button>
                    <p>{this.state.errorSbm}</p>
                </div>
            </Fragment >
        )
    }
}

export default SpeakerForm;













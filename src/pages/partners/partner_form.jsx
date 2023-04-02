import React from 'react';
import { Fragment } from 'react';

import TextField from '@material-ui/core/TextField';
import * as EmailValidator from 'email-validator';


class PartnerForm extends React.Component {
    constructor(){
        super();
        this.state={
            formOpen:'',
            errorSbm: IS_CLIENT?window.localStorage.getItem('msg'):'',
        };
        this.parners={
            fname:'',
            lname:'',
            position:'',
            email:'',
            company:'',
            phone:'',
        }
        IS_CLIENT?window.localStorage.clear():'';
    }

    componentDidMount=()=>{
        if(this.state.errorSbm!==null)this.setState({formOpen:'open'});
    }

    componentWillReceiveProps=(next)=>{
        if(next.formopen)this.setState({formOpen:'open'});
        else this.setState({formOpen:''});
    }

    handleBasicButtons=event=>{
        let text = event.target.value;
        let name=event.target.name;
        this.parners[name]=text;
    }

    handleSubmit = () => {
        const {fname,lname,position,email,company,phone} = this.parners;
        let error = '';
        if (company === "") error = 'companyName';
        else if (fname === "") error = 'firstName';
        else if (lname === "") error = 'lastName';
        else if (position === "") error = 'positionName';
        else if (email === "" || EmailValidator.validate(email) !== true) error = 'email';
        else if (phone === "") error = 'phoneName';

        if (error !== '') {
            for (var ref in this.refs) {
                this.refs[ref].style.borderBottom = "0px solid #f20707";
            }
            this.refs[error].style.borderBottom = "2px solid #f20707";
        }
        else{
            fetch('https://www.apis.seasidestartupsummit.com/aplications/partner_form.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Host': 'https://www.apis.seasidestartupsummit.com/',
                    'Origin': 'https://test.seasidestartupsummit.com/',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.parners),
            })
                .then(resp => resp.json().then(jsonResp => {
                    return resp.ok ? jsonResp : Promise.reject(jsonResp);
                })
                )
                .then(
                    data => {
                        if (data.resp === 'ok') {
                            this.setState({errorSbm:'succeed'});
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
    handelCloseForm=()=>{
        this.setState({formOpen:''});
        if(this.state.errorSbm==='succeed'){
            IS_CLIENT?window.location.reload():''
        }
    }
    render=()=>{
        return(
            <Fragment>
                <div className={`partner_form_box ${this.state.formOpen}`}>
                    <div className="partner_form">
                        <div className="partner_form_header">
                            <h3>Become a partner</h3>
                            <b onClick={this.handelCloseForm}>X</b> 
                        </div>
                        <div className="partner_form_middle">
                            <TextField ref="companyName" name="company" onChange={this.handleBasicButtons} label="Company name *" />
                            <TextField ref="firstName" name="fname" onChange={this.handleBasicButtons} label="First Name *" />
                            <TextField ref="lastName" name="lname" onChange={this.handleBasicButtons} label="Last Name *" />
                            <TextField ref="positionName" name="position" onChange={this.handleBasicButtons} label="Position *" />
                            <TextField ref="email" name="email" onChange={this.handleBasicButtons} label="E-mail address *" />
                            <TextField ref="phoneName" name="phone" onChange={this.handleBasicButtons} label="Phone number *" />
                        </div>
                        <div className="partner_form_footter">
                            <button onClick={this.handleSubmit}>Submit</button>
                            <p>{this.state.errorSbm}</p>
                        </div>
                        <div className={`partner_form_success ${this.state.errorSbm==='succeed'?'open':'5'} `}>
                            <img src={require('./img/icons/success.png')} alt="Success" />
                            <p>Your application is taken forward. <br/> SSS Team will contact you soon</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PartnerForm;
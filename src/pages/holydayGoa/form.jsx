import React from 'react';

class MinHolidayForm extends React.Component{
    constructor(){
        super();
        this.state={
            form:{
                type:'',
                company:'',
                name_surname:'',
                email:'',
                phone_umber :'',
                position:'',
                country:''
            },
            err:'',
            errorSbm:'',
            countrys:[],
        }
    }

    componentDidMount = () => {
        this.getCountries();
    }

    getCountries=()=>{
        fetch('https://restcountries.com/v2/all',{
            method:'GET'
        })
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            let countrys=[];
            for(let i=0; i<data.length; i++){
                countrys.push(data[i].name);
            }
            this.setState({countrys});
        })
    }
    
    setSelectedValue=(e)=>{
        let setName=e.target.name;
        let setValue=e.target.value;
        let form=this.state.form;
        form[setName]=setValue;
        this.setState({form},()=>console.log('sent',this.state.form))
    }

    setInputValue=(e)=>{
        let setName=e.target.name;
        let setValue=e.target.value;
        let form=this.state.form;
        form[setName]=setValue;
        this.setState({form},()=>console.log('sentt',this.state.form))
    }
    resetBorder=()=>{
        document.getElementsByName('type')[0].style.borderColor="#596273";
        if(this.state.form.type==='Company' || this.state.form.type==='Startup'){
            document.getElementsByName('company')[0].style.borderColor="#596273";
            document.getElementsByName('position')[0].style.borderColor="#596273";
        }
        document.getElementsByName('name_surname')[0].style.borderColor="#596273";
        document.getElementsByName('email')[0].style.borderColor="#596273";
        document.getElementsByName('phone_umber')[0].style.borderColor="#596273";
    }
    
    findEmpty=()=>{
        const{type,company,name_surname,email,phone_umber,position}=this.state.form;
        if(type==='Company' || type==='Startup'){
            this.resetBorder();
            if(type==="")document.getElementsByName('type')[0].style.borderColor="#c00404";
            else if(company==="")document.getElementsByName('company')[0].style.borderColor="#c00404";
            else if(position==="")document.getElementsByName('position')[0].style.borderColor="#c00404";
            else if(name_surname==="")document.getElementsByName('name_surname')[0].style.borderColor="#c00404";
            else if(email==="")document.getElementsByName('email')[0].style.borderColor="#c00404";
            else if(phone_umber==="")document.getElementsByName('phone_umber')[0].style.borderColor="#c00404";
        }
        else{
            this.resetBorder();
            if(type==="")document.getElementsByName('type')[0].style.borderColor="#c00404";
            else if(name_surname==="")document.getElementsByName('name_surname')[0].style.borderColor="#c00404";
            else if(email==="")document.getElementsByName('email')[0].style.borderColor="#c00404";
            else if(phone_umber==="")document.getElementsByName('phone_umber')[0].style.borderColor="#c00404";
        }
    }

    handleSubmit=()=>{
        const{type,company,name_surname,email,phone_umber,position, country}=this.state.form;
        if(type==='Company' || type==='Startup'){
            if(type==="" || company==="" || position==="" || name_surname==="" || email==="" || phone_umber==="" ){
               this.findEmpty()
               return this.setState({err:'All fields are required'});
            }
            else{
                this.setState({err:''});
                this.sendForm();
            }
        }
        else{
            if(type==="" || name_surname==="" || email==="" || phone_umber==="" || country===""){
               this.findEmpty()
                return this.setState({err:'All fields are required'})
            }
            else{
                this.setState({err:''});
                this.sendForm();
            }
        }
    }

    sendForm=()=>{
        const {form}=this.state;
        form.company=`${form.company}, ${form.position}`;
        delete form.position;
        fetch('https://www.apis.seasidestartupsummit.com/aplications/holydayGoa2022.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Host': 'https://www.apis.seasidestartupsummit.com/',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
        })
        .then(resp=>{return resp.json()})
        .then(data=>{
            if (data.resp === 'ok') {
                this.setState({
                    errorSbm:'success'
                },()=>this.resetBorder());
                
            }
            else {
                this.setState({ err: 'Something went wrong Try Again' });
            }
        })
        .catch(err=>{
            this.setState({ err: err.message});
        })
    }

    closeMsg=()=>{
        this.setState({
            errorSbm:'',
            form:{
                type:this.state.form.type,
                country:this.state.form.country,
                position:'',
                name_surname:'',
                email:'',
                phone_umber :'',
            },
        })
    }
    
    render=()=>{
        const{err}=this.state;
        const{type,company,name_surname,email,phone_umber,position}=this.state.form;
        return(
            <>
            <div className="min_holiday_form">
                <div>
                    <h3>Fill the form and get full information via e-mail</h3>
                    <div>
                        <div>
                            <div>
                                <select name="type" onChange={(e)=>this.setSelectedValue(e)}>
                                    <option value="">Choose The Option</option>
                                    <option value="Startup">Startup</option>
                                    <option value="Individual">Individual</option>
                                    <option value="Company">Company</option>
                                </select>
                                {
                                    (type==='Company' || type==='Startup' )?
                                        <input type="text" name="company" value={company} placeholder={type==='Company'?"Name of the company":"Name of the startup"} onInput={(e)=>this.setInputValue(e)}/>
                                    :null
                                }
                                {    (type==='Company' || type==='Startup' )?
                                        <input type="text" name="position" value={position} placeholder="Your position" onInput={(e)=>this.setInputValue(e)}/>
                                    :null
                                }
                            </div>
                            <div>
                                <input type="text" name="name_surname" value={name_surname} placeholder="Name Surname" onInput={(e)=>this.setInputValue(e)}/>
                                <input type="text" name="email" value={email} placeholder="E-mail" onInput={(e)=>this.setInputValue(e)}/>
                                <input type="text" name="phone_umber" value={phone_umber} placeholder="Phone number" onInput={(e)=>this.setInputValue(e)}/>
                                <select name="country" onChange={(e)=>this.setSelectedValue(e)}>
                                    <option value="">Country</option>
                                    {this.state.countrys.map((country) => <option key={country} value={country}>{country}</option>)}
                                </select>
                                <button onClick={()=>this.handleSubmit()}>Submit</button>
                                <small>{err}</small>
                            </div>
                        </div>
                        <div>
                            <img src={require('./icn/formPic.png')} />
                        </div>
                    </div>
                    <div className={`partner_form_success ${this.state.errorSbm==='success'?'open':''}`} onClick={()=>this.closeMsg()}>
                        <div className="cloaseLine"><span onClick={()=>this.closeMsg()}>X</span></div>
                        <img src={require('./icn/success.png')} alt="Success" />
                        <p>Your application is taken forward. <br/> Check your mail for further details. <br/>Your SSS Team :)</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


export default MinHolidayForm; 
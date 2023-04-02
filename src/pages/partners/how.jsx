import React from 'react';
import PartnerForm from './partner_form.jsx';

class How extends React.Component{
    constructor(){
        super();
        this.state={formOpen:false}
    }
    render=()=>{
        return(
            <div className="teamleadGuid">
                <h3 className="subtitle">How To Apply</h3>
                <div className="guidItems">
                    <div onMouseOver={()=>this.refs.i1.classList.add('scaleBig')} onMouseOut={()=>this.refs.i1.classList.remove('scaleBig')}>
                        <div><img src={require('./img/icons/how1.png')} alt="guid1" /></div>
                        <h4>Consultation with <br/> our partner team</h4>
                        <p>You just need to contact our partnership team and they will take the lead</p>
                    </div><i ref="i1"/>
                    <div onMouseOver={()=>this.refs.i2.classList.add('scaleBig')} onMouseOut={()=>this.refs.i2.classList.remove('scaleBig')}>
                        <div><img src={require('./img/icons/how2.png')} alt="guid2" /></div>
                        <h4>Development of the partnership package</h4>
                        <p>We have both general and partner tailored packages. Our team will help you to select the best package for your company</p>
                    </div><i ref="i2"/>
                    <div onMouseOver={()=>this.refs.i3.classList.add('scaleBig')} onMouseOut={()=>this.refs.i3.classList.remove('scaleBig')}>
                        <div><img src={require('./img/icons/how4.png')} alt="guid4" /></div>
                        <h4>Get Prepared <br/> with our team </h4>
                        <p>You will be attached to account manager, who will guide you till the end of the summit. </p>
                    </div><i ref="i3"/>
                    <div>
                        <div><img src={require('./img/icons/how3.png')} alt="guid3" /></div>
                        <h4>Welcome to the Summit </h4>
                        <p>Now you are at the Summit.Be active and keep in mind, that our platform is all about networking. </p>
                    </div>
                </div>
                {/* <div className="guidItemsFooter">
                    <button onClick={()=>{this.setState({formOpen:!this.state.formOpen})}}>Become a Partner</button>
                </div> */}
                <PartnerForm formopen={this.state.formOpen}/>
            </div>
        );
    }
}
export default How;
import React from 'react';

class Why extends React.Component{
    render=()=>{
        return(
            <div className="teamleadType" >
            <h3 className="subtitle">Why to Partner With Us</h3>
            <div className="teamleadTypeItem">
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/icons/why1.png')} alt="opportunities" /></div>
                            <h4>Access to Innovative solutions</h4>
                        </div>
                        <div className="back">
                            <h4>Access to Innovative solutions</h4>
                            <p>Each summit attracts over 150 International teams operating in different industries and representing the trendiest technologies. Partners can get access to those teams and become early adopters of high-end solutions. </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/icons/why2.png')} alt="opportunities" /></div>
                            <h4>Brand Visibility</h4>
                        </div>
                        <div className="back">
                            <h4>Brand Visibility</h4>
                            <p>Partnering put your brand visuals in front of large audiences. Each event attracts over 10000 guests, over 500 businesses and the main local and regional media.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/icons/why3.png')} alt="opportunities" /></div>
                            <h4>Community Goodwill</h4>
                        </div>
                        <div className="back">
                            <h4>Community Goodwill</h4>
                            <p>Become part of one of the fastest growing communities in the world, strengthen your business image and link your business to a worthy cause </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/icons/why4.png')} alt="opportunities" /></div>
                            <h4>Lead generation</h4>
                        </div>
                        <div className="back">
                            <h4>Lead generation</h4>
                            <p>Participants of the summit will experience the event and learn about your brand there and can turn into qualified leads. </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/icons/why5.png')} alt="opportunities" /></div>
                            <h4>Recruitment</h4>
                        </div>
                        <div className="back">
                            <h4>Recruitment</h4>
                            <p>Summit is a great way to introduce your company to your potential hires. Your hiring team members can mingle with over 1000 qualified participants and 10000 guests. </p>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
        );
    }
}

export default Why;
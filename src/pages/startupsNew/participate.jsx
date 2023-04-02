import React from 'react';

export class Participate extends React.Component{
    render=()=>{
        return(
            <div className="startupsParticipate">
                <h3 className="subtitle">Why to Participate</h3>
                <div>
                    
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why1.png')} alt="opportunities" /></div>
                                    <h4>Contacts and Networking</h4>
                                </div>
                                <div className="back">
                                    <h4>Contacts and Networking</h4>
                                    <p>During the 7 days of the summit you have access to over 100 top speakers, mentors and investors, 1000 participants, 10000 guests from over 50 countries.</p>
                                </div>
                            </div>
                        </div>
                   
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why2.png')} alt="opportunities" /></div>
                                    <h4>Funding</h4>
                                </div>
                                <div className="back">
                                    <h4>Funding</h4>
                                    <p>All the pitching battles are run under the judgement of angel & institutional investors. On top of that, you will have access to specially design SSS Investment fund.   </p>
                                </div>
                            </div>
                        </div>
                   
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why3.png')} alt="opportunities" /></div>
                                    <h4>New Skills and Knowledge</h4>
                                </div>
                                <div className="back">
                                    <h4>New Skills and Knowledge</h4>
                                    <p>Be the part of the world`s leading micro-acceleration program and meet over 100 top mentors and serial entrepreneurs from all over the globe</p>
                                </div>
                            </div>
                        </div>
                  
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why4.png')} alt="opportunities" /></div>
                                    <h4>Live market experience</h4>
                                </div>
                                <div className="back">
                                    <h4>Live market experience</h4>
                                    <p>Summit attracts representatives of over 200 leading local and regional businesses and over 10000 guests. Hence, you have a chance to reach out to B2B and B2C market</p>
                                </div>
                            </div>
                        </div>
                 
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why5.png')} alt="opportunities" /></div>
                                    <h4>Additional Visibility</h4>
                                </div>
                                <div className="back">
                                    <h4>Additional Visibility</h4>
                                    <p>Summits are typically under the loop pof local and regional media. Hence, you always have a chance to get into the media streams </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/why6.png')} alt="opportunities" /></div>
                                    <h4>Recruitment</h4>
                                </div>
                                <div className="back">
                                    <h4>Recruitment</h4>
                                    <p>Get access to thousands of talented and high-profile professionals, who can join your team. </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
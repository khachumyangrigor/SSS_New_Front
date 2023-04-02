import React from 'react';
// import scrollToComponent  from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import { Link } from 'react-router-dom';

import  './forms.css';
import  './style.css';

class EgyptEvent extends React.Component{
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>SSSholidays2020 | Seaside Startup Summit</title>
            </Helmet>
            <div className="egipt_2020">
                <div className="egiptbnaer"></div>
                <Header/>
                <div className="event_part1">
                    <div className="left" >
                        <p><b>#SSSholidays2020</b> is a 7-day event which will take place in a resort setting, with representatives of the Startup Ecosystem of Armenia and the host country. During these days panel discussions will be organized, as well as Campfire Talks, etc. Fill in this form to participate in #SSSholidays2020 and our organizers will look at your candidacy, contact you and send you more detailed information about the event.</p>
                        <div>
                            <Link to="/sss-holidays-egypt/company">For Companies</Link>
                            <Link to="/sss-holidays-egypt/individual">For Individuals</Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require('./banermiddle.png')} alt="#SSSholidays2020"/>
                    </div>
                </div>
                <div className="valunteersOppartunitis event_status">
                    <h3 className="subtitle">What will you get from it?</h3>
                    <div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group.png')} alt="optImg" />
                            </div>
                            <p>— Inspiration —</p>
                            <small>from the brightest entrepreneurial minds </small>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 256.png')} alt="optImg" />
                            </div>
                            <p>— Networking —</p>
                            <small>with fellow creatives who share the same path with</small>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 315.png')} alt="optImg" />
                            </div>
                            <p>— Opportunities —</p>
                            <small>ultimate platform to source your next promising deal and have job opportunities</small>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 240.png')} alt="optImg" />
                            </div>
                            <p>— Entertainment —</p>
                            <small>have an fun time and unforgettable experiences</small>
                        </div>
                    </div>
                    <h5>Opportunities and Daily Events</h5>
                    <div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 204.png')} alt="optImg" />
                            </div>
                            <p>— Campfire talks —</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 317.png')} alt="optImg" />
                            </div>
                            <p>— Panel Discussions —</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div>   
                                <img src={require('./icn/Group 318.png')} alt="optImg" />
                            </div>
                            <p>— Presentations of different products & companies —</p>
                        </div>
                    </div>
                    <div className="footer">
                        <div>
                            <img src={require('./icn/Group 321.png')} alt="optImg" />
                        </div>
                        <p>SSSHolidays2020 will be organized for the first time, and we are sure that it will be as unique and unprecedented as the main format of Seaside Startup Summit. We believe that it will become an annual phenomenon.</p>
                    </div>
                </div>
                <div className="event_cond valunteersOppartunitis">
                    <h3 className="subtitle">Who can participate? </h3>
                    <p>All of You!</p>
                    <small>The main rule</small>
                    <h3 className="subtitle">What you do, do with a team.</h3>
                    <small>Each of you who helped us to organize SSS became a part of a huge team-Family.</small>
                </div>
                <div className="event_violet">
                    <p>SSSHolidays2020 is also a celebration of the fifth anniversary of SSS.<br/>For this occasion, SSS Anniversary Party will take place during one of the evenings.</p>
                    <h2>Let’s get the party started!</h2>
                </div>
                <div className="event_apply">
                    <h3>You are all invited to Join us!</h3>
                    <Link to="/sss-holidays-egypt/company">For Companies</Link>
                    <Link to="/sss-holidays-egypt/individual">For Individuals</Link>
                </div>
                <div className="event_partner_p1">
                    <h3>General Partners</h3>
                    <div>
                        <div><a href="http://www.anrivagroup.com/" target="blank" rel="noopener noreferrer"><img src={require('./partners/1.png')} alt="general partner"/></a></div>
                        <div><a href="https://aircairo.com/en/" target="blank" rel="noopener noreferrer"><img src={require('./partners/2.png')} alt="general partner"/></a></div>
                    </div>
                </div>
                <div className="event_partner_p1 v2">
                    <h3>Partners</h3>
                    <div>
                        <div><a href="https://www.softconstruct.com/" target="blank" rel="noopener noreferrer"><img src={require('./partners/3.png')} alt="general partner"/></a></div>
                        {/* <div><a href="https://aica.social/" target="blank" rel="noopener noreferrer"><img src={require('./partners/4.png')} alt="general partner"/></a></div>
                        <div><a href="" target="blank" rel="noopener noreferrer"><img src={require('./partners/5.png')} alt="general partner"/></a></div>
                        <div><a href="https://www.ceviancapital.com/" target="blank" rel="noopener noreferrer"><img src={require('./partners/6.png')} alt="general partner"/></a></div>
                        <div><a href="https://www.vtb.am/" target="blank" rel="noopener noreferrer"><img src={require('./partners/7.png')} alt="general partner"/></a></div>
                        <div><a href="https://www.fast.foundation/" target="blank" rel="noopener noreferrer"><img src={require('./partners/8.png')} alt="general partner"/></a></div>
                        <div><a href="" target="blank" rel="noopener noreferrer"><img src={require('./partners/9.png')} alt="general partner"/></a></div>
                        <div><a href="https://adfirst.vc/" target="blank" rel="noopener noreferrer"><img src={require('./partners/10.png')} alt="general partner"/></a></div> */}
                    </div>
                </div>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        );
    }
}
export default EgyptEvent;
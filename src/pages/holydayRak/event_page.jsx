import React from 'react';
// import scrollToComponent  from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import { Link } from 'react-router-dom';
import  Options from './options.jsx';
import scrollToComponent from 'react-scroll-to-component';
import Partners from './partners.jsx';
import  './forms.css';
import  './style.css';

class HolidayRAK extends React.Component{
    constructor(){
        super()
        this.state={
            textOpeningWhatIs:"More",
            textOpeningWhereWill:"More"
        }
    }
    componentDidMount=()=>{
        if(this.props.match.path==='/sss-holidays-uae-rak/apply'){
            this.scrollToForm();
            this.props.history.push("/sss-holidays-uae-rak/"); 
        }
    }
    scrollToForm=()=>{
        scrollToComponent(this.refs.form, {
            offset: -200,
            align: 'top',
            duration: 800
        });
    }
    openLink=(link)=>{
        if(IS_CLIENT){
            window.open(link,'_blank');
        }
    }
    textOpeningWhatIs=()=>{
        const { textOpeningWhatIs } = this.state;
        if( textOpeningWhatIs==="More"){
            this.setState({
                textOpeningWhatIs:"Less"
            })
        }
        else {
            this.setState({
                textOpeningWhatIs:"More"
            })
        }
    }
    textOpeningWhereWill=()=>{
        const { textOpeningWhereWill } = this.state;
        if( textOpeningWhereWill==="More"){
            this.setState({
                textOpeningWhereWill:"Less"
            })
        }
        else {
            this.setState({
                textOpeningWhereWill:"More"
            })
        }
    }
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>SSS Holidays UAE RAK | Seaside Startup Summit</title>
                <meta name="description" content="SSSholidays is one of the Seaside Startup Summit's new formats, which will take place in the United Arab Emirates for the first time." />
                <meta property="og:description" content="SSSholidays is one of the Seaside Startup Summit's new formats, which will take place in the United Arab Emirates for the first time." />
                <meta property="og:title" content="SSS Holidays UAE RAK | Seaside Startup Summit" />
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/sss-holidays-uae-rak`} />
                <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/sss-holidays-uae-rak.png" />
            </Helmet>
            <div className="rakHoliday2021">
                <div className="egiptbnaer">
                    <div>
                        <h1>SSSholidays UAE RAK</h1>
                        <h2>Ras Al Khaimah, UAE. December 6-12, 2021</h2>
                    </div>
                </div>
                <Header/>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <h2>What is SSSholidays?</h2>
                        <p className={`textOpeningWhatIs ${this.state.textOpeningWhatIs}`}>
                            <b>#SSSholidays</b> is one of the Seaside Startup Summit's new formats, which will take place in the United Arab Emirates for the first time. In contrast to summits in the standard format, this event will be held in a resort setting with the representatives of the Startup Ecosystem of Armenia and the host country. There will be a specially developed educational programme, which will include Panel Discussions, Mentorship Sessions, Campfire Talks and Startup Battles. Participation formats are designed for individuals, companies and startups.
                            <br/><span style={{display:'block',marginTop:'26px'}} />
                            Fill in this form to participate in #SSSholidays and our organizers will contact you and send you more detailed information about the event.
                        </p>
                        <div className="textOpening" onClick={()=>{this.textOpeningWhatIs()}}>See {this.state.textOpeningWhatIs}</div>
                    </div>
                    <div className="aboutInfo_right">
                        <iframe title="infoFrame" src="https://www.youtube.com/embed/gzsOtoObGVQ" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <img src={require('./icn/hotel2.png')} alt="Hotel" />
                        <div className="placeIcon" onClick={()=>this.openLink('https://www.hilton.com/en/hotels/rktmidi-doubletree-resort-and-spa-marjan-island/')}>
                            <img src={require('./icn/globe.png')}/>
                            DoubleTree by Hilton Resort & Spa Marjan Island
                        </div>
                    </div>
                    <div className="aboutInfo_left">
                        <h2>Where will SSSholidays be held?</h2>
                        <p className={`textOpeningWhatIs ${this.state.textOpeningWhereWill}`}>
                            <b style={{color:'#0D63D7',cursor:'pointer'}} onClick={()=>this.openLink('https://www.hilton.com/en/hotels/rktmidi-doubletree-resort-and-spa-marjan-island/')}>DoubleTree by Hilton Resort & Spa Marjan Island</b> is located on Al Marjan Island, one of the most expensive artificial islands in the world. Al Marjan Island is a group of 4 coral-shaped islands in a man-made archipelago located in Ras al-Khaimah.
                            <br/><span style={{display:'block',marginTop:'20px'}}/>
                            DoubleTree by Hilton Resort & Spa is the only DoubleTree by Hilton hotel to receive 5 stars. The hotel is within the region of Iceland Water Park and Dreamland.
                            <br/><span style={{display:'block',marginTop:'20px'}}/>
                            The hotel has 13 restaurants and bars, including all-day working restaurants, 4 specialized restaurants, a rooftop bar, 2 poolside bars, a beach bar, a fruit stand, a lobby lounge and a coffee shop. Hotel will be fully at our disposal. The hotel will have a specially designed SSS corner with Summit attributes: tents, hashtag, campfires. They will be artificial and will have a symbolic meaning.
                            <br/><span style={{display:'block',marginTop:'20px'}}/>
                            It's Important to mention that Seaside Startup Summit 2018 UAE RAK was held on this Island.
                        </p>
                        <div className="textOpening" onClick={()=>{this.textOpeningWhereWill()}}>See {this.state.textOpeningWhereWill}</div>
                        <div className="placeIcon" onClick={()=>this.openLink('https://www.hilton.com/en/hotels/rktmidi-doubletree-resort-and-spa-marjan-island/')}>
                            <img src={require('./icn/globe.png')}/>
                            DoubleTree by Hilton Resort & Spa Marjan Island
                        </div>
                    </div>
                </div>
                <Options ref="form"/>
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
                            <small>CONNECTING WITH CREATIVE PEOPLE WHO SHARE THE SAME PATH, INSPIRE AND BE INSPIRED</small>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 315.png')} alt="optImg" />
                            </div>
                            <p>— Opportunities —</p>
                            <small>ULTIMATE PLATFORM TO SOURCE YOUR NEXT PROMISING DEAL AND CREATE NEW JOB OPPORTUNITIES</small>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group 240.png')} alt="optImg" />
                            </div>
                            <p>— Entertainment —</p>
                            <small>HAVE FUN AND UNFORGETTABLE EXPERIENCE</small>
                        </div>
                    </div>
                    {/* <h5>Opportunities and Daily Events</h5>
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
                    </div> */}
                    {/* <div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Group22.png')} alt="optImg" />
                            </div>
                            <p>— mentorship —</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div>
                                <img src={require('./icn/Frame.png')} alt="optImg" />
                            </div>
                            <p>— Startup battles —</p>
                        </div>
                    </div> */}
                </div>
                <Partners/>
                <div className="event_violet">
                    <div>
                        <img src={require('./icn/Group 321.png')} alt="optImg" />
                    </div>
                    <p>SSSholidays UAE RAK will be organized for the first time, and we are sure that it will be as unique and unprecedented as the main format of Seaside Startup Summit. We believe that it will become an annual phenomenon.</p>
                </div>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        );
    }
}
export default HolidayRAK;
import React from 'react';
import FootterNew from '../footterNew/footterNew.jsx';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import  Options from './options.jsx';
import Partners from './partners.jsx';
import MinHolidayForm from './form.jsx';
import  './forms.css';   
import  './style.css';

class HolidayGOA extends React.Component{
    constructor(){
        super()
        this.state={
            textOpeningWhatIs:"More",
            textOpeningWhereWill:"More"
        }
    }
    // componentDidMount=()=>{
    //     if(this.props.match.path==='/sss-holidays-india-vizag/apply'){
    //         this.scrollToForm();
    //         this.props.history.push("/sss-holidays-india-vizag/"); 
    //     }
    // }
    // scrollToForm=()=>{
    //     scrollToComponent(this.refs.form, {
    //         offset: -20,
    //         align: 'top',
    //         duration: 800
    //     });
    // }
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
    render(){
        return(
            <div>
            <Helmet>
                <title>SSS Holidays Vizag INDIA | Seaside Startup Summit</title>
                <meta name="description" content="SSSholidays is one of the Seaside Startup Summit's new formats, which will take place in the India for the first time." />
                <meta property="og:description" content="SSSholidays is one of the Seaside Startup Summit's new formats, which will take place in the India for the first time." />
                <meta property="og:title" content="SSS Holidays India Vizag | Seaside Startup Summit" />
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/sss-holidays-india-vizag`} />
                <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/sss-holidays-india-vizag.png" />
                <meta property="og:image:secure_url" content="https://seasidestartupsummit.com/ogImage/sss-holidays-india-vizag.png" />
            </Helmet>
            <div className="goaHoliday2022" >
                <div className="egiptbnaer">
                    <div>
                        <h1>SSSholidays India Vizag</h1>
                        <h2>Sagar-Nagar beach, India <br className="dateBreakMobile"/> February 13-18, 2023</h2>
                    </div>
                </div>
                <Header/>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <h2>What is SSSholidays?</h2>
                        <p className={`textOpeningWhatIs ${this.state.textOpeningWhatIs}`}>
                            <b>#SSSholidays</b> is one of the Seaside Startup Summit's new formats, which previously took place once in UAE. This time the event will be held in India, Vizag. SSSholidays Vizag is going to be the most awaited event of the year for the representatives of the Startup Ecosystem of Armenia, India and other countries. It will be held in Radisson Blu Resort Visakhapatnam. There will be a specially developed educational programme, which will include Panel Discussions, Mentorship Sessions, Campfire Talks,and Startup Battles. Participation formats are designed for startups, companies, and individuals as well.
                            <br/><span style={{display:'block',marginTop:'26px'}} />
                            Fill in this form to participate in #SSSholidays and our organizers will reach out to you and send you more detailed information about the event.
                        </p>
                        <div className="textOpening" onClick={()=>{this.textOpeningWhatIs()}}>See {this.state.textOpeningWhatIs}</div>
                    </div>
                    <div className="aboutInfo_right">
                        {/* <img src={require('./icn/minicover.png')} alt="Hotel" /> */}
                        <iframe title="infoFrame" src="https://www.youtube.com/embed/EBes_PWzuO4" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <img src={require('./icn/hotel3.png')} alt="Hotel" />
                        <div className="placeIcon" onClick={()=>this.openLink('https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-visakhapatnam/rooms')}>
                            <img src={require('./icn/globe.png')}/>
                            Radisson Blu Resort Visakhapatnam
                        </div>
                    </div>
                    <div className="aboutInfo_left">
                        <h2>Where will SSSholidays be held?</h2>
                        <p className={`textOpeningWhatIs ${this.state.textOpeningWhereWill}`}>
                            <span onClick={()=>this.openLink('https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-visakhapatnam/rooms')}>The Radisson Blu Resort Visakhapatnam</span>  is perfectly situated for guests to fully unwind and enjoy everything that Andhra Pradesh has to offer. Located on the coastline, visitors to Visakhapatnam have the best of both worlds, with serene beaches and the city close by to explore. The 99 rooms are all luxuriously designed and have views of the resort gardens or the ocean, to provide guests with a perfect space to unwind in Visakhapatnam.
                        </p>
                        <div className="textOpening" onClick={()=>{this.textOpeningWhereWill()}}>See {this.state.textOpeningWhereWill}</div>
                        <div className="placeIcon" onClick={()=>this.openLink('https://www.google.com/maps/place/Radisson+Blu+Resort+Visakhapatnam/@17.7655022,83.3661147,1760m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3a395bb9c94c1057:0x790d1a77f69f0f32!2sRadisson+Blu+Resort+Visakhapatnam!5m2!4m1!1i2!8m2!3d17.7714424!4d83.3728866!3m7!1s0x3a395bb9c94c1057:0x790d1a77f69f0f32!5m2!4m1!1i2!8m2!3d17.7714424!4d83.3728866')}>
                            <img src={require('./icn/globe.png')}/>
                            Radisson Blu Resort Visakhapatnam
                        </div>
                    </div>
                </div>
                <Options/>
                <MinHolidayForm/>
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
                </div>
                <Partners/>
                <div className="event_violet">
                    <div>
                        <img src={require('./icn/Group 321.png')} alt="optImg" />
                    </div>
                    <p>SSSholidays India Vizag is already the second event in this format and it is obviously becoming an annual phenomenon. We are sure that SSSholidays India Vizag will raise your standards about high-quality rest and will be as unique and unprecedented as the main format of Seaside Startup Summit.</p>
                </div>
                <FootterNew ref="footter"/>
            </div>
            </div>
        );
    }
}
export default HolidayGOA;
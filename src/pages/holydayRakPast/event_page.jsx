import React from 'react';
// import scrollToComponent  from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import  Partners from './partners.jsx';
import  Infographic from './infographic.jsx';
import  Startups from './startups.jsx';
import  Diaries from './diaries.jsx';
import  Mentors from './mentors.jsx';

import  './style.css';

class HolidayRAK extends React.Component{
    constructor(){
        super()
        this.state={
            textOpeningWhatIs:"More",
            textOpeningWhereWill:"More",
            promoClass: '',
        }
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
    handelAddPromo = () => {
        this.setState({
            promoClass: 'openClass2',
            promoLink: 'https://www.youtube.com/embed/aHlgf3k9HD8',
        });
    }
    handelRemovePromo = () => {
        this.setState({
            promoClass: '',
            promoLink: ''
        });
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
            <div  className={this.state.promoClass} id="promoVideo"  onClick={this.handelRemovePromo}>
                    <iframe title="frame1" width="100%" height="60%" src={this.state.promoLink} allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="rakHoliday2021">
                <div className="rakHoliday2021Banner">
                    <div>
                        <h1>SSSholidays UAE RAK</h1>
                        <h2>DoubleTree by Hilton Resort & Spa Marjan Island.</h2>
                        <h2>Ras Al Khaimah, UAE. Dec 6-12, 2021</h2>
                        <button onClick={this.handelAddPromo}>Aftermovie</button>
                    </div>
                </div>
                <Header/>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <h2>What is SSSholidays?</h2>
                        <p className={`textOpeningWhatIs ${this.state.textOpeningWhatIs}`}>
                            <b>#SSSholidays</b>  is one of the Seaside Startup Summit's new formats, which has taken place in the United Arab Emirates for the first time. In contrast to summits in the standard format, this event is held in a resort setting with the representatives of the Startup Ecosystem of Armenia and the host country. There is a specially developed educational programme, that includes but is not limited to Panel Discussions, Mentorship Sessions, Campfire Talks, and Startup Battles. 
                            <br/>
                            The participation format is designed for individuals, companies, and startups.
                        </p>
                        <div className="textOpening" onClick={()=>{this.textOpeningWhatIs()}}>See {this.state.textOpeningWhatIs}</div>
                    </div>
                    <div className="aboutInfo_right">
                        <img src={require('./bg_about.png')} />
                    </div>
                </div>
                <Diaries/>
                <Infographic/>
                <Startups/>
                <Mentors/>
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
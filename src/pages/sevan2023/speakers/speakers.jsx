import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import SpeakerForm from './form.jsx';
import FootterNew from '../../footterNew/footterNew.jsx';
import './speakers.css'
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";

class SpeakersPage extends React.Component {
    constructor(){
        super();
        this.scrollY=0;
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.scrollTo(0, 0);
        if(this.refs.headerText){
            this.refs.headerText.style.opacity=1;
        }
        if(this.refs.headerText){
            if(window.innerWidth>1024)this.refs.headerText.classList.add('headfixed');
            else this.refs.headerText.classList.remove('headfixed');
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
    }

    winScroll = () => {
        if (this.refs.topMenu !== undefined) {
            if (window.scrollY >= window.innerHeight) {
                this.refs.topMenu.classList.add('topMenuFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.topMenu.classList.remove('topMenuFix');
            }
        }
    }

    handelScrollIntoView = () => {
        scrollToComponent(this.refs.footter, {
            offset: this.refs.footter.offsetHeight,
            align: 'top',
            duration: 800
        });
    }

    handelScrollTo = elem => {
        scrollToComponent(elem, {
            offset: -200,
            align: 'top',
            duration: 800
        });
    }
    menuOpen = () => {
        if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
            this.refs.menuIcon.classList.remove("minmenuIconOpen");
            this.refs.menuBox.classList.remove("minmenuBoxOpen");
        }
        else {
            this.refs.menuIcon.classList.add("minmenuIconOpen");
            this.refs.menuBox.classList.add("minmenuBoxOpen");
        }
    }

    menueClose = () => {
        this.menuOpen();
    }

    render = () => {
        return (
            <Fragment>
            <Helmet>
                <title>Become a Speaker | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew speakers">
                {/* Part 1 */}
                <div className="speakerBanner">
                    <div className="upcommingNewTopHead">
                        <h1>a harbor of discoveries</h1>
                        <h2>turn your dreams into goals</h2>
                    </div>
                    <div className="upcommingNewTopFootter">
                        <h3>Sevan Startup Summit 2022</h3>
                        <h4>july 24-30</h4>
                    </div>
                </div>
                {/* Part 2 */}
                <div className="firstPageHeader" ref="topMenu">
                    <div className="firstPageHeaderLeft">
                        <Link to="/"><img src={require('../img/tent.png')} alt="HOME" /></Link>
                    </div>
                    <div className="firstPageHeaderMiddle">
                        <ul>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            {/* <li><Link to="/startups">Startups</Link></li> */}
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link  to="/merch">Merch</Link></li>
                            <li onClick={this.handelScrollIntoView}>Contacts</li>
                        </ul>
                    </div>
                    <div className="firstPageHeaderRight">
                        {/* <Link className="agendaIcon" to="/agenda"><img src={require('../img/agenda.png')} alt="Agenda" title="Coming Soon" /></Link> */}
                        <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                        <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy Tickets</a>
                    </div>
                    <div className="firstPageHeaderRight Mobi">
                         <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                         <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy <i/></a>
                    </div>
                    <div className="minmenuIcon" ref="menuIcon" onClick={this.menuOpen}> <span /> <span /> <span /></div>
                    <div className="minmenuBox" ref="menuBox" onClick={this.menueClose}>
                        <div className="firstPageHeaderMiddle">
                            <ul>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                {/* <li><Link to="/startups">Startups</Link></li> */}
                                <li><Link to="/partners">Partners</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link  to="/merch">Merch</Link></li>
                                <li onClick={this.handelScrollIntoView}>Contacts</li>
                                {/* <li>Agenda</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="guid" ref="guid">
                    <h3>How To Become a Speaker</h3>
                    <div className="guidItems">
                        <div onMouseOver={()=>this.refs.i1.classList.add('scaleBig')} onMouseOut={()=>this.refs.i1.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icon/guid1.png')} alt="guid1" /></div>
                            <h4>— Application —</h4>
                            <p>You will need to fill in our application form to apply. Please keep in mind, that provision of accurate information is essential, as it helps us provide you the best experience.</p>
                        </div><i ref="i1"/>
                        <div onMouseOver={()=>this.refs.i2.classList.add('scaleBig')} onMouseOut={()=>this.refs.i2.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icon/guid2.png')} alt="guid2" /></div>
                            <h4>— Assessment & Selection —</h4>
                            <p>All the applied speakers pass a screening process and the accepted ones are selected and appointed for a task (talk, mentorship, etc)</p>
                        </div><i ref="i2"/>
                        <div>
                            <div><img src={require('./img/icon/guid3.png')} alt="guid3" /></div>
                            <h4>— Time to work —</h4>
                            <p>During the 7 days of the Summit, you will need to support the startups and help them to raise their dreams</p>
                        </div>
                    </div>
                </div>
                <div className="opportunities" ref="opportunities">
                    <h3>Opportunities</h3>
                    <div className="opportunitiesItem">
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/opportunities1.png')} alt="opportunities" /></div>
                                    <h4>Workshop</h4>
                                </div>
                                <div className="back">
                                    <h4>Workshop</h4>
                                    <p>Workshops are held by business experts who are addressing specific issues. Each workshop is held by an industry expert who examines and explains the key points for each topic, covering from the idea validation to the IPO & various technical and technology topics as well. </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/opportunities2.png')} alt="opportunities" /></div>
                                    <h4>Mentorship</h4>
                                </div>
                                <div className="back">
                                    <h4>Mentorship</h4>
                                    <p>Mentors are specialized experts from various industries, who get involved in Starter and Booster programmes and work with the startup teams throughout the Summit. </p>
                                    <p><b>One on One (1:1) sessions</b> or speed mentorship is like speed dating. Each startup will get a few minutes for pitching and some time for Q&A with the mentor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/opportunities3.png')} alt="opportunities" /></div>
                                    <h4>Campfire talk</h4>
                                </div>
                                <div className="back">
                                    <h4>Campfire talk</h4>
                                    <p>Those are non-formal talks held around the campfires in the squad areas. During these talks, experienced entrepreneurs and industry experts share their knowledge in an interactive informal setting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icon/opportunities4.png')} alt="opportunities" /></div>
                                    <h4>Keynote speech</h4>
                                </div>
                                <div className="back">
                                    <h4>Keynote speech</h4>
                                    <p>Keynote speeches are based on the speaker's own experiences and knowledge. They can also include motivational and inspirational elements. Keynotes are designed for well-known figures and/or celebrities. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SpeakerForm ref="speakerForm" />
                <FootterNew ref="footter" />
            </div>
            </Fragment>
        )
    }
}

export default SpeakersPage;
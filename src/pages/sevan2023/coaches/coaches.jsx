import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import CoachesForm from './form.jsx';
import FootterNew from '../../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import './coaches.css';

class CoachesPage extends React.Component{
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        if(window.localStorage.getItem('msg')!==undefined && window.localStorage.getItem('msg')!==""){
            window.scrollTo(0, 0);
        }
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
    openPerson=()=>{
        let btn=this.refs.more_less;
        if(btn.innerHTML==='More'){
            btn.innerHTML='Less';
            this.refs.teamLeadPersonBox.classList.add('open');
        }
        else{
            btn.innerHTML='More';
            this.refs.teamLeadPersonBox.classList.remove('open');
            scrollToComponent(this.refs.teamLeadPersonHead, {
                offset: this.refs.teamLeadPersonHead.offsetHeight,
                align: 'center',
                duration: 0
            });
        }
    }
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>Become a Coach | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew_coaches">
                <div className="coachesBanner">
                    <div className="teamleadBannerTop">
                        <h2>Non-Nobis Solum Nati Sumus</h2>
                        <h4>“Not Unto Ourselves Alone Are We Born”</h4>
                    </div> 
                    <div className="teamleadBannerBottom">
                        <h3>Sevan Startup Summit 2022</h3>
                        <h4>july 24-30</h4>
                    </div>            
                </div>
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
                                <li><Link  to="/merch">SSS Merch</Link></li>
                                <li onClick={this.handelScrollIntoView}>Contacts</li>
                                {/* <li>Agenda</li> */}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="teamleadOppartunitis" ref="guid">
                    <h3 className="subtitle">Why apply</h3>
                    <div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt1.png')} alt="optImg"/></div>
                            <p>gain new skills, knowledge and experience</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt2.png')} alt="optImg"/></div>
                            <p>meet new people and make new friends</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt3.png')} alt="optImg"/></div>
                            <p>spend quality time away from work</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt4.png')} alt="optImg"/></div>
                            <p>Improve employment prospects</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt5.png')} alt="optImg"/></div>
                            <p>Gain confidence and self-esteem</p>
                        </div>
                    </div>
                </div>
                <div className="teamleadType" ref="opportunities">
                    <h3 className="subtitle">Main Activities to Conduct as a Coach</h3>
                    <div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type5.png')} alt="opportunities" /></div>
                                    <h4>AGENDA SUPPORT</h4>
                                </div>
                                <div className="back">
                                    <h4>AGENDA SUPPORT</h4>
                                    <p>• Present the activities of the pre-acceleration program to the teams</p>
                                    <p>• Ensuring event information is clearly communicated</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type1.png')} alt="opportunities" /></div>
                                    <h4>DAILY GUIDANCE</h4>
                                </div>
                                <div className="back">
                                    <h4>DAILY GUIDANCE</h4>
                                    <p>• Guide teams to focus their attention on the program</p>
                                    <p>• Interfacing their teams with speakers /experts /mentors</p>
                                    <p>• Accompany the teams in different events (lectures, workshops, campfires, a private one and one session)</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type2.png')} alt="opportunities" /></div>
                                    <h4>MOTIVATION</h4>
                                </div>
                                <div className="back">
                                    <h4>MOTIVATION</h4>
                                    <p>Responsible for distributing information and communication of clear instructions and house rules to squad members. By setting ground rules and clearly assigning tasks, you can prevent many sources of conflict.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type3.png')} alt="opportunities" /></div>
                                    <h4>CONTROL</h4>
                                </div>
                                <div className="back">
                                    <h4>CONTROL</h4>
                                    <p>Keeping the event on the schedule. Each day of the summit was a unique schedule and even a small delay may cause issues. Hence, it is essential to act as a timekeeper for the startups and help them to follow the agenda. </p>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className="teamleadGuid" ref="how">
                    <h3 className="subtitle">How To Apply</h3>
                    <div className="guidItems">
                        <div onMouseOver={()=>this.refs.i1.classList.add('scaleBig')} onMouseOut={()=>this.refs.i1.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid1.png')} alt="guid1" /></div>
                            <h4>— Application —</h4>
                            <p>You will need to fill in our application form to apply. Please keep in mind, that provision of accurate information is essential, as it helps us provide you the best experience.</p>
                        </div><i ref="i1"/>
                        <div onMouseOver={()=>this.refs.i2.classList.add('scaleBig')} onMouseOut={()=>this.refs.i2.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid2.png')} alt="guid2" /></div>
                            <h4>— Assessment & Interview —</h4>
                            <p>All the applied Volunteers pass a screening process and the accepted ones are interviewed</p>
                        </div><i ref="i2"/>
                        <div onMouseOver={()=>this.refs.i3.classList.add('scaleBig')} onMouseOut={()=>this.refs.i3.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid4.png')} alt="guid4" /></div>
                            <h4>— Pre-event training —</h4>
                            <p>All the preselected candidates pass one-month training session and top applicants are selected </p>
                        </div><i ref="i3"/>
                        <div>
                            <div><img src={require('./img/icons/guid3.png')} alt="guid3" /></div>
                            <h4>— Time to work —</h4>
                            <p>During the 7 days of the Summit, you will have to support the organizers to conduct the best event ever. </p>
                        </div>
                    </div>
                </div>
                <div className="prevTeamLead">
                    <h3 className="subtitle" ref="teamLeadPersonHead">Meet Our Previous Coaches</h3>
                    <div ref="teamLeadPersonBox" className="coach">
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Anahit Muradyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Anahit Muradyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anahit-muradyan/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Aram Keryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Aram Keryan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aramkeryan/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Svetlana Jaghatspanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Svetlana Jaghatspanyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sveta-jaghatspanyan-ba19462b/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Mihran Babayan.jpg')} alt="team lead"/>
                            </div>
                            <p>Mihran Babayan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mihran-babayan-76600b14"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Kristina Ghulyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Kristina Ghulyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kristina-ghulyan-0a4080121/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Hrayr Manukyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hrayr Manukyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hrayr-manukyan/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Hayk Manukyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hayk Manukyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hayk-manukyan-62056215a/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Petros Hergnyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Petros Hergnyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hergnyanpetros/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Ruzanna Baghdasaryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Ruzanna Baghdasaryan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ruzannabaghdasaryan/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Aram Jivanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Aram Jivanyan </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aramjivanyan/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Mkhitar Avetisyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Mkhitar Avetisyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mkhitar-avetisyan-531524155/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Masis Mikaelyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Masis Mikaelyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/masis-mikaelyan-44a20354/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Astghik Kocharyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Astghik Kocharyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/astghik-asia-kocharyan/"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Varser Zakaryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Varser Zakaryan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/varserzakaryan"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Arman Hayrapetyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Arman Hayrapetyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arman-hayrapetyan-0187985/"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Hayarpi Vardanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hayarpi Vardanyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hay.vardanyan"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Vardan Meliksetyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Vardan Meliksetyan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://uk.linkedin.com/in/vardanmeliksetyan"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Davit Zargaryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Davit Zargaryan</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/david-zargaryan-8a664377/"><i/></a>
                        </div>
                 
                        <div className="more-less"><button ref="more_less" onClick={this.openPerson}>More</button></div>
                    </div>
                </div>
                <CoachesForm ref="coachesForm"/>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        );
    }
}
export default withRouter( CoachesPage);






















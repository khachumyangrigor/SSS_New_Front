import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import TeamleadForm from './form.jsx';
import FootterNew from '../../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import './teamlead.css';

class TeamleadPage extends React.Component{
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
                <title>Become a TeamLead | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew_teamlead">
                <div className="teamleadBanner">
                    <div className="teamleadBannerTop">
                        <h2>Here you can come to learn,</h2>
                        <h2>to experience, to exchange </h2>
                        <h2>& to grow</h2>
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
                    <h3 className="subtitle">Main Activities to Conduct</h3>
                    <div className="teamleadTypeItem">
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type1.png')} alt="opportunities" /></div>
                                    <h4>Leading the operations</h4>
                                </div>
                                <div className="back">
                                    <h4>Leading the operations</h4>
                                    <p>Responsible for management of daily operations, such as organization of wake-up, morning meetups, eating process and cleaning of the squad territory (the general ground cleaning is organized separately by special cleaning service). </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type2.png')} alt="opportunities" /></div>
                                    <h4>Managing & supervision</h4>
                                </div>
                                <div className="back">
                                    <h4>Managing & supervision</h4>
                                    <p>Responsible for overseeing all activities within a squad, for monitoring squad members' participation in various activities. It is also the responsibility of the team leader to Suggest and organize team building activities. </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type3.png')} alt="opportunities" /></div>
                                    <h4>Communication</h4>
                                </div>
                                <div className="back">
                                    <h4>Communication</h4>
                                    <p>Responsible for distributing information and communication of clear instructions and house rules to squad members. By setting ground rules and clearly assigning tasks, you can prevent many sources of conflict.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type4.png')} alt="opportunities" /></div>
                                    <h4>Resolve conflict</h4>
                                </div>
                                <div className="back">
                                    <h4>Resolve conflict</h4>
                                    <p>Squads include various personalities with different traits and motivation. Thus, conflict can sometimes occur. The Teamlead is responsible for preventing conflict where possible and resolving it when it does arise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type5.png')} alt="opportunities" /></div>
                                    <h4>Organize team initiatives</h4>
                                </div>
                                <div className="back">
                                    <h4>Organize team initiatives</h4>
                                    <p>Organization is necessary when there are multiple squad members working on a single and/or multiple goal. It is the responsibility of the team leader to guide the process. </p>
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
                            <p>During the 7 days of the Summit, you will have to support the organizers to conduct the best event ever.</p>
                        </div>
                    </div>
                </div>
                <div className="prevTeamLead">
                    <h3 className="subtitle" ref="teamLeadPersonHead">Meet Our Previous TeamLeads</h3>
                    <div ref="teamLeadPersonBox">
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Elen Harutyunyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Harutyunyan Elen</p>
                            <a href="https://www.facebook.com/elen.harutyunyan.75" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>  
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Hayk Khekoyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Khekoyan Hayk</p>
                            <a href="https://www.facebook.com/hayk.khekoyan.5" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Lida Gasparyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Gasparyan Lida</p>
                            <a href="https://www.facebook.com/gasparyan.lida" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Gegham Khachikyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Khachikyan Gegham</p>
                            <a href="https://www.facebook.com/gegham.khachikyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Maria Aloyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Aloyan Maria</p>
                            <a href="https://web.facebook.com/maria.aloyan?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Maykl Hovhannisyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hovhannisyan Maykl</p>
                            <a href="https://www.facebook.com/profile.php?id=100003058883952" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson" >
                            <div>
                                <img src={require('./img/person/Zaven Melikjanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Melikjanyan Zaven</p>
                            <a href="https://www.facebook.com/ZavenMeliqjanyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Eduard Hovhannisya.jpg')} alt="team lead"/>
                            </div>
                            <p>Hovhannisyan Eduard</p>
                            <a href="https://www.facebook.com/edward.hovannisyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Ilona Demirchyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Demirchyan Ilona</p>
                            <a href="https://www.facebook.com/IlonDemirtshyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Anna Petrosyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Petrosyan Anna</p>
                            <a href="https://www.facebook.com/profile.php?id=100009665586893" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Loris Kroyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Kroyan Loris</p>
                            <a href="https://www.facebook.com/lkroyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Marianna Torosyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Torosyan Marianna</p>
                            <a href="https://www.facebook.com/marianna.torosyan.75" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                       <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Norayr Khachatryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Khachatryan Norayr</p>
                            <a href="https://web.facebook.com/norayrkhach01" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>

                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Seda Hakobyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hakobyan Seda</p>
                            <a href="https://web.facebook.com/seda.hakobyan.90" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Gagik Sirekanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Sirekanyan Gagik</p>
                            <a href="https://www.facebook.com/gago.sirekanyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Lusine Darchinyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Darchinyan Lusine</p>
                            <a href="https://www.facebook.com/lusine.darchinyan.773" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Ananyan Sanasar.jpg')} alt="team lead"/>
                            </div>
                            <p>Ananyan Sanasar</p>
                            <a href="https://www.facebook.com/sano.ananyan?ref=br_rs" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Nerses Kostanyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Kostanyan Nerses</p>
                            <a href="https://www.facebook.com/nerses.kostanyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Armine Mikayelyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Mikayelyan Armine</p>
                            <a href="https://www.facebook.com/ArminMikaelian" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Arman Asatryan.jpg')} alt="team lead"/>
                            </div>
                            <p>Asatryan Arman</p>
                            <a href="https://web.facebook.com/arman.asatryan.7?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Lilit Jalalyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Jalalyan Lilit</p>
                            <a href="https://www.facebook.com/lilit.jalalyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
 
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Kim Hakobyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Hakobyan Kim</p>
                            <a href="https://www.facebook.com/kim.hakobyan" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Tatev Soghomonyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Soghomonyan Tatev</p>
                            <a href="https://www.facebook.com/tatsog" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="teamLeadPerson">
                            <div>
                                <img src={require('./img/person/Hovsep Harutyunyan.jpg')} alt="team lead"/>
                            </div>
                            <p>Harutyunyan Hovsep</p>
                            <a href="https://www.facebook.com/hoso.harutyunyan.9" target="_blank" rel="noopener noreferrer"><i/></a>
                        </div>
                        <div className="more-less"><button ref="more_less" onClick={this.openPerson}>More</button></div>
                    </div>
                </div>
                <TeamleadForm ref="teamleadForm"/>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        )
    }
}

export default TeamleadPage;



























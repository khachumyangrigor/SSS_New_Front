import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import FootterNew from '../footterNew/footterNew.jsx';
import Speakers from './speakers.jsx';
import Investors from './investors.jsx';
import Startups from './sartups.jsx';
import Shuttle from './shuttle.jsx';
import Programs from './program.jsx';
import MustKnow from './mustknow.jsx';
import Credo from './credo.jsx';
import Platform from './platform.jsx';
import Citizen from './citizen.jsx';
import Participate from "./Participate/Participate.jsx"
import Valounteering from "./Volunteering/Volunteering.jsx"
import Apply from "./Apply/Apply.jsx"
import Organizers from "./Organizers/Organizers.jsx"
import Partners from "./Partners/Partners.jsx"
import {
    FireCode,
    Part4Part5,
    GetAccess
} from './component.min.jsx';

// Sub Pages
import  SpeakersPage from './speakers/speakers.jsx';
import  ValunteersPage from './volunteers/volunteers.jsx';
import  TeamleadPage from './taemlead/teamlead.jsx';
import  CoachesPage from './coaches/coaches.jsx';

//css
import './upcommingNew.css';
//Media


class UpcommingNew extends React.Component {
    constructor() {
        super();
        this.state = {
            subepage: 'none',
            event:''
        }
        this.scrollY=0;
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.addEventListener("click", this.menueautoClose);
        let subpage=this.props.match.params.subpage;
        window.addEventListener("load", this.scrollSubPart(subpage));
        let event=this.props.match.params.event;
        this.setState({event:event});
        if (this.props.match.params.subpage!==undefined) {
            let subpage=this.props.match.params.subpage;
            // this.scrollSubPart(subpage);
            this.redirectSubPage(subpage);
        }
        else window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
        window.removeEventListener('click', this.menueautoClose);
        window.removeEventListener('load', this.scrollSubPart);
    }


    componentWillReceiveProps=(newprops)=>{
        this.setState({event:newprops.match.params.event});
        let subpage=newprops.match.params.subpage;
        this.scrollSubPart(subpage);
        this.redirectSubPage(subpage);
    }

    redirectSubPage=(subpage)=>{
        switch(subpage){
            case 'speakers':
                this.setState({subepage:subpage});
                break;
            case 'volunteers':
                this.setState({subepage:subpage});
                break;
            case 'team-leads':
                this.setState({subepage:subpage});
                break;
            case 'coaches':
                this.setState({subepage:subpage});
                break;
            default:
                // this.scrollSubPart(subpage)
                this.setState({subepage:'none'});
                break;
        }
    }

    scrollSubPart=(subpage)=>{
        this.setState({subepage:subpage});
        switch(subpage){
            case 'program':
                this.handelScrollTo(this.refs.program);
                break;
            case 'firecode-marathone':
                this.handelScrollTo(this.refs.firecode);
                break;
            case 'our-credo':
                this.handelScrollTo(this.refs.credo);
                break;
            case 'speakers-part':
                this.handelScrollTo(this.refs.speaker);
                break;
            case 'investors-part':
                this.handelScrollTo(this.refs.investor);
                break;
            case 'our-Alumni':
                this.handelScrollTo(this.refs.startup);
                break;
            case 'how-to-reach-us':
                this.handelScrollTo(this.refs.shuttle);
                break;
            case 'important-to-know':
                this.handelScrollTo(this.refs.mustKnow);
                break;
            case 'citizen':
                this.handelScrollTo(this.refs.citizen);
                break;
            default:
                this.setState({subepage:'none'});
                break;
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
            if (window.scrollY >= window.innerHeight/2) {
                this.refs.subMenu.classList.add('subMnueFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.subMenu.classList.remove('subMnueFix');
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

    menuOpen = (e) => {
        e.stopPropagation();

        if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
            this.refs.menuIcon.classList.remove("minmenuIconOpen");
            this.refs.menuBox.classList.remove("minmenuBoxOpen");
        }
        else {
            this.refs.menuIcon.classList.add("minmenuIconOpen");
            this.refs.menuBox.classList.add("minmenuBoxOpen");
        }
    }
    submenuOpen = () => {
        if (this.refs.submenuIcon.classList.contains("minmenuLastIconOpen")) {
            this.refs.submenuIcon.classList.remove("minmenuLastIconOpen");
            this.refs.subMenu.style.display = "none";
        }
        else {
            this.refs.submenuIcon.classList.add("minmenuLastIconOpen");
            this.refs.subMenu.style.display = "flex";
        }
    }

    menuCloase = () => {
        this.submenuOpen();
    }
    menueClose = () => {
        this.menuOpen();
    }
    menueautoClose=()=>{
        if(this.refs.menuIcon){
            if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
                this.refs.menuIcon.classList.remove("minmenuIconOpen");
                this.refs.menuBox.classList.remove("minmenuBoxOpen");
            }
        }
    }

    render = () => {
        const {subepage,event}=this.state;
        if(event!=="" && event=='sevan2020')if(IS_CLIENT)return <Redirect  to={`./sevan-2023`} />;
        if(event!=="" && event!=='sevan-2023')if(IS_CLIENT)return <Redirect  to={`./`} />;
        if(subepage==='speakers')return (<SpeakersPage/>);
        else if(subepage==='volunteers')return (<ValunteersPage/>);
        else if(subepage==='team-leads')return (<TeamleadPage/>);
        else if(subepage==='coaches')return (<CoachesPage/>);
        else
            return (
                <Fragment>
                    <Helmet>
                        <title>Sevan Startup Summit 2023 | Seaside Startup Summit</title>
                        <meta name="description" content="Sevan Startup Summit 2022 will be held at Sevan seashore from July 24 to July 30" />
                        <meta property="og:title" content="Sevan Startup Summit 2022 | Seaside Startup Summit" />
                        <meta property="og:url" content={`https://www.seasidestartupsummit.com/upcoming-events/sevan-2022`} />
                        <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/sevan21.png" />
                        <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/sevan21.png" />
                        <meta property="og:description" content="Sevan Startup Summit 2022 will be held at Sevan seashore from July 24 to July 30" />
                    </Helmet>
                    <div className="upcommingNew" >
                        {/* Part 1 */}
                        <div className="upcommingNewTop" ref="firstPageTop">
                            <div className="wb-topTitle">
                                <h1>a harbor of discoveries</h1>
                                <h2>From <b>start</b> through <b>struggle</b> to <b>success</b></h2>
                            </div>
                            <div  className="wb-footerTitle">
                                <h3>Sevan Startup Summit 2022</h3>
                                <h4>july 23 - 29</h4>
                            </div>
                        </div>
                        {/* Part 2 */}
                        <div className="firstPageHeader" ref="topMenu">
                            <div className="firstPageHeaderLeft">
                                <Link to="/"><img src={require('./img/tent.png')} alt="HOME" /></Link>
                            </div>
                            <div className="firstPageHeaderMiddle">
                                <ul>
                                    <li><Link to="/events">Events</Link></li>
                                    <li><Link to="/about-us">About us</Link></li>
                                    <li><Link to="/partners">Partners</Link></li>
                                     {/*<li><Link to="/startups">Startups</Link></li>*/}
                                    {/*<li><Link to="/partners">Partners</Link></li>*/}
                                    <li><Link  to="/merch">Merch</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li onClick={this.handelScrollIntoView}>Contact</li>
                                </ul>
                            </div>
                            <div className="firstPageHeaderRight">

                                {/* <Link className="agendaIcon" to="/agenda"><img src={require('./img/agenda.png')} alt="Agenda" title="Coming Soon" /></Link> */}
                                <a href="https://www.f6s.com/sevan-startup-summit-2023/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                                <a href="https://forms.gle/VSG5oNLhg2nr8zhr9" target="_blank" rel="noopener noreferrer" >Become a Volunteer</a>
                                <div className="minmenuLastIcon" ref="submenuIcon" onClick={(e)=>this.submenuOpen()}> <span /> <span /> <span /></div>
                            </div>
                            <div className="firstPageHeaderRight Mobi">
                                <a href="https://www.f6s.com/sevan-startup-summit-2023/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                                <a href="https://forms.gle/VSG5oNLhg2nr8zhr9" target="_blank" rel="noopener noreferrer" >Become a Volunteer <i/></a>
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
                                    </ul>
                                </div>
                            </div>
                            <div className="wb-subMnue" ref="subMenu" onClick={this.menuCloase}>
                                <ul>
                                    <li><Link to={`/upcoming-events/${event}/our-credo`}>Our Credo</Link></li>
                                    <li><Link to={`/upcoming-events/${event}/citizen`}>types of participation</Link></li>
                                    <li><Link to={`/upcoming-events/${event}/program`}>OUR PROGRAMME</Link></li>
                                    <li><Link to={`/upcoming-events/${event}/how-to-reach-us`}>How to reach us</Link></li>
                                    <li><Link to={`/upcoming-events/${event}/important-to-know`}>Important to know</Link></li>
                                </ul>
                            </div>
                        </div>
                        <GetAccess />
                        <Part4Part5 ref="uniqprogram" />
                        <Credo ref="credo"/>
                        <Participate />
                        {/* Todo closed */}
                        {/* <Platform ref="platform"/>*/}
                        {/* Todo closed */}
                        <span ref="citizen"></span> {/*TODO Why not commented?*/}
                        {/*<Citizen />*/}
                        <div className="upcommingSuggest">
                            <h2>We suggest a unique  program tailored to your needs</h2>
                            <p>All the applied startup teams pass a screening process and the accepted teams are distributed into either Starter (idea stage) or Booster (early stage) programmes based on their levels of development and fields of operation*.</p>
                        </div>
                        <Programs ref="program" />
                        <Valounteering />
                        <Apply />
                        {/* Todo closed start */}
                        {/* <FireCode ref="firecode" />*/}
                        {/* <Speakers ref="speaker" />*/}
                        {/* <Investors ref="investor" />*/}
                        {/* <Startups ref="startup" />*/}
                        {/* Todo closed end */}
                        <Shuttle ref="shuttle" />
                        <MustKnow ref="mustKnow" />
                        <Organizers />
                        {/*<Partners />*/}
                        <FootterNew ref="footter" />
                    </div >
                </Fragment>
            )
    }
}
export default UpcommingNew;
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

class FormHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            event:''
        }
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.addEventListener("click", this.menueautoClose);
        this.setState({event:this.props.match.params.event});
        // if (this.props.match.params.subpage) {
        //     let subpage=this.props.match.params.subpage;
        //     this.scrollSubPart(subpage);
        // }
        // else window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
        window.removeEventListener('click', this.menueautoClose);
    }
    
    componentWillReceiveProps=(newprops)=>{

        
        // let subpage=newprops.match.params.subpage;
        // this.scrollSubPart(subpage);
        // this.redirectSubPage(subpage);
    }


    // scrollSubPart=(subpage)=>{
    //     switch(subpage){
    //         case 'program':
    //             this.handelScrollTo(this.refs.program);
    //             break;
    //         case 'firecode-marathone':
    //             this.handelScrollTo(this.refs.firecode);
    //             break;
    //         case 'our-credo':
    //             this.handelScrollTo(this.refs.credo);
    //         break;
    //         case 'platform-structure':
    //             this.handelScrollTo(this.refs.platform);
    //             break;
    //         case 'speakers-part':
    //             this.handelScrollTo(this.refs.speaker);
    //             break;
    //         case 'investors-part':
    //             this.handelScrollTo(this.refs.investor);
    //             break;
    //         case 'our-Alumni':
    //             this.handelScrollTo(this.refs.startup);
    //             break;
    //         case 'how-to-reach-us':
    //             this.handelScrollTo(this.refs.shuttle);
    //             break;
    //         case 'important-to-know':
    //             this.handelScrollTo(this.refs.mustKnow);
    //             break;
    //         default: 
    //             break;
    //         }
    // }

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
    
    // handelScrollTo = elem => {
    //     scrollToComponent(elem, {
    //         offset: -200,
    //         align: 'top',
    //         duration: 800
    //     });
    // }

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
        const {event}=this.state;
        return (
            <div className="firstPageHeader" ref="topMenu">
            <div className="firstPageHeaderLeft">
                <Link to="/"><img src={require('./img/tent.png')} alt="HOME" /></Link>
            </div>
            <div className="firstPageHeaderMiddle">
                <ul>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    {/* <li><Link to="/startups">Startups</Link></li> */}
                    {/* <li><Link to="/partners">Partners</Link></li> */}
                    <li><Link to="/blog">Blog</Link></li>
                    <li onClick={this.handelScrollIntoView}>Contacts</li>
                </ul>
            </div>
            <div className="firstPageHeaderRight">
                {/* <Link className="agendaIcon" to="/agenda"><img src={require('../img/agenda.png')} alt="Agenda" title="Coming Soon" /></Link> */}
                <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy Tickets</a>
                <div className="minmenuLastIcon" ref="submenuIcon" onClick={this.submenuOpen}> <span /> <span /> <span /></div>
            </div>
            <div className="minmenuIcon" ref="menuIcon" onClick={(e)=>this.menuOpen(e)}> <span /> <span /> <span /></div>
            <div className="minmenuBox" ref="menuBox" onClick={this.menueClose}>
                <div className="firstPageHeaderMiddle">
                    <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                        {/* <li><Link to="/startups">Startups</Link></li> */}
                        {/* <li><Link to="/partners">Partners</Link></li> */}
                        <li><Link to="/blog">Blog</Link></li>
                        <li onClick={this.handelScrollIntoView}>Contacts</li>
                        {/* <li>Agenda</li> */}
                        <li><a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a></li>
                        <li><a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy Tickets</a></li>
                    </ul>
                </div>
            </div>
            <div className="subMnue" ref="subMenu" onClick={this.menuCloase}>
                <ul>
                    <li><Link to={`/upcoming-events/${event}/program`}>OUR PROGRAMME</Link></li>
                    <li><Link to={`/upcoming-events/${event}/firecode-marathone`}>Firecode marathone</Link></li>
                    <li><Link to={`/upcoming-events/${event}/our-credo`}>Our Credo</Link></li>
                    <li><Link to={`/upcoming-events/${event}/platform-structure`}>Platform Structure</Link></li>
                    <li><Link to={`/upcoming-events/${event}/speakers-part`}>Speakers</Link></li>
                    <li><Link to={`/upcoming-events/${event}/investors-part`}>Investors</Link></li>
                    <li><Link to={`/upcoming-events/${event}/our-Alumni`}>Our Alumni</Link></li>
                    <li><Link to={`/upcoming-events/${event}/how-to-reach-us`}>How to reach us</Link></li>
                    <li><Link to={`/upcoming-events/${event}/important-to-know`}>Important to know</Link></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default withRouter(FormHeader);
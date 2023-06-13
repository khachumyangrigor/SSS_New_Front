import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import scrollToComponent from 'react-scroll-to-component';
import './head.css';

class Header extends React.Component {

    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.addEventListener("click", this.menueautoClose);
        window.scrollTo(0, 0);
        this.point=this.refs.topMenu.offsetTop;
        // ReactDOM.findDOMNode(this.refs.eventLi).style.opacity=1;
        let subpage=this.props.match.path;
        this.pageDetect(subpage);
        
    }

    componentWillReceiveProps=(newprops)=>{
        let subpage=newprops.match.path;
        this.pageDetect(subpage);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.menueautoClose);
    }
    pageDetect=(subpage)=>{
        switch(subpage){
            case '/events/':
            case '/events':
                ReactDOM.findDOMNode(this.refs.eventLi).style.opacity=1;
                break;
            case '/about-us/':
            case '/about-us':
                ReactDOM.findDOMNode(this.refs.aboutLi).style.opacity=1;
                break;
            case '/partners/':
            case '/partners':
                ReactDOM.findDOMNode(this.refs.partnersLi).style.opacity=1;
                break;
            case '/blog/':
            case '/blog':
                ReactDOM.findDOMNode(this.refs.blogLi).style.opacity=1;
                break;
            case '/merch/':
            case '/merch':
                ReactDOM.findDOMNode(this.refs.merchLi).style.opacity=1;
                break;
            default:
                ReactDOM.findDOMNode(this.refs.eventLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.aboutLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.partnersLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.blogLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.merchLi).style.opacity=0.4;
                break;
        }
    }
    winScroll = () => {
        if (this.refs.topMenu !== undefined) {
            if (window.scrollY >=  this.point) {
                this.refs.topMenu.classList.add('topMenuFix');
            }
            else if (window.scrollY <  this.point) {
                this.refs.topMenu.classList.remove('topMenuFix');
            }
        }
    }
    handelScrollIntoView = () => {
        window.scroll({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
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
    menueClose = () => {
        this.menuOpen();
    }
    menueautoClose=()=>{
        if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
            this.refs.menuIcon.classList.remove("minmenuIconOpen");
            this.refs.menuBox.classList.remove("minmenuBoxOpen");
        }
    }

    renderUpcomingEventLink(url, mobile) {
        switch(url) {
            case '/sss-holidays-uae-rak/':
                return (
                    <a
                        href="https://www.seasidestartupsummit.com/pdf/sss-holidays-uae-rak/SSSholidays_Report.pdf"
                        target="_blank"
                        className='report'
                    >
                        Download Report
                    </a>
                );
            case '/sss-holidays-india-vizag/':
                return (
                    <a
                        href="https://www.seasidestartupsummit.com/pdf/SSSholiday_Vizaag_Agenda.pdf"
                        target="_blank"
                        className='report'
                    >
                        Download Agenda
                    </a>
                );
            case '/sss-holidays-india-vizag/apply':
                if(!mobile) {
                    return (
                        <a
                            href="https://www.seasidestartupsummit.com/pdf/sss-holidays-uae-rak/SSSholidays_Report_Mobile.pdf"
                            target="_blank"
                            className='report'
                        >
                            Download Report
                        </a>
                    );
                }

                break;
            default:
                return (
                    <Link to={'/upcoming-events/sevan-2023'}>
                        SSS 2023
                    </Link>
                );
        }
    }

    render = () => {
        return (
            <div className="firstPageHeader" ref="topMenu">
                <div className="firstPageHeaderLeft">
                    <Link to="/"><img src={require('./img/tent.png')} alt="HOME" /></Link>
                </div>
                <div className="firstPageHeaderMiddle">
                    <ul>
                        <li><Link  to="/events" ref="eventLi">Events</Link></li>
                        <li><Link  to="/about-us" ref="aboutLi">About us</Link></li>
                        {/* <li><Link to="/startups">Startups</Link></li> */}
                        <li><Link  to="/partners" ref="partnersLi">Partners</Link></li>
                        <li><Link  to="/merch" ref="merchLi" >Merch</Link></li>
                        <li><Link  to="/blog" ref="blogLi" >Blog</Link></li>
                        <li onClick={this.handelScrollIntoView}>Contact</li>
                    </ul>
                </div>
                <div className="firstPageHeaderRight">
                    {this.renderUpcomingEventLink(this.props.match.path, false)}
                    {/* Todo commented by Grish */}
                    {/*{this.props.match.path==='/sss-holidays-uae-rak/'*/}
                    {/*?*/}
                    {/*<a href="https://www.seasidestartupsummit.com/pdf/sss-holidays-uae-rak/SSSholidays_Report.pdf" target="_blank" className='report'>Download Report</a>*/}
                    {/*:*/}
                    {/*null*/}
                    {/*}*/}
                    {/*{*/}
                    {/*this.props.match.path==='/sss-holidays-india-vizag/' || this.props.match.path==='/sss-holidays-india-vizag/apply'*/}
                    {/*?*/}
                    {/*<a href="https://www.seasidestartupsummit.com/pdf/SSSholiday_Vizaag_Agenda.pdf" target="_blank" className='report'>Download Agenda</a>*/}
                    {/*:*/}
                    {/*<Link to={'/sss-holidays-india-vizag'}>SSSholidays</Link>*/}
                    {/*}*/}
                    {/* Todo commented by Grish */}
                    {/* Todo commented by Edgar */}
                    {/* <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy Tickets</a> */}
                    {/* Todo commented by Edgar */}</div>
                <div className="firstPageHeaderRight Mobi">
                    {this.renderUpcomingEventLink(this.props.match.path, true)}
                    {/* Todo commented by Grish */}
                    {/*{this.props.match.path==='/sss-holidays-uae-rak/'*/}
                    {/*?*/}
                    {/*<a href="https://www.seasidestartupsummit.com/pdf/sss-holidays-uae-rak/SSSholidays_Report_Mobile.pdf" target="_blank" className='report'>Download Report</a>*/}
                    {/*:*/}
                    {/*null*/}
                    {/*}*/}
                    {/*{this.props.match.path==='/sss-holidays-india-vizag/'*/}
                    {/*?*/}
                    {/*<a href="https://www.seasidestartupsummit.com/pdf/SSSholiday_Vizaag_Agenda.pdf" target="_blank" className='report'>Download Agenda</a>*/}
                    {/*:*/}
                    {/*<Link to={'/sss-holidays-india-vizag'}>SSSholidays</Link>*/}
                    {/*}*/}
                    {/* Todo commented by Grish */}
                    {/* Todo commented by Edgar */}
                    {/* <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy<i/></a> */}
                    {/* Todo commented by Edgar */}</div>
                <div className="minmenuIcon" ref="menuIcon" onClick={(e)=>this.menuOpen(e)}> <span /> <span /> <span /></div>
                <div className="minmenuBox" ref="menuBox" onClick={this.menueClose}>
                    <div className="firstPageHeaderMiddle">
                        <ul>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            {/* <li><Link to="/startups">Startups</Link></li> */}
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link  to="/merch">Merch</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li onClick={this.handelScrollIntoView}>Contacts</li>
                            {/* <li><a href="https://www.pay.seasidestartupsummit.com/vissitor/" target="_blank" rel="noopener noreferrer" >Buy Ticket</a></li> */}
                            {/* <li><Link to="/events">Apply as Startup</Link></li> */}
                            {/* <li><Link to="/upcoming-events/sevan2020">Buy Ticket</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
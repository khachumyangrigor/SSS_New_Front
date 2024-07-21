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
                ReactDOM.findDOMNode(this.refs.eventLi).style.opacity=1;
                break;
            case '/about-us/':
                ReactDOM.findDOMNode(this.refs.aboutLi).style.opacity=1;
                break;
            case '/blog/':
                ReactDOM.findDOMNode(this.refs.blogLi).style.opacity=1;
                break;
            default:
                ReactDOM.findDOMNode(this.refs.eventLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.aboutLi).style.opacity=0.4;
                ReactDOM.findDOMNode(this.refs.blogLi).style.opacity=0.4;
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
    render = () => {
        return (
            <div className="firstPageHeader" ref="topMenu">
                <div className="firstPageHeaderLeft">
                    <Link to="/"><img src={require('./img/tent.png')} alt="HOME" /></Link>
                </div>
                <div className="firstPageHeaderMiddle">
                    <ul>
                        <li><Link  to="/events" ref="eventLi">Events</Link></li>
                        <li><Link  ref="aboutLi" to="/about-us">About us</Link></li>
                        {/* <li><Link to="/startups">Startups</Link></li> */}
                        {/* <li><Link to="/partners">Partners</Link></li> */}
                        <li><Link  ref="blogLi" to="/blog">Blog</Link></li>
                        <li onClick={this.handelScrollIntoView}>Contact</li>
                    </ul>
                </div>
                <div className="firstPageHeaderRight">
                    {/* <a href="http://seasidestartupsummit.com/pdf/agenda-egypt.pdf" target="_blank" rel="noopener noreferrer">Preliminary agenda</a> */}
                </div>
                <div className="firstPageHeaderRight Mobi">
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
                            {/* <li> <a href="http://seasidestartupsummit.com/pdf/agenda-egypt.pdf" target="_blank" rel="noopener noreferrer">Preliminary agenda</a></li> */}
                            {/* <li><Link to="/events">Roadmap as Startup</Link></li> */}
                            {/* <li><Link to="/upcoming-events/sevan2020">Buy Ticket</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
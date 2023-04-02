import React from 'react';
import './header.css';
import logo from './logo.png';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    menuClick = () => {
        if (this.state.open === false) {
            this.refs.itemsMenu.style.display = 'flex';
            this.refs.itemsMenu2.style.display = 'block';
            this.setState({ open: true });
        }
        else {
            this.refs.itemsMenu.style.display = 'none';
            this.refs.itemsMenu2.style.display = 'none';
            this.setState({ open: false });
        }
    }
    render = () => {
        return (
            <div className="header-bg" > <div className="header browse"><div className="logo"><a href="https://www.sss.am/"><img className="resp-img" alt="logo" src={logo} /></a></div><div id="menu-mobile" onClick={this.menuClick}><span><s className="bar"></s><s className="bar"></s><s className="bar"></s></span></div><div className="head-center"><div className="menu-item null" ref='itemsMenu'><a href="https://www.seasidestartupsummit.com/events">Events</a><a href="https://www.seasidestartupsummit.com/aboutus">About Us</a><a href="https://www.seasidestartupsummit.com/blog">News</a><a href="https://www.seasidestartupsummit.com/jointeam/volunteering">Join Team</a></div></div><div className="head-login-btn null"><div className="head-right" ref='itemsMenu2'><div className="head-right-link"></div><a href="https://www.seasidestartupsummit.com/"><div className="head-right-btn">Main Page<i className="arrow-right"></i></div></a></div></div></div></div>
        )
    }
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
//css
import './footterNew.css';
import logo from './img/logo.png';

import inst from './img/social/inst.svg';
import twit from './img/social/twit.svg';
import you from './img/social/you.svg';
import link from './img/social/link.svg';
import fb from './img/social/fb.svg';

class FootterNew extends React.Component {
    render = () => {
        return (
            <div className="firstPageFootter" >
                <div className="footterTop">
                    <div className="menue">
                        <div className="footterTopLogo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
                        <ul>
                            <li><Link to="/events">EVENTS</Link></li>
                            <li><Link to="/about-us">ABOUT</Link></li>
                            {/* <li><Link to="/startups">Startups</Link></li> */}
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                        </ul>
                    </div>
                    <div className="footterContact">
                        <a href="https://www.google.com/maps/place/3a+Marshal+Baghramyan+Ave,+Yerevan+0019,+Армения/@40.1892735,44.5106617,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd1ef2900001:0x3668c699e9aed902!8m2!3d40.1892735!4d44.5128504" target="_blank" rel="noopener noreferrer">
                        3A Marshal Baghramyan Ave, Yerevan 0019</a>
                        <a href="tel:+374 98 80 20 28">+374 98 80 20 28</a>
                        <span>info@sss.am</span>
                    </div>
                </div>
                <div className="footterLine" />
                <div className="footterBottom">
                    <div className="bottomLeft">© 2016-2022, Seaside Startup Summit</div>
                    <div className="bottomRight">
                        <a href="https://www.instagram.com/seasidestartupsummit/" target="_blank" rel="noopener noreferrer">
                            <img src={inst} alt="instagram" />
                        </a>
                        <a href="https://twitter.com/SeasideSummit" target="_blank" rel="noopener noreferrer"><img src={twit} alt="twitter" /></a>
                        <a href="https://www.youtube.com/channel/UCiLYEqtp1l9XgD7s_SRYRyg" target="_blank" rel="noopener noreferrer"><img src={you} alt="youtube" /></a>
                        <a href="https://www.linkedin.com/company/18058390/admin/" target="_blank" rel="noopener noreferrer"><img src={link} alt="linkdin" /></a>
                        <a href="https://www.facebook.com/seasidestartupsummit/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FootterNew;
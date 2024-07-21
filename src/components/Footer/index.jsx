import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo.png';
import inst from './img/social/inst.svg';
import twit from './img/social/twit.svg';
import you from './img/social/you.svg';
import link from './img/social/link.svg';
import fb from './img/social/fb.svg';

//css
import './styles.css';

// Social Media Links Data
const socialLinks = [
    { href: "https://www.instagram.com/seasidestartupsummit/", imgSrc: inst, alt: "instagram" },
    { href: "https://twitter.com/SeasideSummit", imgSrc: twit, alt: "twitter" },
    { href: "https://www.youtube.com/channel/UCiLYEqtp1l9XgD7s_SRYRyg", imgSrc: you, alt: "youtube" },
    { href: "https://www.linkedin.com/company/18058390/admin/", imgSrc: link, alt: "linkedin" },
    { href: "https://www.facebook.com/seasidestartupsummit/", imgSrc: fb, alt: "facebook" }
];

// Menu Links Data
const menuLinks = [
    { to: "/events", label: "EVENTS" },
    { to: "/about-us", label: "ABOUT US" },
    { to: "/partners", label: "Partners" },
    { to: "/blog", label: "BLOG" },
    { to: "/merch", label: "MERCH" }
];

const SocialMediaLink = ({ href, imgSrc, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={alt} />
    </a>
);

const MenuLink = ({ to, label }) => (
    <li>
        <Link to={to}>{label}</Link>
    </li>
);

const Footer = () => (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-menu">
                <div className="footer-top-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul>
                    {menuLinks.map((link, index) => (
                        <MenuLink key={index} {...link} />
                    ))}
                </ul>
            </div>
            <div className="footer-content">
                <a href="https://www.google.com/maps/place/3a+Marshal+Baghramyan+Ave,+Yerevan+0019,+Армения/@40.1892735,44.5106617,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd1ef2900001:0x3668c699e9aed902!8m2!3d40.1892735!4d44.5128504" target="_blank" rel="noopener noreferrer">
                    3A Marshal Baghramyan Ave, Yerevan 0019
                </a>
                <a href="tel:+374 98 80 20 28">+374 98 80 20 28</a>
                <span>info@sss.am</span>
            </div>
        </div>
        <div className="footer-line" />
        <div className="footer-bottom">
            <div className="footer-bottom-left">© 2016-2023, Seaside Startup Summit</div>
            <div className="footer-bottom-right">
                {socialLinks.map((link, index) => (
                    <SocialMediaLink key={index} {...link} />
                ))}
            </div>
        </div>
    </div>
);

export default Footer;

import React from 'react';
import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css';
import logo1 from './LogoW.png';
import logo2 from './LogoBl.png';

class Header extends React.Component {
    constructor() {
        super();
        this.open = false;
        this.state = {
            navClass: '',
            logo: logo1,
            agenda: '',
            agendaFR: '',
            agendaMenue: 'none'
        }
        this.mobile = false;
    }
    componentDidMount = () => {
        this.checkDivice();
        window.addEventListener("resize", this.checkDivice);
        if (!this.mobile) this.checkURL(this.props.match.params.id);
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (!this.mobile) this.checkURL(pathId);
            else this.setState({ navClass: '', logo: logo1 });
        }
    }

    checkURL = url => {
        let loc = this.props.location.pathname;
        if (loc === "/blog" || loc === "/blog/") { url = "blog" };
        if (this.props.match.path === "/blog/:id") { url = "blog" };
        if (loc === "/sevan18" || loc === "/sevan18/") { url = "past" };
        if (loc === "/sevan17" || loc === "/sevan17/") { url = "past" };
        if (loc === "/sevan16" || loc === "/sevan16/") { url = "past" };
        if (loc === "/uae18" || loc === "/uae18/") { url = "past" };
        if (loc === "/india18" || loc === "/india18/") { url = "past" };
        if (loc === "/about" || loc === "/about/") { url = "about" };
        if (loc === "/contact" || loc === "/contact/") { url = "contact" };
        switch (url) {
            case 'values':
                this.setState({ navClass: 'navFixed', logo: logo2, agenda: 'agendaBtnblack', agendaFR: 'agendaFRBtnblack' });
                break;
            case 'speakers':
                this.setState({ navClass: 'navFixed', logo: logo2, agenda: 'agendaBtnblack', agendaFR: 'agendaFRBtnblack' });
                break;
            case 'startups':
                this.setState({ navClass: 'navFixed', logo: logo2, agenda: 'agendaBtnblack', agendaFR: 'agendaFRBtnblack' });
                break;
            case 'contact':
                this.setState({ navClass: 'navFixed' });
                break;
            case 'news':
                this.setState({ navClass: 'navFixed' });
                break;
            case 'past':
                this.setState({ navClass: 'navBg' });
                break;
            case 'about':
                this.setState({ navClass: 'navFixedBl' });
                break;
            case undefined:
                this.setState({ navClass: 'navUnFixed', logo: logo1, agenda: '', agendaFR: '' });
                break;
            default:
                this.setState({ navClass: '', logo: logo1, agenda: '', agendaFR: '' });
                break
        }
    }
    checkDivice = () => {
        if (window.innerWidth < 700) this.mobile = true;
        else this.mobile = false;
    }
    handelMinMenueClick = () => {
        if (!this.open) {
            this.refs.minMenuIcon.classList.add('minMenueOpen');
            this.refs.ul.classList.add("openUl");
            this.open = true
        }
        else {
            this.refs.minMenuIcon.classList.remove('minMenueOpen');
            this.refs.ul.classList.remove("openUl");
            this.open = false;
        }
    }
    agendaOpen = () => {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            if (this.state.agendaMenue === 'none') {
                this.setState({ agendaMenue: 'flex' });
            }
            else {
                this.setState({ agendaMenue: 'none' });
            }
        }
        else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            if (this.state.agendaMenue === 'none') {
                this.setState({ agendaMenue: 'flex' });
            }
            else {
                this.setState({ agendaMenue: 'none' });
            }
        }
        else {
            window.open('http://seasidestartupsummit.com/Sevan_Startup_Summit_2019_Agenda.pdf', '_blank');
        }
    }
    agendaLink = () => {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/details?id=com.setonsmarts.sss&hl=en', '_blank');
        }
        else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.open('https://apps.apple.com/gb/app/seaside-startup-summit/id1411457097', '_blank');
        }
        else {
            window.open('http://seasidestartupsummit.com/Sevan_Startup_Summit_2019_Agenda.pdf', '_blank');
        }
    }
    agendaFRLink = () => {
        window.open('http://seasidestartupsummit.com/Sevan_Startup_Summit_2019_Firecode_Agenda.pdf', '_blank');
    }
    subMennuHide = () => {
        setTimeout(() => {
            if (this.refs.minMenuIcon !== undefined) {
                this.refs.minMenuIcon.classList.remove('minMenueOpen');
                this.refs.ul.classList.remove("openUl");
                this.open = false;
            }
        }, 600);
    }
    render = () => {
        return (
            <Fragment>
                <nav className={this.state.navClass}>
                    <div className='navlogo'><Link to='/'><img src={this.state.logo} alt='logo' /></Link></div>
                    <div className="minMenue" ref='minMenuIcon' onClick={() => this.handelMinMenueClick()}><span /><span /><span /></div>
                    <div className='navMidle'>
                        <div ref="ul">
                            <ul>
                                <li>
                                    <Link to="/events">EVENTS</Link>
                                    {/* <ul onClick={() => this.subMennuHide()}>
                                        <li><Link to="/sevan19/">SEVAN 2019</Link></li>
                                        <li><Link to="/sevan18/">SEVAN 2018</Link></li>
                                        <li><Link to="/india18/">GOA 2018</Link></li>
                                        <li><Link to="/uae18/">UAE 2018</Link></li>
                                        <li><Link to="/sevan17/">SEVAN 2017</Link></li>
                                        <li><Link to="/sevan16/">SEVAN 2016</Link></li>
                                    </ul> */}
                                </li>
                                {/* <li><Link to='/about'>ABOUT</Link></li> */}
                                <li><Link to="/blog">NEWS</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navRigth">
                        <ul>

                        </ul>
                    </div>
                </nav>
            </Fragment >
        )
    }
}

export default withRouter(Header);
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import SocialMenu from '../../socialIcons.jsx';
import PageLoader from '../pageloader.jsx';
import { Fragment } from 'react';
//css
import './sectionOne.css';
//img
import bgImg from '../img/home.jpg';
// import googlePlay from '../img/icon/google.png';
// import appStore from '../img/icon/apple.png';

class Section1 extends React.Component {
    constructor() {
        super();
        this.state = {
            promoClass: '',
            promoLink: '',
            agenda: 'hiddenMsg',
            loading: true
        }
        this.ScrollCondition = true;
        this.mobile = false;
    }
    // componentWillReceiveProps = nextProps => {
    //     const pathId = nextProps.match.params.id;
    //     const prevId = this.props.match.params.id;
    //     if (this.props.location.pathname !== nextProps.location.pathname) {
    //         // setTimeout(()=>{this.setState},1000)
    //         if (pathId === 'home') {
    //             this.refs.section.classList.remove('matherPrevSectionUp');
    //             this.refs.section.classList.remove('matherPrevSection');
    //             this.refs.section.classList.remove('matherSection');
    //             this.refs.section.classList.add('matherSectionUp');
    //         }
    //         else if (prevId === 'home') {
    //             this.refs.section.classList.remove('matherPrevSectionUp');
    //             this.refs.section.classList.remove('matherSectionUp');
    //             this.refs.section.classList.remove('matherSection');
    //             this.refs.section.classList.add('matherPrevSection');
    //         }
    //         else {
    //             this.refs.section.classList.remove('matherSection');
    //             this.refs.section.classList.remove('matherPrevSection');
    //             this.refs.section.classList.remove('matherSectionUp');
    //             this.refs.section.classList.remove('matherPrevSectionUp');
    //         }
    //     }
    // }

    componentDidMount = () => {
        this.checkDivice();
        window.addEventListener("resize", this.checkDivice);
        window.onload = () => this.setState({ loading: false });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.setState({ agenda: '' });
        }
        setTimeout(() => {
            this.setState({ loading: false });
        }, 4000);
    }

    checkDivice = () => {
        if (window.innerWidth < 850) this.mobile = true;
        else this.mobile = false;
    }

    // handleScroll = (e) => {
    //     if (!this.mobile) {
    //         if (e.nativeEvent.wheelDelta < 0) {
    //             this.props.history.push('/sevan19/infographic');
    //             this.ScrollCondition = false;
    //         }
    //     }
    // }

    handelAddPromo = () => {
        this.setState({
            promoClass: 'openClass2',
            promoLink: 'https://www.youtube.com/embed/_a7zgLawK8g?rel=0;&autoplay=1&mute=1',
        });
        this.refs.sectionMiddle.style.opacity = "0";
    }
    handelRemovePromo = () => {
        this.setState({
            promoClass: '',
            promoLink: ''
        });
        this.refs.sectionMiddle.style.opacity = "1";
    }
    render = () => {
        return (
            <Fragment >
                {this.state.loading ? <PageLoader /> : ''}
                <div className='sectionOne2020' ref="section" >
                    <img onLoad={() => { this.setState({ loading: false }) }} hidden={true} src={bgImg} alt="hidden" />
                    {/* <div className={`agendaMsg ${this.state.agenda}`} onClick={() => this.setState({ agenda: 'hiddenMsg' })}>
                        <p>Download SSS App For The <br /> <b>Agenda</b> </p>
                        <div>
                            <a href="" target="_blank" rel="dofollow"><img src={googlePlay} alt="Google Play" /></a>
                            <a href="" target="_blank" rel="dofollow"><img src={appStore} alt="App Store" /></a>
                        </div>
                    </div> */}
                    <div id="promoVideo" className={`promobg ${this.state.promoClass}`} onClick={this.handelRemovePromo} >
                        <iframe title="frame2" width="100%" height="60%" src={this.state.promoLink} allow="encrypted-media" allowFullScreen></iframe>
                        <div className="vidoClose"><span onClick={this.handelRemovePromo}>X</span></div>
                    </div>
                    <div className="underMenu"><div className="underMenuItem" /></div>
                    <div className="sectionMiddleContaner">
                        <div className="sectionMiddle" ref="sectionMiddle">
                            <div className="middleLeft">
                                <Zoom cascade>
                                    <h1>SEVAN</h1>
                                    <h1>STARTUP</h1>
                                    <h1>SUMMIT</h1>
                                    <h2>_2020 <span>July 26 - August 1</span></h2>
                                </Zoom>
                            </div>
                            <div className="middleRigth">
                                <p><span>Crazy. Authentic. Real</span><br /> ...a gathering like you've never been to before</p>
                                <div className="buttons">
                                    <button onClick={this.handelAddPromo} className="watchPromo"><span>Watch</span></button>
                                    <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer"><button className="attend">Apply</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sectionFooter">
                        <SocialMenu />
                        <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer"><div className="newsButton">Buy Tickets</div></a>
                        <Link to="/sevan2020/partners"><div className="partnersButton">Partners</div></Link>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default withRouter(Section1);
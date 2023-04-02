import React from 'react';
import { Fragment } from 'react';
import Header from '../header/header.jsx';
import scrollToComponent from 'react-scroll-to-component';
//css
import './visitor.css';
//img
import Telcall from './img/telcall.png';
import Apple from './img/apple.png';
import Google from './img/google.png';
// import Scroll from './img/scroll.gif';

class VisitorAttend extends React.Component {
    constructor() {
        super();
        this.thisPart = React.createRef();
        this.state = {
            passFooter: '',
            openIcon: '+',
            passFooter2: '',
            openIcon2: '+',
        }
    }

    handelScrollIntoView = () => {
        scrollToComponent(this.thisPart, {
            offset: this.thisPart.offsetHeight - 120,
            align: 'bottom',
            duration: 800
        });
    }
    openFooter = () => {
        if (this.state.passFooter === '') {
            this.setState({
                passFooter: 'passFooterOpen',
                openIcon: '-',
            })
        }
        else {
            this.setState({
                passFooter: '',
                openIcon: '+',
            })
        }
    }
    openFooter2 = () => {
        if (this.state.passFooter2 === '') {
            this.setState({
                passFooter2: 'passFooterOpen',
                openIcon2: '-',
            })
        }
        else {
            this.setState({
                passFooter2: '',
                openIcon2: '+',
            })
        }
    }
    appClick = () => {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/details?id=ru.deltapay.puntopago.telcell&hl=en_US', '_blank');
        }
        else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.open('https://apps.apple.com/am/app/telcell-wallet/id1324511564', '_blank');
        }
        else {
            window.open('http://telcell.am/', '_blank');
        }
    }
    render = () => {
        return (
            <Fragment>
                <Header />
                {/* <div className="lengMenu"><div className="lengItem"><Link to={lengLink}>{leng}</Link></div></div> */}
                <div className="visitorSection">
                    <section ref={(section) => { this.thisPart = section; }} >
                        <h2>ALL THE CALLS ARE CLOSED</h2>
                        <h2>BOOK<span> YOUR</span> VISITOR PASS</h2>
                        <h1><span>for</span> #SSS19</h1>
                        {/* <div className="scrollgif">
                            <img src={Scroll} alt="Scroll Down" onClick={this.handelScrollIntoView} />
                        </div> */}
                    </section>
                    <div className="visitorMiddle">
                        <div className="passBox">
                            <div className="passHead">DAILY PASS</div>
                            <div className="passMiddle">
                                <div className="passTime">10 AM – 8 PM</div>
                                <div className="passPrice">10,000<span>AMD</span></div>
                            </div>
                            <div className="passFooter">
                                <div className="passDesc" >Master Classes</div>
                                <div className="passDesc">Workshops</div>
                                <div className="passDesc">Leisure activities with 20% discount</div>
                                <div className="passDesc">Big Campfire</div>
                            </div>
                        </div>
                        <div className="visitorMiddleRigth">
                            <div className="visitorFooter">
                                <div className="visitorFooterPart">
                                    <div className="text">
                                        The passes may be purchased only via <span> Telcell Wallet</span>
                                    </div>
                                    <div className="image">
                                        <img onClick={this.appClick} src={Telcall} alt="TelCell" />
                                    </div>
                                    <div className="image image2">
                                        <a href="https://apps.apple.com/am/app/telcell-wallet/id1324511564" target="_blanck" rel="dofollow">
                                            <img src={Apple} alt="App Store" />
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=ru.deltapay.puntopago.telcell&hl=en_US" target="_blanck" rel="dofollow">
                                            <img src={Google} alt="Google Play" />
                                        </a>
                                    </div>
                                </div>
                                <div className="visitorFooterPart">
                                    <div className="text2">
                                        * All the visitors should follow the <a href="https://seasidestartupsummit.com/Visitors_T&C.pdf" target="_blanck" rel="dofollow"> terms and conditions,</a> otherwise we’ll need to dismiss their passes.
                                    </div>
                                </div >
                            </div>
                            <div className="passBoxMini">
                                <div className="passHead">
                                    +24 HOURS UPGRADE <span onClick={this.openFooter}>{this.state.openIcon}</span>
                                </div>
                                <div className="passMiddle">
                                    <div className="passTime">8 PM – 8 PM (next day)</div>
                                    <div className="passPrice">22,000<span>AMD</span></div>
                                </div>
                                <div className={`passFooter ${this.state.passFooter}`} >
                                    <div className="passDesc" >Night stay (sleeping bag)</div>
                                    <div className="passDesc">Full Day pass for the next day</div>
                                </div>
                            </div>
                            <div className="passBoxMini">
                                <div className="passHead">FULL PASS <span onClick={this.openFooter2}>{this.state.openIcon2}</span></div>
                                <div className="passMiddle">
                                    <div className="passTime">JUL 28 - AUG 3</div>
                                    <div className="passPrice">225,000<span>AMD</span></div>
                                </div>
                                <div className={`passFooter ${this.state.passFooter2}`}>
                                    <div className="passDesc">Individual tent and sleeping bag</div>
                                    <div className="passDesc">Opportunity to take part in all events</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default VisitorAttend;


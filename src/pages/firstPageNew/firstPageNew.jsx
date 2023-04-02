import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import FootterNew from '../footterNew/footterNew.jsx';
import Header from '../headNew/head.jsx';
import * as EmailValidator from 'email-validator';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
//css
import './firstPageNew.css';
//Media
import footprint from './img/footprint.png';


class Home_Page_Newedition extends React.Component {
    constructor() {
        super();
        this.state = {
            mailAdded: 'your@gmail.com'
        };
        this.user = {
            email: '',
        }
        this.partnerOpen=true;
        this.scrollY=0;
    }
    componentDidMount = () => {
        window.scrollTo(0, 0);
        let arrStatus = [
            "I have seen so many summits in my life and I've been into big events, however this location and this model is one of the best I've ever seen. ",
            "This summit is created by entrepreneurs <br/> totally for entrepreneurs. ",
            "This summit forces you to focus just on your startup. It's good opportunity to step back and reflect on the bigger picture.",
            "Here you can come to learn, to experience, <br/> to exchange and to grow.",
            "It is like a melting pot for entrepreneurs to come together with a single objective how can we be more successful. ",
            "Seaside Startup Summit is Woodstock for <br/> entrepreneurs.",
            "SSS not only realize dreams by creating an exceptional event but make promising entrepreneurs go further into the directions of their dreams.",
        ];
        let arrStatusTitle = [
            "Rafi Baghdjian, CEO at IDeA Foundation",
            "Jesus Lozano, EU Innovation Expert",
            "Vahe Kuzoyan, President & Co-Founder at ServiceTitan",
            "Victor Stephanopoli, COO at MzansiSat",
            "Jimmy Jain, Member at Forbes Coaches Council",
            "Armen Sarkissian, President of Armenia",
            "Manfred Kastner, VE Vision Education GmbH",
        ];
        let i = 0;
        if (this.refs.status !== undefined && this.refs.statusTitle !== undefined) {
            setInterval(() => {
                if (this.refs.status !== undefined) {
                    this.refs.status.innerHTML = arrStatus[i];
                    this.refs.statusTitle.innerHTML = arrStatusTitle[i];
                    if (i < 6) i += 1;
                    else i = 0;
                }
            }, 7000);
        }
    }



    contUp = (num, time, addNum, elem) => {
        let i = 0;
        let inter = setInterval(() => {
            elem.innerHTML = i;
            if (i < num) i += addNum;
            else clearInterval(inter);
        }, time);
    }


    submitHandler = () => {
        let mailBox = this.refs.email;
        if (mailBox.value === "") {
            this.setState({ mailAdded: 'Please enter your email' });
            return;
        }
        else if (EmailValidator.validate(mailBox.value) !== true) {
            mailBox.value = "";
            this.setState({ mailAdded: 'Please enter correct email' })
            return;
        }
        else {
            this.user.email = mailBox.value;
        }
        fetch('https://www.apis.seasidestartupsummit.com/subscribe.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Host': 'https://www.apis.seasidestartupsummit.com/',
                'Origin': 'https://www.seasidestartupsummit.com/',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.user),
        })
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    if (data.resp === 'ok') { mailBox.value = ""; this.setState({ mailAdded: 'You are successfully subscribed.' }) }
                    else if (data.resp === 'exist') { mailBox.value = ""; this.setState({ mailAdded: 'This mail already exist' }) }
                    else { mailBox.value = ""; this.setState({ mailAdded: 'Something Wrong. Try again.' }) };
                }
            )
            .catch(error => console.log(error));
    }

    morePartner=()=>{
        if(this.partnerOpen){
            this.refs.partnersMiddlleright.classList.add('open');
            this.refs.morepartnerBox.classList.add('open');
            this.refs.morepartnerBox.childNodes[0].innerText="Less";
            this.partnerOpen=false;
        }
        else{
            this.refs.partnersMiddlleright.classList.remove('open');
            this.refs.morepartnerBox.classList.remove('open');
            this.refs.morepartnerBox.childNodes[0].innerText="More";
            this.partnerOpen=true;
        }
    }

    render = () => {
        return (
            <Fragment>
            <Helmet>
                <title>The first non-formal Startup event | Seaside Startup Summit</title>
                <meta name="description" content="Seaside Startup Summit is a platform that attracks leading angels,venture capitalists,entrepreneurs and transform their environment via entrepreneurship." />
                <meta property="og:title" content="The first non-formal Startup event | Seaside Startup Summit" />
                <meta property="og:description" content="The platform attracts leading angels, venture capitalists, entrepreneurs, and policymakers willing to join their peers in an intimate setting to think, act, and transform their environment via entrepreneurship." />
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/`} />
                <meta property="og:image" content={`http://seasidestartupsummit.com/ogImage/home.png`}/>
                <meta property="og:description" content="Seaside Startup Summit is a platform that attracks leading angels,venture capitalists,entrepreneurs and transform their environment via entrepreneurship."/>
            </Helmet>   
            <div className="firstPageNew">
                {/* <div className="job_alart">
                    <Link to="/about-us/job">join our team</Link>
                    <small>— PLEASE CHECK OUR VACANCIES —</small>
                </div> */}
                <div className="firstPageTop" ref="firstPageTop">
                    <div>
                        <h1>Transforming the way to build sustainable businesses and lasting connections
                        <p>Seaside Startup Summit</p>
                        </h1>
                    </div>
                </div>
                <Header/>
                <div className="firstPageStausBox" >
                    <div className="status" ref="status">SSS not only realize dreams by creating an exceptional event but make promising entrepreneurs go further into the directions of their dreams.</div>
                    <p ref="statusTitle">Manfred Kastner, VE Vision Education GmbH</p>
                </div>
                <div className="firstPageStatistic" ref="numbers">
                    <div className="statisticTitle">Seaside Startup Summit shapes dreams of millions</div>
                    <div className="statisticItemBox">
                        <div className="statisticItem"><div><span ref="countryNum" >50</span>+</div><span>COUNTRIES</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span ref="startupsNum" >1000</span>+ </div><span>STARTUPS</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span ref="participantsNum" >25,000</span>+ </div><span>Participants</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div>US&nbsp;$<span ref="prizesyNum" >350K</span> </div><span>Prizes</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div>US&nbsp;$<span ref="investmentsyNum" >4</span>mln </div><span>Investments</span></div>
                    </div>
                    <div className="statisticFootter"><Link to="/events">Join the millions</Link></div>
                </div>
                <div className="firstPageGraphic">
                    <div className="graphicTitle">Seaside Startup Summit footprint</div>
                    <div className="graphicImgBox">
                        <img src={footprint} alt='footprint' />
                        <div className="graphicImgText">
                            <span>Past event locations</span>
                            <span>Upcoming event locations</span>
                        </div>
                    </div>
                    <div className="graphicFootter"><Link to="/events">Check our events</Link></div>
                </div>
                {/* <div className="eventBodyMiddle">
                        <h3>Upcoming events</h3>
                        <div ref="event">
                            <div><img src={require('./img/2021.png')} alt="eventImg" /></div>
                            <h3>— Sevan startup summit 2021 —</h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]" target="_blank" rel="noopener noreferrer">Lake Sevan, Armenia</a></p>
                            <p>July 25 - July 31, 2021</p>
                            <Link to="/upcoming-events/sevan-2021">See More</Link>
                        </div>
                </div> */}
                <div className="firstPagePartners">
                    {/* <div className="partnersTitle">Our Partners</div> */}
                    <div className="partnersMiddlle">
                        <div className="partnersMiddlleLeft">
                            <div className="partnersTitle">We have <br/> cooperated with</div>
                            <div className="partnersMiddlleLeftText">Our Booster micro-acceleration program is run in cooperation with leading accelerators.</div>
                            {/* <div className="partnersMiddlleLeftBtn"><Link to="/upcoming-events/sevan-2021/program">Check our programs</Link></div> */}
                        </div>
                        <div className="partnersMiddlleright" ref="partnersMiddlleright">
                            <section>
                                <div><a href="https://theacceleratornetwork.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/1.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.startupbootcamp.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/2.1.png')} alt="partner" /></a></div>
                                <div><a href="https://zeroth.ai/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/3.1.png')} alt="partner" /></a></div>
                                <div><a href="https://en.generation-startup.ru/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/4.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.startupacademy.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/5.1.png')} alt="partner" /></a></div>
                                <div><a href="https://balticsandbox.eu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/6.1.png')} alt="partner" /></a></div>
                            </section>
                            <section>
                                <div><a href="https://www.granatusventures.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/7.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.uate.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/8.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.seasidestartupsummit.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/9.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.bajaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/10.1.png')} alt="partner" /></a></div>
                            </section>
                            <section>
                                <div><a href="https://startupwiseguys.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/11.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.fast.foundation/#/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/12.1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.speedaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/13.1.png')} alt="partner" /></a></div>
                                <div><a target="blank" rel="noopener noreferrer"><img src={require('./img/partners/14.1.png')} alt="partner" /></a></div>
                            </section>
                            <section>
                                <div><a href="https://skydeck.berkeley.edu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/15.1.png')} alt="partner" /></a></div>
                                <div><a href="https://fi.co/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/16.1.png')} alt="partner" /></a></div>
                                <div><a href="https://epic.aua.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/17.1.png')} alt="partner" /></a></div>
                                <div  style={ {visibility: "hidden"}}><a href="https://fi.co/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/16.1.png')} alt="partner" /></a></div>
                            </section>
                        </div>
                        <div className="morepartnerBox" ref="morepartnerBox">
                            <button onClick={()=>this.morePartner()}>More</button>
                        </div>
                    </div>
                </div>
                <div className="firstPageJoin">
                    <div className="joinTitle">Join our community</div>
                    <div className="joinText">In order to get the latest updates from around the world you can subscribe to our newsletter.</div>
                    <div className="joinInputBox">
                        <section className="form">
                            <div>
                                <label htmlFor="mailInput">Email</label>
                                <input id="mailInput" ref="email" type="text" placeholder={this.state.mailAdded} />
                            </div>
                            <button type="button" onClick={this.submitHandler}>Subscribe</button>
                        </section>
                    </div>
                </div>
                <FootterNew ref="footter" />
            </div>
            </Fragment>
        )
    }
}
export default Home_Page_Newedition;
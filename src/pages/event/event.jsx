import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import scrollToComponent from 'react-scroll-to-component';
import FootterNew from '../footterNew/footterNew.jsx';
import * as EmailValidator from 'email-validator';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
//css
import './event.css';
//Media
import footprint from './img/footprint.png';


class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            mailAdded: 'your@gmail.com',
            countrys:[],
            suggestErr:'',
            suggest:false
        }
        this.user = {
            email: '',
        };
        this.scrollY=0;
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.addEventListener("resize", this.winAutoScroll);
        window.scrollTo(0, 0);
        this.refs.headerText.style.opacity=1;
        this.getCountries();
    }
    getCountries=()=>{
        fetch('https://restcountries.com/v2/all',{
            method:'GET'
        })
        .then(resp=>{
            return resp.json();
        })
        .then(data=>{
            let countrys=[];
            for(let i=0; i<data.length; i++){
                countrys.push(data[i].name);
            }
            this.setState({countrys});
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
        window.removeEventListener('resize', this.winAutoScroll);
    }
    winAutoScroll=()=>{
        window.scrollTo(0,window.scrollY+2);
    }
    winScroll = () => {
        if(window.innerWidth>1024){
            if (this.scrollY<=window.scrollY){
                if(parseFloat(this.refs.headerText.style.opacity)>0){
                    this.refs.headerText.style.opacity=parseFloat(this.refs.headerText.style.opacity)-(0.01);
                }
                if(window.scrollY<this.refs.headerText2.offsetTop-this.refs.headerText2.offsetHeight){
                    this.refs.headerText.classList.add('headfixed');
                }
                else{
                    this.refs.headerText.classList.remove('headfixed');
                } 

                // down
                this.scrollY=window.scrollY+1;
            }
            else if((this.scrollY>=window.scrollY)){
                if(parseFloat(this.refs.headerText.style.opacity)<1 && window.scrollY<this.refs.headerText2.offsetTop-this.refs.headerText2.offsetHeight){
                    this.refs.headerText.style.opacity=parseFloat(this.refs.headerText.style.opacity)+(0.01);
                    this.refs.headerText.classList.add('headfixed');
                }
                if(window.scrollY===0)this.refs.headerText.style.opacity=1;
                // up
                this.scrollY=window.scrollY-1;
            }       
        }
        else{
            this.refs.headerText.classList.remove('headfixed');
            this.refs.headerText.style.opacity=1;
        }
    }

    submitHandler = () => {
        let mailBox = this.refs.email;
        if (mailBox.value === "") {
            this.setState({ mailAdded: 'Please enter your email' });
            return;
        }
        else if (EmailValidator.validate(mailBox.value) !== true) {
            mailBox.value = "";
            this.setState({ mailAdded: 'Please enter correct email' });
            return;
        }
        else {
            this.user.email = mailBox.value;
        }
        fetch('https://www.apis.seasidestartupsummit.com/subscribe.php', {
            method: 'POST',
            //credentials: "same-origin",
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
    handelScrollIntoView = () => {
        scrollToComponent(this.refs.footter, {
            offset: this.refs.footter.offsetHeight,
            align: 'bottom',
            duration: 800
        });
    }
    scrollToEvents = () => {
        scrollToComponent(this.refs.event, {
            offset: 0,
            align: 'bottom',
            duration: 800
        });
    }


    menuOpen = () => {
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

    sendSuggest=()=>{
        if(!this.state.suggest){
            this.refs.formtext1.style.display="none";
            this.refs.formSec.style.display="flex";
            this.setState({suggest:true});
            return;
        }
        let country=this.refs.country.value;
        let city=this.refs.city.value;
        let year=this.refs.year.value;
        let partner=this.refs.partner.value;
        if(country===""){
            this.refs.country.style.borderColor="red";
            this.refs.city.style.borderColor="red";
        }
        else if(city===""){ 
            this.refs.country.style.borderColor="#596273";
            this.refs.city.style.borderColor="red";
        }
        else if(year!=="" && parseInt(year)<2020){
            this.refs.country.style.borderColor="#596273";
            this.refs.city.style.borderColor="#596273";
            this.refs.year.style.borderColor="red";
        } 
        else{
            let data={
                country:country, 
                city:city,
                year:year,
                partner:partner
            }
            console.log(data);
            fetch('https://www.apis.seasidestartupsummit.com/suggest.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    if (data.resp === 'ok'){
                        this.refs.formSec.style.display="none";
                        this.refs.formtext1.style.display="flex";
                        this.refs.formtext1.innerHTML="Thank you for suggestion";
                        this.refs.city.value="";
                        this.refs.year.value="";
                        this.refs.partner.value="";
                        this.refs.country1.selected=true;
                        this.setState({suggest:false});
                    }
                }
            )
            .catch(error => console.log(error));
        }
    }

    render = () => {
        return (
            <Fragment>
            <Helmet>
                <title>Check Our Upcoming and Past Events | Seaside Startup Summit</title>
                <meta name="description" content="SSS is the first outdoor campsite-based platform for startups that fosters intensive deal-making and conversations about current topics in entrepreneurship" />
                <meta property="og:title" content="Check Our Upcoming and Past Events | Seaside Startup Summit" />
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/event`} />
                <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/event.png" />
                <meta property="og:description" content="SSS is the first outdoor campsite-based platform for startups that fosters intensive deal-making and conversations about current topics in entrepreneurship" />
            </Helmet>
            <div className="eventNew">
                <div className="eventTop" ref="eventTop">
                    <h1 ref="headerText">Transforming the way to build sustainable businesses and lasting connections</h1>
                    {/* <p>Seaside Startup Summit</p> */}
                    <div ref="headerText2" className="eventBodyHead" >
                        <h3>Discover our events</h3>
                        <p>Seaside Startup Summit is the first outdoor
                            campsite-based microacceleration platform that
                            fosters intensive deal-making and immersive
                            conversations about the hottest current topics in
                            entrepreneurship all over the world.
                        </p>
                    </div>
                </div>
                <Header/>
                <div className="eventBody">
                    <div className="eventBodyHead">
                        <h3>Discover our events</h3>
                        <p>Seaside Startup Summit is the first outdoor
                            campsite-based microacceleration platform that
                            fosters intensive deal-making and immersive
                            conversations about the hottest current topics in
                            entrepreneurship all over the world.
                        </p>
                    </div>
                    <div className="eventBodyMiddle">
                        <h3>Upcoming events</h3>
                        {/*<div ref="event">*/}
                        {/*    <div><Link to="/sss-holidays-india-vizag" ><img src={require('./img/eventCover/Vizag.png')} alt="eventImg" /></Link></div>*/}
                        {/*    <h3> SSSholidays India Vizag </h3>*/}
                        {/*    <p><a href="https://www.google.com/maps/place/Radisson+Blu+Resort+Visakhapatnam/@17.7655022,83.3661147,1760m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3a395bb9c94c1057:0x790d1a77f69f0f32!2sRadisson+Blu+Resort+Visakhapatnam!5m2!4m1!1i2!8m2!3d17.7714424!4d83.3728866!3m7!1s0x3a395bb9c94c1057:0x790d1a77f69f0f32!5m2!4m1!1i2!8m2!3d17.7714424!4d83.3728866" target="_blank" rel="noopener noreferrer">Sagar-Nagar beach, India</a></p>*/}
                        {/*    <p>February 13-18, 2023</p>*/}
                        {/*    <Link to="/sss-holidays-india-Vizag">See More</Link>*/}
                        {/*</div>*/}
                        <div ref="event">
                            <div>
                                <Link to="/upcoming-events/sevan-startup-summit-2023" >
                                    <img
                                        src={require('./img/eventCover/sevan2023.png')}
                                        alt="eventImg"
                                    />
                                </Link>
                            </div>
                            <h3>— Sevan startup summit 2023 —</h3>
                            <p>
                                <a
                                    href="https://www.google.com/maps/place/Sevan+Startup+Summit/@40.344047,45.578228,2390m/data=!3m1!1e3!4m6!3m5!1s0x403f89d42619d199:0xab251b125c1578ac!8m2!3d40.3440465!4d45.5782279!16s%2Fg%2F11v0qtkrr8?hl=en&entry=ttu"
                                    // href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Lake Sevan, Armenia
                                </a>
                            </p>
                            <p>July 23 - 29, 2023</p>
                            <Link to="/upcoming-events/sevan-startup-summit-2023">See More</Link>
                        </div>
                        <div>
                            <div><img src={require('./img/eventCover/sugest.png')} alt="eventImg" /></div>
                            <h3> Seaside startup summit </h3>
                            <section ref="formSec" className="form" >
                                <select ref="country">
                                    <option ref="country1" disabled={true} selected={true} value="">Country*</option>
                                    {this.state.countrys.map((country) => <option key={country} value={country}>{country}</option>)}
                                </select>
                                <input type="text" placeholder="City*" ref="city"/>
                                <input type="text" placeholder="Year" ref="year"/>
                                <input type="text" placeholder="Suggest Partner" ref="partner"/>
                            </section>
                            <p ref="formtext1" className="formP">Suggest<br/>your dream location</p>
                            <p ref="formtext2" className="formP2"></p>
                            <button onClick={this.sendSuggest}>Suggest</button>
                            <span></span>
                        </div>
                    </div>
                    <div className="eventBodyMiddle past">
                        <h3>Past events</h3>
                        <div>
                            <div><Link to="/sss-holidays-uae-rak"><img src={require('./img/eventCover/sssholydatrak2021.png')} alt="eventImg" /></Link></div>
                            <h3> SSSholidays UAE RAK </h3>
                            <p><a href="https://www.hilton.com/en/hotels/rktmidi-doubletree-resort-and-spa-marjan-island/?WT.srch=1&WT.mc_id=zIMDPDA0EMEA1MB2PSH3PPC_Google_search4cid175362171_aid11825797131_mp_kkwd-3152065556895Brand_Nano6RKTMIDI7en&utm_source=Google&utm_medium=ppc&utm_campaign=paidsearch&campaignid=175362171&adgroupid=11825797131&targetid=kwd-315206555689&gclid=CjwKCAiAyPyQBhB6EiwAFUuakmSExmhV2hcezrw7GqpQ7mx0Gpq6Z-GGNeihjcaTEoYRtTtkFSbxIxoCGrwQAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">Al Marjan Island, UAE</a></p>
                            <p>December 6 - December 12, 2021</p>
                            <Link to="/sss-holidays-uae-rak">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/sevan19"><img src={require('./img/eventCover/2019.png')} alt="eventImg" /></Link></div>
                            <h3> Sevan startup summit 2019 </h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]" target="_blank" rel="noopener noreferrer">Lake Sevan, Armenia</a></p>
                            <p>July 28 - August 3, 2019</p>
                            <Link to="/sevan19">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/sevan18"><img src={require('./img/eventCover/2018.png')} alt="eventImg" /></Link></div>
                            <h3> Sevan startup summit 2018 </h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]" target="_blank" rel="noopener noreferrer">Lake Sevan, Armenia</a></p>
                            <p>July 22 - July 29, 2018</p>
                            <Link to="/sevan18">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/india18/"><img src={require('./img/eventCover/goa.png')} alt="eventImg" /></Link></div>
                            <h3> Seaside startup summit India Goa</h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&tbm=lcl&sxsrf=ALeKk003o1jhB6sTnv4gjhm0VDW2W3HA1w%3A1583940339878&ei=8wJpXo-eNYHsrgTVsLeAAg&q=seaside+startup+summit+india+goa&oq=seaside+startup+summit+india+goa&gs_l=psy-ab.3...1965.1965.0.2424.1.1.0.0.0.0.156.156.0j1.1.0....0...1c.1.64.psy-ab..0.0.0....0.EfaQ2k-5JXs#rlfi=hd:;si:794608609848060597;mv:[[15.10509207731903,73.9254705180064],[15.104732122680973,73.92509768199359]]" target="_blank" rel="noopener noreferrer">Cabo De Rama, India </a></p>
                            <p>Mar 6 - Mar 11, 2018</p>
                            <Link to="/india18/">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/uae18/"><img src={require('./img/eventCover/rak.png')} alt="eventImg" /></Link></div>
                            <h3> Seaside startup summit UAE RAK</h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&tbm=lcl&sxsrf=ALeKk03-HqGXplAxpQjYnRqeXbZAiV8CAA%3A1583940158100&ei=PgJpXtLOBcvZrgSm9JHADg&q=al+marjan+island&oq=al+marjan+i&gs_l=psy-ab.3.0.0i273k1j0l9.8455.11195.0.12399.13.11.0.1.1.0.236.1256.0j7j1.8.0....0...1c.1.64.psy-ab..4.9.1265...35i39k1j0i67k1j0i22i30k1.0.TBG8r_Zbago#rlfi=hd:;si:;mv:[[25.693232634090634,55.76156978133547],[25.671110065407618,55.72097186568605],null,[25.682171863200242,55.74127082351076],15]" target="_blank" rel="noopener noreferrer">Al Marjan Island, UAE</a></p>
                            <p>Feb 8 - Feb 12, 2018</p>
                            <Link to="/uae18/">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/sevan17/"><img src={require('./img/eventCover/2017.png')} alt="eventImg" /></Link></div>
                            <h3> Sevan startup summit 2017 </h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]" target="_blank" rel="noopener noreferrer">Lake Sevan, Armenia</a></p>
                            <p>July 24 - July 29, 2017</p>
                            <Link to="/sevan17/">See More</Link>
                        </div>
                        <div>
                            <div><Link to="/sevan16/"><img src={require('./img/eventCover/2016.png')} alt="eventImg" /></Link></div>
                            <h3> Sevan startup summit 2016 </h3>
                            <p><a href="https://www.google.com/search?newwindow=1&safe=active&sxsrf=ALeKk02wx6-2zNRiUwZ8xHYCnhyBPDcqlQ:1583939336793&q=sevan+startup+summit+map&npsic=0&rflfq=1&rlha=0&rllag=40345921,44773830,29452&tbm=lcl&ved=2ahUKEwjxs4_s2ZLoAhVM_SoKHVc7CEIQtgN6BAgLEAQ&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:[[40.56979154858928,45.22049290283203],[40.43613241385136,44.895709577636715],null,[40.50299527241559,45.05810124023437],12]" target="_blank" rel="noopener noreferrer">Lake Sevan, Armenia</a></p>
                            <p>Aug 18 - Aug 27, 2016</p>
                            <Link to="/sevan16/">See More</Link>
                        </div>
                    </div>
                </div>
                <div className="eventGraphic">
                    <div className="graphicTitle">Seaside Startup Summit footprint</div>
                    <div className="graphicImgBox">
                        <img src={footprint} alt='footprint' />
                        <div className="graphicImgText">
                            <span>Past event locations</span>
                            <span>Upcoming event locations</span>
                        </div>
                    </div>
                </div>
                <div className="eventJoin">
                    <div className="joinTitle">Join our community</div>
                    <div className="joinText">In order to get the latest updates from around the world you can subscribe to our newsletter</div>
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
export default Events;
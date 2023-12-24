import React from 'react';
import {
    MasterClass,
    Woekshops,
    Mentorships,
    GropMentorships,
    Camfire,
    TrackBattles
} from './program.min.jsx';
import "./myStyles.css"


class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width:700
        }
    }

    componentDidMount() {
        this.setState({
            width:window.innerWidth
        })
    }

    programOpen = (e,elem, elem2) => {
        // if (window.innerWidth <= 1024) {
        //     this.refs.MasterClass2.classList.remove('ulDivOpen');
        //     this.refs.Woekshops2.classList.remove('ulDivOpen');
        //     this.refs.Mentorships2.classList.remove('ulDivOpen');
        //     this.refs.Grop_Mentorships2.classList.remove('ulDivOpen');
        //     this.refs.Camfire2.classList.remove('ulDivOpen');
        //     this.refs.TrackBattles2.classList.remove('ulDivOpen');
        //     elem2.classList.add('ulDivOpen');
        // }
        // else {
            this.refs.MasterClass.classList.remove('upcommingPrograms_right_open');
            this.refs.Woekshops.classList.remove('upcommingPrograms_right_open');
            this.refs.Mentorships.classList.remove('upcommingPrograms_right_open');
            this.refs.Grop_Mentorships.classList.remove('upcommingPrograms_right_open');
            this.refs.Camfire.classList.remove('upcommingPrograms_right_open');
            this.refs.TrackBattles.classList.remove('upcommingPrograms_right_open');
            elem.classList.add('upcommingPrograms_right_open');

            if (window.innerWidth <= 1024) {
                for(let i=1; i<7; i++){
                    let elm="li"+i;
                    this.refs[elm].style.color="rgb(47, 128, 237)";
                    this.refs[elm].style.border="none";
                }
                // if(e!=='li1'){
                //     this.refs.menue.scrollTo({
                //         top: 0,
                //         left: this.refs[e].offsetLeft-30,
                //         behavior: 'smooth'
                //     });
                // }
                this.refs[e].style.borderBottom="2px solid rgb(47, 128, 237)";
            }
            else{
                for(let i=1; i<7; i++){
                    let elm="li"+i;
                    this.refs[elm].style.color="rgb(47, 128, 237)";
                }
                this.refs[e].style.color="rgba(117, 117, 117,1)";
            }
        // }
    }
    caruselPrev = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        elem.scrollTo({
            left: elem.scrollLeft + inter,
            behavior: "smooth",
        });
    }
    caruselNext = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        elem.scrollTo({
            left: elem.scrollLeft - inter,
            behavior: "smooth"
        });
    }

    render = () => {
        console.log(this.state.width)
        return (
            <div className="program-block">
                <h2>Educational Program for Startups</h2>
                <div className="upcommingPrograms one">
                    <div className="upcommingPrograms_left wb-program">
                        {/*<div className="imgBox">*/}
                        {/*    <img src={require('./img/disignIcon/Group.png')} alt="starter program" />*/}
                        {/*</div>*/}
                        <div className="textBox" >
                            {/*<h3>— Starter Program —</h3>*/}
                            <p>
                                <b>We offer a unique program tailored to your needs.</b><br/>
                                For aspiring entrepreneurs and startups, our program categorizes startups into tracks based on industries and technologies, offering a specialized incubation/micro-acceleration experience. This education program is facilitated by well-known international experts.
                            </p>
                            <p>
                                Another key aspect of our education program is the one-on-one mentoring program where all startups get the chance to talk directly to industry experts and get cutting-edge advice on different aspects of their startups.
                            </p>
                            {/* <div className="carusel_menue">
                                <div className="mobi_meue_trp_left"/>
                                <ul ref="menue">
                                    <li ref="li1" onClick={() => this.programOpen("li1",this.refs.TrackBattles, this.refs.TrackBattles2)} style={{color: "#757575"}}>Track Battles </li>
                                    <li ref="li2" onClick={() => this.programOpen("li2",this.refs.MasterClass, this.refs.MasterClass2)}>Master Classes </li>
                                    <li ref="li3" onClick={() => this.programOpen("li3",this.refs.Woekshops, this.refs.Woekshops2)}>Business Development Workshops </li>
                                    <li ref="li4" onClick={() => this.programOpen("li4",this.refs.Mentorships, this.refs.Mentorships2)}>1:1 Mentorship Sessions </li>
                                    <li ref="li5" onClick={() => this.programOpen("li5",this.refs.Grop_Mentorships, this.refs.Grop_Mentorships2)}>Group Mentorship Sessions </li>
                                    <li ref="li6" onClick={() => this.programOpen("li6",this.refs.Camfire, this.refs.Camfire2)}>Campfire Talks </li>
                                </ul>
                                <div className="mobi_meue_trp_right"/>
                           </div> */}
                            {/* <p className="lasrPText">Starter Programme teams compete for the top 2 positions in each Industry Track and a chance to go on to the Starter Big Battle. The top team from each Industry Track will receive US$1,500 in prizes. Up to 18 teams will be selected for the Semi-Finals out of which 6 teams will go on to participate in the Starter Big Battle Finals. The finalists will compete for US$10,000 in prizes for the top 3 teams and in-kind prizes worth up to US$20,000.</p> */}
                            <a target="_npmblank" rel="noopener noreferrer" className="passiveBtn">Get the educational program</a>
                        </div>
                    </div>
                    <div className="upcommingPrograms_right one">
                        <div ref="MasterClass" >
                            <MasterClass />
                        </div>
                        <div ref="Woekshops">
                            <Woekshops />
                        </div>
                        <div ref="Mentorships">
                            <Mentorships />
                        </div>
                        <div ref="Grop_Mentorships">
                            <GropMentorships />
                        </div>
                        <div ref="Camfire">
                            <Camfire />
                        </div>
                        <h3 className='mobi'>— Suggested tracks & Technologies —</h3>
                        <div ref="TrackBattles" className="upcommingPrograms_right_open">
                            <TrackBattles width={this.state.width}/>
                        </div>
                    </div>

                    {/*<div className="upcommingPrograms_left">*/}
                    {/*    <div className="imgBox">*/}
                    {/*        <img src={require('./img/disignIcon/Group1.png')} alt="starter program" />*/}
                    {/*    </div>*/}
                    {/*    <div className="textBox">*/}
                    {/*        <h3>— Booster Program —</h3>*/}
                    {/*        <p>*/}
                    {/*            The Booster Program has been crafted as an intensive micro-acceleration program for the startups that have an early prototype and have secured some form of angel funding.<br/><br/>*/}
                    {/*            The Booster program is delivered by international accelerators, facilitated by speakers and mentors with a hands-on intensive acceleration experience.<br/><br/>*/}
                    {/*            The educational tracks of the Booster Program are divided based on the technologies the startups operate in. In addition to the main prizes, the Booster Startups can get a chance to attract about $100k investment commitments by Triple S Ventures.<br/><br/>*/}

                    {/*        </p>*/}
                    {/*        /!* <p><b>TOP TEAMS WILL BE ELIGIBLE FOR PRIZE FUND OF US $15K AND OPTIONAL INVESTMENTS UP TO US $50K PER-TEAM FROM SPECIALLY DESIGNED BOOSTER FUNDS.</b></p> *!/*/}
                    {/*        <a target="_blank" rel="noopener noreferrer" className="passiveBtn">Get the Booster program</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="upcommingPrograms_right">*/}
                    {/*    <div className="programPartner">*/}
                    {/*        <h3>— We worked with — </h3>*/}
                    {/*        <p>Our Booster micro-acceleration program are run in cooperation with leading accelerators.</p>*/}
                    {/*        <div>*/}
                    {/*            /!* <div className="programPartnerPrv" onClick={() => this.caruselPrev(this.refs.partnerImg, 150)}><b /></div> *!/*/}
                    {/*            <div className="programPartnerImg" ref="partnerImg">*/}
                    {/*                <section>*/}
                    {/*                    <div><a href="https://theacceleratornetwork.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/1.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://www.startupbootcamp.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/2.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://zeroth.ai/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/3.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://en.generation-startup.ru/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/4.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://www.startupacademy.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/5.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://balticsandbox.eu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/6.png')} alt="partner" /></a></div>*/}
                    {/*                </section>*/}
                    {/*                <section>*/}
                    {/*                    <div><a href="https://www.granatusventures.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/7.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="http://www.uite.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/8.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://thecrowdfundingformula.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/9.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://www.bajaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/10.png')} alt="partner" /></a></div>*/}
                    {/*                </section>*/}
                    {/*                <section>*/}
                    {/*                    <div><a href="https://startupwiseguys.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/11.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://www.fast.foundation/#/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/12.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://www.speedaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/13.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a><img src={require('./img/partners/14.png')} alt="partner" /></a></div>*/}
                    {/*                </section>*/}
                    {/*                <section>*/}
                    {/*                    <div><a href="https://skydeck.berkeley.edu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/15.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://fi.co/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/16.png')} alt="partner" /></a></div>*/}
                    {/*                    <div><a href="https://epic.aua.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/17.png')} alt="partner" /></a></div>*/}
                    {/*                </section>*/}
                    {/*            </div>*/}
                    {/*            <div className="wb-mobilePartners">*/}
                    {/*                <div><a href="https://theacceleratornetwork.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/1.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.startupbootcamp.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/2.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://zeroth.ai/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/3.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://en.generation-startup.ru/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/4.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.startupacademy.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/5.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://balticsandbox.eu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/6.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.granatusventures.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/7.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="http://www.uite.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/8.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://thecrowdfundingformula.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/9.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.bajaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/10.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://startupwiseguys.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/11.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.fast.foundation/#/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/12.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://www.speedaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/13.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a><img src={require('./img/partners/14.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://skydeck.berkeley.edu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/15.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://fi.co/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/16.png')} alt="partner" /></a></div>*/}
                    {/*                <div><a href="https://epic.aua.am/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/17.png')} alt="partner" /></a></div>*/}
                    {/*            </div>*/}
                    {/*            /!* <div className="programPartnerNext" onClick={() => this.caruselNext(this.refs.partnerImg, 150)}><b /></div> *!/*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="upcommingProgramsFootter">*/}
                    {/*    <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Roadmap as Startup</a>*/}
                    {/*    <p>*The distribution into  Starter and Booster is done by the SSS steering committee</p>*/}
                    {/*</div>*/}
                </div>
            </div>

        )
    }
}
export default Programs;
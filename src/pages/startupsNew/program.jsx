import React from 'react';
import {Fragment} from 'react';
import {
    MasterClass,
    Woekshops,
    Mentorships,
    GropMentorships,
    Camfire,
    TrackBattles
} from './program.min.jsx';

class Programs extends React.Component {
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
            for(let i=1; i<7; i++){
                let elm="li"+i;
                this.refs[elm].style.color="#2F80ED";
            }
            this.refs[e].style.color="#7489a7";
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
        return (
            <Fragment>    
            <div className="upcommingSuggest">
                <h2>We suggest a unique  program adapted to your needs</h2>
                <p>All the applied startup teams pass a screening process and the accepted teams based on their level of development and fields of operations (Tracks) will be distributed into one of two programs: Starter and Booster*.</p>
            </div>
            <div className="upcommingPrograms">
                <div className="upcommingPrograms_left">
                    <div className="imgBox">
                        <img src={require('./img/disignIcon/Group.png')} alt="starter program" />
                    </div>
                    <div className="textBox" >
                        <h3>— Starter Programme —</h3>
                        <p>The Starter program is designed for aspiring entrepreneurs and idea-stage startups. The newly designed agenda for SSS Starter program includes:</p>
                        <ul>
                            <li ref="li1" onClick={()=>this.programOpen("li1",this.refs.TrackBattles, this.refs.TrackBattles2)}  style={{color: "#7489a7"}}>Track Battles </li>
                            {/* <div className="ulDiv ulDivOpen" ref="TrackBattles2"><TrackBattles /></div> */}
                            <li ref="li2" onClick={()=>this.programOpen("li2",this.refs.MasterClass, this.refs.MasterClass2)}>Master Classes </li>
                            {/* <div className="ulDiv" ref="MasterClass2"><MasterClass /></div> */}
                            <li ref="li3" onClick={()=>this.programOpen("li3",this.refs.Woekshops, this.refs.Woekshops2)}>Business Development Workshops </li>
                            {/* <div className="ulDiv" ref="Woekshops2"><Woekshops /> </div> */}
                            <li ref="li4" onClick={()=>this.programOpen("li4",this.refs.Mentorships, this.refs.Mentorships2)}>1:1 Mentorship Sessions </li>
                            {/* <div className="ulDiv" ref="Mentorships2"><Mentorships /></div> */}
                            <li ref="li5" onClick={()=>this.programOpen("li5",this.refs.Grop_Mentorships, this.refs.Grop_Mentorships2)}>Group Mentorship Sessions </li>
                            {/* <div className="ulDiv" ref="Grop_Mentorships2"><GropMentorships /></div> */}
                            <li ref="li6" onClick={()=>this.programOpen("li6",this.refs.Camfire, this.refs.Camfire2)}>Campfire Talks </li>
                            {/* <div className="ulDiv" ref="Camfire2"><Camfire /></div> */}
                        </ul>
                        <p className="lasrPText">Starter Programme teams compete for the top 2 positions in each Industry Track and a chance to go on to the Starter Big Battle. The top team from each Industry Track will receive US$1,500 in prizes. Up to 18 teams will be selected for the Semi-Finals out of which 6 teams will go on to participate in the Starter Big Battle Finals. The finalists will compete for US$10,000 in prizes for the top 3 teams and in-kind prizes worth up to US$20,000.</p>
                    </div>
                </div>
                <div className="upcommingPrograms_right">
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
                    <div ref="TrackBattles" className="upcommingPrograms_right_open">
                        <TrackBattles />
                    </div>
                </div>

                <div className="upcommingPrograms_left">
                    <div className="imgBox">
                        <img src={require('./img/disignIcon/Group (1).png')} alt="starter program" />
                    </div>
                    <div className="textBox">
                        <h3>— Booster Programme —</h3>
                        <p>This is a specially designed intensive micro acceleration programme for qualifying start-ups that have developed an early prototype and secured some form of angel funding.Booster Track will be facilitated by expert Speakers and supported by Mentors, who will deliver a hands-on intensive acceleration experience.</p>
                        <p><b>TOP TEAMS WILL BE ELIGIBLE FOR PRIZE FUND OF US $15K AND OPTIONAL INVESTMENTS UP TO US $50K PER-TEAM FROM SPECIALLY DESIGNED BOOSTER FUNDS.</b></p>
                    </div>
                </div>
                <div className="upcommingPrograms_right">
                    <div className="programPartner">
                        <h3>— We worked with — </h3>
                        <p>Our Booster micro-acceleration program are run in cooperation with leading accelerators.</p>
                        <div>
                            {/* <div className="programPartnerPrv" onClick={() => this.caruselPrev(this.refs.partnerImg, 150)}><b /></div> */}
                            <div className="programPartnerImg" ref="partnerImg">
                                <div><a href="https://theacceleratornetwork.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/1.png')} alt="partner" /></a></div>
                                <div><a href="https://www.startupbootcamp.org/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/2.png')} alt="partner" /></a></div>
                                <div><a href="https://zeroth.ai/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/3.png')} alt="partner" /></a></div>
                                <div><a href="https://en.generation-startup.ru/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/4.png')} alt="partner" /></a></div>
                                <div><a href="https://balticsandbox.eu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/5.png')} alt="partner" /></a></div>
                                <div><a href="https://startupwiseguys.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/6.png')} alt="partner" /></a></div>
                                <div><a href="https://fi.co/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/7.png')} alt="partner" /></a></div>
                                <div><a href="https://www.speedaccelerator.com/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/8.png')} alt="partner" /></a></div>
                                <div><a href="https://skydeck.berkeley.edu/" target="blank" rel="noopener noreferrer"><img src={require('./img/partners/9.png')} alt="partner" /></a></div>
                            </div>
                            {/* <div className="programPartnerNext" onClick={() => this.caruselNext(this.refs.partnerImg, 150)}><b /></div> */}
                        </div>
                    </div>
                </div>
                <div className="upcommingProgramsFootter">
                    <a target="_blank" rel="noopener noreferrer" className="passiveBtn noupcomming">Apply as a Startup</a>
                    <p>*The distribution into  Starter and Booster is done by the SSS steering committee</p>
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Programs;
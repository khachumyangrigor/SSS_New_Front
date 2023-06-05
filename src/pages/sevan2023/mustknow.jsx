import React from 'react';
import {
    Amenities,
    Weather,
    Entertainments,
    LocalRules,
} from './mustknow.min.jsx';

class Programs extends React.Component {
    programOpen = (e,elem, elem2) => {
        // if (window.innerWidth <= 1024) {
        //     this.refs.Amenities2.classList.remove('ulDivOpen');
        //     this.refs.Weather2.classList.remove('ulDivOpen');
        //     this.refs.Entertainments2.classList.remove('ulDivOpen');
        //     this.refs.LocalRules2.classList.remove('ulDivOpen');
        //     elem2.classList.add('ulDivOpen');
        // }
        // else {
            this.refs.Amenities.classList.remove('upcommingPrograms_right_open');
            this.refs.Weather.classList.remove('upcommingPrograms_right_open');
            this.refs.Entertainments.classList.remove('upcommingPrograms_right_open');
            this.refs.LocalRules.classList.remove('upcommingPrograms_right_open');
            elem.classList.add('upcommingPrograms_right_open');
            if (window.innerWidth <= 1024) {
                for(let i=1; i<5; i++){
                    let elm="li"+i;
                    this.refs[elm].style.color="#2F80ED";
                    this.refs[elm].style.background="#fff";

                }
                // if(e!=='li1')this.refs.menue.scrollTo(this.refs[e].offsetLeft-20,0);
                this.refs[e].style.color="rgb(255,255,255)";
                this.refs[e].style.background="#2F80ED";
            }
            else{
                for(let i=1; i<5; i++){
                    let elm="li"+i;
                    this.refs[elm].style.color="rgb(47, 128, 237)";
                }
                this.refs[e].style.color="rgb(255,255,255)";
                this.refs[e].style.background="#2F80ED";
            }
            // }
    }

    render = () => {
        return (
            <div className="upcommingProgramsBlock">
                <h2>What you need to know beforehand</h2>
                <div className="upcommingPrograms">
                    <div className="upcommingPrograms_left">
                        <div className="imgBox">
                            <img src={require('./img/disignIcon/info.png')} alt="starter program" />
                        </div>
                        <div className="textBox">
                            <h3>— important to know —</h3>
                            <p>Sevan Startup Summit is located on one of the most beautiful places of Armenia and represents an open outdoor camping. Hence, it is important to be well prepared. <br /> <b>Please check the below links for more information.</b></p>
                            <div className="carusel_menue">
                                <div className="mobi_meue_trp_left"/>
                                <ul ref="menue">
                                    <li ref="li1" onClick={() => this.programOpen("li1",this.refs.Amenities, this.refs.Amenities2)} style={{color:"rgb(117,117,117)"}}>Amenities at the venue</li>
                                    {/* <div ref="Amenities2" className="ulDiv ulDivOpen"> <Amenities /></div> */}
                                    <li ref="li2" onClick={() => this.programOpen("li2",this.refs.Weather, this.refs.Weather2)}>Weather conditions</li>
                                    {/* <div ref="Weather2" className="ulDiv"> <Weather /></div> */}
                                    <li ref="li3" onClick={() => this.programOpen("li3",this.refs.Entertainments, this.refs.Entertainments2)}>Entertainments</li>
                                    {/* <div ref="Entertainments2" className="ulDiv"> <Entertainments /></div> */}
                                    <li ref="li4" onClick={() => this.programOpen("li4",this.refs.LocalRules, this.refs.LocalRules2)}>Local rules </li>
                                    {/* <div ref="LocalRules2" className="ulDiv"> <LocalRules /></div> */}
                                </ul>
                                <div className="mobi_meue_trp_right"/>
                            </div>
                            <div className="wb-knowMobileButtons">
                                <div className="wb-knowMobileButtons-card">
                                    <button ref="li1" className="wb-knowMobileButton" onClick={() => this.programOpen("li1",this.refs.Amenities, this.refs.Amenities2)}>Amenities at the venue</button>
                                    <button ref="li2" className="wb-knowMobileButton" onClick={() => this.programOpen("li2",this.refs.Weather, this.refs.Weather2)}>Weather conditions</button>
                                </div>
                                <div className="wb-knowMobileButtons-card">
                                    <button ref="li3" className="wb-knowMobileButton" onClick={() => this.programOpen("li3",this.refs.Entertainments, this.refs.Entertainments2)}>Entertainments</button>
                                    <button ref="li4" className="wb-knowMobileButton" onClick={() => this.programOpen("li4",this.refs.LocalRules, this.refs.LocalRules2)}>Local rules</button>
                                </div>
                                <div className="wb-knowMobileButtons-card">
                                    <a target="_blank" rel="noopener noreferrer" className={`passiveBtn wb-mobile-info-button`}>Info brochure for Participants</a>
                                    <a target="_blank" rel="noopener noreferrer" className={`passiveBtn wb-mobile-info-button`}>Info brochure for Visitors</a>
                                </div>
                            </div>
                            <div className="wb-desktopButtons">
                                <a target="_blank" rel="noopener noreferrer" className="passiveBtn">Info brochure for Participants</a>
                                <a target="_blank" rel="noopener noreferrer" className="passiveBtn">Info brochure for Visitors</a>
                            </div>
                        </div>
                    </div>
                    <div className="upcommingPrograms_right">
                        <div ref="Amenities" className="upcommingPrograms_right_open">
                            <Amenities />
                        </div>
                        <div ref="Weather">
                            <Weather />
                        </div>
                        <div ref="Entertainments">
                            <Entertainments />
                        </div>
                        <div ref="LocalRules" >
                            <LocalRules />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Programs;
import React from 'react';
import {
    Amenities,
    Weather,
    Entertainments,
    LocalRules,
} from './mustknow.min.jsx';
import { Link } from "react-scroll";
import "./myStyles.css"

class Programs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width : 0
        }
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth
        })
    }

    programOpen = (e,elem, elem2) => {
        this.refs.Amenities.classList.remove('upcommingPrograms_right_open');
        this.refs.Weather.classList.remove('upcommingPrograms_right_open');
        this.refs.Entertainments.classList.remove('upcommingPrograms_right_open');
        this.refs.LocalRules.classList.remove('upcommingPrograms_right_open');
        elem.classList.add('upcommingPrograms_right_open');
        if (window.innerWidth <= 1024) {
            for(let i=1; i<5; i++){
                let elm="li"+i;
                this.refs[elm].style.color="#2F80ED";
                this.refs[elm].style.background="#f7f7f7";
            }
            // if(e!=='li1')this.refs.menue.scrollTo(this.refs[e].offsetLeft-20,0);
            this.refs[e].style.color="rgb(255,255,255)";
            this.refs[e].style.background="#2F80ED";
        } else {
            for(let i=4; i<9; i++){
                let elm="li"+i;
                this.refs[elm].style.color="rgb(47, 128, 237)";

            }
            this.refs[e].style.color="rgb(117,117,117)";
            this.refs[e].querySelector("::after").style.color = "rgb(117,117,117)"
        }
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
                            <h3>{this.state.width > 1024 ? "— important to know —" : "important to know"}</h3>
                            <div style={{display: "flex"}}>
                                <img src={require('./img/disignIcon/info.png')} alt="starter program" className="textBoxMobileImg"/>
                                <p>
                                    SSSUAE24 is located in one of the most beautiful places in Ras Al Khaimah, in an open outdoor campground area. It is extremely important to be well prepared<br /> <b>Please check the below links for more information.</b>
                                </p>
                            </div>
                            <div className="carusel_menue">
                                <div className="mobi_meue_trp_left"/>
                                <ul ref="menue">
                                    <li ref="li5" onClick={() => this.programOpen("li5",this.refs.Amenities, this.refs.Amenities2)} style={{color:"rgb(117,117,117)"}}>Amenities at the venue</li>
                                    {/* <div ref="Amenities2" className="ulDiv ulDivOpen"> <Amenities /></div> */}
                                    <li ref="li6" onClick={() => this.programOpen("li6",this.refs.Weather, this.refs.Weather2)}>Weather conditions</li>
                                    {/* <div ref="Weather2" className="ulDiv"> <Weather /></div> */}
                                    <li style={{display:"none"}} ref="li7" onClick={() => this.programOpen("li7",this.refs.Entertainments, this.refs.Entertainments2)}>Entertainments</li>
                                    {/* <div ref="Entertainments2" className="ulDiv"> <Entertainments /></div> */}
                                    <li ref="li8" onClick={() => this.programOpen("li8",this.refs.LocalRules, this.refs.LocalRules2)}>Local rules</li>
                                    {/* <div ref="LocalRules2" className="ulDiv"> <LocalRules /></div> */}
                                </ul>
                                {/*<div className="wb-buttons-block">*/}
                                {/*    <div>*/}
                                {/*        <button*/}
                                {/*            className="wb-knowMobileButton"*/}
                                {/*        >*/}
                                {/*            Info brochure for Participants*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <button*/}
                                {/*            className="wb-knowMobileButton"*/}
                                {/*        >*/}
                                {/*            Info brochure for Visitors*/}
                                {/*        </button>*/}
                                {/*    </div>*/}

                                {/*</div>*/}
                                <div className="mobi_meue_trp_right"/>
                            </div>
                            <div className="wb-knowMobileButtons">
                                <div className="wb-knowMobileButtons-card">
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                    >
                                        <button
                                            className="wb-knowMobileButton"
                                            ref="li1"
                                            style={{background: "#2F80ED", color: "rgb(255,255,255)"}}
                                            onClick={() => this.programOpen("li1",this.refs.Amenities, this.refs.Amenities2)}
                                        >
                                            Amenities at the venue
                                        </button>
                                    </Link>
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                    >
                                        <button
                                            className="wb-knowMobileButton"
                                            ref="li2"
                                            onClick={() => this.programOpen("li2",this.refs.Weather, this.refs.Weather2)}
                                        >
                                            Weather conditions
                                        </button>
                                    </Link>
                                </div>
                                <div className="wb-knowMobileButtons-card">
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                        style={{display:"none !important"}}
                                    >
                                        <button
                                            ref="li3"
                                            onClick={() => this.programOpen("li3",this.refs.Entertainments, this.refs.Entertainments2)}
                                            className="wb-knowMobileButton"
                                            style={{display:"none"}}
                                        >
                                            Entertainments
                                        </button>
                                    </Link>
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                    >
                                        <button
                                            className="wb-knowMobileButton"
                                            ref="li4"
                                            onClick={() => this.programOpen("li4",this.refs.LocalRules, this.refs.LocalRules2)}
                                        >
                                            Local rules
                                        </button>
                                    </Link>
                                </div>
                                {/*<div className="wb-knowMobileButtons-card">*/}
                                {/*    <a target="_blank" rel="noopener noreferrer" className={`passiveBtn wb-mobile-info-button`}>Info brochure for Participants</a>*/}
                                {/*    <a target="_blank" rel="noopener noreferrer" className={`passiveBtn wb-mobile-info-button`}>Info brochure for Visitors</a>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className="wb-desktopButtons">*/}
                            {/*    <a target="_blank" rel="noopener noreferrer" className="passiveBtn">Info brochure for Participants</a>*/}
                            {/*    <a target="_blank" rel="noopener noreferrer" className="passiveBtn">Info brochure for Visitors</a>*/}
                            {/*</div>*/}
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
import React, {useEffect, useState} from 'react';

import img1 from "./img/disignIcon/know/credo5.png"
import img2 from "./img/disignIcon/know/credo6.png"
import img3 from "./img/disignIcon/know/credo7.png"
import img4 from "./img/disignIcon/know/credo8.png"
import arrow from "./img/disignIcon/icon.png"

const data = [
    {
        front: {
            img: img1,
            text: "Connect"
        },
        back: {
            title: "Connect",
            description: ["Access to VCs & Angel Investors","Networking with Professionals","Partnership Opportunities","Recruiting Perspectives"]
        },
        color:"#42C8F1"

    },
    {
        front: {
            img: img2,
            text: "Learn"
        },
        back: {
            title: "Learn",
            description: ["Micro Acceleration Program","One-to-one Mentorship and Guidance","Expert-Led Campfire Talks","Workshops & Panel Discussions"]
        },
        color:"#1CAAE2"

    },
    {
        front: {
            img: img3,
            text: "Win"
        },
        back: {
            title: "Win",
            description: ["Competitions with Prizes","Exposure and Visibility","Investment Opportunities","Valuable Connections"]
        },
        color:"#B92B4E"

    },
    {
        front: {
            img: img4,
            text: "Have Fun"
        },
        back: {
            title: "Have Fun",
            description: ["Tent Life Unique Experience","Team-Building Adventures","Water Sports Activities","Live Music and Night Parties"]
        },
        color:"#F68C36"

    },
];

function Credo() {

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        handleWindowResize()
    })



    const nextOrPrev = (isNext) => {
        if(isNext) {
            setActiveCardIndex(activeCardIndex + 1)
        } else {
            setActiveCardIndex(activeCardIndex - 1)
        }
    }
    return(
        <div className="credo">
        <h2>Why Participate as a Startup</h2>
        <p>{width > 1024 ? "— SSS provides the following key benefits —" : "SSS provides the following key benefits"}</p>
        <div className="credoItem">
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div><img src={require('./img/disignIcon/know/credo5.png')} alt="opportunities" /></div>
                        <h4 style={{color: "#42C8F1"}}>CONNECT</h4>
                    </div>
                    <div className="back">
                        <h4 style={{color: "#42C8F1"}}>Connect</h4>

                            <ul>
                                <li>Access to VCs & Angel Investors</li>
                                <li>Networking with Professionals</li>
                                <li>Partnership Opportunities</li>
                                <li>Recruiting Perspectives</li>
                            </ul>

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div><img src={require('./img/disignIcon/know/credo6.png')} alt="opportunities" /></div>
                        <h4 style={{color: "#1CAAE2"}}>Learn</h4>
                    </div>
                    <div className="back">
                        <h4 style={{color: "#1CAAE2"}}>Learn</h4>
                            <ul>
                                <li>Micro Acceleration Program</li>
                                <li>One-to-one Mentorship and Guidance</li>
                                <li>Expert-Led Campfire Talks</li>
                                <li>Workshops & Panel Discussions</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div><img src={require('./img/disignIcon/know/credo7.png')} alt="opportunities" /></div>
                        <h4 style={{color: "#B92B4E"}}>Win</h4>
                    </div>
                    <div className="back">
                        <h4 style={{color: "#B92B4E"}}>Win</h4>
                            <ul>
                                <li>Competitions with Prizes</li>
                                <li>Exposure and Visibility</li>
                                <li>Investment Opportunities</li>
                                <li>Valuable Connections</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div><img src={require('./img/disignIcon/know/credo8.png')} alt="opportunities" /></div>
                        <h4 style={{color: "#F68C36"}}>Have Fun</h4>
                    </div>
                    <div className="back">
                        <h4 style={{color: "#F68C36"}}>Have Fun</h4>
                            <ul>
                                <li>Tent Life Unique Experience</li>
                                <li>Team-Building Adventures</li>
                                <li>Water Sports Activities</li>
                                <li>Live Music and Night Parties</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="wb-mobileVersion-credo-block">
            <div className="wb-mobileVersion">
                <div className="wb-cardBlock">
                    <div
                        className={`arrowBlock ${activeCardIndex === 0 ? "displayNone" : ""}`}
                        onClick={() => nextOrPrev(false)}
                    >
                        <img src={arrow} alt="Arrow"/>
                    </div>
                    <div className="wb-container">
                        <div className="wb-flipper" style={{borderColor:data[activeCardIndex].color}}>
                            <div className="wb-front">
                                <p
                                    style={{
                                        color: data[activeCardIndex].color,
                                        fontWeight: "700",
                                        fontSize: "26px !important",
                                        lineHeight: "24px !important",
                                        textAlign: "center",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {data[activeCardIndex].front.text}
                                </p>
                                <div className="wb-header">
                                    <img src={data[activeCardIndex].front.img} alt="Logo"/>
                                </div>

                                <ul>
                                    {data[activeCardIndex].back.description.map((li) => {
                                        return (
                                            <li>{li}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`arrowBlock ${activeCardIndex === data.length-1 ? "displayNone" : ""}`}
                        onClick={() => nextOrPrev(true)}
                    >
                        <img src={arrow} alt="Arrow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Credo;
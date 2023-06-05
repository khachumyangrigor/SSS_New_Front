import React, { useState } from 'react';
import img1 from "./images/1.svg"
import img2 from "./images/2.svg"
import img3 from "./images/3.svg"
import img4 from "./images/4.svg"
import img5 from "./images/5.svg"
import img6 from "./images/6.svg"
import arrow from "./images/icon.png"
import "./Participate.css"

const data = [
    {
        front: {
            img: img1,
            text: "Contacts and Networking"
        },
        back: {
            title: "Contacts and Networking",
            description: "During the 7 days of the summit you have access to over 100 top speakers and mentors, 1000 participants, 10000 guests from over 50 countries. "
        }

    },
    {
        front: {
            img: img2,
            text: "Funding"
        },
        back: {
            title: "Funding",
            description: "All the pitching battles are run under the judgement of angel & institutional investors. On top of that, you will have access to specially design SSS Investment fund."
        }

    },
    {
        front: {
            img: img3,
            text: "New Skills and Knowledge"
        },
        back: {
            title: "New Skills and Knowledge",
            description: "Be the part of the world`s leading micro-acceleration program and meet over 100 top mentors and serial entrepreneurs from all over the globe"
        }

    },
    {
        front: {
            img: img4,
            text: "Live market experience"
        },
        back: {
            title: "Live market experience",
            description: "Summit attracts representatives of over 200 leading local and regional businesses and over 10000 guests. Hence, you have a chance to reach out to B2B and B2C market"
        }

    },
    {
        front: {
            img: img5,
            text: "Additional Visibility"
        },
        back: {
            title: "Additional Visibility",
            description: "Summits are typically under the loop pof local and regional media. Hence, you always have a chance to get into the media streams "
        }

    },
    {
        front: {
            img: img6,
            text: "Recruitment"
        },
        back: {
            title: "Recruitment",
            description: "Get access to thousands of talented and high-profile professionals, who can join your team."
        }

    },
];

function Participate() {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const [toggled, setToggled] = useState(false)

    const nextOrPrev = (isNext) => {
        if(isNext) {
            setActiveCardIndex(activeCardIndex + 1)
        } else {
            setActiveCardIndex(activeCardIndex - 1)
        }
        setToggled(false)
    }

    return (
        <div id="participate" className="wb-participateBlock">
            <div className="wb-participateTitle">
                <h2>Why to Participate as a Startup</h2>
            </div>
            <div className="wb-participateItemsBlock">
                {data.map((block) => {
                    return (
                        <div className="wb-container">
                            <div className="wb-flipper">
                                <div className="wb-front">
                                    <div className="wb-header">
                                        <img src={block.front.img} alt="Logo"/>
                                    </div>
                                    <p>{block.front.text}</p>
                                </div>
                                <div className="wb-back">
                                    <h3>{block.back.title}</h3>
                                    <p>
                                        {block.back.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="wb-mobileVersion">
                <div className="wb-cardBlock">
                    <div
                        className={`arrowBlock ${activeCardIndex === 0 ? "displayNone" : ""}`}
                        onClick={() => nextOrPrev(false)}
                    >
                        <img src={arrow} alt="Arrow"/>
                    </div>
                    <div
                        className="wb-container"
                        onClick={() => setToggled(!toggled)}
                    >
                        <div className={`wb-flipper ${toggled ? "wb-flipper-rotate" : ""}`}>
                            <div className="wb-front">
                                <div className="wb-header">
                                    <img src={data[activeCardIndex].front.img} alt="Logo"/>
                                </div>
                                <p>{data[activeCardIndex].front.text}</p>
                            </div>
                            <div className="wb-back">
                                <h3>{data[activeCardIndex].back.title}</h3>
                                <p>
                                    {data[activeCardIndex].back.description}
                                </p>
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
            <div className="wb-applyButtonBlock">
                <a href="https://www.f6s.com/sevan-startup-summit-2023/apply" target="_blank" rel="noopener noreferrer">
                    <button>Apply as a Startup</button>
                </a>
                <p>*The distribution into Starter and Booster is done by the SSS steering committee</p>
            </div>
        </div>
    );
}

export default Participate;
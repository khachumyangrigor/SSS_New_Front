import React, {useState} from 'react';

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
            description: "A fully immersive environment, where trust is built through collaboration between people from different countries, cultures and backgrounds, in an informal setting guided by mentors and business experts."
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
            description: "An atmosphere, where experienced entrepreneurs share their knowledge, experience, resources and aspirations - all in exchange for inspiration from the unconstrained thinking of starting entrepreneurs."
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
            description: "Opportunities for startups to constantly score by participating in the startup battles, acquiring invaluable connections, receiving on-site and off-site investment opportunities - and all that simply by being an active participant of the event."
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
            description: "An unforgettable experience full of fun activities and amazing moments! After a very intense event day, all participants have to do is relax, cheer up and refuel their energy. SSS is all about “working hard, partying even harder”."
        },
        color:"#F68C36"

    },
];

function Credo() {
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
    return(
        <div className="credo">
        <h2>Our Credo</h2>
        <p>— SSS provides the following key benefits —</p>
        <div className="credoItem">
            <div className="card">
                <div className="content">
                    <div className="front">
                        <div><img src={require('./img/disignIcon/know/credo5.png')} alt="opportunities" /></div>
                        <h4 style={{color: "#42C8F1"}}>CONNECT</h4>
                    </div>
                    <div className="back">
                        <h4 style={{color: "#42C8F1"}}>Connect</h4>
                        <p>
                            A fully immersive environment, where trust is built through collaboration between people from different countries, cultures and backgrounds, in an informal setting guided by mentors and business experts.
                        </p>
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
                        <p>
                            An atmosphere, where experienced entrepreneurs share their knowledge, experience, resources and aspirations - all in exchange for inspiration from the unconstrained thinking of starting entrepreneurs.
                        </p>
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
                        <p>
                            Opportunities for startups to constantly score by participating in the startup battles, acquiring invaluable connections, receiving on-site and off-site investment opportunities - and all that simply by being an active participant of the event.
                        </p>
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
                        <p>
                            An unforgettable experience full of fun activities and amazing moments! After a very intense event day, all participants have to do is relax, cheer up and refuel their energy. SSS is all about “working hard, partying even harder”.
                        </p>
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
                    <div
                        className="wb-container"
                        onClick={() => setToggled(!toggled)}
                    >
                        <div className={`wb-flipper ${toggled ? "wb-flipper-rotate" : ""}`} style={{borderColor:data[activeCardIndex].color}}>
                            <div className="wb-front">
                                <div className="wb-header">
                                    <img src={data[activeCardIndex].front.img} alt="Logo"/>
                                </div>
                                <p style={{color:data[activeCardIndex].color}}>{data[activeCardIndex].front.text}</p>
                            </div>
                            <div className="wb-back">
                                <h3 style={{color:data[activeCardIndex].color}}>{data[activeCardIndex].back.title}</h3>
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
        </div>
    </div>
    )
}


export default Credo;
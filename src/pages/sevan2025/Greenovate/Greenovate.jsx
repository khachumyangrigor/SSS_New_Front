import React from 'react';
import Title from "../Components/Title/Title.jsx";
import greenovateImg from "./img/greenovate.png";
import partner1 from "./img/p-1.png"
import partner2 from "./img/p-2.png"
import partner3 from "./img/p-3.png"
import partner4 from "./img/p-4.png"
import partner5 from "./img/p-5.png"
import partner6 from "./img/p-6.png"
import partner7 from "./img/p-7.png"
import partner8 from "./img/p-9.png"
import "./Greenovate.css"

export const Greenovate = (props) => {
    return (
        <div className="wb-greenovateBlock">
            <div className="wb-contentSize">
                <Title title="Greenovate Youth Summit" date="— July 21 —"/>
                <div className="wb-greenovateContent">
                    <div className="wb-greenovateContentImageBlock">
                        <img src={greenovateImg} alt="Greenovate Youth Summit"/>
                    </div>
                    <div className="wb-greenovateContentInfoBlock">
                        <p>Greenovate Youth Summit is an international initiative founded by the Startup Armenia Scientific-Educational Foundation and Environment Group LLC, created to empower young people to actively contribute to global
                            environmental negotiations—especially as the world prepares for COP17 in Armenia.</p>
                        <p>The inaugural 1-day global youth conference features keynote addresses, plenary sessions, and panel discussions with officials, youth leaders, and global experts.</p>
                        <p>Greenovate Youth Summit aims to:</p>
                        <ul>
                            <li>Connect youth with international policymakers</li>
                            <li>Co-create solutions across all COP themes</li>
                            <li>Build momentum towards COP17 in Armenia</li>
                        </ul>
                    </div>
                </div>
                <div className="wb-greenovatePartners">
                    <div>
                        <img src={partner1} alt=""/>
                    </div>
                    <div>
                        <img src={partner2} alt=""/>
                    </div>
                    <div>
                        <img src={partner3} alt=""/>
                    </div>
                    <div className="wb-middleLinePartners">
                        <img src={partner4} alt=""/>
                    </div>
                    <div className="wb-middleLinePartners">
                        <img src={partner5} alt=""/>
                    </div>
                    <div>
                        <img src={partner6} alt=""/>
                    </div>
                    <div className="wb-mobilePartner">
                        <img src={partner8} alt=""/>
                    </div>
                    <div>
                        <img src={partner7} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Greenovate;
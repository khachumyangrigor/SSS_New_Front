import React from 'react';
import Title from "../Components/Title/Title.jsx";
import wineTechImg from "./img/wineTech.png"
import partner1 from "./img/partner1.png"
import partner2 from "./img/partner2.png"
import partner3 from "./img/partner3.png"
import partner4 from "./img/partner4.png"


import Button from "../Components/Button/Button.jsx";
import "./WineTech.css"


export const WineTech = (props) => {
    return (
        <div className="wb-wineTech">
            <div className="wb-contentSize">
                <Title title="WineTech Innovation Summit 2025" date="— July 22 —"/>
                <div className="wb-wineTechContent">
                    <div className="wb-wineTechContentImageBlock">
                        <img src={wineTechImg} alt="WineTech Innovation Summit 2025"/>
                    </div>
                    <div className="wb-wineTechContentInfoBlock">
                        <p>The WineTech Innovation Summit 2025 is a high-impact international gathering dedicated to exploring innovation, sustainability, and cultural heritage across local and global wine and brandy sectors. </p>
                        <p>The summit brings together winemakers, brandy producers, policymakers, branding experts, and technology innovators in one collaborative space aimed at shaping the future of the industry.</p>
                        <p>During the summit, keynotes, panels, and workshops will be held on topics as:</p>
                        <ul>
                            <li>Smart viticulture and automation</li>
                            <li>Consumer engagaement tech</li>
                            <li>Packaging and design</li>
                            <li>Wine data and market trends</li>
                        </ul>
                    </div>
                </div>
                <div className="wb-WineButtonBlock">
                    <Button title="Apply Now" backgroundColor="rgba(47, 128, 237, 1)" color="#fff"/>
                </div>
                <div className="wb-winePartners">
                    <img src={partner1} alt=""/>
                    <img src={partner2} alt=""/>
                    <img src={partner3} alt=""/>
                    <img src={partner4} alt=""/>
                </div>
            </div>

        </div>
    );
}

export default WineTech;
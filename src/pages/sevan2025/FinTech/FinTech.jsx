import React from 'react';
import Title from "../Components/Title/Title.jsx";
import finTechImg from "./img/finTech.png"
import "./FinTech.css"
import partner1 from "./img/p-1.png";
import partner2 from "./img/p-2.png";
import partner3 from "./img/p-3new.png";
import partner4 from "./img/p-4.png";


export const FinTech = (props) => {
    return (
        <div className="wb-finTechBlock">
            <div className="wb-contentSize">
                <Title title="FinTech Innovation Summit 2025" date="— July 24-25 —"/>
                <div className="wb-finTechContent">
                    <div className="wb-finTechContentImageBlock">
                        <img src={finTechImg} alt="FinTech Innovation Summit 2025"/>
                    </div>
                    <div className="wb-finTechContentInfoBlock">
                        <p>Organized by the Armenian Card CJSC, Central Bank of Armenia and Startup Armenia Scientific-Education Foundation the FinTech Innovation Summit at Sevan Startup Summit 2025 invites key players in fintech— industry experts, government reps, and innovative thinkers—to gather by the lake for a unique, open-air event. </p>
                        <p>This summit creates a vibrant platform for learning, collaboration, and building practical solutions to some of the biggest challenges in the fintech world. </p>
                        <p>It is the first-of-it's-kind event in Armenia to:</p>
                        <ul>
                            <li>Unite banks and other financial institutions</li>
                            <li>Bridge traditional finance with emerging tech</li>
                            <li>Spark old ideas, partnerships, and products</li>
                        </ul>
                    </div>
                </div>
                <div className="wb-finPartners">
                    <div>
                        <img src={partner1} alt=""/>
                    </div>
                    <div>
                        <img src={partner2} alt=""/>
                    </div>
                    <div>
                        <img src={partner3} alt=""/>
                    </div>
                    <div>
                        <img src={partner4} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FinTech;
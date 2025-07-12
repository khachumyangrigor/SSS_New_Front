import React from 'react';
import Title from "../Components/Title/Title.jsx";
import finTechImg from "../FinTech/img/finTech.png";
import energyImg from "./img/energy.png"
import "./Energy.css"
import partner1 from "./img/p-1.png"
import partner2 from "./img/p-2.png"
import partner3 from "./img/p-3new.png"
import partner4 from "./img/p-4.png"

export const Energy = (props) => {
    return (
        <div className="wb-energyBlock">
            <div className="wb-contentSize">
                <Title title="Energy Transition and Entrepreneurship Summit 2025" date="— July 21 —"/>
                <div className="wb-energyContent">
                    <div className="wb-energyContentImageBlock">
                        <img src={energyImg} alt="Energy Transition and Entrepreneurship Summit 2025"/>
                    </div>
                    <div className="wb-energyContentInfoBlock">
                        <p>The Energy Transition and Entrepreneurship Summit (ETES) is designed to address the urgent energy challenges and opportunities in Armenia and the broader region. </p>
                        <p>Launched in July 2024 by Shtigen Group and Startup Armenia Scientific-Educational Foundation, ETES tends to play a crucial role in fostering cross-sector dialogue, where stakeholders from government, finance, private sectors, startups, academia and international agencies can jointly identify and tackle key challenges in advancing the energy transition. </p>
                        <p>ETES 2025 aims to create a well-developed platform in Armenia on energy and innovation. Key topics include: renewables, e-mobility, market reform, and green finance. </p>
                    </div>
                </div>
                <div className="wb-energyPartners">
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

export default Energy;
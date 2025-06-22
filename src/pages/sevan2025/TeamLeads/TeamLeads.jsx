import React from 'react';
import Title from "../Components/Title/Title.jsx";
import teamLeadsImage from "./img/teamLeads.png"
import icon1 from "./img/icon1.png"
import icon2 from "./img/icon2.png"
import icon3 from "./img/icon3.png"
import "./TeamLeads.css"
import Button from "../Components/Button/Button.jsx";
export const TeamLeads = (props) => {
    return (
        <div className="wb-teamLeads">
            <div className="wb-contentSize">
                <Title title="Join as a Team Lead" />
                <div className="wb-teamLeadsContentBlock">
                    <div className="wb-teamLeadsContentImageBlock">
                        <img src={teamLeadsImage} alt="Team Leads"/>
                    </div>
                    <div className="wb-teamLeadsContentInfoBlock">
                        <p>Team leads are the main bridge between our organizational team and startup squads and are mostly engaged on the grounds activities guiding startups through an unforgettable summit experience. </p>
                        <p>As a team lead, you'll become the motivator, problem solver and community builder for your startup squad. This experience will level up your soft skills such as:</p>
                        <div className="wb-teamLeadsContentInfoIcons">
                            <div className="wb-teamLeadsContentInfoIconsLine"><img src={icon1} alt=""/> <b>Leadership</b></div>
                            <div className="wb-teamLeadsContentInfoIconsLine"><img src={icon2} alt=""/><b>Communication</b></div>

                        </div>
                        <div className="wb-teamLeadsContentInfoIconsLine">
                            <img src={icon3} alt=""/><b>Working under pressure</b>
                        </div>
                    </div>
                </div>
                <div className="wb-teamLeadsButtonBlock">
                    <Button title="Apply Here" backgroundColor="rgba(47, 128, 237, 1)" color="#fff" link="https://docs.google.com/forms/d/e/1FAIpQLSd3t6mbxnbP41sdrkPRjEKVDEp0_a_dfj8Y_qDSRDvtblswYg/viewform"/>
                </div>
            </div>
            
        </div>
    );
}

export default TeamLeads;
import React from 'react';
import Title from "../Components/Title/Title.jsx";
import talentImg from "./img/talentGeneration.png"
import eu4Image from "./img/eu4.png"
import startupImg from "./img/startup.png"
import "./TalentGeneration.css"
import Button from "../Components/Button/Button.jsx";

export const TalentGeneration = (props) => {
    return (
        <div className="wb-talentGeneration">
            <div className="wb-contentSize">
                <Title title="Talent Generation" date="— JULY 20-26 —" />
                <div className="wb-talentContentBlock">
                    <div className="wb-talentImage">
                        <img src={talentImg} alt="Talent Generation" />
                    </div>
                    <div className="wb-talentContent">
                        <p>Talent Generation is a unique educational and entrepreneurial initiative organized within the framework of Sevan Startup Summit 2025. </p>
                        <p>Designed for university students across Armenia, the program offers a hands-on, immersive learning experience through interactive educational sessions, mentorship, networking, and real-world challenges. </p>
                        <p>Its goal is to attract young and bright minds who are passionate about entrepreneurship but still don't have an idea to join a tailored educational program that will help them shape their first startups.</p>
                        <p>This is the only educational program within the framework of Sevan Startup Summit 2025 that targets individuals and doens't require pre-formed teams. </p>
                    </div>
                </div>
                <div className="wb-talentButtonBlock">
                    <p>Fill the applications form below before June 25.</p>
                    <Button title="Apply to Participate" backgroundColor="rgba(47, 128, 237, 1)" color="#fff" link="https://docs.google.com/forms/d/e/1FAIpQLScSvomSEHCkPRrzZTWwiia3CWuovgMmooZl1PMQ77axfJ7lyw/viewform"/>
                </div>
                <div className="wb-talentPartners">
                    <h5>Powered by:</h5>
                    <div className="wb-talentPartnersImageBlock">
                        <img src={eu4Image} alt="EU4 innovation EAST"/>
                        <img className="wb-startupArmeniaImg" src={startupImg} alt="Statup Armenia"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TalentGeneration;
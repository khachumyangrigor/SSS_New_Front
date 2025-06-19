import React from 'react';
import Title from "../Components/Title/Title.jsx";
import hackhathonImg from "./img/hackhathon.png"
import firecodeImage from "./img/firecode.png"
import "./FirecodeMarathon.css"
import Button from "../Components/Button/Button.jsx";

export const  FirecodeMarathon = (props) => {
    return (
        <div className="wb-firecodeMarathon">
            <div className="wb-contentSize">
                <Title title="Hackathon at Sevan25" date="— July 23-26 —"/>
                <div className="wb-hackathonBlock">
                    <div className="wb-hackathonImageBlock">
                        <img src={hackhathonImg} alt="Hackathon at Sevan25"/>
                    </div>
                    <div className="wb-hackathonInfoBlock">
                        <p><b>FireCode Marathon</b> is the official <b>hackathon</b> of Sevan Startup Summit 2025 — where bold ideas, sleepless nights, and teamwork meet lakeside sunsets and real innovation. </p>
                        <b>Join us in #CodeOnFire Sevan25 to:</b>
                        <ul>
                            <li>Do non-stop coding, building, and competing</li>
                            <li>Pitch your prototype and win prizes</li>
                            <li>Collaborate with top devs from Armenia and abroad</li>
                        </ul>
                        <div className="wb-hackathonStats">
                            <div className="wb-hackathonStatItem">
                                <b>100+</b>
                                <span>Developers</span>
                            </div>
                            <div className="wb-hackathonStatItem">
                                <b>20+</b>
                                <span>New Solutions</span>
                            </div>
                            <div className="wb-hackathonStatItem">
                                <b>US $10K</b>
                                <span>Prize Fund</span>
                            </div>
                        </div>
                    </div>

                </div>
                <Title title="Structure of FireCode Marathon" />
                <div className="wb-firecodeMarathonContentBlock">
                    <div className="wb-firecodeMarathonContent">
                        <p>FireCode Marathon features two core components: Hackathon Tracks and Developer Experience, with Demo Day as the final highlight.</p>
                        <p>Hackathon is an on-site development challenge featuring these 4 key tracks: Software Engineering, Cyber Security, AI/ML, Blockchain/ Web3</p>
                        <div>
                            <h3>Developer experience includes:</h3>
                            <ul>
                                <li>Workshops and bootcamps</li>
                                <li>Evening talks and AMA panels</li>
                                <li>Mentorship sessions</li>
                                <li>Demo Day and pitches</li>
                                <li>Tech partner activations</li>
                                <li>Prizes and exposure</li>
                            </ul>
                        </div>
                    </div>
                    <div className="wb-firecodeMarathonImageBlock">
                        <img src={firecodeImage} alt="Firecode"/>
                    </div>
                </div>
                <div className="wb-firecodeButtonBlock">
                    <Button title="Apply to Participate" backgroundColor="rgba(47, 128, 237, 1)" color="#fff"/>
                </div>

            </div>

        </div>
    );
}

export default FirecodeMarathon;
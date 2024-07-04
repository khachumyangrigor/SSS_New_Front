import React from 'react';
import "./Agritech.css"
import agritechImg from "./img/agritech.png"
import a_1 from "./img/a-1.png"
import a_2 from "./img/a-2.png"
import a_3 from "./img/a-3.png"
import a_4 from "./img/a-4.png"
import a_5 from "./img/a-5.png"
import a_6 from "./img/a-6.png"
function Agritech(props) {
    return (
        <div className="agritech-block">
            <div className="agritech-content">

                <div className="agritech-title">
                    <h2>Sevan Agritech Summit</h2>
                    <p>— JULY 24-27 —</p>
                </div>

                <div className="agritech-mainContent">
                    <div className="agritech-imageBlock">
                        <div className="agritech-image">
                            <img src={agritechImg} alt="Sevan Agritech Summit"/>
                        </div>
                        <div className="agritechStats">
                            <div>
                                <b>80+</b>
                                <span>PROJECTS</span>
                            </div>
                            <div>
                                <b>50+</b>
                                <span>EXPERTS</span>
                            </div>
                            <div>
                                <b>$10,000+</b>
                                <span>PRIZE FUND</span>
                            </div>
                        </div>
                    </div>

                    <div className="agritech-info">
                        <p>For the first time, within the framework of Sevan Startup Summit 2024, we will have a separate event dedicated to AgriTech industry: #SevanAgriTechSummit will be held from July 24-27.</p>
                        <p>This regional event will bring together AgriTech startups, agriculturists and other interested people, by providing them an exceptional platform to explore emerging trends and best practices, forge strategic partnerships, and develop tailored solutions to drive innovation and excellence.</p>
                        <p>
                            <b>Three-day high-level conference</b>
                            The conference and Agrithon will cover a range of critical topics including Digital Farming Solutions, Advanced Digital Technologies in Agriculture, Advanced Agrobiotechnologies and more.
                        </p>
                        <p>
                            <b>Agrithon Startup Competition</b>
                            The Agrithon is an exciting startup competition where agri-tech enthusiasts will have the opportunity to showcase groundbreaking solutions, compete for prestigious prizes, and gain industry recognition.
                        </p>
                        <p>
                            <b>Awards Ceremony</b>
                            The Awards Ceremony will celebrate excellence, honoring leaders at the forefront of agricultural innovation and sustainability.
                        </p>
                    </div>

                </div>

                <div className="agritech-buttonsBlock">
                    <h6>Fill the applications form below before July 10th.</h6>
                    <div className="agritech-buttons">
                        <button>Apply Now</button>
                        <button>Agenda</button>
                    </div>
                </div>



            </div>
            <div className="agritech-partners">
                <div>
                    <img src={a_1} alt="Partner"/>
                </div>
                <div>
                    <img src={a_2} alt="Partner"/>
                </div>
                <div>
                    <img src={a_3} alt="Partner"/>
                </div>
                <div>
                    <img src={a_4} alt="Partner"/>
                </div>
                <div>
                    <img src={a_5} alt="Partner"/>
                </div>
                <div>
                    <img src={a_6} alt="Partner"/>
                </div>
            </div>
        </div>
    );
}

export default Agritech;
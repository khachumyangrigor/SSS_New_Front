import React, {useEffect, useState} from "react";
import "./Agritech.css";
import agritechImg from "./img/agritech2.png";
import agritechSecondImg from "./img/secondImage.png";
import a_2 from "./img/a-2.png";
import a_3 from "./img/sigma.png";
import a_4 from "./img/aida.png";
import a_5 from "./img/a-5.png";
import a_6 from "./img/a-6.png";
import acbaImg from "./img/acba.png";
import partnerImg7 from "./img/7.png";
import partnerImg8 from "./img/8.png";
import partnerImg9 from "./img/9.png";
import Popup from "../Popup/Popup.jsx";
import {buyTickets} from "../Navbar/NavButtons.jsx";
import Title from "../Components/Title/Title.jsx";
import Button from "../Components/Button/Button.jsx";
export const Agritech = (props) => {
  const [popupStatus, setPopupStatus] = useState(false)
  useEffect(() => {
    if(popupStatus){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  },[popupStatus])
  return (
    <div className="agritech-block">
      <div className="wb-contentSize">
        <div className="agritech-content">
          <Title title="Sevan Agritech Summit" date="— July 23-26 —" />

          <div className="agritech-mainContent">
            <div className="agritech-imageBlock">
              <div className="agritech-image">
                <img src={agritechImg} alt="Sevan Agritech Summit" />
              </div>
              <div className="agritechStats">
                <div>
                  <b>500+</b>
                  <span>PARTICIPANTS</span>
                </div>
                <div>
                  <b>25+</b>
                  <span>AGRISOLUTIONS</span>
                </div>
                {/*<div>*/}
                {/*  <b>$10,000+</b>*/}
                {/*  <span>PRIZE FUND</span>*/}
                {/*</div>*/}
              </div>
            </div>

            <div className="agritech-info">
              <p>
                Within the framework of Sevan Startup Summit 2025, Sevan AgriTech Summit will bring together regional startups, agricultourists and other interested people, by providing them an exceptional platform to explore emerging trends and best practices, forge strategic partnerships, and develop tailored solutions to drive innovation and excellence.
              </p>

              <p>

                <b>Three-day high-level conference</b><br/>
                The conference will focus on Agritech, GreenTech, and Circular Bio-economy innovations, featuring 5 thematic sessions. Key agritech advancements will be covered while having:
              </p>

              <ul>
                <li>International keynote speakers</li>
                <li>Fireside chats</li>
                <li>Panel discussions</li>
                <li>Case studies and success stories</li>
                <li>Workshops and masterclasses</li>
                <li>High-level networking</li>
              </ul>

            </div>
          </div>

          {/*<div className="agritech-buttonsBlock">*/}
          {/*  /!*<h6>Fill the applications form below before July 15th.</h6>*!/*/}
          {/*  <div className="agritech-buttons">*/}
          {/*    <a*/}
          {/*        // href="https://www.f6s.com/sevan-agritech-summit-2024"*/}
          {/*        onClick={() => setPopupStatus(true)}*/}

          {/*    >*/}
          {/*      /!*<button>Apply Now</button>*!/*/}
          {/*      <Button title="Apply Now" color="#fff" backgroundColor="rgba(47, 128, 237, 1)"/>*/}
          {/*    </a>*/}
          {/*    <a*/}
          {/*        href="#"*/}
          {/*        onClick={(e) => {*/}
          {/*          e.preventDefault();*/}
          {/*        }}*/}
          {/*    >*/}
          {/*      /!*<button className="passiveBtn">Agenda</button>*!/*/}
          {/*      <Button title="Agenda" color="rgba(47, 128, 237, 1)" backgroundColor="#fff"/>*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="agritech-secondContentBlock">
          <Title title="Agrithon Competition"/>
          <div className="agritech-secondContent">
            <div className="agritech-secondContentInfo">
              <p>Agrithon is a regional startup competition bringing together innovators, especially from Armenia, Georgia, India, and Iran, as well as participants from around the world.</p>
              <p>Teams tackle real agricultural challenges identified in collaboration with farmers while participating in:</p>
              <ul>
                <li>Pre-summit incubation and mentorship</li>
                <li>Intensive acceleration program during the summit</li>
                <li>Final pitch competition</li>
                <li>Awards for winning solutions</li>
              </ul>
            </div>
            <div className="agritechSecondContentImageBlock">
              <img src={agritechSecondImg} alt="Sevan Agritech Summit" />
            </div>
          </div>
        </div>

        <div className="agritech-partners">
          <div>
            <img src={a_2} alt="Partner" />
          </div>
          <div>
            <img src={a_3} alt="Partner" />
          </div>
          <div>
            <img src={a_6} alt="Partner" />
          </div>
          <div>
            <img src={a_4} alt="Partner" />
          </div>
          <div>
            <img src={a_5} alt="Partner" />
          </div>
          <div>
            <img src={acbaImg} alt="Partner" />
          </div>

          <div>
            <img src={partnerImg7} alt="Partner" />
          </div>
          <div>
            <img src={partnerImg8} alt="Partner" />
          </div>
          <div>
            <img src={partnerImg9} alt="Partner" />
          </div>
        </div>
        <Popup mobile={ false} infoMode={null} status={popupStatus} buttons={buyTickets} setPopupStatus={setPopupStatus} />
      </div>
    </div>
  );
}

export default Agritech;

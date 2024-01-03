import React, {useEffect, useState} from "react";
import img1 from "./images/1.svg";
import img2 from "./images/2.svg";
import img3 from "./images/3.svg";
import img4 from "./images/4.svg";
import arrow from "./images/arrow.svg";
import "./Roadmap.css";
import Popup from "../Popup/Popup.jsx"
import {buyTickets} from "../Navbar/NavButtons.jsx"

const data = [
  {
    img: img1,
    title: "— Application —",
    description:
      "In order to apply, you will need to fill in our application form.  Make sure to provide accurate information: it helps us to provide you with the best experience.",
  },
  {
    img: img2,
    title: "— SELECTION —",
    description:
      "Steering commitee will assess and evaluate your startup application. If necessary you will be required to send additional details.",
  },
  {
    img: img3,
    title: "— PARTICIPATION —",
    description:
      "If your startup gets selected, you will be invited to participate in the event and get involved in the micro-acceleration program.*",
  },
  {
    img: img4,
    title: "— COMPETITION —",
    description:
      "At the end of the event, you will get a chance to pitch your startup in front of a panel of judges and compete for a prize fund. ",
  },
];

function Roadmap() {
  const [width, setWidth] = useState(0)
  const [popupStatus, setPopupStatus] = useState(false)
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();

  }, []);
  useEffect(() => {
    if(popupStatus){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  },[popupStatus])

  return (
      <>
        <div className="wb-applyBlock wb-roadmapBlock">
          <div className="wb-applyTitle">
            <h2>Roadmap for Startups</h2>
          </div>
          <div className="wb-applyItemsBlock">
            {data.map((block, i) => {
              return (
                  <div key={`apply-${i}`} className="wb-itemWithArrowBlock">
                    <div className="wb-itemBlock">
                      <div className="wb-imageBlock">
                        <img src={block.img} alt="Icon" />
                      </div>
                      <div className="wb-contentBlock">
                        <div className="wb-titleBlock">
                          <h3>{block.title}</h3>
                        </div>
                        <div className="wb-description">
                          <p>{block.description}</p>
                        </div>
                      </div>
                    </div>
                    {i !== data.length - 1 && (
                        <div className="wb-arrowBlock">
                          <img src={arrow} alt="" />
                        </div>
                    )}
                  </div>
              );
            })}
          </div>
          <div className="wb-applyButtonBlock">
            <a
                href="https://www.f6s.com/sssuae24/apply"
                target="_blank"
                // onClick={() => setPopupStatus(true)}
                rel="noopener noreferrer">
              <button>Apply as a Startup</button>
            </a>
          </div>
          <div className="roadmap-msg">
            <p>*If your startup passes the selection, 2 representatives get a free participation voucher.<br/>
              Free participation does NOT include air tickets and other travel costs.</p>
          </div>
        </div>
         <Popup mobile={width < 1024 ? true : false} infoMode={null} status={popupStatus} buttons={buyTickets} setPopupStatus={setPopupStatus} />
      </>

  );
}

export default Roadmap;

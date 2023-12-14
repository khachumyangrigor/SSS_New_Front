import React from "react";
import Popup from "../Popup/Popup.jsx"
import {useState,useEffect} from "react"

 const buttons = [
  {
    link: "https://www.f6s.com/sevan-startup-summit-2023/apply",
    title: "\u00A0\u00A0Apply as a Startup\u00A0\u00A0",
  },
  {
    link: "https://forms.gle/VSG5oNLhg2nr8zhr9",
    title: "Become a Volunteer",
  },
];

export const buyTickets = [
  {
    link: "https://www.pay.seasidestartupsummit.com/visitor/",
    title: "Buy Tickets",
  },
  {
    link: "https://telcellwallet.page.link/Sevan-Startup-Summit-2023",
    title: "Buy Tickets",
  },
];//


function NavButtons({isSaleOpen}) {


  const [popupStatus, setPopupStatus] = useState(false)
    const [width, setWidth] = useState(0)
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
          document.body.style.overflowY = "scroll";
      }
  },[popupStatus])

  return (
      <>
        <div className="nav-buttons">
          {isSaleOpen ? (
              <>
                  <a
                      key={`nav-button-buy-tickets`}
                      // href={width < 1024 ? buyTickets[1].link : null}
                      href={null}
                      target="_blank"
                      // onClick={width < 1024 ? null : () => setPopupStatus(true)}
                      onClick={ () => {
                          console.log(width)
                          setPopupStatus(true)}
                      }
                      rel="noopener noreferrer"
                  >
                      {buyTickets[1].title}
                  </a>
                  <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://pigeonhole.at/SSS23"}
                  >
                      Agenda
                  </a>
              </>

          ) : (
              buttons.map((button, index) => (
                  <a
                      key={`nav-button-${index}`}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    {button.title}
                  </a>
              ))
          )}
        </div>
          {
              popupStatus &&
              <Popup infoMode={width < 1024  ? true : false } width={width} status={popupStatus} setPopupStatus={setPopupStatus} buttons={buyTickets} />
          }

      </>

  );
}

export default NavButtons;
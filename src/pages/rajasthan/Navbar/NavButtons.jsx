import React from "react";

const buttons = [
  {
    link: "https://www.f6s.com/rajasthan-startup-summit-2026/apply",
    title: "Apply as a Startup",
  },
  // {
  //   link: "#",
  //   title: "Buy Ticket",
  //   className: "transparent",
  // },
];

export const buyTickets = [
  {
    link: "https://www.pay.seasidestartupsummit.com/visitor/",
    title: "Buy Tickets",
  },
  {
    link: "https://mootq.com/events/sss24",
    title: "Buy Tickets",
  },
]; //

function NavButtons({ isSaleOpen,openPopup }) {
  function handleRedirection(link) {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="nav-buttons">
      {!isSaleOpen ? (
          <>
            <button
                onClick={() => handleRedirection("https://mootq.com/events/sss24")}
            >
              Buy Tickets
            </button>
            <button
                className="wb-sevan2024-agendaBtn"
                onClick={() => handleRedirection("https://seasidestartupsummit.com/pdf/sevan_24_agenda.pdf")}
            >
              Agenda
            </button>
          </>

      ) : (
        buttons.map((button, index) => (
          <a
              // className={button.className === "transparent" ? "wb-buttonTransparent" : null}
              key={`nav-button-${index}`}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if(button.className === "transparent") {
                  e.preventDefault();
                  openPopup();
                }
              }}
          >
            {button.title}
          </a>
        ))
      )}
    </div>
  );
}

export default NavButtons;

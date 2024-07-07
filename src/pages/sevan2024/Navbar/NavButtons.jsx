import React from "react";

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
    link: "https://mootq.com/events/sss24",
    title: "Buy Tickets",
  },
]; //

function NavButtons({ isSaleOpen }) {
  function handleRedirection(link) {
    window.open(
      link,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="nav-buttons">
      {isSaleOpen ? (
          <>
            <button
                onClick={() => handleRedirection("https://mootq.com/events/sss24")}
            >
              Buy Tickets
            </button>
            <button
                className="wb-sevan2024-agendaBtn"
                onClick={() => handleRedirection("http://seasidestartupsummit.com/pdf/sevan_24_agenda.pdf")}
            >
              Agenda
            </button>
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
  );
}

export default NavButtons;

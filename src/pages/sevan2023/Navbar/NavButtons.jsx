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

function NavButtons() {
  return (
    <div className="nav-buttons">
      {buttons.map((button, index) => (
        <a
          key={`nav-button-${index}`}
          href={button.link}
          target="_blank"
          rel="noopener noreferrer">
          {button.title}
        </a>
      ))}
    </div>
  );
}

export default NavButtons;

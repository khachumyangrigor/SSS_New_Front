import React from "react";
import termsLogo from "./img/termsLogo.png";
import termsDesktopImage from "./img/termsMobileImg.png";
import "./TermsComponent.css";
import DownloadButton from "./DownloadButton.jsx";
import CardLogos from "./img/CardLogos.jsx";

function TermsComponent({ data }) {
  return (
    <div className="wb-termsBlock">
      <img
        className="wb-termsMobileImage"
        src={termsDesktopImage}
        alt="Sevan Startup Summit"
      />
      <div className="wb-termsLeft">
        <img
          className="wb-termsDesktopLogo"
          src={termsLogo}
          alt="Sevan Startup Summit"
        />
        <div>
          <h2>{data.title}</h2>
          <DownloadButton url={data.downloadLink} position={"center"} />
        </div>
        <div className="wb-termsContact">
          <span>3A Baghramyan Street, </span>
          <span>Yerevan, Armenia, 0019</span>
          <span>+374 98 80 20 28</span>
          <span>info@sss.am</span>
        </div>
      </div>
      <div className="wb-termsContent">
        <div className="wb-termsMainContent">
          <div className="wb-termsFirstContent">
            <ul>
              {data.firstContent.map((term) => {
                if (term.hasOwnProperty("bold")) {
                  return (
                    <li key={term.id}>
                      <b>{term.bold}</b>
                      <p>{term.content}</p>
                    </li>
                  );
                } else {
                  return (
                    <li key={term.id}>
                      <p>{term.content}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="wb-termsSecondContent">
            <ul className="wb-termsSecondContentMainList">
              {data.secondContent.map((term) => {
                if (term.hasOwnProperty("list")) {
                  return (
                    <li key={term.id}>
                      <b>{term.bold}</b>
                      {term.list.map((list) => {
                        return (
                          <p className="wb-termsSecondContentList">{list}</p>
                        );
                      })}
                    </li>
                  );
                } else if (term.hasOwnProperty("bold")) {
                  return (
                    <li key={term.id}>
                      <b>{term.bold}</b>
                      <p>{term.content}</p>
                    </li>
                  );
                } else {
                  return (
                    <li key={term.id}>
                      <p>{term.content}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <CardLogos />
        <DownloadButton url={data.downloadLink} />
        <div className="mobileFooterContact">
          <span>3A Baghramyan Street, Yerevan, Armenia, 0019</span>
          <span>+374 98 80 20 28</span>
          <span>info@sss.am</span>
        </div>
      </div>
    </div>
  );
}

export default TermsComponent;

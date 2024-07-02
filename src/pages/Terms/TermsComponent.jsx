import React from 'react';
import termsLogo from "./img/termsLogo.png"
import termsDesktopImage from "./img/termsMobileImg.png"
import "./TermsComponent.css"

function TermsComponent({data}) {
    return (
        <div className="wb-termsBlock">
            <img className="wb-termsMobileImage" src={termsDesktopImage} alt="Sevan Startup Summit"/>
            <div className="wb-termsLeft">
                <img className="wb-termsDesktopLogo" src={termsLogo} alt="Sevan Startup Summit"/>
                <h2>{data.title}</h2>
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
                                if(term.hasOwnProperty("bold")){
                                    return (
                                        <li key={term.id}>
                                            <b>{term.bold}</b>
                                            <p>{term.content}</p>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={term.id}>
                                            <p>{term.content}</p>
                                        </li>
                                    )
                                }
                            })}

                        </ul>
                    </div>
                    <div className="wb-termsSecondContent">
                        <ul>

                            {data.secondContent.map((term) => {
                                if(term.hasOwnProperty("bold")){
                                    return (
                                        <li key={term.id}>
                                            <b>{term.bold}</b>
                                            <p>{term.content}</p>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={term.id}>
                                            <p>{term.content}</p>
                                        </li>
                                    )
                                }
                            })}

                        </ul>
                    </div>

                </div>
                <div className="wb-termsDownloadBtn">
                    <a href={data.downloadLink} target="_blank">
                        <button>Download</button>
                    </a>

                </div>
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
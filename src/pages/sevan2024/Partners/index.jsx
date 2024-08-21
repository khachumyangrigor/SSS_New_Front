import React from "react";
import img1_2 from "./images/1-2.png";
import sevan24_2 from "./images/sevan24-2.png";
import sevan24_3 from "./images/sevan24-3.png";
import sevan24_4 from "./images/sevan24-4.png";
import sevan24_5 from "./images/sevan24-5.png";
import "./Partners.css";


const partnersList = [
    {
        "name": "General Partner",
        "url": "https://www.fastex.com/",
        "image": img1_2,
        "altText": "Partner"
    },
    {
        "name": "Strategic partner",
        "url": "https://shtigen.com/en/",
        "image": sevan24_2,
        "altText": "Partner"
    },
    {
        "name": "Technological Partner",
        "url": "https://www.telecomarmenia.am/hy/",
        "image": sevan24_3,
        "altText": "Partner"
    },
    {
        "name": "Transportation partner",
        "url": "https://bit.ly/to-SSS",
        "image": sevan24_4,
        "altText": "Partner",
        "className": "ggImage"
    },
    {
        "name": "Media Partner",
        "url": "https://armeniatv.am/",
        "image": sevan24_5,
        "altText": "Partner"
    }
]


function Partners(props) {
    return (
        <div className="sevan2024-partners">
            <div className="wb-partnersBlock">
                <div className="wb-partnersTitle">
                    <h2>Sponsors and Partners</h2>
                </div>
                <div className="wb-partnersContent wb-topPartner">
                    <div className="wb-partner">
                        {
                            partnersList.map((partner, index) => {
                                return (
                                    <div key={index}>
                                        <a href={partner.url} target="_blank" rel="noopener noreferrer">
                                            <img loading={'lazy'} src={partner.image} alt={partner.altText}/>
                                        </a>
                                        <p>{partner.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Partners;

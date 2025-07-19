import React from 'react';
import startupImg from "./img/1.png";
import ministryImg from "./img/2.png";
import gtbImg from "./img/3.png";
import yoHealthImg from "./img/4.png";
import "./PartnerSection.css"

export const PartnerSection = (props) => {
    return (
        <div className="wb-getAccessPartners">
            <div><img src={startupImg} alt=""/></div>
            <div><img src={ministryImg} alt=""/></div>
            <div><img src={gtbImg} alt=""/></div>
            <div><img src={yoHealthImg} alt=""/></div>
        </div>
    );
}

export default PartnerSection;
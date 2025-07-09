import React from 'react';
import startupImg from "../Partners/images/startup.png";
import ministryImg from "../Partners/images/ministry.png";
import gtbImg from "../Partners/images/gtb.png";
import yoHealthImg from "../Partners/images/yohealth.png";
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
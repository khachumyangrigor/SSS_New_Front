import React from "react"
import startupImg from "./Images/startup.png"
import oilfImg from "./Images/oilf.png"
import doitImg from "./Images/doit.png"
import armeniaMinistryImg from "./Images/armenia.png"

import "./Organizers.css"

const Organizers = () => {

    return (
        <div className="wb-organizersBlock sevan24-organizers wb-sevan2025">
            <div className="wb-organizersTitle">
                <h2>Co-Organizers</h2>
            </div>
            <div className="wb-organizersContent">
                <div className="wb-organizersImageBlock">
                    <img src={doitImg} alt="doit"/>
                </div>
                <div className="wb-organizersImageBlock wb-armeniaPartner">
                    <img src={armeniaMinistryImg} alt="MinistryOfArmenia"/>
                </div>
                <div className="wb-organizersImageBlock">
                    <img src={startupImg} alt="StartupArmenia"/>
                </div>
                <div className="wb-organizersImageBlock">
                    <img src={oilfImg} alt="oilf"/>
                </div>
            </div>
        </div>
    )
}

export default Organizers
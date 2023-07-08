import React from "react"
import startupImg from "./Images/startup.png"
import amtzImg from "./Images/amtz.png"

import "./Organizers.css"

const Organizers = () => {

    return (
        <div className="wb-organizersBlock">
            <div className="wb-organizersTitle">
                <h2>Co-Organizers</h2>
            </div>
            <div className="wb-organizersContent">
                <div className="wb-organizersImageBlock">
                    <img src={startupImg} alt="Startup" />
                </div>
                <div className="wb-organizersImageBlock">
                    <img src={amtzImg} alt="Startup" />
                </div>
            </div>
        </div>
    )
}

export default Organizers
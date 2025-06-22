import React from "react"
import startupImg from "./Images/startup.png"
import gtbImg from "./Images/gtb.png"
import armenia from "./Images/armenia.png"

import "./Organizers.css"

const Organizers = () => {

    return (
        <div className="wb-organizersBlock sevan24-organizers wb-sevan2025">
            <div className="wb-organizersTitle">
                <h2>Co-Organizers</h2>
            </div>
            <div className="wb-organizersContent">
                <div className="wb-organizersImageBlock">
                    <img src={startupImg} alt="Startup" />
                </div>
                <div className="wb-organizersImageBlock">

                        <img src={gtbImg} alt="Startup" />

                </div>
                <div className="wb-organizersImageBlock wb-armeniaPartner">

                        <img src={armenia} alt="Startup" />

                </div>
            </div>
        </div>
    )
}

export default Organizers
import React from "react"
import startupImg from "./Images/startup.png"
import gtbImg from "./Images/gtb.png"
import s3Img from "./Images/3s.png"

import "./Organizers.css"

const Organizers = () => {

    return (
        <div className="wb-organizersBlock sevan24-organizers">
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
                <div className="wb-organizersImageBlock s3-imageBlock">
                    <img src={s3Img} alt="Startup" />
                </div>
            </div>
        </div>
    )
}

export default Organizers
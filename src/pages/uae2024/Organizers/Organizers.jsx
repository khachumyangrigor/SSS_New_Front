import React from "react"
import startupImg from "./Images/startup.png"
import amtzImg from "./Images/amtz.png"
import btaImg from "./Images/bta.png"
import gtbImg from "./Images/gtb.png"
import s3Img from "./Images/3s.png"
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
                <div className="wb-organizersImageBlock">
                    <img src={gtbImg} alt="Startup" />
                </div>
                <div className="wb-organizersImageBlock">
                    <img src={s3Img} alt="Startup" />
                </div>

            </div>
            <div className="wb-organizersContent wb-justifyContentCenter">
                <div className="wb-organizersImageBlock wb-supportedOrganizer">
                    <span>Supported by</span><img src={btaImg} alt="Startup" />
                </div>
            </div>
        </div>
    )
}

export default Organizers
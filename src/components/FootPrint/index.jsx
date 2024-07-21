import footprint from "./images/map.png";
import {Link} from "react-router-dom";
import React from "react";

const FootPrint = () => (
    <section className="firstPageGraphic">
        <div className="graphicTitle">Seaside Startup Summit footprint</div>
        <div className="graphicImgBox">
            <img src={footprint} alt='footprint'/>
            <div className="graphicImgText">
                <span>Past event locations</span>
                <span>Upcoming event locations</span>
            </div>
        </div>
        <div className="graphicFootter"><Link to="/events">Check our events</Link></div>
    </section>
)

export default FootPrint
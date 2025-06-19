import React from 'react';
import Title from "../Components/Title/Title.jsx";
import rally1 from "./img/rally1.png"
import rally2 from "./img/rally2.png"
import partner1 from "./img/partner1.png"
import partner2 from "./img/partner2.png"
import partner3 from "./img/partner3.png"
import "./Rally.css"

export const Rally = (props) => {
    return (
        <div className="wb-rally">
            <div className="wb-contentSize">
                <Title title="Sevan EV Rally 2025" date="— July 23 —"/>
                <div className="wb-rallyContentBlock">
                    <div className="wb-rallyContentInfo">
                        <p>The Sevan EV Rally is a premier international event that unites rally enthusiasts, innovative companies, pioneering brands, and influential organizations for an electrifying experience along breathtaking coastal routes.</p>
                        <p>
                            Annual tradition:<br/>
                            <b>Establishing Sevan as the EV capital of the region</b>
                        </p>
                        <p>
                            More action, more impact:<br/>
                            <b>Larger route, more vehicles, greater visibility</b>
                        </p>
                        <p>
                            Next stop — broadcast:<br/>
                            <b>TV and media coverage planned to reach millions</b>
                        </p>
                        <p>
                            From local to global:<br/>
                            <b>Rally will expand beyond Armenia’s borders</b>
                        </p>
                    </div>
                    <div className="wb-rallyContentImageBlock">
                        <img src={rally1} alt="Sevan EV Rally 2025"/>
                        <img src={rally2} alt="Sevan EV Rally 2025"/>
                    </div>
                </div>
                <div className="wb-rallyPartners">
                    <img src={partner1} alt=""/>
                    <img src={partner2} alt=""/>
                    <img src={partner3} alt=""/>
                </div>
            </div>

        </div>
    );
}

export default Rally;
import React from 'react';
import {Link} from "react-router-dom";

function PastEventComponent(props) {
    return (
        <div>
            <div><Link to={props.eventPageLink} rel="noopener noreferrer"><img src={props.eventImg} alt="eventImg" /></Link></div>
            <h3> <span>{props.title}</span> </h3>
            <p>{props.locationTitle}</p>
            <p>{props.eventDate}</p>
            <Link to={props.eventPageLink}>See More</Link>
        </div>
    );
}

export default PastEventComponent;
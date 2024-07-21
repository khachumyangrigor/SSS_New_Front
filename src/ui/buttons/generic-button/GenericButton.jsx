import React from "react";
import {Link} from "react-router-dom";
import './styles.css'

const GenericButton = ({isExternal = false, url = '#', title = "title"}) => {
    return (
        <Link className='generic-button' target={isExternal ? '_blank' : '_self'} to={url}>{title}</Link>
    )
}

export default GenericButton
import React from 'react';
import {Redirect} from 'react-router-dom'

export class Page_404 extends React.Component{
    render = () => {
        if(IS_CLIENT){return <Redirect to="/" />}
        else return <div></div>
    }
}

// export const Sitemap = () => window.location.replace("https://seasidestartupsummit.com/sitemap.xml")

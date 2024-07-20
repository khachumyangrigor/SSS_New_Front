import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

//components"
import Stats from "../components/Stats/index.jsx"
import Testimonials from "../components/Testimonials/index.jsx";
import Accelerators from "../components/Accelerators/index.jsx";
import JoinUs from "../components/JoinUs/index.jsx";
import FootPrint from "../components/FootPrint/index.jsx";
import Header from "./headNew/head.jsx";

// Create Dedicated CSS for pages

//css
import '../pages/firstPageNew/firstPageNew.css';


const statsData = [
    {number: "50+", text: "COUNTRIES"},
    {number: "1000+", text: "STARTUPS"},
    {number: "25,000+", text: "PARTICIPANTS"},
    {number: "US $350K", text: "PRIZES"},
    {number: "US $4 mln", text: "INVESTMENTS"}
];


function HomePage() {


    return (
        <Fragment>
            <Helmet>
                <title>The first non-formal Startup event | Seaside Startup Summit</title>
                <meta name="description"
                      content="Seaside Startup Summit is a platform that attracks leading angels,venture capitalists,entrepreneurs and transform their environment via entrepreneurship."/>
                <meta property="og:title" content="The first non-formal Startup event | Seaside Startup Summit"/>
                <meta property="og:description"
                      content="The platform attracts leading angels, venture capitalists, entrepreneurs, and policymakers willing to join their peers in an intimate setting to think, act, and transform their environment via entrepreneurship."/>
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/`}/>
                <meta property="og:image" content={`http://seasidestartupsummit.com/ogImage/home.png`}/>
                <meta property="og:description"
                      content="Seaside Startup Summit is a platform that attracks leading angels,venture capitalists,entrepreneurs and transform their environment via entrepreneurship."/>
            </Helmet>
            <main className="firstPageNew">
                <section className="firstPageTop">
                    <div>
                        <h1>Transforming the way to build sustainable businesses and lasting connections
                            <p>Seaside Startup Summit</p>
                        </h1>
                    </div>
                </section>
                <Header/>
                <Testimonials/>
                <Stats statsData={statsData} statsTitle={'Seaside Startup Summit shapes dreams of millions'}/>
                <FootPrint/>
                <Accelerators/>
                <JoinUs/>
            </main>
        </Fragment>
    )
}

export default HomePage;
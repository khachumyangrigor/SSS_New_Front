import React, {Fragment} from "react";
//!TODO create dedicated css file & remove data outside the component to reuse in the other pages.

const Intro = () => {
    return (
        <Fragment>
            <div className="upcommingGetAcces sevan24-getAccess">
                <div className="upcommingGetAcces_left">
                    <h2>Elevating Entrepreneurship at Sevan Startup Summit 2024</h2>
                    <p>
                        In the attractive setting near Lake Sevan, Sevan Startup Summit
                        2024 unfolds as the sixth edition of the region's largest annual
                        startup growth summit. This campsite-based startups festival has
                        become the epicenter of entrepreneurial energy, drawing
                        innovators, investors, and enthusiasts alike. Beyond the
                        traditional conference setup, SSS is a non-formal business forum
                        where connections are forged around campfires and deals take shape
                        beneath the stars. At the heart of this experience is a
                        micro-acceleration program, propelling startups towards success.
                        SSS24 is not merely an event; it's an investment and deal-making
                        platform that transcends boundaries, fostering a spirit of
                        innovation. Join us in the last week of July as we continue to
                        script the story of SSS.
                    </p>
                </div>
                <div className="upcommingGetAcces_right">
                    <iframe
                        src="https://www.youtube.com/embed/0AbpvX40-fY?si=KdmT9nQQaLYr-9QX"
                        title="Sevan Startup Summit 2024"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </Fragment>
    )
}

export default Intro
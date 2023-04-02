import React from 'react';

class About extends React.Component{
    render=()=>{
        return(
            <div className="about">
                <div className="left">
                    <h3>About the Merch</h3>
                    <p>For years, the SSS has been a melting pot for innovators to build an ecosystem of startups and a growing entrepreneurial community. To go beyond, SSS is launching its first ever merch to give everyone the opportunity to feel being a part of the big community.</p>
                </div>
                <div className="right">
                    <img src={require('./img/about.png')} alt="About SSS Merch" />
                    {/* <iframe title="infoFrame" src="https://www.youtube.com/embed/jPS5TNVXYfI" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>
            </div>
        )
    }
}

export default About;
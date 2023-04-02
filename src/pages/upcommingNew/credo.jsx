import React from 'react';

class Credo extends React.Component{
    render=()=>{
        return(
            <div className="credo">
            <h2>Our Credo</h2>
            <p>— The key benefits that SSS provides are —</p>
            <div className="credoItem">
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/disignIcon/know/credo5.png')} alt="opportunities" /></div>
                            <h4 style={{color: "#42C8F1"}}>Connect</h4>
                        </div>
                        <div className="back">
                            <h4 style={{color: "#42C8F1"}}>Connect</h4>
                            <p>We create a fully immersive environment where human relationships and trust are built through collaboration between people from different countries, cultures, and backgrounds in an informal setting guided by mentors and business experts. </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/disignIcon/know/credo6.png')} alt="opportunities" /></div>
                            <h4 style={{color: "#1CAAE2"}}>Learn</h4>
                        </div>
                        <div className="back">
                            <h4 style={{color: "#1CAAE2"}}>Learn</h4>
                            <p>We create an atmosphere where experienced entrepreneurs share their knowledge, experience, resources, and aspirations in exchange for inspiration from unconstrained thinking of starting entrepreneurs.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/disignIcon/know/credo7.png')} alt="opportunities" /></div>
                            <h4 style={{color: "#B92B4E"}}>Win</h4>
                        </div>
                        <div className="back">
                            <h4 style={{color: "#B92B4E"}}>Win</h4>
                            <p>We provide an opportunity for startups to constantly win by participating in the Startup Battles, acquiring invaluable connections, receiving on-site and off-site investment opportunities, and just by being a part of the event. </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <div><img src={require('./img/disignIcon/know/credo8.png')} alt="opportunities" /></div>
                            <h4 style={{color: "#F68C36"}}>Have Fun</h4>
                        </div>
                        <div className="back">
                            <h4 style={{color: "#F68C36"}}>Have Fun</h4>
                            <p>We provide an unforgettable experience full of fun activities and cool moments. After a very intense and dense day, participants need to relax, cheer up, and revive their energy. In a nutshell, SSS is all about <b>“Working hard, Partying harder”</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Credo;
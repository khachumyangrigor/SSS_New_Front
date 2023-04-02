import React from 'react';

class Options extends React.Component{
    render=()=>{
        return(
            <div className="teamleadType" >
                <h3 className="subtitle">Options of participation</h3>
                <div className="teamleadTypeItem">
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt4.png')} alt="opportunities" /></div>
                                <h4>Startup</h4>
                                <button>Get information</button>
                            </div>
                            <div className="back">
                                <h4>Startup</h4>
                                <p>
                                Startups have always been the main focus of Seaside Startup Summit events. Those startups that have applied to the event will undergo a preliminary evaluation and selection process. After this, only selected startups in the idea and seed stages will be granted SSSholidays participation pass, which implies the startups staying in the resort venue during the 7 days of SSSholidays. Throughout the event, startup teams will be participating in the custom-designed educational program and in the Startup Battles at the end of the event.
                                </p>
                                {/* <button onClick={()=>this.scroll150()}>Get information</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt1.png')} alt="opportunities" /></div>
                                <h4>company</h4>
                                <button>Get information</button>
                            </div>
                            <div className="back">
                                <h4>company</h4>
                                <p>
                                Companies are one of the main beneficiaries of SSSholidays. This participation format, in general, includes tickets for the representatives of participating companies (the number of representatives depends on the specific partnership option). The event provides a wide range of opportunities, especially for those companies that want to expand their team and engage new employees from abroad, motivate their staff, or have a recently launched product and would like to promote it. In general, primarily Armenian and Indian companies are targeted for involvement in the event.                                </p>
                                {/* <button onClick={()=>this.scroll150()}>Get information</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt1.1.png')} alt="opportunities" /></div>
                                <h4>Individual</h4>
                                <button>Get information</button>
                            </div>
                            <div className="back">
                                <h4>Individual</h4>
                                <p>
                                Individuals who are active representatives of the startup ecosystem of Armenia or India, or are interested in expanding their network and knowledge in the field are also welcome to participate in SSSholidays India Vizag. This format is not restricted solely to one individual, rather allows participation of the family members and/or friends as well. Individuals have the opportunity to spend quality resting time in a high-class resort setting and expand their business network, build valuable connections, keep up with the latest startup ecosystem updates, and deepen their knowledge at the same time.
                                </p>
                                {/* <button onClick={()=>this.scroll150()}>Get information</button> */}
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
}


export default Options;
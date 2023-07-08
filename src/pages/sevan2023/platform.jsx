import React from 'react';

class Platform extends React.Component{
    constructor(){
        super();
        this.state={
            openImg:'./img/realImg/plat1.png',
        }    
    }

    handelOpenImg=e=>{
        this.refs.openPlatImg.style.display="flex";
        this.refs.openPlatImgBox.src=e.target.src;
        document.getElementsByTagName("BODY")[0].classList.add('stop-scrolling');
    }
    handelCloseImg=()=>{
        this.refs.openPlatImg.style.display="none";
        document.getElementsByTagName("BODY")[0].classList.remove('stop-scrolling');
    }
    render=()=>{
        return(
            <div className="platform">
                <div className="openPlatImg" ref="openPlatImg">
                    <label onClick={this.handelCloseImg} className="imgClose"><span/><span/></label>
                    <div><img ref="openPlatImgBox" src={require(`${this.state.openImg}`)} alt="open platform"/></div>
                </div>
                <h2>SSS Platform Structure</h2> 
                <p>SSS Platform is a breathing organism with its unique structure. The main structural cell is the squad organized around the campfire. Each Squad consists of max 25 members: 1 TeamLead, 3 coach, and up to 23 young entrepreneurs representing various startups, diverse backgrounds, and different geographies. Squads are formed by the organizers; however, they stay as a self-governing body under the management of the TeamLead.</p>
                <div className="platformFund" >
                    <div>
                        <div className="fundItem">
                            <div>
                                <div><img src={require('./img/disignIcon/know/plat1.png')} alt="Booster"/></div>
                                <h4>TeamLead</h4>
                            </div>
                            <div><p>TeamLeads play an extremely important role in organizing, supervising, and managing the squad members. TeamLeads are the middleman between the Event Organizers and squad members.</p></div>
                        </div>
                        <div className="fundItem">
                            <div>
                                <div><img src={require('./img/disignIcon/know/plat2.png')} alt="Booster"/></div>
                                <h4>Coach</h4>
                            </div>
                            <div>
                                <p>Coaches are an essential part of the event. They are the ones who guide teams to focus their attention on the program. They introduce and stay with their teams during various events.</p>
                            </div>
                        </div>
                        <div className="fundItem">
                            <div>
                                <div><img src={require('./img/disignIcon/know/plat3.png')} alt="Booster"/></div>
                                <h4>Startupper</h4>
                            </div>
                            <div>
                                <p>All the applied startup teams pass a screening process and the accepted teams based on their level of development and fields of operations (Tracks) will be distributed into one of two programs: Starter and Booster.</p>
                            </div>
                        </div>
                    </div>
                    <div className="platImgBox">
                        <div><img onClick={this.handelOpenImg} src={require('./img/realImg/plat2.png')} alt="platforms"/></div>
                        <div><img onClick={this.handelOpenImg} src={require('./img/realImg/plat1.png')} alt="platforms"/></div>
                        <div><img onClick={this.handelOpenImg} src={require('./img/realImg/plat3.png')} alt="platforms"/></div>
                    </div>
                </div>
            </div>        
        )    
    }
}

export default Platform;
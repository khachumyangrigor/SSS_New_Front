import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Citizen extends React.Component{
    constructor(){
        super();
        this.state={
            event:''
        }
    }
    componentWillMount = () => {
        this.setState({event:this.props.match.params.event});
    }
    componentWillReceiveProps=(newprops)=>{
        this.setState({event:newprops.match.params.event});
    }
    render=()=>{
        const event=this.state.event;
        return(
            <div className="citizen">
            <h2>Our Residents</h2>
            <p>During the 7 days of the Summit we host over 1000 participants and 10000 guests from over 50 countries. <br/>You can join us to become a part of our global community in a role that best meets your interests:</p>
            <div className="citizenItem">
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>Startup</h4>
                            <div><img src={require('./img/disignIcon/know/citizen1.png')} alt="opportunities" /></div>
                            <button>Apply here</button>
                        </div>
                        <div className="back">
                            <h4>Startup</h4>
                            <p>All the applied startup teams pass a screening process and the accepted teams are distributed into either Starter (idea stage) or Booster (early stage) programmes based on their levels of development and fields of operation. After an educational programme is over, startup teams participate in Startup Battles to win prizes and get investment commitments.</p>
                            <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply here</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>INVESTOR </h4>
                            <div><img src={require('./img/disignIcon/know/citizen3.png')} alt="opportunities" /></div>
                            <button>Get your pass</button>
                        </div>
                        <div className="back">
                            <h4>INVESTOR </h4>
                            <p>Investors constitute another essential part of the Summit. They are generally young or middle-aged, successful entrepreneurs who are willing not only to invest their smart money in startups, but also to share their own expertise with the latter. Hence, their support is paramount considering both financial and educational value they provide.</p>
                            <a href="https://www.pay.seasidestartupsummit.com/visitor/#investor-pass" target="_blank" rel="noopener noreferrer">Get your pass</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>SPEAKER/MENTOR</h4>
                            <div><img src={require('./img/disignIcon/know/citizen2.png')} alt="opportunities" /></div>
                            <button>Apply Here</button>
                        </div>
                        <div className="back">
                            <h4>SPEAKER/MENTOR</h4>
                            <p>Speakers/Mentors are mostly engaged in educational programme delivery for startups. These are established professionals willing to share experience and expertise from various industries and spheres of their interest. They may contribute to the Summit by delivering keynote speeches, leading campfire talks, taking part in panel discussions and workshops.</p>
                            <Link to={`/upcoming-events/${event}/speakers`} target={'_blank'}>Apply Here</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>Visitor</h4>
                            <div><img src={require('./img/disignIcon/know/citizen7.png')} alt="opportunities" /></div>
                            <button>Get Your Pass</button>
                        </div>
                        <div className="back">
                            <h4>Visitor</h4>
                            <p>Visitors are the individuals who buy their tickets to come to the Summit. They get access to SSS to expand their network, learn from the top industry leaders, take part in SSS talks and experience unforgettable moments in a camp town. Not surprisingly, it is due to the large volumes of visitors that the Summit drags masses and gets to the wider audience.</p>
                            <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer">Get your pass</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>TeamLead</h4>
                            <div><img src={require('./img/disignIcon/know/citizen6.png')} alt="opportunities" /></div>
                            <button>Apply Here</button>
                        </div>
                        <div className="back">
                            <h4>TeamLead</h4>
                            <p>Teamleads play an essential role in organizing and managing the squad members. Teamleads are the middlemen between the organizers and squad members. They are in charge of keeping up with the agenda, orders and rules of the Summit, and other organizational activities of the squad․ They live with the team in the squad area, cook together, and share the same lifestyle for a week. </p>
                            <Link to={`/upcoming-events/${event}/team-leads`} target={'_blank'}>Apply Here</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>COACH</h4>
                            <div><img src={require('./img/disignIcon/know/citizen4.png')} alt="opportunities" /></div>
                            <button>Apply Here</button>
                        </div>
                        <div className="back">
                            <h4>COACH</h4>
                            <p>Coaches are like educational guardians of the squads, trying to put emphasis on the educational programme and stay with their teams during various events. They might also give worthwhile advice on marketing, business development, sales, and project/product management approaches pertinent to startups' needs. </p>
                            <Link to={`/upcoming-events/${event}/coaches`} target={'_blank'}>Apply Here</Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="front">
                            <h4>Volunteer </h4>
                            <div><img src={require('./img/disignIcon/know/citizen5.png')} alt="opportunities" /></div>
                            <button>Apply Here</button>
                        </div>
                        <div className="back">
                            <h4>Volunteer </h4>
                            <p>Volunteers have always been an inseparable part of the Summit and have been mostly involved in organizational activities. They are required to have specific skills and qualifications, such as good knowledge of languages, interest startup ecosystem, communication and networking skills, and the willingness to expand their worldview and gain new knowledge.</p>
                            <Link to={`/upcoming-events/${event}/volunteers`} target={'_blank'}>Apply Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Citizen);
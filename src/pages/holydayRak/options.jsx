import React from 'react';

class Options extends React.Component{
    scroll150=()=>{
        if(IS_CLIENT){
            window.scrollTo({
                top: document.getElementsByClassName('min_holiday_form')[0].offsetTop-100,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    render=()=>{
        return(
            <div className="teamleadType" >
                <h3 className="subtitle">Options of participation</h3>
                <div className="teamleadTypeItem">
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt1.1.png')} alt="opportunities" /></div>
                                <h4>Individual</h4>
                            </div>
                            <div className="back">
                                <h4>Individual</h4>
                                <p>
                                <b>Oops ! Seems like you've missed the deadline (November 20) :( </b>
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                BUT if you're highly interested you still have a chance to join us (please write an email to info@sss.am)
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                Reminder: If you’re interested in expanding your network and knowledge then you are welcome to attend the SSSholidays. This format allows you to participate in the event with both your family members and friends. Hurry up to fill out this form if you haven’t managed to have a vacation this year, if you like the beach and various outdoor activities.
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                This package includes flight tickets, accommodation, 3-course hotel meals, adventurous tours to Dubai.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt1.png')} alt="opportunities" /></div>
                                <h4>company</h4>
                            </div>
                            <div className="back">
                                <h4>company</h4>
                                <p>
                                <b>Oops ! Seems like you've missed the deadline (November 20) :(</b>
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                BUT if you're highly interested you still have a chance to join us (please write an email to info@sss.am)
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                This package includes tickets for the representatives of organizations and promotion in social media. The event provides quite a wide range of opportunities especially for those companies that want to expand their teams and engage new individuals, motivate their staff, have a recently launched product and would like to promote it. 
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                Packages for companies include a number of participation tickets (2-10 person), as well as other benefits depending on the package.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="front">
                                <div><img src={require('./icn/opt4.png')} alt="opportunities" /></div>
                                <h4>Startup</h4>
                            </div>
                            <div className="back">
                                <h4>Startup</h4>
                                <p>
                                <b>Oops ! Seems like you've missed the deadline (November 20) :( </b>
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                BUT if you're highly interested you still have a chance to join us (please write an email to info@sss.am)
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                Reminder: Those startups that have applied to the event will undergo a preliminary evaluation and selection process. After this only 15 selected startups in seed stage will be granted SSSholidays participation pass with a 25% discount. During the course of the event, startup teams will be participating in a custom designed educational program and will participate in Startup Battle at the end of the event. 
                                <br/><span style={{display:'block',marginTop:'10px'}}/>
                                The prize fund of the Startup Battle is $10,000, from which 5 teams will be granted.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
}


export default Options;
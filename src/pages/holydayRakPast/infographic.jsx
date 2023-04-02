import React from 'react';

class Infographic extends React.Component{
    render=()=>{
        return(
            <div className="opacity scrollShow" >
                <div>
                    <div className="firstPageStatistic past">
                        <h2>SSSholidays in numbers</h2>
                        <div className="statisticItemBox">
                            <div className="statisticItem"><div><span>320+</span></div><span>Participants</span></div>
                            <div className="borderNum"/>
                            <div className="statisticItem"><div><span>40+</span></div><span>Companies represented</span></div>
                            <div className="borderNum"/>
                            <div className="statisticItem"><div><span>25+</span></div><span>Startups</span></div>
                            <div className="borderNum"/>
                            <div className="statisticItem"><div><span>US $15,000</span></div><span>Prize Fund for startups</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Infographic;
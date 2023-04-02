import React from 'react';
import { Fragment } from 'react';

const Infographic = (props) => {
    const {baner_title_part2, infographic_1, infographic_2, infographic_3, infographic_4, infographic_5, infographic_6}=props.info
    return (
        <Fragment>
            <div>
                <div className="firstPageStatistic past">
                    <div className="statisticTitle">{baner_title_part2} shapes dreams of millions</div>
                    <div className="statisticItemBox">
                        <div className="statisticItem"><div><span>{infographic_1}</span></div><span>Startup</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span>{infographic_6}</span></div><span>Speakers & Mentors</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span>{infographic_4}</span></div><span>VC & Investor</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span>{infographic_5}</span></div><span>Participants</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span>{infographic_2}</span></div><span>Prizes</span></div>
                        <div className="borderNum"/>
                        <div className="statisticItem"><div><span>{infographic_3}</span></div><span>Investments</span></div>
                        <div className="borderNum"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Infographic;
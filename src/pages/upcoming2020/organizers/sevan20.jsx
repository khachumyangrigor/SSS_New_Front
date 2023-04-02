import React from 'react';
import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import FixedMenu from '../section_menu/menu.jsx';
import backArrow from "../img/icon/back-arrow.svg";
const OrganizersSevan20 = () => {
    return (
        <Fragment >
            {/* <FixedMenu /> */}
            <div className="backPage"><Link to='/sevan2020/'><img src={backArrow} alt="back" /> Back</Link></div>
            <div className="organizers">
                <div className="organizersType">
                    <div className="organizersTitle">
                        <h1>Organizers</h1>
                    </div>
                    <div className="organizersLogo">
                        <div>
                            <a href="https://www.smeda.am/" target="_blanck" rel="index nofollow">
                                <img alt='sss sponsors' src={require('../img/organizers/eu4.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.giz.de/en/worldwide/374.html" target="_blanck" rel="index nofollow">
                                <img alt='sss sponsors' src={require('../img/organizers/gizet.png')} />
                            </a>
                        </div>

                        <div>
                            <a href="http://startuparmenia.am" target="_blanck" rel="index nofollow">
                                <img alt='sss sponsors' src={require('../img/organizers/STARTup-Armenia.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.granatusventures.com/" target="_blanck" rel="index nofollow">
                                <img alt='sss sponsors' src={require('../img/organizers/granatus1.png')} />
                            </a>
                        </div>
                    </div>
                    <div className='eu4Text'>Sevan Startup Summit 2019 is supported by the European Union through its EU4Business “Support to SME Development in Armenia” (EU-SMEDA) project (<a href="https://www.smeda.am/" target="_blank" rel="index nofollow noopener noreferrer">www.smeda.am</a>), co-funded by Federal Ministry for Economic Cooperation and Development (BMZ) and implemented by German Development Cooperation GIZ through the Private Sector Development in South Caucasus Programme.</div>
                </div>
            </div>
        </Fragment >
    )
}
export default withRouter(OrganizersSevan20);
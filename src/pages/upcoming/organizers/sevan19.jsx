import React from 'react';
import { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FixedMenu from '../section_menu/menu.jsx';
import backArrow from "../img/icon/back-arrow.svg";
const OrganizersSevan19 = () => {
    return (
        <Fragment >
            <FixedMenu />
            <div className="backPage"><Link to='/sevan19/'><img src={backArrow} alt="back" /> Back</Link></div>
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
                <div className="organizersType">
                    <div className="organizersTitle">
                        <h1>Sponsors</h1>
                    </div>
                    <div className="organizersLogo">
                        <div>
                            <a href="http://www.softconstruct.com/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/softconstruct.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://beta.beeline.am/customers/mobile" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/beeline.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.nairi-insurance.am/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/nairiInshurans.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://telcell.am/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/telcall.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://smartclick.ai/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/smartclick.svg')} />
                            </a>
                        </div>
                        <div>
                            <a href="/sevan19/">
                                <img alt='sss partner' src={require('../img/organizers/partners/EmirasArm.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://ellips.am/">
                                <img alt='sss partner' src={require('../img/organizers/partners/Ellips Logo.png')} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="organizersType">
                    <div className="organizersTitle">
                        <h1>Partners</h1>
                    </div>
                    <div className="organizersLogo">
                        <div>
                            <a href="https://ucucfe.lvbs.com.ua/en/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/cfe.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.eustartupfestival.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/esf.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://prokat.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/prokat4.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.ucraft.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/ucraft.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.fasttoken.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/fasttoken.png')} />
                            </a>
                        </div>

                        <div>
                            <a href="http://en.generation-startup.ru/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/generation.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.buildit.lv/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/buildit.svg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.investinspain.org/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/icex.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://insport.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/insport.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://geekulcha.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/belt.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.sunnshield.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/SUNN-SHIEL.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.lia-ceramics.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/liakeramiks.png')} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default withRouter(OrganizersSevan19);
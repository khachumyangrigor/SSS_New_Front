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
                            <a href="http://startuparmenia.am/" target="_blanck" rel="index nofollow">
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
                        <div className="bigSponsor">
                            <a href="http://www.softconstruct.com/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/softconstruct.png')} />
                            </a>
                        </div>
                        <div className="bigSponsor">
                            <a href="https://www.inecobank.am/hy/Individual" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/ineco.jpeg')} />
                            </a>
                        </div>
                        <div className="bigSponsor">
                            <a href="https://beta.beeline.am/customers/mobile" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/beeline.jpg')} />
                            </a>
                        </div>
                        <div className="smallSponsor">
                            <a href="https://www.nairi-insurance.am/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/nairiInshurans.png')} />
                            </a>
                        </div>
                        <div className="smallSponsor">
                            <a href="http://telcell.am/" target="_blanck" rel="index nofollow index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/telcall.png')} />
                            </a>
                        </div>
                        <div className="smallSponsor">
                            <a href="https://smartclick.ai/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/logosmart.png')} />
                            </a>
                        </div>
                        <div className="smallSponsor">
                            <a href="https://solaron.am/">
                                <img alt='sss partner' src={require('../img/organizers/partners/solaron.png')} />
                            </a>
                        </div>
                        <div className="smallSponsor">
                            <a href="http://ellips.am/">
                                <img alt='sss partner' src={require('../img/organizers/partners/Ellips Logo.png')} />
                            </a>
                        </div>
                        <div className="smallSponsor" style={{ height: '93px' }}>
                            <a href="/sevan19/">
                                <img alt='sss partner' src={require('../img/organizers/partners/EmirasArm.png')} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="organizersType">
                    <div className="organizersTitle">
                        <h1>Partners</h1>
                    </div>
                    <div className="organizersLogo">
                        <div >
                            <a href="https://www.ggtaxi.com/signin" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/gg.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.ameriabank.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Ameriabank.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://prokat.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/prokat4.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://galaxyconcern.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Galaxy_Logo2.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://sflpro.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/sfl.png')} />
                            </a>
                        </div>
                        {/* <div>
                            <a href="http://www.impactaim.com" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/ImpactAim.png')} />
                            </a>
                        </div> */}
                        <div>
                            <a href="http://x-tech.am/website" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/xtech.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://sefmicro.org/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/saf.svg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://globbing.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/globing.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://menugroup.co.uk/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/menu group.png')} />
                            </a>
                        </div>
                        {/* ///////// */}
                        <div >
                            <a href="https://www.ucraft.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/ucraft.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://sevanpark.am/en/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/sevan_national_park.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://insport.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/insport.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://10web.io/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/10web.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.eustartupfestival.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/esf.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.eustartupfestival.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/esf.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.lia-ceramics.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/liakeramiks.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://krisp.ai/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/krisp-logo.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.armeniatv.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/tvarmenia.png')} />
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
                            <a href="http://www.agbu.am/en" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Agbu.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://ucucfe.lvbs.com.ua/en/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/cfe.jpeg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://geekulcha.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/belt.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.noylandresort.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/noyland.0bfae40a.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.aybschool.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/ayb.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://evconsulting.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/evconsslting.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://operasuitehotel.com/en" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/opera-suit.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/zebraoutdoor/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/zebra.png')} />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.synisys.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Synergy_logo1.svg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://fast.foundation/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/fast.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.skill.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Skill.am.jpg')} />
                            </a>
                        </div>
                        {/* ////////Our */}
                        <div>
                            <a href="http://weflex.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Weflex_sss.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://startupwater.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/startupwater.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://startupclub.am/attend/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/startupclube.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.plug.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/plug.am.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://service1.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/cd-logo.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://startupwoman.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/startupWomen.png')} />
                            </a>
                        </div>
                        {/* ////////End Our */}
                        <div>
                            <a href="http://proservice-l.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Proservice.png')} />
                            </a>
                        </div>
                        {/* ////////FUUN */}
                        <div>
                            <a href="https://armheli.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/armheli.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.yerevanride.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/yrevanride.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.paraplan.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/skayClube.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://skyball.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/skayball.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://yellextremepark.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/yall.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://armenianadventure.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/aga.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/4SeasonsDrakhtik/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/4season.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.worldraftingfederation.com/armenia" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/rafting-armenia.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://youdrive.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/yooudr.jpg')} />
                            </a>
                        </div>
                        {/* ////////End Fun FUUN */}

                        <div>
                            <a href="http://en.generation-startup.ru/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/generation.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.sunnshield.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/SUNN-SHIEL.png')} />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.facebook.com/pages/category/App-Page/Zoomerang-176636693040463/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/zoomberg.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://epic.aua.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/epic.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://startuptimes.am/" target="_blanck" rel="index nofollow">
                                <img alt='sss sponsors' src={require('../img/organizers/partners/startuparmeniatimes.jpg')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/tosp.armenia/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/Tosp.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://tumo.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/tumodesign.png')} />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.bana.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/bana.jpg')} />
                            </a>
                        </div>

                        <div>
                            <a href="https://startupwiseguys.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/wiseguys.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.speedaccelerator.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/speedAcs.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://balticsandbox.eu/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/baltic_sanbox.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="http://para.tv" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/paratv.jpg')} />
                            </a>
                        </div>

                        <div>
                            <a href="http://loft.am/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/loft.png')} />
                            </a>
                        </div>
                        <div>
                            <a href="https://thecrowdfundingformula.com/" target="_blanck" rel="index nofollow noopener noreferrer">
                                <img alt='sss partner' src={require('../img/organizers/partners/TheCrowdFunding Formula_Logo.svg')} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default withRouter(OrganizersSevan19);
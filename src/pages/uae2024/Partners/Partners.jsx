import React from 'react';
import new1Img from "./images/new1.png"
import new2Img from "./images/new2.png"
import new3Img from "./images/new3.png"
import new4Img from "./images/new4.png"
import new5Img from "./images/new5.png"
import new6Img from "./images/new6.png"
import new7Img from "./images/new7.png"
import new8Img from "./images/new8.png"
import new9Img from "./images/new9.png"
import new10Img from "./images/new10.png"
import new11Img from "./images/new11.png"
import new12Img from "./images/new12.png"
import new13Img from "./images/new13.png"
import new14Img from "./images/new14.png"
import new15Img from "./images/new15.png"
import new16Img from "./images/new16.png"
import new17Img from "./images/new17.png"
import new18Img from "./images/new18.png"
import new19Img from "./images/new19.png"
import new20Img from "./images/new20.png"
import new21Img from "./images/new21.png"
import new22Img from "./images/new22.png"
import new23Img from "./images/new23.png"
import new24Img from "./images/new24.png"
import new25Img from "./images/new25.png"
import "./Partners.css"
// import topImg from "./images/topImg.png"
// import img1_1 from "./images/1-1.png"
// import img1_2 from "./images/1-2.png"
//



const imgArray = [
    //     {
    //     link:"https://www.telecomarmenia.am/hy/",
    //     src:img6
    // },
    // {
    //     link:"https://www.eif.am/",
    //     src:img7
    // },{
    //     link:"https://www.capitalbuild.am/",
    //     src:img8
    // },{
    //     link:"https://www.ebrd.com/home",
    //     src:img9
    // },{
    //     link:"https://am.araratbrandy.com/",
    //     src:img10
    // },{
    //     link:"https://amundi-acba.am/en",
    //     src:img11
    // },{
    //     link:"https://am.globbing.com/hy",
    //     src:img12
    // },{
    //     link:"https://womensecret.com/es/es",
    //     src:img13
    // },{
    //     link:"",
    //     src:img14
    // },{
    //     link:"https://myspringfield.com/es/es",
    //     src:img15
    // },{
    //     link:"https://armenia.un.org/en/about/about-the-un",
    //     src:img16
    // },{
    //     link:"https://rate.am/",
    //     src:img17,
    //     widthClass:"w-70"
    // },{
    //     link:"https://easydmarc.com/",
    //     src:img18
    // },{
    //     link:"https://aica.social/portfolio/",
    //     src:img19,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.granatusventures.com/",
    //     src:img20
    // },{
    //     link:"https://fast.foundation/",
    //     src:img21,
    //     widthClass:"w-70"
    // },{
    //     link:"https://stan.am/",
    //     src:img22,
    //     widthClass:"w-80"
    // },{
    //     link:"https://bana.am/the-factory?fbclid=IwAR2Mjjoh2ptx0x3-mOnxyGS5IOFaFuYbYWBdPSmU2esui3J-nsdBNYt0ooc",
    //     src:img23,
    //     widthClass:"w-60"
    // },{
    //     link:"https://www.smartgate.vc/",
    //     src:img24
    // },{
    //     link:"https://epic.aua.am/#",
    //     src:img25,
    //     widthClass:"w-60"
    // },{
    //     link:"https://tumolabs.am/",
    //     src:img26,
    //     widthClass:"w-70"
    // },{
    //     link:"https://tumo.org/",
    //     src:img27
    // },{
    //     link:"https://www.teachforarmenia.org/",
    //     src:img28,
    //     widthClass:"w-70"
    // },{
    //     link:"https://foundation.ayb.am/",
    //     src:img29
    // },{
    //     link:"https://www.uate.org/",
    //     src:img30
    // },{
    //     link:"https://armleasing.am/",
    //     src:img31
    // },
    // // {
    // //     link:"",
    // //     src:img32
    // // },
    // {
    //     link:"https://gituzh.am/",
    //     src:img33,
    //     widthClass:"w-60"
    // },{
    //     link:"https://web3.am/",
    //     src:img34,
    //     widthClass:"w-60"
    // },
    // {
    //     link:"https://tufenkianheritage.com/en/",
    //     src:img36
    // },
    // {
    //     link:"https://www.newgate.capital/",
    //     src:img35,
    //     widthClass:"w-60"
    // },
    // {
    //     link:"https://www.freedomholdingcorp.com/",
    //     src:new10,
    // },
    // {
    //     link:"",
    //     src:img38,
    //     widthClass:"w-60"
    // },
    // {
    //     link:"https://www.facebook.com/national.medical.palace.armenia/",
    //     src:img39
    // },
    // {
    //     link:"https://www.sdglab.am/en",
    //     src:img40
    // },
    // {
    //     link:"https://triples.vc/en",
    //     src:img51,
    //     widthClass:"w-60"
    // },
    // {
    //     link:"https://www.ggtaxi.com/signin",
    //     src:img41,
    //     widthClass:"w-60"
    // },{
    //     link:"https://app.karas.am/hy/",
    //     src:img42
    // },{
    //     link:"https://www.tshaurma.com/en/",
    //     src:img43,
    //     widthClass:"w-60"
    // },{
    //     link:"https://qayl.tech/hy",
    //     src:img44,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.facebook.com/nushikyan.advertising/",
    //     src:img45
    // },
    // {
    //     link:"",
    //     src:img91hexens
    // },
    // {
    //     link:"https://www.fastshift.am/en",
    //     src:img47
    // },{
    //     link:"https://www.arleam.love/ru/",
    //     src:img48
    // },{
    //     link:"",
    //     src:img49
    // },{
    //     link:"https://www.facebook.com/DRONEEDULAB/",
    //     src:img50
    // },
    //
    // {
    //     link:"https://wimedia.am/",
    //     src:img52,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.chargers.am/",
    //     src:img53,
    //     widthClass:"w-70"
    // },{
    //     link:"https://smp.am/",
    //     src:img54,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.mootq.am/",
    //     src:img55
    // },{
    //     link:"https://cloud2.smartrest.am/v10/",
    //     src:img56
    // },{
    //     link:"https://smp.am/",
    //     src:img57
    // },{
    //     link:"https://smp.am/",
    //     src:img58
    // },{
    //     link:"https://freeway.am/en.html",
    //     src:img59,
    //     widthClass:"w-70"
    // },{
    //     link:"https://prokat.am/",
    //     src:img60
    // },{
    //     link:"http://www.tumo.am/",
    //     src:img61
    // },{
    //     link:"",
    //     src:img62
    // },{
    //     link:"https://www.facebook.com/promoland.promoland/",
    //     src:img63
    // },{
    //     link:"https://www.asoghik.am/",
    //     src:img64,
    //     widthClass:"w-60"
    // },{
    //     link:"https://myler.am/ru/",
    //     src:img65,
    //     widthClass:"w-60"
    // },{
    //     link:"",
    //     src:img66
    // },{
    //     link:"https://viralmango.com/",
    //     src:img67
    // },{
    //     link:"https://proservice-l.com/",
    //     src:img68
    // },{
    //     link:"https://www.tk.partners/",
    //     src:img69
    // },{
    //     link:"http://www.storaket.com/",
    //     src:img70,
    //     widthClass:"w-70"
    // },{
    //     link:"https://chessify.me/",
    //     src:img71,
    //     widthClass:"w-80"
    // },{
    //     link:"https://earlyone.com/",
    //     src:img72,
    //     widthClass:"w-80"
    // },{
    //     link:"https://www.superannotate.com/",
    //     src:img73,
    //     widthClass:"w-80"
    // },{
    //     link:"https://wirestock.io/",
    //     src:img74,
    //     widthClass:"w-80"
    // },{
    //     link:"https://robinrobot.co/?fbclid=IwAR3xFyp-tYzJSuD5SbyghNYOoPVgQ4oUnC7KU9MT9t2npKshGLtcJ6IwAnQ",
    //     src:img75
    // },{
    //     link:"http://careercityfest.am/",
    //     src:img76,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.devsoft.am/",
    //     src:img77,
    //     widthClass:"w-70"
    // },{
    //     link:"https://bitlismen.com/",
    //     src:img78,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.coffeehouse.am/",
    //     src:img79,
    //     widthClass:"w-70"
    // },{
    //     link:"https://ecofresh.me/",
    //     src:img80,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"https://www.danz.am/hy",
    //     src:img81,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:img82,
    //     widthClass:"w-50"
    // },{
    //     link:"http://insport.am/",
    //     src:img83,
    //     widthClass:"w-70"
    // },{
    //     link:"",
    //     src:img84,
    //     widthClass:"w-60"
    // },{
    //     link:"https://skyclub.am/ru/",
    //     src:img85,
    //     widthClass:"w-60"
    // },{
    //     link:"https://skyball.am/en",
    //     src:img86,
    //     widthClass:"w-70"
    // },{
    //     link:"",
    //     src:img87,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.armheli.com/",
    //     src:img88,
    //     widthClass:"w-70"
    // },{
    //     link:"https://www.bestlife.am/",
    //     src:img89,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"https://armeniatv.am/",
    //     src:img46
    // },
    // {
    //     link:"",
    //     src:new1
    // },
    // {
    //     link:"",
    //     src:new2
    // },
    // {
    //     link:"",
    //     src:new3
    // },
    // {
    //     link:"",
    //     src:new4,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:new5,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:new6,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:new7,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:new8
    // },
    // {
    //     link:"",
    //     src:new9,
    //     widthClass:"w-70"
    // },
    // {
    //     link:"",
    //     src:img37
    // },
    {
        link:"",
        src:new1Img
    },
    {
        link:"",
        src:new2Img
    },
    {
        link:"",
        src:new3Img
    },
    {
        link:"",
        src:new4Img
    },
    {
        link:"",
        src:new5Img
    },
    {
        link:"",
        src:new6Img
    },
    {
        link:"",
        src:new7Img
    },
    {
        link:"",
        src:new8Img
    },
    {
        link:"",
        src:new9Img
    },
    {
        link:"",
        src:new10Img
    },
    {
        link:"",
        src:new11Img
    },
    {
        link:"",
        src:new12Img
    },
    {
        link:"",
        src:new13Img
    },
    {
        link:"",
        src:new14Img
    },
    {
        link:"",
        src:new15Img
    },
    {
        link:"",
        src:new16Img
    },
    {
        link:"",
        src:new17Img
    },
    {
        link:"",
        src:new18Img
    },
    {
        link:"",
        src:new19Img
    },
    {
        link:"",
        src:new20Img
    },
    {
        link:"",
        src:new21Img
    },
    {
        link:"",
        src:new22Img
    },
    {
        link:"",
        src:new23Img
    },
    {
        link:"",
        src:new24Img
    },
    {
        link:"",
        src:new25Img
    },

]

function Partners(props) {

    return (
        <>
            {/*<div className="wb-topPartners">*/}
            {/*    <div>*/}
            {/*        <img src={topImg} alt="Partenr"/>*/}
            {/*    </div>*/}

            {/*</div>*/}


            <div className="wb-partnersTitle">
                <h2>Sponsors and Partners</h2>
            </div>
            <div className="wb-partnersBlock">


                {/*<div className="wb-partnersContent wb-topPartner">*/}
                {/*    <div className="wb-partner">*/}
                {/*        <div>*/}
                {/*            <a href="https://www.fastbank.am/" target="_blank" rel="nofollow"><img src={img1_1} alt="Partner"/></a>*/}
                {/*            <p>Strategic Partner</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="wb-partner">*/}
                {/*        <div>*/}
                {/*            <a href="https://www.fastex.com/" target="_blank" rel="nofollow"><img src={img1_2} alt="Partner"/></a>*/}
                {/*            <p>General Partner</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div className="wb-partnersContent wb-main-partners">
                    {/*<div className="wb-partner">*/}

                    {/*    <div>*/}
                    {/*        <a href="https://am.intent.ai/auth/login" target="_blank" rel="nofollow"><img src={img1} alt="Partner"/></a>*/}
                    {/*        <p>Digital Innovation Partner</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="wb-partner">*/}

                    {/*    <div>*/}
                    {/*        <a href="https://imnairi.am/" target="_blank" rel="nofollow"><img src={img2} alt="Partner"/></a>*/}
                    {/*        <p>Official Insurance Partner</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="wb-partner">*/}

                    {/*    <div>*/}
                    {/*        <a href="https://www.ardshinbank.am/" target="_blank" rel="nofollow"><img src={img3} alt="Partner"/></a>*/}
                    {/*        <p>Strong Partner</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="wb-partner">*/}

                    {/*    <div>*/}
                    {/*        <a href="https://telcell.am/hy/" target="_blank" rel="nofollow"><img src={img4} alt="Partner"/></a>*/}
                    {/*        <p>Official Payment Partner</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="wb-partner">*/}

                    {/*    <div>*/}
                    {/*        <a href="https://shtigen.com/hy/" target="_blank" rel="nofollow"><img src={img5} alt="Partner"/></a>*/}
                    {/*        <p>Sustainable Partner</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {imgArray.map((img) => {
                        return (
                            <div className={img.widthClass ? `wb-partner ${img.widthClass}` : "wb-partner" }>
                                {img.link !== "" ?
                                    (
                                        <a href={img.link} rel="nofollow" target="_blank">
                                            <img src={img.src} alt="Partner"/>
                                        </a>
                                    )

                                    :

                                    (
                                    <img src={img.src} alt="Partner"/>
                                    )
                                }
                            </div>

                        )
                    })}

                </div>
            </div>
        </>

    )
}

export default Partners;
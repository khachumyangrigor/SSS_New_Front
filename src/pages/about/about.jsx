import React from 'react';
import FootterNew from '../footterNew/footterNew.jsx';
import scrollToComponent from 'react-scroll-to-component';
import Img from 'react-image';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import { Link } from 'react-router-dom';

// css
import './about.css';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            galery: {
                "uae2021": [
                    "sevan2016",
                    "SSSholidays —",
                    "49.jpg",
                    "50.jpg",
                    "https://www.youtube.com/embed/EPldXGsNEbU",
                    "51.jpg",
                    "52.jpg",
                    "53.jpg",
                    "54.jpg",
                    "55.jpg",
                    "56.jpg",
                    "sevan2019"
                ],
                "sevan2019": [
                    "uae2021",
                    "SEVAN STARTUP SUMMIT 2019 —",
                    "1.jpg",
                    "2.jpg",
                    "https://www.youtube.com/embed/2EQFRmIHSBs",
                    "3.jpg",
                    "4.jpg",
                    "5.jpg",
                    "6.jpg",
                    "7.jpg",
                    "8.jpg",
                    "sevan2018"
                ],
                "sevan2018": [
                    "sevan2019",
                    "SEVAN STARTUP SUMMIT 2018 —",
                    "9.jpg",
                    "10.jpg",
                    "https://www.youtube.com/embed/FkDxAiIaLzY",
                    "11.jpg",
                    "12.jpg",
                    "13.jpg",
                    "14.jpg",
                    "15.jpg",
                    "16.jpg",
                    "india18"
                ],
                "india18": [
                    "sevan2018",
                    "SEASIDE STARTUP SUMMIT INDIA GOA —",
                    "25.jpg",
                    "26.jpg",
                    "https://www.youtube.com/embed/3l5_QQv2d2g",
                    "27.jpg",
                    "28.jpg",
                    "29.jpg",
                    "30.jpg",
                    "31.jpg",
                    "32.jpg",
                    "uae18"
                ],
                "uae18": [
                    "india18",
                    "SEASIDE STARTUP SUMMIT UAE RAK —",
                    "17.jpg",
                    "18.jpg",
                    "https://www.youtube.com/embed/7RG0wH9t3UA",
                    "19.jpg",
                    "20.jpg",
                    "21.jpg",
                    "22.jpg",
                    "23.jpg",
                    "24.jpg",
                    "sevan2017"
                ],

                "sevan2017": [
                    "india18",
                    "SEVAN STARTUP SUMMIT 2017 —",
                    "33.jpg",
                    "34.jpg",
                    "https://www.youtube.com/embed/30JZ1-fd-SQ",
                    "35.jpg",
                    "36.jpg",
                    "37.jpg",
                    "38.jpg",
                    "39.jpg",
                    "40.jpg",
                    "sevan2016"
                ],
                "sevan2016": [
                    "sevan2017",
                    "SEVAN STARTUP SUMMIT 2016 —",
                    "41.jpg",
                    "42.jpg",
                    "https://www.youtube.com/embed/j2D2o7C0xoY?list=PLCcLpJIHQ5vf0Sru8mg0P7T8xWt5SiMb1",
                    "43.jpg",
                    "44.jpg",
                    "45.jpg",
                    "46.jpg",
                    "47.jpg",
                    "48.jpg",
                    "uae2021"
                ]
            },
            galeryArr: [
                "sevan2016",
                "SEVAN STARTUP SUMMIT 2019 —",
                "49.jpg",
                "50.jpg",
                "https://www.youtube.com/embed/EPldXGsNEbU",
                "51.jpg",
                "52.jpg",
                "53.jpg",
                "54.jpg",
                "55.jpg",
                "56.jpg",
                "sevan2019"
            ],
            galeryTitle: 'SSSholidays —',
            galeryNext: 'sevan2019',
            galeryPrev: 'sevan2016',
            imgSrc: '49.jpg',
        }
        this.scrollY=0;

    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.scrollTo(0, 0);
        this.refs.headerText.style.opacity=1;
        if(this.props.match.path.split('/')[2]==='job'){
            this.scrollToJob()
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
    }
    winScroll=()=>{
        if(window.innerWidth>1024){
           if(window.scrollY<this.refs.aboutTop.offsetHeight-this.refs.headerText.offsetHeight-this.refs.headerText.offsetTop){
                this.refs.headerText.classList.add('headfixed');
           }
           else this.refs.headerText.classList.remove('headfixed');
            if (this.scrollY<window.scrollY){
                if(parseFloat(this.refs.headerText.style.opacity)>0){
                    this.refs.headerText.style.opacity=parseFloat(this.refs.headerText.style.opacity)-(0.01);
                }
                // down
                this.scrollY=window.scrollY+1;
            }
            else if(this.scrollY>window.scrollY){
                if(parseFloat(this.refs.headerText.style.opacity)<1 && window.scrollY<this.refs.aboutTop.offsetHeight-this.refs.headerText.offsetHeight-this.refs.headerText.offsetTop){
                    this.refs.headerText.style.opacity=parseFloat(this.refs.headerText.style.opacity)+(0.01);
                }
                if(window.scrollY<=1)this.refs.headerText.style.opacity=1;
                // up
                this.scrollY=window.scrollY-1;
            }       
        }
        else{
            this.refs.headerText.classList.remove('headfixed');
            this.refs.headerText.style.opacity=1;
        }
    }
    shuttleOpen = () => {
        this.refs.shuttle.classList.add('vihacleFullOpen');
        // this.refs.car.classList.remove('vihacleFullOpen');
        this.refs.shuttle.classList.remove('vihacleFullClose');
        // this.refs.car.classList.add('vihacleFullClose');
    }
    carOpen = () => {
        this.refs.car.classList.add('vihacleFullOpen');
        // this.refs.shuttle.classList.remove('vihacleFullOpen');
        this.refs.car.classList.remove('vihacleFullClose');
        // this.refs.shuttle.classList.add('vihacleFullClose');
    }
    galeryNext = () => {
        let { galery } = this.state;
        this.setState({
            galeryArr: galery[this.state.galeryNext]
        }, this.setState({
            galeryTitle: galery[this.state.galeryNext][1],
            galeryNext: galery[this.state.galeryNext][11],
            galeryPrev: galery[this.state.galeryNext][0]
        }));
    }
    galeryPrev = () => {
        let { galery } = this.state;
        this.setState({
            galeryArr: galery[this.state.galeryPrev]
        }, this.setState({
            galeryTitle: galery[this.state.galeryPrev][1],
            galeryNext: galery[this.state.galeryPrev][11],
            galeryPrev: galery[this.state.galeryPrev][0]
        }));
    }
    ImgOpen = (e) => {
        this.refs.imgOpen.style.display = "flex";
        let mainSrc = e.target.src;
        let Id = Number(e.target.id);
        let NextId;
        let PrevId;
        Id === 10 ? NextId = 2 : NextId = Id + 1 !== 4 ? Id + 1 : Id + 2;
        Id === 2 ? PrevId = 10 : PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2;
        this.refs.imgOpenImg.src = mainSrc;
        this.refs.GalleryOpenPrev.id = PrevId;
        this.refs.GalleryOpenNext.id = NextId;
    }
    galleryOpenNext = (e) => {
        e.stopPropagation();

        let Id = Number(e.currentTarget.id);
        this.setState({ imgSrc: this.state.galeryArr[Id] });
        let NextId;
        let PrevId;
        Id === 10 ? NextId = 2 : NextId = Id + 1 !== 4 ? Id + 1 : Id + 2;
        Id === 2 ? PrevId = 10 : PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2;
        this.refs.GalleryOpenPrev.id = PrevId;
        this.refs.GalleryOpenNext.id = NextId;
    }
    galleryOpenPrev = (e) => {
        e.stopPropagation();

        let Id = Number(e.currentTarget.id);
        this.setState({ imgSrc: this.state.galeryArr[Id] });
        let NextId;
        let PrevId;
        Id === 10 ? NextId = 2 : NextId = Id + 1 !== 4 ? Id + 1 : Id + 2;
        Id === 2 ? PrevId = 10 : PrevId = Id - 1 !== 4 ? Id - 1 : Id - 2;
        this.refs.GalleryOpenPrev.id = PrevId;
        this.refs.GalleryOpenNext.id = NextId;
    }
    elemClose = () => {
        this.refs.imgOpen.style.display = "none";
    }

    scrollToJob=()=>{
        scrollToComponent(this.refs.job, {
            offset: -200,
            align: 'top',
            duration: 800
        });
    }

    render = () => {
        return (
            <Fragment>
            <Helmet>
                <title>About Us | Seaside Startup Summit</title>
                <meta name="description" content="Seaside Startup Summit is about Connect,Learn,Win and Have Fun.Here you can find information about Founders,Vacancies,Gallery." />
                <meta property="og:title" content="Check Our Upcoming and Past Events | Seaside Startup Summit" />
                <meta property="og:url" content={`https://www.seasidestartupsummit.com/event`} />
                <meta property="og:image" content="http://seasidestartupsummit.com/ogImage/about_us.jpg" />
                <meta property="og:description" content="Seaside Startup Summit is about Connect,Learn,Win and Have Fun.Here you can find information about Founders,Vacancies,Gallery." />
            </Helmet>
            <div className="aboutNew">
                <div className="galleryOpen" ref="imgOpen"  onClick={(e)=>this.elemClose(e)}>
                    <div className="imgClose" onClick={this.elemClose}><span /><span /></div>
                    <div>
                        <div className="GalleryOpenPrev" ref="GalleryOpenPrev" onClick={(e) => this.galleryOpenPrev(e)}><i /></div>
                        <div className="GalleryOpenBox"><img ref="imgOpenImg" src={require(`./img/gallery/${this.state.imgSrc}`)} alt={this.state.imgSrc} /></div>
                        <div className="GalleryOpenNext" ref="GalleryOpenNext" onClick={(e) => this.galleryOpenNext(e)}><i /></div>
                    </div>
                </div>
                {/* <div className="job_alart">
                    <button onClick={this.scrollToJob}>join our team</button>
                    <small>— PLEASE CHECK OUR VACANCIES —</small>
                </div> */}
                <div className="aboutTop" ref="aboutTop">
                    <div ref="headerText">
                        <h1>PLATFORM CREATED</h1>
                        <h3>BY ENTREPRENEURS FOR ENTREPRENEURS</h3>
                        <p>Seaside Startup Summit</p>
                    </div>
                </div>
                <Header/>
                <div className="aboutInfo">
                    <div className="aboutInfo_left">
                        <h2>Seaside Startup Summit</h2>
                        <p>The platform attracts leading angels, venture capitalists, entrepreneurs, and policymakers willing to join their peers in an intimate setting to think, act, and transform their environment via entrepreneurship.</p>
                        {/* <a  className="passiveBtn noupcomming">Get Your Pass</a> */}
                        <Link to="/sss-holidays-india-vizag">Get Your Pass</Link>
                    </div>
                    <div className="aboutInfo_right">
                        <iframe title="infoFrame" src="https://www.youtube.com/embed/jPS5TNVXYfI" frameBorder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="aboutStatus">
                    <h3>WHAT IS IT ALL ABOUT</h3>
                    <div className="status">
                        <h3>Connect</h3>
                        <p>Expand your network and get new opportunities</p>
                    </div>
                    <div className="status">
                        <h3>Learn</h3>
                        <p>Get knowledge and explore the business ecosystem</p>
                    </div>
                    <div className="status">
                        <h3>Win</h3>
                        <p>While pitching<br />While investing</p>
                    </div>
                    <div className="status">
                        <h3>Have Fun</h3>
                        <p>Enjoy your time during the summit we’ll make it unforgettable</p>
                    </div>
                    <div className="buutonBox">
                        <a href="/events">Check our events</a>
                    </div>
                </div>
                <div className="teamBox">
                    <div className="subTeam">
                        <h3>FOUNDERS</h3>
                        {/* <h4>— MANAGEMENT TEAM —</h4> */}
                        <div className="teamImgBox">
                            <div>
                                <div><img src={require('./img/team/Artur.jpg')} alt="co-founder" /></div>
                                <h3>Artur Janibekyan</h3>
                                <p>Co-founder</p>
                                <a href="https://en.wikipedia.org/wiki/Artur_Janibekyan" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Hakob.png')} alt="co-founder" /></div>
                                <h3>Hakob Hakobyan</h3>
                                <p>Co-founder</p>
                                <a href="https://www.linkedin.com/in/hakob-hakobyan-sss/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Tiran.png')} alt="co-founder" /></div>
                                <h3>Tiran Hakobyan</h3>
                                <p>Co-founder</p>
                                <a href="https://www.linkedin.com/in/tiran-hakobyan-a74539a3/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="subTeam">
                        <h4>— BUSINESS DEVELOPMENT, FINANCIAL, MARKETING AND PORTFOLIO SUPPORT —</h4>
                        <div className="teamImgBox">
                            <div>
                                <div><img src={require('./img/team/Hovhanes.png')} alt="team member" /></div>
                                <h3>Hovhannes Yeritsyan</h3>
                                <p>Business Development Director</p>
                                <a href="https://www.linkedin.com/in/hovhannes-yeritsyan-665440ab/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Arshak.png')} alt="team member" /></div>
                                <h3>Arshak Karapetyan</h3>
                                <p>Micro-acceleration Lead</p>
                                <a href="https://www.linkedin.com/in/arshak-karapetyan/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Avag.png')} alt="team member" /></div>
                                <h3>Avag Simonyan</h3>
                                <p>Marketing TeamLead</p>
                                <a href="https://www.linkedin.com/in/sssimonyan/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Arsen.png')} alt="team member" /></div>
                                <h3>Arsen Harutyunyan</h3>
                                <p>Operations Manager</p>
                                <a href="https://www.linkedin.com/in/arsen-harutyunyan-a11424b3/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Tigran.png')} alt="team member" /></div>
                                <h3>Tigran Petrosyan</h3>
                                <p>Entertainment TeamLead</p>
                                <a href="https://www.linkedin.com/in/tigran-petrosyan-588399114/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                        </div>
                    </div>
                    <div className="subTeam">
                        <h4>— DIGITAL AND IT SUPPORT —</h4>
                        <div className="teamImgBox">
                            <div>
                                <div><img src={require('./img/team/Edgar.jpg')} alt="team member" /></div>
                                <h3>Edgar Abrahamyan</h3>
                                <p>IT TeamLead</p>
                                <a href="https://www.linkedin.com/in/edgar-abrahamyan-429a74164/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Artak.jpg')} alt="team member" /></div>
                                <h3>Artak Gevorgyan</h3>
                                <p>SEO Specialist</p>
                                <a href="https://www.linkedin.com/in/artak-gevorgyann/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                            <div>
                                <div><img src={require('./img/team/Hendrik.jpeg')} alt="team member" /></div>
                                <h3>Henrik Pangradyan</h3>
                                <p>CDO</p>
                                <a href="https://www.linkedin.com/in/hendo-pangradyan-70b132141/" target="_blank" rel="noopener noreferrer"><i /></a>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="upcommingReach vihacle_about" ref="job">
                    <h2>Join the team</h2>
                    <p>— Please check our vacancies —</p>
                    <div className="upcommingReach_middle">
                        {/*<div className="vacanciasListBox">
                            <Link to="/about-us/job/content-development-specialist">
                                <div className="infoIconBoxKnow">
                                    <div>
                                        <img src={require(`./img/icon/job.png`)} alt="info" />
                                    </div>
                                    <span>Content Development Specialist</span>
                                </div>
                            </Link>
                            <Link to="/about-us/job/international-regional-manager">
                                <div className="infoIconBoxKnow">
                                    <div>
                                        <img src={require(`./img/icon/job.png`)} alt="info" />
                                    </div>
                                    <span>International Regional Manager</span>
                                </div>
                            </Link>
                            <Link to="/about-us/job/project-manager">
                                <div className="infoIconBoxKnow">
                                    <div>
                                        <img src={require(`./img/icon/job.png`)} alt="info" />
                                    </div>
                                    <span>Project Manager</span>
                                </div>
                            </Link>
                        </div>*/}
                        <div className="vihacle" ref="shuttle">
                            <div className="vihacleBox">
                                <div >
                                    <img src={require('./img/icon/1.png')} alt="shuttle" />
                                </div>
                                <button onClick={this.shuttleOpen}>Job vacancies</button>
                            </div>
                            <div className="vihacleOpen">
                                <div className="vihacleOpenIN">
                                    <p>There are no current openings, please check back soon </p>
                                </div>
                            </div>
                            <div className="border" />
                        </div>
                    </div>
                </div>
                <div className="aboutGallery">
                    <div className="galleryHead">
                        <h3>Our Gallery</h3>
                        <div>
                            <h4>{this.state.galeryTitle}</h4>
                            <div>
                                <span onClick={this.galeryPrev} />
                                <span onClick={this.galeryNext} />
                            </div>
                        </div>
                    </div>
                    <div className="galleryBody" >
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[2]}`)} decode={false} id="2" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[3]}`)} decode={false} id="3" alt="gallery" /></div>
                        <div><iframe src={`${this.state.galeryArr[4]}`} title="frem193" frameBorder="0"></iframe></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[5]}`)} decode={false} id="5" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[6]}`)} decode={false} id="6" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[7]}`)} decode={false} id="7" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[8]}`)} decode={false} id="8" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[9]}`)} decode={false} id="9" alt="gallery" /></div>
                        <div onClick={(e) => this.ImgOpen(e)}><Img src={require(`./img/gallery/${this.state.galeryArr[10]}`)} decode={false} id="10" alt="gallery" /></div>
                    </div>
                    <div className="galleryFootter">
                        The photographs and video materials contained on this site are the property of Seaside Startup Summit LLC and are protected by International copyright laws. All copyright, trademark, and other intellectual property rights in this site, are the property of Seaside Startup Summit LLC. Those persons who wish to use the photography found on this site in a commercial purpose must receive written consent from Seaside Startup Summit LLC, prior to its commercial use.
                    </div>
                </div>
                <FootterNew ref="footter" />
            </div>
            </Fragment>
        )
    }
}

export default About;
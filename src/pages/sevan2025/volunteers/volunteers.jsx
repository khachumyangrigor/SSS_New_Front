import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import ValunteersForm from './form.jsx';
import FootterNew from '../../footterNew/footterNew.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import './volunteers.css';

class ValunteersPage extends React.Component{
    constructor(){
        super();
        this.state={
            imgnum:1,
            person:{
                id:1,
                text:'Great time, unforgettable memories, victorious moments, new friends, and new goals. We can continue this series endlessly to describe the uniqueness of SSS, which provides unprecedented opportunities for the people living in different countries. I have been participating in the event as a volunteer for 2 years, and all those who want to become more purposeful, make new friends, win and realize their dreams I say: - Welcome to Seaside Startup Summit.',
                link:'https://www.facebook.com/hakob.grigoryan.75',
                name:'Grigoryan Hakob',
                time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                img:'Hakob Grigoryan.jpg',
            },
            textOpeningWhatIs:"More",
        }
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        if(window.localStorage.getItem('msg')!==undefined && window.localStorage.getItem('msg')!==""){
            window.scrollTo(0, 0);
        }
    }
    winScroll = () => {
        if (this.refs.topMenu !== undefined) {
            if (window.scrollY >= window.innerHeight) {
                this.refs.topMenu.classList.add('topMenuFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.topMenu.classList.remove('topMenuFix');
            }
        }
    }
    handelScrollIntoView = () => {
        scrollToComponent(this.refs.footter, {
            offset: this.refs.footter.offsetHeight,
            align: 'top',
            duration: 800
        });
    }
    handelScrollTo = elem => {
        scrollToComponent(elem, {
            offset: -200,
            align: 'top',
            duration: 800
        });
    }
    menuOpen = () => {
        if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
            this.refs.menuIcon.classList.remove("minmenuIconOpen");
            this.refs.menuBox.classList.remove("minmenuBoxOpen");
        }
        else {
            this.refs.menuIcon.classList.add("minmenuIconOpen");
            this.refs.menuBox.classList.add("minmenuBoxOpen");
        }
    }

    menueClose = () => {
        this.menuOpen();
    }
    handelNextPerson=()=>{
        const {person}=this.state;
        if(person.id!==20)person.id+=1;
        else person.id=1;
        this.changePerson(person.id);
        this.setState({imgnum:person.id});
    }
    handelPrevPerson=()=>{
        const {person}=this.state;
        if(person.id!==1)person.id-=1;
        else person.id=20;
        this.changePerson(person.id);
        this.setState({imgnum:person.id});

    }
    changePerson=(id)=>{
        switch(id){
            case 1:
                this.setState({person:{
                    id:1,
                    text:'Great time, unforgettable memories, victorious moments, new friends, and new goals. We can continue this series endlessly to describe the uniqueness of SSS, which provides unprecedented opportunities for the people living in different countries. I have been participating in the event as a volunteer for 2 years, and all those who want to become more purposeful, make new friends, win and realize their dreams I say: - Welcome to Seaside Startup Summit.',
                    link:'https://www.facebook.com/hakob.grigoryan.75',
                    name:'Grigoryan Hakob',
                    time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                    img:'Hakob Grigoryan.jpg',
                }});
                break;
            case 2:
                this.setState({person:{
                    id:2,
                    text:"#SSS19 was a huge success and I'm really lucky to have become a part of it. It was an amazing experience for me as a person and a guest service specialist. SSS gave me a wonderful opportunity to get to know people from various spheres and share their ideas of a unique future. Fun, joy, knowledge, amazing people, freedom, and experience. I can surely say that it was the best week of my life. One should participate in it to feel complete. So, hurry up!",
                    link:'https://www.facebook.com/mariam.khachikyan',
                    name:'Khachikyan Mariam',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Mariam Khachikyan.jpg',
                }});
                break;
            case 3:
                this.setState({person:{
                    id:3,
                    text:"I am Armik and I have been a volunteer in Guest Service Team during #SSS2019. My experience as an SSS volunteer was about unending chances of networking with different professionals. It was all about creating new connections, making new friends, gaining valuable experience and of course having lots of fun.",
                    link:'https://www.facebook.com/armik.israyelyan',
                    name:'Israyelyan Armik',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Armik Israyelyan.jpg',
                }});
                break;
            case 4:
                this.setState({person:{
                    id:4,
                    text:"Once an SSS member, always an SSS member! One of the greatest experiences in my life is definitely SSS 19. I can recall every detail of it: from the first day of meeting my coordinators and team-members up to say 'goodbye'  I had an insight into a world of young startuppers, whose motivation and inspiration are infectious. I am really thankful to SSS for the trustworthy friends I got there. They are the people with whom I shared daily issues and duties, free time, and more.",
                    link:'https://www.facebook.com/mkhitaryan26',
                    name:'Mkhitaryan Alla',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Alla Mkhitaryan.jpg',
                }});
                break;
            case 5:
                this.setState({person:{
                    id:5,
                    text:"The SSS allowed to gain a profound insight into the Armenian startup ecosystem, engage in and learn from informative discussions with industry experts, network with professionals, meet inspiring startuppers, and get motivated by their brilliant ideas. Combined with a vibrant atmosphere at the shore of Lake Sevan and plenty of fun with a good company, days spent at the summit created the most impressive memories that will last a lifetime.",
                    link:'https://www.facebook.com/narine.davtyan.5872',
                    name:'Davtyan Narine',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Narine Davtyan.jpg',
                }});
                break;
            case 6:
                this.setState({person:{
                    id:6,
                    text:"I took part in SSS18 and SSS19. Both events were fantastic. I enjoyed those days and discovered a lot of interesting things to me, also I got new friends and they are like family to me. I definitely will take part in future events of the Seaside Startup Summit as it gives many opportunities.",
                    link:'https://www.facebook.com/astxik.hovhannisyan.58',
                    name:'Hovhannisyan Astghik',
                    time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                    img:'Astghik Hovhannisyan.jpg',
                }});
                break;
            case 7:
                this.setState({person:{
                    id:7,
                    text:"Sevan Startup Summit is a family and being a member of this family is a blessing. I have experienced unforgettable, magical, and wonderful feelings in the SSS19. I will say that the most amazing thing about staying at SSS19 is the staff who were so friendly and supportive. Keep up the good work-you are just amazing!",
                    link:'https://www.facebook.com/profile.php?id=100017872512086',
                    name:'Avetisyan Lara',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Lara Avetisyan.jpg',
                }});
                break;
            case 8:
                this.setState({person:{
                    id:8,
                    text:"I volunteered in SSS 2019, and it was one of the most fun, educational, and interesting events of my life. I’ve met many wonderful people, learned ideas and technical knowledge from different startuppers, had everyday parties, and other exciting activities in between. But overall, the most valuable experience was probably human connections made.",
                    link:'https://www.facebook.com/mikayel.bej',
                    name:'Bejanyan Mikayel',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Mikayel Bejanyan.jpg',
                }});
                break;
            case 9:
                this.setState({person:{
                    id:9,
                    text:"Sevan Startup Summit is a place where you can become part of a large family. There are many different people from around the world, but you still find common interests with them and gain new friends.  Sevan Startup Summit gives a great experience, both as professional knowledge and as a human relationship. It is an event that will remain in a person’s heart for life. These are evening songs by the fire, beach volleyball, evening parties, celebrities,  and camping life.",
                    link:'https://www.facebook.com/profile.php?id=100002421500441',
                    name:'Mnatsakanyan Vilen',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Vilen Mnatsakanyan.jpg',
                }});
                break;
            case 10:
                this.setState({person:{
                    id:10,
                    text:"I am Levon Yepiskoposyan. I have already participated in many voluntary events. I especially want to focus on the Sevan Startup Summit 2019. There are too many reasons for highlighting it but let’s single out two of them. The first reason is the speakers. Due to them I gained some knowledge about different spheres and got motivated. The second is the perfect volunteers that the organizers have chosen.  We had effective results during the work and we also enjoyed the time spent there with each other.",
                    link:'https://www.facebook.com/lev.yepis',
                    name:'Yepiskoposyan Levon',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Levon Yepiskoposyan.jpg',
                }});
                break;
            case 11:
                this.setState({person:{
                    id:11,
                    text:"Sevan Startup Summit was a perfect opportunity for me to enhance my knowledge on different topics, to create new networks and connections. I feel grateful for having a chance to be a part of this big family.",
                    link:'https://www.facebook.com/gagik.harutyunyan.9212',
                    name:'Harutyunyan Gagik',
                    time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                    img:'Gagik Harutyunyan.jpg',
                }});
                break;
            case 12:
                this.setState({person:{
                    id:12,
                    text:"SSS19 was definitely Armenia’s greatest event of the year. Volunteering at the startup I developed my communication and collaboration skills, gained invaluable and practical startup knowledge, and made lots of friends. I highly enjoyed being a part of this event.",
                    link:'https://www.facebook.com/sahak.levonyan.55',
                    name:'Levonyan Sahak',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Sahak Levonyan.jpg',
                }});
                break;
            case 13:
                this.setState({person:{
                    id:13,
                    text:"Hello. I am Taguhi Torozyan and I was a volunteer in Sevan Startup Summit. I worked as a media team member by writing content and making interviews with participants and startupers. I enjoyed every single moment of my work and got unlimited information about startup field. I had a chance to take part in panel discussions, campfire talks, presentations and communicate with like-minded people.",
                    link:'https://www.facebook.com/profile.php?id=100005622180758',
                    name:'Torozyan Taguhi',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Taguhi Torozyan.jpg',
                }});
                break;
            case 14:
                this.setState({person:{
                    id:14,
                    text:"Participating in the Sevan Startup Summit as a volunteer allowed me to further develop great written and verbal communication skills, to meet bright-minded and ambitious people from all over the world, and to get motivated by various motivational speakers' personal experiences. I genuinely hope that the summit keeps on growing, assisting, and guiding innovative startups towards their great success, and hopefully, one day I will find myself among those startups.",
                    link:'https://www.facebook.com/nelli.vardanyan.79',
                    name:'Vardanyan Nelli',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Nelli Vardanyan.jpg',
                }});
                break;
            case 15:
                this.setState({person:{
                    id:15,
                    text:"I’m Arpi and I’ve been a photographer of SSS since 2018. It’s been an adventurous and interesting journey filled with ups and downs that have made me a more responsible and solution-oriented person.  Not only have I gained knowledge and skills but I have also lived in a cozy and friendly environment, made friends, and shared routine with the professionals from different walks of life. Waiting for SSS21 since the last day of SSS2019.",
                    link:'https://www.facebook.com/arpi.stepanyan.5',
                    name:'Stepanyan Arpi',
                    time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                    img:'Arpi Stepanyan.jpg',
                }});
                break;
            case 16:
                this.setState({person:{
                    id:16,
                    text:"I was one of the Info Squad members of #SSS18 and #SSS19, which were great summer events. I got acquainted with new amazing people and gained a lot of useful information about startups overall and the ways of their realization. The events were organized really good and I think it's a wonderful opportunity to learn, teach and have fun at the same time.",
                    link:'https://www.facebook.com/natali.ayvazyan.1',
                    name:'Ayvazyan Natalie',
                    time:'Volunteer at Sevan Startup Summit 2018 & 2019',
                    img:'Natalie Ayvazyan.jpg',
                }});
                break;
            case 17:
                this.setState({person:{
                    id:17,
                    text:"Hi. I am Gor and I was a volunteer in Rapid Response Team during SSS19. SSS is a wonderful place to enrich your knowledge, gain experience, make friends and why not admire the wonderful view of Sevan. I'm so glad, that I was a part of SSS19, because I enjoyed every moment, developed my skills and of course had lots of fun.",
                    link:'https://www.facebook.com/gor.greyan',
                    name:'Greyan Gor',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Gor Greyan.jpg',
                }});
                break;
            case 18:
                this.setState({person:{
                    id:18,
                    text:"Surely SSS is the best event I’ve ever been to. SSS19 gave me unforgettable emotions and charged with energy. I learned a lot, gained communication skills, got many friends, and had fun. I’m looking forward to SSS20 because now I can’t imagine my summertime without it.",
                    link:'https://www.facebook.com/ruben.zakaryan.12',
                    name:'Zakaryan Ruben',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Ruben Zakaryan.jpg',
                }});
                break;
            case 19:
                this.setState({person:{
                    id:19,
                    text:"Hi, I am Gohar. I volunteered with the Guest Service team at #SSS19.  I supported my team and the organizers, as well as met creative and innovative minds from around the world. This was a great experience to remember and repeat!",
                    link:'https://www.facebook.com/profile.php?id=100000686218571&_rdc=1&_rdr',
                    name:'Aznauryan Gohar',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Gohar Aznauryan.jpg',
                }});
                break;
            case 20:
                this.setState({person:{
                    id:20,
                    text:"Being a volunteer at Sevan Startup Summit for the last couple of years, it has been an awesome journey for me. We have been given many opportunities of meeting startuppers and entrepreneurs both from Armenia and other countries. All the volunteers, startuppers, mentors, and the staff made my learning and communicating experiences extremely fun and valuable.",
                    link:'https://www.facebook.com/ArmanUnusyann',
                    name:'Unusyan Arman',
                    time:'Volunteer at Sevan Startup Summit 2019',
                    img:'Arman Unusyan.jpg',
                }});
                break;
            default: break;
        }
    }

    textOpeningWhatIs=()=>{
        const { textOpeningWhatIs } = this.state;
        if( textOpeningWhatIs==="More"){
            this.setState({
                textOpeningWhatIs:"Less"
            })
        }
        else {
            this.setState({
                textOpeningWhatIs:"More"
            })
        }
    }
    render=()=>{
        return(
            <Fragment>
            <Helmet>
                <title>Become a Volunteer | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew_volunteers">
                <div className="volunteersBanner">
                    <div className="volunteersBannerTop">
                        <h2>Here you can come to learn,</h2>
                        <h2>to experience, to exchange </h2>
                        <h2>& to grow</h2>
                    </div> 
                    <div className="volunteersBannerBottom">
                        <h3>Sevan Startup Summit 2022</h3>
                        <h4>july 24-30</h4>
                    </div>            
                </div>
                <div className="firstPageHeader" ref="topMenu">
                    <div className="firstPageHeaderLeft">
                        <Link to="/"><img src={require('../img/tent.png')} alt="HOME" /></Link>
                    </div>
                    <div className="firstPageHeaderMiddle">
                        <ul>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            {/* <li><Link to="/startups">Startups</Link></li> */}
                            <li><Link to="/partners">Partners</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link  to="/merch">Merch</Link></li>
                            <li onClick={this.handelScrollIntoView}>Contacts</li>
                        </ul>
                    </div>
                    <div className="firstPageHeaderRight">
                        {/* <Link className="agendaIcon" to="/agenda"><img src={require('../img/agenda.png')} alt="Agenda" title="Coming Soon" /></Link> */}
                        <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                        <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy Tickets</a>
                    </div>
                    <div className="firstPageHeaderRight Mobi">
                         <a href="https://www.f6s.com/sevan-startup-summit-2022/apply" target="_blank" rel="noopener noreferrer">Apply as Startup</a>
                         <a href="https://www.pay.seasidestartupsummit.com/visitor/" target="_blank" rel="noopener noreferrer" >Buy <i/></a>
                    </div>
                    <div className="minmenuIcon" ref="menuIcon" onClick={this.menuOpen}> <span /> <span /> <span /></div>
                    <div className="minmenuBox" ref="menuBox" onClick={this.menueClose}>
                        <div className="firstPageHeaderMiddle">
                            <ul>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                {/* <li><Link to="/startups">Startups</Link></li> */}
                                <li><Link to="/partners">Partners</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link  to="/merch">Merch</Link></li>
                                <li onClick={this.handelScrollIntoView}>Contacts</li>
                                {/* <li>Agenda</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="valunteersNums" >
                    <div className="upcommingPageStatistic">
                        <div className="statisticItemBox">
                            <div className="statisticItem"><div><span >500</span>+</div><span>Volunteers</span></div>
                            <div className="borderNum"/>
                            <div className="statisticItem"><div><span >13</span>% </div><span>Acceptance rate</span></div>
                            <div className="borderNum"/>
                            <div className="statisticItem"><div><span >68</span>% </div><span>Retention rate</span></div>
                        </div>
                    </div>
                </div>
                <div className="valunteersOppartunitis" ref="guid">
                    <h3 className="subtitle">Why apply</h3>
                    <div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt1.png')} alt="optImg"/></div>
                            <p>gain new skills, knowledge and experience</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt2.png')} alt="optImg"/></div>
                            <p>meet new people and make new friends</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt3.png')} alt="optImg"/></div>
                            <p>spend quality time away from work</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt4.png')} alt="optImg"/></div>
                            <p>Improve employment prospects</p>
                        </div>
                        <div className="opartunnitisItem">
                            <div><img src={require('./img/icons/opt5.png')} alt="optImg"/></div>
                            <p>Gain confidence and self-esteem</p>
                        </div>
                    </div>
                </div>
                <div className="volunteersType" ref="opportunities">
                    <h3 className="subtitle">Main Types of Volunteering</h3>
                    <div className="volunteersTypeItem">
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type2.png')} alt="opportunities" /></div>
                                    <h4>GRAND ENTRY</h4>
                                </div>
                                <div className="back">
                                    <h4>GRAND ENTRY</h4>
                                    <p>These volunteers assist with grand entry procedures, requirements, and activities. Volunteers help with participant passes and escorts to the event grounds. They also are responsible for shuttle services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type1.png')} alt="opportunities" /></div>
                                    <h4>MEET AND GREET TEAM</h4>
                                </div>
                                <div className="back">
                                    <h4>MEET AND GREET TEAM</h4>
                                    <p>The team is responsible for organizing the meet and greet of the international guests, speakers, and special attendees, escorting them from airport and/or other transportation hubs to the venue and/or hotels.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type4.png')} alt="opportunities" /></div>
                                    <h4>CONTENT RELATED SERVICES</h4>
                                </div>
                                <div className="back">
                                    <h4>CONTENT RELATED SERVICES</h4>
                                    <p>Content team volunteers are responsible for the technical management of the auditoriums and campfires. They support speakers, mentors, startuppers, and jury by guiding through the agenda and providing content-related information.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type3.png')} alt="opportunities" /></div>
                                    <h4>DIRECTIONS & ASSISTANCE</h4>
                                </div>
                                <div className="back">
                                    <h4>DIRECTIONS & ASSISTANCE</h4>
                                    <p>These Volunteers are responsible for assisting attendees with information and directions around the event grounds. They are responsible for the care of lost children, for the operation of the lost and found room, and distribution of the visitors guide and agenda.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type5.png')} alt="opportunities" /></div>
                                    <h4>MEDIA TEAM</h4>
                                </div>
                                <div className="back">
                                    <h4>MEDIA TEAM</h4>
                                    <p>Media team is responsible for content writing during the talks, workshops, and masterclasses. They are also responsible for interviewing various participants, such as startupers, speakers, and/or special guests.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type6.png')} alt="opportunities" /></div>
                                    <h4>Photo-Video Production</h4>
                                </div>
                                <div className="back">
                                    <h4>Photo-Video Production</h4>
                                    <p>These volunteers are responsible for photo and video shooting of various activities during the event. They must follow the agenda and prepare materials covering each activity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type7.png')} alt="opportunities" /></div>
                                    <h4>Technical support</h4>
                                </div>
                                <div className="back">
                                    <h4>Technical support</h4>
                                    <p>The technical team is responsible for the conduction of various sets of technical operations, such as warehouse management, parking zone control, beach maintenance. These volunteers also act as a quick response team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    <div><img src={require('./img/icons/type8.png')} alt="opportunities" /></div>
                                    <h4>Entertainment</h4>
                                </div>
                                <div className="back">
                                    <h4>Entertainment</h4>
                                    <p>These volunteers work under the direct supervision of the entertainment Teamlead and are responsible for the organization of various sport, art & gaming events, and contests. They also act as a support team for the DJs and professional entertainers.</p>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
                <div className="volunreersGuid" ref="how">
                    <h3 className="subtitle">How To Apply</h3>
                    <div className="guidItems">
                        <div onMouseOver={()=>this.refs.i1.classList.add('scaleBig')} onMouseOut={()=>this.refs.i1.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid1.png')} alt="guid1" /></div>
                            <h4>— Application —</h4>
                            <p>You will need to fill in our application form to apply. Please keep in mind, that provision of accurate information is essential, as it helps us provide you the best experience.</p>
                        </div><i ref="i1"/>
                        <div onMouseOver={()=>this.refs.i2.classList.add('scaleBig')} onMouseOut={()=>this.refs.i2.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid2.png')} alt="guid2" /></div>
                            <h4>— Assessment & Interview —</h4>
                            <p>All the applied Volunteers pass a screening process and the accepted ones are interviewed</p>
                        </div><i ref="i2"/>
                        <div onMouseOver={()=>this.refs.i3.classList.add('scaleBig')} onMouseOut={()=>this.refs.i3.classList.remove('scaleBig')}>
                            <div><img src={require('./img/icons/guid4.png')} alt="guid4" /></div>
                            <h4>— Pre-event training —</h4>
                            <p>All the preselected candidates pass one-month training session and top applicants are selected and distributed into working groups</p>
                        </div><i ref="i3"/>
                        <div>
                            <div><img src={require('./img/icons/guid3.png')} alt="guid3" /></div>
                            <h4>— Time to work —</h4>
                            <p>During the 7 days of the Summit, you will have to support the organizers to conduct the best event ever.</p>
                        </div>
                    </div>
                </div>
                <div className="volunteersPeople">
                    <h3 className="subtitle">Meet Our Previous Volunteers</h3>
                    <div>
                        <div>
                            <p className={`${this.state.textOpeningWhatIs}`}>{this.state.person.text}</p>
                            <button className="textOpening" onClick={()=>{this.textOpeningWhatIs()}}>See {this.state.textOpeningWhatIs}</button>
                            <div>
                                <a href={this.state.person.link} target="_blank" rel="noopener noreferrer"><img src={require('./img/icons/fb.png')} alt="fb"/></a>
                                <div>
                                    <p>{this.state.person.name}</p>
                                    <span>{this.state.person.time}</span>
                                </div>
                            </div>
                            <div>
                                <i onClick={this.handelPrevPerson}/><span>{this.state.imgnum}/20</span><i onClick={this.handelNextPerson}/>
                                
                            </div>
                        </div>
                        <div>
                            <img src={require(`./img/people/${this.state.person.img}`)} alt="Volunter"/>
                        </div>
                    </div>
                </div>
                <ValunteersForm ref="valunteersForm"/>
                <FootterNew ref="footter"/>
            </div>
            </Fragment>
        )
    }
}
export default ValunteersPage;
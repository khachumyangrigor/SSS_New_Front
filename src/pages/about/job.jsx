import React from 'react';
import FootterNew from '../footterNew/footterNew.jsx';
import Img from 'react-image';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
import { Link } from 'react-router-dom';

// css
import './job.css';

class Job extends React.Component{
    constructor(){
        super();
        this.state={
            job:{
                job_name:"",
                job_desc:"",
                req_title:"",
                responsibilities:[],
                requirements:[],
            },
        }
        this.jobs=[
            {
                job_name:"Content Development Specialist",
                job_desc:"Content development specialist is responsible for creating educational programmes for ongoing projects of the company and improving their quality. Responsibilities include planning curriculum, choosing textbooks, creating programs for extracurricular activities. Additional duties might include researching and implementing new computer and instructional technologies.",
                req_title:"Responsibilities",
                forClassName:"one",
                responsibilities:[
                        "Create & develop an educational programme",
                        "Maintain the programme development process",
                        "Create agendas for ongoing projects",
                        "Develop and manage a detailed project schedule and work plan"
                    ],
                requirements:[
                        "Among 2 years of content/programme development and related field experience",
                        "Excellent verbal and written communication skills",                        
                        "English level: Advanced",
                        "Decision-making and organizational abilities are essential",
                        "Computer proficient and be aware of the latest technological trends and advancements.",
                        "Solid organizational skills",
                        "Strong familiarity with international & Armenian startup ecosystem",
                ],
            },
            {
                job_name:"International Regional Manager",
                job_desc:"We are currently seeking a Regional Manager to join our Business Development team. They will be responsible for developing our projects, ensuring their further growth, managing and improving career relationships within the region. ",
                req_title:"You are welcome to apply, if...",
                forClassName:"tow",
                responsibilities:[
                    "You enjoy being a part of a learning culture, sharing ideas and talking! Yes, talking – you’ll be doing a lot of that!",
                    "You are a passionate person. Whether your passion is for analytics, building relationships or acquiring new partners, we have a place for you.",
                    "You are an analytical thinker with an interest in account management and business development, but, above all, you are a people's person.",
                    "You’re inventive and always keen on trying new things. In fact, you believe that nothing can ever be perfect, and that testing and experimentation are always important.",
                    "You are driven, ambitious and thrive in a dynamic environment.",
                    "You've realised that working with people is what you want.",
                    "You think technology will change the world, and you can’t stop talking about it.",
                ],
                requirements:[
                    "Effectively manage regional performance;",
                    "Demonstrate, coach, observe, evaluate and analyze all aspects of our operations;",
                    "Build positive relationships and high levels of trust with our partners;",
                    "Strategize the implementation of business plans and penetration in new markets.",
                    "Great communication skills in English, especially on the phone, as well as the ability to engage any audience;",
                    "A genuine willingness to learn and a drive to succeed in your career;",
                    "Being actively interested in the startup ecosystem(a must!);",
                    "Ability to think creatively to solve problems and deliver results;",
                    "Strong relationship-building skills.",
                ],
            },
            {
                job_name:"Project Manager",
                job_desc:"Project manager is responsible for planning and overseeing projects to ensure they are completed in a timely fashion and within budget. The project manager should plan and designate project resources, set deadlines, prepare budgets, monitor progress, and prepare reports for upper management regarding the status of project. This is all done within the confines of a company's goals and vision.",
                req_title:"Responsibilities",
                forClassName:"tree",
                responsibilities:[
                    "Determine and define project scope and objectives",
                    "Predict resources needed to reach objectives and manage resources in an effective and efficient manner",
                    "Prepare budget based on scope of work and resource requirements",
                    "Track project costs in order to meet budget",
                    "Develop and manage a detailed project schedule and work plan",
                    "Provide project updates on a consistent basis to various stakeholders about strategy, adjustments, and progress" ,
                    "Manage contracts with vendors and suppliers by assigning tasks and communicating expected deliverables",
                    "Ensure that all projects are delivered on-time, within scope and within budget",
                    "Manage the relationship with the client and all stakeholders",
                    "Perform risk management to minimize project risks",
                    "Establish and maintain relationships with third parties/vendors",
                    "Create and maintain comprehensive project documentation",
                    "Delegate project tasks based on junior staff members' individual strengths, skill sets and experience levels",
                ],
                requirements:[
                    "Among 2 years of project management and related field experience",
                    "Project Management Professional (PMP) certification preferred",
                    "English level: Advanced",
                    "Proven ability to solve problems creatively",
                    "Strong familiarity with project management software tools, methodologies, and best practices",
                    "Experience seeing projects through the full life cycle",
                    "Excellent analytical skills",
                    "Strong interpersonal skills and extremely resourceful",
                    "Proven ability to complete projects according to outlined scope, budget, and timeline",
                    "Solid organizational skills including attention to detail and multitasking skills",
                ],
            },
        ];
        this.scrollY=0;
    }
    componentDidMount=()=>{
        window.addEventListener("scroll", this.winScroll);
        window.scrollTo(0, 0);
        this.refs.headerText.style.opacity=1;
        let job=this.props.match.params.jobname;
        switch(job){
            case 'content-development-specialist':
                this.setState({job:this.jobs[0]})
                break;
            case 'international-regional-manager':
                this.setState({job:this.jobs[1]})
                break;
            case 'project-manager':
                this.setState({job:this.jobs[2]})
                break;
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
    render = () => {
        const {job_name,job_desc,responsibilities,requirements,req_title,forClassName}=this.state.job;
        return (
            <Fragment>
                <Helmet>
                    <title>{job_name} | Seaside Startup Summit</title>
                    <meta name="description" content="WHAT IS IT ALL ABOUT and THE TEAM" />
                </Helmet>
                <div className="aboutNew">
                    <div className={`aboutTop job ${forClassName}`} ref="aboutTop">
                        {forClassName==="one"?<div className="titleCover"/>:''}
                        <div ref="headerText">
                            <h1>{job_name.split(" ")[0]} {job_name.split(" ")[1]} <br/> {job_name.split(" ")[2]} </h1>
                            <p>Seaside Startup Summit</p>
                        </div>
                    </div>
                </div>
                <Header/>
                <div className="jobBody">
                    <div className="aboutInfo">
                        <div className="aboutInfo_left">
                            <h2>{job_name}</h2>
                            <p>{job_name==="Content Development Specialist"?<b>(Programme Development Specialist)</b>:""}</p>
                            <p>{job_desc}</p>
                        </div>
                        <div className="aboutInfo_right">
                            <img src={require(`./img/icon/jobBig.png`)} alt="Job"/>
                        </div>
                    </div>
                    <div className="responsibilities">
                        <h3>{req_title}</h3>
                        {responsibilities.map((responsibiliti,i) =>
                            <p key={i}>{responsibiliti}</p>
                        )}
                    </div>
                    <div className="requirements">
                        <h3>Requirements</h3>
                        {requirements.map((requirement,i) =>
                            <p key={i}>{requirement}</p>
                        )}
                    </div>
                    <div className="jobMessage">
                        This position entails work organized <br/> from our company office.
                    </div>
                    <div className="mainInfo">
                        <div>
                            <div className="imageBox"><img src={require(`./img/icon/cv.png`)} alt="CV"/></div>
                            <div className="textBox">
                                <h2>How to Apply</h2>
                                <p>Send your CV to <a href="mailto:info@sss.am">info@sss.am</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <FootterNew ref="footter" />
            </Fragment>
        )
    }
}

export default Job;

import React from 'react';
import { withRouter } from 'react-router-dom';
//css
import './sectionFour.css';

class Section4 extends React.Component {
    constructor() {
        super();
        this.ScrollCondition = false;
        this.mobile = false;
        this.resize = true;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'startups') {
                if (prevId !== 'home' && prevId !== 'infographic' && prevId !== 'values') {
                    this.refs.section.classList.remove('matherPrevSectionUp');
                    this.refs.section.classList.remove('matherPrevSection');
                    this.refs.section.classList.remove('matherSection');
                    this.refs.section.classList.add('matherSectionUp');
                }
                else {
                    this.refs.section.classList.remove('matherPrevSectionUp');
                    this.refs.section.classList.remove('matherPrevSection');
                    this.refs.section.classList.remove('matherSectionUp');
                    this.refs.section.classList.add('matherSection');
                }
            }
            else if (prevId === 'startups') {
                if (pathId !== 'home' && pathId !== 'infographic' && pathId !== 'values') {
                    this.refs.section.classList.remove('matherSectionUp');
                    this.refs.section.classList.remove('matherPrevSectionUp');
                    this.refs.section.classList.remove('matherSection');
                    this.refs.section.classList.add('matherPrevSection');
                }
                else {
                    this.refs.section.classList.remove('matherSectionUp');
                    this.refs.section.classList.remove('matherSection');
                    this.refs.section.classList.remove('matherPrevSection');
                    this.refs.section.classList.add('matherPrevSectionUp');
                }
            }
            else {
                this.refs.section.classList.remove('matherSectionUp');
                this.refs.section.classList.remove('matherPrevSectionUp');
                this.refs.section.classList.remove('matherSection');
                this.refs.section.classList.remove('matherPrevSection');
            }
        }
    }
    componentDidMount = () => {
        this.checkDivice();
        window.addEventListener("resize", this.checkDivice);
        if (this.props.match.params.id === "startups") {
            this.refs.section.classList.add('matherSection');
        }
        else this.refs.section.classList.remove('matherSection');
    }

    checkDivice = () => {
        if (window.innerWidth < 850) this.mobile = true;
        else this.mobile = false;
    }

    handleScroll = e => {
        if (!this.mobile) {
            if (e.nativeEvent.wheelDelta < 0) {
                this.props.history.push('/sevan19/speakers');
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/values');
            }
        }
    }
    handelHover1 = () => {
        if (!this.mobile) {
            this.refs.program1.classList.add('activeProgramm');
            this.refs.program2.classList.remove('activeProgramm');
            this.refs.program1.classList.remove('passiveProgram');
            this.refs.program2.classList.add('passiveProgram');
        }
    }
    handelHover2 = () => {
        if (!this.mobile) {
            this.refs.program2.classList.add('activeProgramm');
            this.refs.program1.classList.remove('activeProgramm');
            this.refs.program2.classList.remove('passiveProgram');
            this.refs.program1.classList.add('passiveProgram');
        }
    }
    render = () => {
        return (
            <div className="sectiontFour" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="startupHeader">Whether you're just starting your journey as a founder or seek to take your startup to the next level, we have everything in place to help you </div>
                <div className="program starter" ref="program1">
                    <div className="programTitle">
                        <div className="programTitleHead">
                            <h2>Starter</h2>
                            <h2>Program</h2>
                        </div>
                        <p>A specially designed program for aspiring entrepreneurs and idea-stage startups. It features a series of hands-on workshops and highly practical talks that examine and explain key building blocks of the Business Model Canvas. All applicants that get selected for the Starter Track will be grouped into Industry Tracks and will have access to leading Mentors and Industry Experts, one-on-one mentorship, pitch practice and more.</p>
                        {/* <span onClick={this.handelHover1}>More Info</span> */}
                    </div>
                    {/* <div className="programMiddle">
                        <p>A specially designed program for aspiring entrepreneurs and idea-stage startups. It features a series of hands-on workshops and highly practical talks that examine and explain key building blocks of the Business Model Canvas. All applicants that get selected for the Starter Track will be grouped into Industry Tracks and will have access to leading Mentors and Industry Experts, one-on-one mentorship, pitch practice and more.</p>
                    </div> */}
                </div>
                <div className="program booster" ref="program2" >
                    <div className="programTitle">
                        <div className="programTitleHead" >
                            <h2>Booster</h2>
                            <h2>Program</h2>
                        </div>
                        <p>This program is designed as an intensive micro acceleration program for qualifying startups that have developed an early prototype and secured some form of angel funding. Booster Track will be facilitated by expert Speakers and supported by Mentors, who will work with you throughout the entire period of the summit. The top startups will be eligible for both prizes and specially designed up to $50,000 Booster investment fund.</p>
                        {/* <span onClick={this.handelHover2}>More Info</span> */}
                    </div>
                    {/* <div className="programMiddle">
                        <p>This program is designed as an intensive micro acceleration program for qualifying startups that have developed an early prototype and secured some form of angel funding. Booster Track will be facilitated by expert Speakers and supported by Mentors, who will work with you throughout the entire period of the summit. The top startups will be eligible for both prizes and specially designed up to $50,000 Booster investment fund.</p>
                    </div> */}
                </div>
                {/* <div className="startupFooter">
                    <a href="/attend"><button className="attendBtn">ATTEND</button></a>
                    <span>Once your application is reviewed, you'll be informed on your track based on your startup stage of development and field of operations.</span>
                </div> */}
            </div>
        )
    }
}

export default withRouter(Section4);
import React from 'react';
import { withRouter } from 'react-router-dom';
//css
import './sectionSeven.css';
import firecode from '../img/icon/firecode.png';

class Section7 extends React.Component {
    constructor() {
        super();
        this.mobile = false;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'firecode') {
                if (prevId !== 'home' && prevId !== 'infographic' && prevId !== 'values' && prevId !== 'startups' && prevId !== 'speakers' && prevId !== 'investors') {
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
            else if (prevId === 'firecode') {
                if (pathId !== 'home' && pathId !== 'infographic' && pathId !== 'values' && pathId !== 'startups' && prevId !== 'speakers' && prevId !== 'investors') {
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
        if (this.props.match.params.id === "firecode") {
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
                this.props.history.push('/sevan19/event-details');
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/investors');
            }
        }
    }


    render = () => {
        return (
            <div className="sectionSeven" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="sectionSevenMiddle">
                    <div className="middleLeft7">
                        <div className="firecodeLogo">
                            <img src={firecode} alt="FireCode Marathon" />
                            <h1>FireCode</h1>
                            <h2>Marathon</h2>
                        </div>
                        <div className="btnContaner">
                            {/* <a href="/attend" ><button className="attendBtn">ATTEND</button></a> */}
                        </div>
                    </div>
                    <div className="middleRigth7">
                        <p>FireCode Marathon is a coding competition that’ll be held for the first time at Sevan Startup Summit 2019 (July 28 - Aug 3). Any developer with any technical background is welcomed to apply. The participants will solve daily coding challenges to get prizes for their skills. Based on the number of solved questions you will get points and then your share of $20,000 fund. Code on fire and at the same time get new friends, meet great people with great ideas, learn something new and have fun in Sevan Startup Summit 2019!</p>
                        <div className="btnContaner">
                            <a href="https://forms.gle/JnS8eqBxEygPw1UeA" target="_blank" rel="noopener noreferrer"><button className="attendBtn">ATTEND</button></a>
                        </div>
                        <h2>#codeonfire</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Section7);
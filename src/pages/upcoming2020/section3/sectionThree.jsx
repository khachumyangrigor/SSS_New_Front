import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//css
import './sectionThree.css';

class Section3 extends React.Component {
    constructor() {
        super();
        this.ScrollCondition = false;
        this.incriment = true;
        this.mobile = false;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;
        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'infographic') {
                if (prevId !== 'home' && prevId !== '') {
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
                this.incriments();
            }
            else if (prevId === 'infographic') {
                if (pathId !== 'home' && pathId !== '') {
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
        if (this.props.match.params.id === "infographic") {
            this.refs.section.classList.add('matherSection');
            this.incriments();
        }
        else this.refs.section.classList.remove('matherSection');
    }
    checkDivice = () => {
        if (window.innerWidth < 850) {
            this.mobile = true;
            if (this.refs.infoGr1 !== undefined) {
                this.incriments();
            }
        }
        else this.mobile = false;
    }

    handleScroll = e => {
        if (!this.mobile) {
            if (e.nativeEvent.wheelDelta < 0) {
                this.props.history.push('/sevan19/values');
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/home');
            }
        }
    }
    incriments = () => {
        setTimeout(() => this.refs.infoGr1.style.fontSize = '3vw', 800);
        setTimeout(() => this.refs.infoGr2.style.fontSize = '3vw', 1500);
        setTimeout(() => this.refs.infoGr3.style.fontSize = '3vw', 600);
        setTimeout(() => this.refs.infoGr4.style.fontSize = '3vw', 1000);
        setTimeout(() => this.refs.infoGr5.style.fontSize = '3vw', 700);
        // setTimeout(() => this.refs.infoGr6.style.fontSize = '3vw', 1200);
        setTimeout(() => this.refs.infoGr7.style.fontSize = '3vw', 1000);
        setTimeout(() => this.refs.infoGr8.style.fontSize = '3vw', 600);
        setTimeout(() => this.refs.infoGr9.style.fontSize = '3vw', 10);

        if (this.incriment) {
            this.incNbrRec(950, 1000, this.refs.infoGr1.childNodes[0], '1000');
            this.incNbrRec(99950, 100000, this.refs.infoGr2.childNodes[1], '100,000');
            this.incNbrRec(0, 10, this.refs.infoGr3.childNodes[0], '30');
            this.incNbrRec(99950, 100000, this.refs.infoGr4.childNodes[1], '100,000');
            this.incNbrRec(50, 100, this.refs.infoGr5.childNodes[0], '100');
            // this.incNbrRec(0, 20, this.refs.infoGr6.childNodes[0], '20');
            this.incNbrRec(9950, 10000, this.refs.infoGr7.childNodes[0], '10,000');
            this.incNbrRec(50, 100, this.refs.infoGr8.childNodes[0], '100');
            this.incNbrRec(0, 20, this.refs.infoGr9.childNodes[0], '45');
        }
    }
    incNbrRec = (i, endNbr, elt, final) => {
        if (i <= endNbr) {
            elt.innerHTML = i;
            setTimeout(() => {
                this.incNbrRec(i + 1, endNbr, elt, final);
            }, 50);
        }
        else {
            elt.innerHTML = final;
        }
    }
    render = () => {
        return (
            <div className="sectiontThree" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="infoGrMiddle">
                    <div className="infoGrRow">
                        <div>
                            <div>
                                Seaside Startup Summit is a global platform for transforming entrepreneurship and connecting founders, investors, startup enthusiasts, and all other decision-makers of the startup ecosystem from the region and around the world. It's the first week-long outdoor startup gathering for intensive learning, genuine relationships, deal-making and immersive conversations about the hottest current topics in entrepreneurship.
                                <br /><br />
                                <span>
                                    Join the movement and apply now! This is the place to be this summer.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="infoGrRow">
                        <div >
                            <h2 ref="infoGr4">$<span></span></h2>
                            <p>Prize Fund</p>
                        </div>
                        <div>
                            <h2 ref="infoGr5"><span></span>+</h2>
                            <p>Startup Teams</p>
                        </div>
                        <div >
                            <h2 ref="infoGr1"><span></span>+</h2>
                            <p>Entrepreneurs</p>
                        </div>
                        <div >
                            <h2 ref="infoGr2">$<span></span></h2>
                            <p>Investment Fund</p>
                        </div>
                    </div>
                    <div className="infoGrRow">
                        <div>
                            <h2 ref="infoGr7"><span></span></h2>
                            <p>Expected attendees</p>
                        </div>
                        <div >
                            <h2 ref="infoGr8"><span></span>+</h2>
                            <p>Speakers & Mentors</p>
                        </div>
                        <div>
                            <h2 ref="infoGr9"><span></span>+</h2>
                            <p>Countries</p>
                        </div>
                        <div >
                            <h2 ref="infoGr3"><span></span>+</h2>
                            <p>VCs & Angels </p>
                        </div>
                    </div>
                </div>
                <div className="infoGrfootter">
                    <div>
                        <Link to="/attend"><button className="attendBtn">ATTEND</button></Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(Section3);
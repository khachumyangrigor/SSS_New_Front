import React from 'react';
import { withRouter } from 'react-router-dom';
import SocialMenu from '../../socialIcons.jsx';
//css
import './sectionLast.css';


class SectionLast extends React.Component {
    constructor() {
        super();
        this.mobile = false;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'event-details') {
                if (prevId !== 'home' && prevId !== 'infographic' && prevId !== 'values' && prevId !== 'startups' && prevId !== 'speakers' && prevId !== 'investors' && prevId !== 'firecode') {
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
            else if (prevId === 'event-details') {
                if (pathId !== 'home' && pathId !== 'infographic' && pathId !== 'values' && pathId !== 'startups' && prevId !== 'speakers' && prevId !== 'investors' && prevId !== 'firecode') {
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
        if (this.props.match.params.id === "event-details") {
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
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/firecode');
            }
        }
    }


    render = () => {
        return (
            <div className="sectionLast" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="sectionLastMiddle">
                    <div className="middleLeftLast">
                        <h1>Event <span>Details</span></h1>
                        <div>Lake Sevan, Sevan, Armenia</div>
                        <div>+374 98 80 20 28</div>
                        <div>+374 43 80 20 28</div>
                        <div>info@sss.am</div>
                        <div>2019 July 28 - August 3 (24/7)</div>
                        <SocialMenu />
                    </div>
                    <div className="middleRigthLast">
                        <p><span />Location</p>
                        <iframe title="mapSevn2019" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64788.56856509003!2d45.00998350635445!3d40.507627595319306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404041952633f35f%3A0xbc9b6bc3ba37a015!2sSevan+Startup+Summit!5e0!3m2!1sen!2sus!4v1558097812510!5m2!1sen!2sus" frameBorder="0" allowFullScreen></iframe>
                        <h2>#SSS19</h2>
                    </div>
                    <SocialMenu />
                </div>
                <div className="socialLastFooter">
                    © 2019, Seaside Startup Summit
                </div>
            </div>
        )
    }
}

export default withRouter(SectionLast);
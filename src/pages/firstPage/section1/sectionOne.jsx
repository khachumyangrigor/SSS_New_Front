import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//css
import './sectionOne.css';
//Media
import bgVideo from '../video/SSS-for-web.mp4';

class Section1 extends React.Component {
    constructor() {
        super();
        this.state = {
            video: '',
            videoLink: '',
            vidoCloseOpen: ''
        }
        this.autoplay = 'autoplay';
    }
    componentWillReceiveProps = nextProps => {
        if (window.innerWidth < 850) this.autoplay = false;
    }
    componentDidMount() {
        if (window.innerWidth < 850) this.autoplay = false;
    }
    handleVideoOn = () => {
        this.setState({
            video: 'openClass2',
            vidoCloseOpen: 'vidoCloseOpen',
            videoLink: 'https://www.youtube.com/embed/FkDxAiIaLzY?rel=0;&autoplay=1&mute=1'
        })
        this.refs.homeBgVideo.pause();
    }
    handleVideoOff = () => {
        this.setState({
            video: '',
            vidoCloseOpen: '',
            videoLink: ''
        })
        this.refs.homeBgVideo.play();
    }
    render = () => {
        return (
            <div className="homePage">
                <div id="promoVideo" className={`promobg ${this.state.video}`} onClick={() => this.handleVideoOff()}>
                    <iframe title="frame0" width="100%" height="60%" src={this.state.videoLink} allow="encrypted-media" allowFullScreen></iframe>
                    <div className="vidoClose"><span onClick={() => this.handleVideoOff()}>X</span></div>
                </div>
                <div className={`bgVideoContaner`}>
                    <video ref="homeBgVideo" preload="preload" muted={true} autoPlay={this.autoplay} loop="loop"  >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="underMenu"><div className="underMenuItem" /></div>
                <div className="homePageFront">
                    <div className="homePageRigth">
                        <div className="homePageRigthHeader">
                            <p>Explore</p>
                            <h1>#SSS2020</h1>
                            <h2>July 26 - August 01</h2>
                        </div>
                        <div className="homePageRigthMiddle">
                            <p>1000+ Entrepreneurs</p>
                            <p>40+ Countries</p>
                            <p>30+ VCs and Funds</p>
                            <Link to="/sevan2020/"><button className="attendBtn">JOIN NOW</button></Link>
                        </div>
                        <div className="homePageRigthFooter">
                            <h2>Lake Sevan, Armenia</h2>
                        </div>
                    </div>
                    <div className="footerText">
                        <h2>Transforming the way to build sustainable</h2>
                        <h2>businesses and lasting connections</h2>
                        <span onClick={this.handleVideoOn} > Watch Video </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Section1);
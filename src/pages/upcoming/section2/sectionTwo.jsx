import React from 'react';
import { withRouter } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
// css
import './sectionTwo.css';
// img
import ConnectImg from '../img/values/connect.jpg';
import LearnImg from '../img/values/learn.jpg';
import WinImg from '../img/values/win.jpg';
import FunImg from '../img/values/fun.jpg';

class Section2 extends React.Component {
    constructor() {
        super();
        this.state = {
            textSpanClass: 'oneTextSpanClass',
            slogenText: "Networking events are everywhere. What about building relationships beyond exchanging business cards? For startups, SSS is a place to stress-test your team's potential and build meaningful relationships with potential investors and advisors. For investors, this is a one-of-a-kind format to see the founders in an informal setting, out of their comfort zone - witnessing the real limits of their personality, resilience and team spirit. Isn't this one thing investors care about at the early stage?",
            slogenImg: ConnectImg,
            showSlogen: true,
            showImage: true,
            promoClass: '',
            promoLink: ''
        }
        this.ScrollCondition = false;
        this.mobile = false;
    }

    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'values') {
                this.setState({ showSlogen: true });
                if (prevId !== 'home' && prevId !== 'infographic') {
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
            else if (prevId === 'values') {
                this.setState({ showSlogen: false });
                if (pathId !== 'home' && pathId !== 'infographic') {
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
                this.setState({ showSlogen: false });
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
        if (this.props.match.params.id === "values") { this.refs.section.classList.add('matherSection'); }
        else this.refs.section.classList.remove('matherSection');
    }
    checkDivice = () => {
        if (window.innerWidth < 850) this.mobile = true;
        else this.mobile = false;
    }
    handleScroll = e => {
        if (!this.mobile) {
            if (e.nativeEvent.wheelDelta < 0) {
                this.props.history.push('/sevan19/startups');
                this.ScrollCondition = false;
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/infographic');
                this.ScrollCondition = false;
            }
        }
    }

    handelChangeSlogen = (e, row) => {
        const { slogenTileRowRef1, slogenTileRowRef2, slogenTileRowRef3, slogenTileRowRef4 } = this.refs;
        slogenTileRowRef1.classList.remove('active1');
        slogenTileRowRef2.classList.remove('active2');
        slogenTileRowRef3.classList.remove('active3');
        slogenTileRowRef4.classList.remove('active4');

        switch (row) {
            case 'row1':
                this.setState({
                    textSpanClass: 'oneTextSpanClass',
                    slogenText: "Networking events are everywhere. What about building relationships beyond exchanging business cards? For startups, SSS is a place to stress-test your team's potential and build meaningful relationships with potential investors and advisors. For investors, this is a one-of-a-kind format to see the founders in an informal setting, out of their comfort zone - witnessing the real limits of their personality, resilience and team spirit. Isn't this one thing investors care about at the early stage?",
                    slogenImg: ConnectImg
                });
                slogenTileRowRef1.classList.add('active1');
                break;
            case 'row2':
                this.setState({
                    textSpanClass: 'twoTextSpanClass',
                    slogenText: 'SSS is a platform to get first-hand learning and insights from people that have built successful businesses, raised significant funds and unlocked rapid revenue growth. And who learned the lessons the hard way. You get a week of mini acceleration, curated workshops and sessions, intensive 1:1s and unlimited informal discussions to stretch your thinking and push your company to the next level.',
                    slogenImg: LearnImg
                });
                slogenTileRowRef2.classList.add('active2');
                break;
            case 'row3':
                this.setState({
                    textSpanClass: 'treeTextSpanClass',
                    slogenText: "There's an ultimate chance to win grants and get investments. Dozens of startups will be pitching and fighting in different battles to get their prize. A stellar jury consisting of top-class VCs, investors and startup gurus will make sure that only the bests of the bests will make it to the top. Do you think that is all? There is a dedicated investment fund.",
                    slogenImg: WinImg
                });
                slogenTileRowRef3.classList.add('active3');
                break;
            case 'row4':
                this.setState({
                    textSpanClass: 'fourTextSpanClass',
                    slogenText: "Get out of your comfort zone and have a lifetime experience! You are going to have an incredible seven days of hard work and crazy fun, at a location that will take your breath away. There is enough time not only to make your startup better but for beach activities, late-night parties, sports time and relax. Everything at the summit is designed to switch your mind off the routine and achieve productivity you can never get at your everyday office. This is a kind of event you've never been to before.",
                    slogenImg: FunImg
                });
                slogenTileRowRef4.classList.add('active4');
                break;
            default: return null;
        }
    }
    handelImgChange = item => {
        this.setState({ showImage: false });
        switch (item) {
            case '01':
                this.setState({ slogenImg: ConnectImg });
                break;
            case '02':
                this.setState({ slogenImg: LearnImg });
                break;
            case '03':
                this.setState({ slogenImg: WinImg });
                break;
            case '04':
                this.setState({ slogenImg: FunImg });
                break;
            default:
                this.setState({ slogenImg: FunImg });
                break;
        }
        setTimeout(() => {
            this.setState({ showImage: !this.state.showImage });
        }, 150);
    }
    handelAddPromo = () => {
        this.setState({
            promoClass: 'openClass2',
            promoLink: 'https://www.youtube.com/embed/meV_doeH-Jw?rel=0;&autoplay=1&mute=1',
        });
    }
    handelRemovePromo = () => {
        this.setState({
            promoClass: '',
            promoLink: ''
        });
    }
    render = () => {
        const { textSpanClass, slogenText } = this.state;
        return (
            <div className="sectiontTwo" ref="section" onWheel={e => this.handleScroll(e)}>
                <div id="promoVideo" className={`promobg ${this.state.promoClass}`} onClick={this.handelRemovePromo}>
                    <iframe title="frame2" width="100%" height="60%" src={this.state.promoLink} allow="encrypted-media" allowFullScreen></iframe>
                    <div className="vidoClose"><span onClick={this.handelRemovePromo}>X</span></div>
                </div>
                <div className="sectionMiddle">
                    <div className="sectionTowLeft">
                        <Bounce left cascade when={this.state.showSlogen}>
                            <div className="slogenTitle">
                                <div className="slogenTitleRow active1" ref="slogenTileRowRef1" onMouseOver={e => { this.handelChangeSlogen(e, 'row1') }}>
                                    <span /><span /><h2>connect</h2>
                                </div>
                                <div className="slogenTitleRow" ref="slogenTileRowRef2" onMouseOver={e => { this.handelChangeSlogen(e, 'row2') }}>
                                    <span /><span /><h2>learn</h2>
                                </div>
                                <div className="slogenTitleRow" ref="slogenTileRowRef3" onMouseOver={e => { this.handelChangeSlogen(e, 'row3') }}>
                                    <span /><span /><h2>win</h2>
                                </div>
                                <div className="slogenTitleRow" ref="slogenTileRowRef4" onMouseOver={e => { this.handelChangeSlogen(e, 'row4') }}>
                                    <span /><span /><h2>have fun</h2>
                                </div>
                            </div>
                        </Bounce>
                        {/* <div className="slogenTitle">
                            <div className="slogenTitleRow2" ref="slogenTileRowRef2_1" onMouseOver={e => { this.handelChangeSlogen(e, 'row1') }}>
                                
                                <div className="slogenTitleRow2" ref="slogenTileRowRef2_2" onMouseOver={e => { this.handelChangeSlogen(e, 'row2') }}>
                                    <span /><span /><h2>learn</h2>
                                </div>
                                <div className="slogenTitleRow2" ref="slogenTileRowRef2_3" onMouseOver={e => { this.handelChangeSlogen(e, 'row3') }}>
                                    <span /><span /><h2>win</h2>
                                </div>
                                <div className="slogenTitleRow2" ref="slogenTileRowRef2_4" onMouseOver={e => { this.handelChangeSlogen(e, 'row4') }}>
                                    <span /><span /><h2>have fun</h2>
                                </div>
                            </div>
                        </div> */}
                        <div className="slogenText">
                            <span className={textSpanClass} />
                            <div>
                                <p>{slogenText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionTowRigth">
                        <div className="slogenVideo">
                            <Fade when={this.state.showImage}>
                                <img src={this.state.slogenImg} alt="slogen img" />
                            </Fade>
                            <div className="slogenImgChanger">
                                <span onClick={() => this.handelImgChange('01')} />
                                <span onClick={() => this.handelImgChange('02')} />
                                <span onClick={() => this.handelImgChange('03')} />
                                <span onClick={() => this.handelImgChange('04')} />
                            </div>
                            <div className="slogenVideoButton">
                                <button onClick={this.handelAddPromo} className="watchPromoBleck">Feel the <span> Concept</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(Section2);
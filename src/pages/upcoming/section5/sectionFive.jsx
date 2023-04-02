import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
//css
import './sectionFive.css';

class Section5 extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            speakers: [],
            hasMore: false,
            speakerImge: '',
            speakerName: '',
            speakerPosition: '',
            speakerInfo: '',
            showInfo: '',
            showTextNone: '',
            partShowTime: '',
            id: 0,
            loading: false,
            show: false,
            showTitle: true,
        }
        this.mobile = false;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'speakers') {
                this.setState({ showTitle: true });
                if (prevId !== 'home' && prevId !== 'infographic' && prevId !== 'values' && prevId !== 'startups') {
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
            else if (prevId === 'speakers') {
                this.setState({ showTitle: false });
                if (pathId !== 'home' && pathId !== 'infographic' && pathId !== 'values' && pathId !== 'startups') {
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
                this.setState({ showTitle: false });
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
        this.handelSpeakersFatch();
        if (this.props.match.params.id === "speakers") {
            this.refs.section.classList.add('matherSection');
        }
        else this.refs.section.classList.remove('matherSection');
    }
    checkDivice = () => {
        if (window.innerWidth < 850) this.mobile = true;
        else this.mobile = false;
    }

    handleScroll = e => {
        setTimeout(() => {
            this.setState({
                showTextNone: '',
                showInfo: '',
                showTitle: true
            })
        }, 600)
        if (!this.mobile) {
            if (e.nativeEvent.wheelDelta < 0) {
                this.props.history.push('/sevan19/investors');
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/startups');
            }
        }
    }

    handelSpeakersFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/speakers/?method=getSpeakers19&id=0';
        this.setState({ loading: true });
        fetch(`${API_SPEAKER_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { speakers } = data;
                    this.setState({
                        speakers: speakers,
                        loading: false
                    });
                }
            )
            .catch(
                error => console.log(
                    console.clear()
                )
            )
    }
    handelGetinfo = (e) => {
        let imgMore = e.currentTarget.children[0];
        let img = imgMore.children[0].getAttribute("src");
        let name = e.currentTarget.children[1].innerHTML;
        let position = e.currentTarget.children[2].innerHTML;
        let info = e.currentTarget.children[3].innerHTML;
        this.setState({
            speakerImge: img,
            speakerName: name,
            speakerPosition: position,
            speakerInfo: info,
            showInfo: 'showSpeakerInfo',
            showTextNone: 'personName2019None',
            partShowTime: 'partShowTime',
            show: false,
        });
        setTimeout(() => {
            this.setState({ show: !this.state.show });
        }, 100);
    }
    render = () => {
        const { speakers, speakerPosition, speakerName, showTextNone, speakerImge, speakerInfo, showInfo, loading } = this.state;
        return (
            <div className="sectionFive" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="speakerLeft">
                    <Fade when={this.state.showTitle}>
                        <div className={`speakerLeftFirst ${showTextNone}`}>
                            <h2>MEET</h2>
                            <h3><span>the</span>SPEAKERS</h3>
                            <p>
                                Handpicked professionals waiting to
                            <br />
                                share their experience and failures with you.
                        </p>
                            <div className="viweAllSpeakers2">
                                <a href="/attend"><button className="attendBtn">JOIN AS A SPEAKER</button></a>
                            </div>
                        </div>
                    </Fade>
                    <Reveal when={this.state.show}>
                        <div className={`speakerLeftInfo ${showInfo}`}>
                            <div className="speakerLeftInfoImg">
                                <img src={speakerImge} alt="speaker" />
                            </div>
                            <div className="speakerLeftName">
                                {speakerName}
                            </div>
                            <div className="speakerLeftPosition">
                                {speakerPosition}
                            </div>
                            <div className="speakerLeftInfoInfo">
                                {speakerInfo}
                            </div>
                            {/* <div className="viweAllSpeakers2">
                                <a href="/attend" ><button className="attendBtn">JOIN AS A SPEAKER</button></a>
                            </div> */}
                        </div>
                    </Reveal >
                </div>
                <div className="speakerRigth">
                    <h2 >Meet the <span>Speakers</span> <p>Handpicked professionals waiting to
share their experience and failures with you</p></h2>
                    {loading ? 'Loading...' : ''}
                    {
                        speakers.map(speaker => (
                            <div className={`person2019`} key={speaker.id} onClick={(e) => this.handelGetinfo(e)}>
                                <div className="imgMOre2019">
                                    <img src={`https://www.staff.seasidestartupsummit.com/user/speakers/speakers_name/img/${speaker.img}`} alt={speaker.name} rel="img" />
                                    <div className="personMore2019"></div>
                                </div>
                                <p className="personName2019">{speaker.name}</p>
                                <p className="personPosition2019" hidden={true}>{speaker.position}</p>
                                <div className="personalInfo2019">{speaker.info}</div>
                            </div>
                        ))
                    }
                    <div className="viweAllSpeakers"><Link to="/sevan19/speakers/all-speakers"><span>View all</span></Link></div>
                    <div className="viweAllSpeakers2">
                        <a href="https://docs.google.com/forms/d/1LRchT4ItLdxyKEIfLxP9asi1z_H8Jx5OzjIpjAcXezc/viewform?edit_requested=true" target="_black"><button className="attendBtn">JOIN AS A SPEAKER</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Section5);
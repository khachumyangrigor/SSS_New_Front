import React from 'react';
import { withRouter } from 'react-router-dom';
//css
import './sectionSix.css';

class Section6 extends React.Component {
    constructor() {
        super();
        this.state = {
            error: '',
            investors: [],
            investorImge: '',
            investorName: '',
            investorLink: '',
            id: 0,
            loading: false,
        }
        this.mobile = false;
        this.caruselBodyX = 0;
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        const prevId = this.props.match.params.id;

        if (this.props.location.pathname !== nextProps.location.pathname) {
            if (pathId === 'investors') {
                this.setState({ showTitle: true });
                if (prevId !== 'home' && prevId !== 'infographic' && prevId !== 'values' && prevId !== 'startups' && prevId !== 'speakers') {
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
            else if (prevId === 'investors') {
                this.setState({ showTitle: false });
                if (pathId !== 'home' && pathId !== 'infographic' && pathId !== 'values' && pathId !== 'startups' && prevId !== 'speakers') {
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
        if (this.props.match.params.id === "investors") {
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
                this.props.history.push('/sevan19/firecode');
            }
            if (e.nativeEvent.wheelDelta > 0) {
                this.props.history.push('/sevan19/speakers');
            }
        }
    }

    handelSpeakersFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/investors/?method=getInvestors2019&id=0';
        this.setState({ loading: true });
        fetch(`${API_SPEAKER_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { investors } = data;
                    this.setState({
                        investors: investors,
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
    handelReLink = link => {
        window.open(link, '_blank');
    }

    caruselNext = () => {
        let caruselBody = this.refs.caruselMiddle;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX < caruselBody.scrollWidth / 2) {
            this.caruselBodyX += 300;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }
    caruselPrev = () => {
        let caruselBody = this.refs.caruselMiddle;
        caruselBody.classList.remove("caruselAnimate");
        caruselBody.style.overflowX = "hidden";
        if (this.caruselBodyX > 0) {
            this.caruselBodyX -= 300;
            caruselBody.scrollTo({
                top: 0,
                left: this.caruselBodyX,
                behavior: 'smooth'
            });
        }
    }

    render = () => {
        const { loading, investors } = this.state;
        return (
            <div className="sectionSix" ref="section" onWheel={e => this.handleScroll(e)}>
                <div className="invesormiddle">
                    <div className="investorTextPart">
                        <h3>Meet the</h3>
                        <h2>INVESTORS</h2>
                        {/* <a href="/attend">
                            <button className="attendBtn">JOIN AS AN INVESTOR</button>
                        </a> */}
                    </div>
                    <div className="carusel">
                        {loading ? 'Loading...' : ''}
                        <div className="caruselLeft" onClick={() => this.caruselPrev()}>◄</div>
                        <div className="caruselMiddle caruselAnimate" ref="caruselMiddle">

                            {
                                investors.map(investor => (
                                    <div key={investor.id} onClick={() => this.handelReLink(investor.link)}>
                                        <div>
                                            <img src={`https://www.staff.seasidestartupsummit.com/user/investors/investors_name/img/${investor.img}`} alt="Sevan 2019 Investors" rel="index nofollow noopener nnoreferer" />
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                investors.map(investor => (
                                    <div key={`1${investor.id}`} onClick={() => this.handelReLink(investor.link)}>
                                        <div>
                                            <img src={`https://www.staff.seasidestartupsummit.com/user/investors/investors_name/img/${investor.img}`} alt="Sevan 2019 Investors" rel="img" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="caruselrigth" onClick={() => this.caruselNext()}>►</div>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(Section6);
import React from 'react';
import { Link } from 'react-router-dom';


class Startups extends React.Component {
    constructor() {
        super();
        this.state = {
            startups: [],
            error: '',
            id: 0
        }
    }

    handelInvestorsFatch() {
        const API_SPEAKER_URL = 'https://www.apis.seasidestartupsummit.com/upcomming/startups/?method=getStartups2020&id=0';
        this.setState({ loading: true });
        fetch(`${API_SPEAKER_URL}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    const { startups } = data;
                    this.setState({
                        startups: startups,
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
    componentDidMount = () => {
        this.handelInvestorsFatch();
    }

    caruselPrev = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        elem.scrollTo({
            left: elem.scrollLeft + inter,
            behavior: "smooth",
        });
    }
    caruselNext = (elem, inter) => {
        inter = elem.childNodes[0].offsetWidth;
        elem.scrollTo({
            left: elem.scrollLeft - inter,
            behavior: "smooth"
        });
    }
    render = () => {
        const { startups } = this.state;
        const API_IMG_URL = 'https://www.staff.seasidestartupsummit.com/user/startups/startups_name/img';
        return (
            <div className="upcommingInvestorNew upcommingInvestorNew_Startup">
                <h2>Meet Our Previous Participants</h2>
                {/* <p>— our Alumni about sss —</p> */}
                {/* <div className="meetVideo">
                    <iframe title="Meet" width="727" height="409" src="https://www.youtube.com/embed/OgsPm_KyllI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
                <p>— our successful Alumni —</p>
                <div className="left">
                    <div className="upcommingInvestorNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingInvestorImg, 500)}><b /></div>
                    <div className="upcommingInvestorNewImg" ref="upcommingInvestorImg">
                        {
                            startups.map(startups => (
                                <div className="investor" key={startups.id} onClick={() => this.handelReLink(startups.link)}>
                                    <div className="imgBox">
                                        <img src={`${API_IMG_URL}/${startups.img}`} alt="startup" rel="index nofollow noopener nnoreferer" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="upcommingInvestorNewNext" onClick={() => this.caruselNext(this.refs.upcommingInvestorImg, 500)}><b /></div>
                </div>
                <div className="footter">
                    <Link to="/events" >Apply as a Startup</Link>
                </div>
            </div>
        )
    }
}
export default Startups;
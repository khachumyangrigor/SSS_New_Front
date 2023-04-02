import React from 'react';
// import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Info_Past1, Info_Past2, Info_Past3, Info_Past4, Info_Past5, Info_Past6 } from './eventArray/array.jsx';


class Speakers extends React.Component {
    constructor() {
        super();
        this.state = {
            speakers: [],
            error: '',
            id: 0
        }
    }
    componentDidMount = () => {
        this.handelSpeakersFatch();
    }
    getInfo = () => {
        let location = this.props.history.location.pathname;
        if (location === '/sevan19' || location === '/sevan19/') return Info_Past6;
        else if (location === '/sevan18' || location === '/sevan18/') return Info_Past1;
        else if (location === '/sevan17' || location === '/sevan17/') return Info_Past2;
        else if (location === '/sevan16' || location === '/sevan16/') return Info_Past3;
        else if (location === '/uae18' || location === '/uae18/') return Info_Past4;
        else if (location === '/india18' || location === '/india18/') return Info_Past5;
    }

    handelSpeakersFatch() {
        const API_STARTUP_URL = this.getInfo().API_SPEAKER_URL;
        fetch(`${API_STARTUP_URL}=${this.state.id}`)
            .then(resp => resp.json().then(jsonResp => {
                return resp.ok ? jsonResp : Promise.reject(jsonResp);
            })
            )
            .then(
                data => {
                    if (typeof (data.Error) != 'undefined') this.setState({ error: data.Error, loading: false });
                    else {
                        const speakers = data.speakers;
                        this.setState({
                            error: '',
                            speakers: this.state.speakers.concat(speakers),
                            loading: false,
                        });
                    }

                }
            )
    }

    handelMoreSpeaker = () => {
        let startupArr = this.state.speakers;
        let lastIndex = startupArr.length;
        let lastId = this.state.speakers[lastIndex - 1].id;
        if (lastIndex % 6 !== 0) {
            this.setState({
                hasMore: false
            });
        }
        else {
            if (lastId !== this.state.id) {
                this.setState({
                    id: lastId
                }, () => this.handelSpeakersFatch());
            }
            else {
                setTimeout(() => {
                    this.handelMoreSpeaker();
                }, 1000);
            }
        }
}


caruselPrev = (elem, inter) => {
    inter = elem.childNodes[0].offsetWidth;
    if(window.navigator.userAgent.indexOf("Edge") > -1){
        elem.scrollLeft=elem.scrollLeft + inter;
    }
    else elem.scrollTo({
        left: elem.scrollLeft + inter,
        behavior: "smooth",
    });
}
caruselNext = (elem, inter) => {
    inter = elem.childNodes[0].offsetWidth;
    if(window.navigator.userAgent.indexOf("Edge") > -1){
        elem.scrollLeft=elem.scrollLeft - inter;
    }
    else elem.scrollTo({
        left: elem.scrollLeft - inter,
        behavior: "smooth",
    });
}



render = () => {
    const { speakers } = this.state;
    const API_IMG_URL = this.getInfo().API_IMG_URL;
    const aftermovie_link = this.getInfo().aftermovie_link;
    return (
        <div className="upcommingSpeakerNew">
            <h2>Learn from top industry leaders</h2>
            <p>— our previous speakers & mentors —</p>
            <div className="upcommingSpeakerNew_middle">
                <div className="left">
                    <div className="upcommingSpeakerNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingSpeakerImg, 500)}><b /></div>
                    <div className="upcommingSpeakerNewImg" ref="upcommingSpeakerImg">
                        {
                            speakers.map(speakers => (
                                <div className="speaker" key={speakers.id}>
                                    <div className="imgBox">
                                        <img src={require(`./img/${API_IMG_URL}/speakers/${speakers.img}`)} rel="speaker" />
                                    </div>
                                    <p className="name">{speakers.name}</p>
                                    <p className="position">{speakers.position}</p>
                                    <a href={speakers.link} target="_blank" rel="noopener noreferrer" ><i /></a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="upcommingSpeakerNewNext" onClick={() => this.caruselNext(this.refs.upcommingSpeakerImg, 500)}><b /></div>
                </div>
                <div className="right">
                    <iframe title="part8Frame" src={aftermovie_link} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
    }
}
export default withRouter(Speakers);
import React from 'react';
// import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Info_Past1, Info_Past2, Info_Past3, Info_Past4, Info_Past5, Info_Past6 } from './eventArray/array.jsx';

// Speaker names/positions lived only in the dead apis.seasidestartupsummit.com API,
// so the carousel shows the local photos without captions.
const speakerImages = require.context('./img', true, /^\.\/[^/]+\/img\/speakers\/[^/]+\.(png|jpe?g)$/i);

// the same photo is stored under several file names; emitted names carry a content hash
const uniqueImages = srcs => {
    const seen = new Set();
    return srcs.filter(src => {
        const hash = src.match(/\.([0-9a-f]{8})\.[a-z]+$/i);
        const key = hash ? hash[1] : src;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

class Speakers extends React.Component {
    getInfo = () => {
        let location = this.props.history.location.pathname;
        if (location === '/sevan19' || location === '/sevan19/') return Info_Past6;
        else if (location === '/sevan18' || location === '/sevan18/') return Info_Past1;
        else if (location === '/sevan17' || location === '/sevan17/') return Info_Past2;
        else if (location === '/sevan16' || location === '/sevan16/') return Info_Past3;
        else if (location === '/uae18' || location === '/uae18/') return Info_Past4;
        else if (location === '/india18' || location === '/india18/') return Info_Past5;
        return {};
    }

    getSpeakerImages = API_IMG_URL => {
        if (!API_IMG_URL) return [];
        const prefix = `./${API_IMG_URL}/speakers/`;
        return uniqueImages(speakerImages.keys()
            .filter(key => key.startsWith(prefix))
            .map(key => {
                const img = speakerImages(key);
                return img.default || img;
            }));
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
    const { API_IMG_URL, aftermovie_link } = this.getInfo();
    const images = this.getSpeakerImages(API_IMG_URL);
    if (images.length === 0) return null;
    return (
        <div className="upcommingSpeakerNew">
            <h2>Learn from top industry leaders</h2>
            <p>— our previous speakers & mentors —</p>
            <div className="upcommingSpeakerNew_middle">
                <div className="left">
                    <div className="upcommingSpeakerNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingSpeakerImg, 500)}><b /></div>
                    <div className="upcommingSpeakerNewImg" ref="upcommingSpeakerImg">
                        {
                            images.map(src => (
                                <div className="speaker" key={src}>
                                    <div className="imgBox">
                                        <img src={src} alt="speaker" />
                                    </div>
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

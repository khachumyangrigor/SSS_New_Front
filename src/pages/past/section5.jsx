import React from 'react';
import { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Startup names/descriptions lived only in the dead apis.seasidestartupsummit.com API,
// so the alumni carousel shows the local photos without captions.
const startupImages = require.context('./img', true, /^\.\/[^/]+\/img\/startups\/[^/]+\.(png|jpe?g)$/i);

// the same photo can be stored under several file names; emitted names carry a content hash
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

class Startups extends React.Component {
    getStartupImages = () => {
        const { API_IMG_URL } = this.props.info;
        if (!API_IMG_URL) return [];
        const prefix = `./${API_IMG_URL}/startups/`;
        return uniqueImages(startupImages.keys()
            .filter(key => key.startsWith(prefix))
            .map(key => {
                const img = startupImages(key);
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
        const images = this.getStartupImages();
        if (images.length === 0) return null;
        return (
            <Fragment>
                <div className="upcommingInvestorNew upcommingInvestorNew_Startup">
                    <h2>Join the gang of tommorow’s unicorns</h2>
                    <p>— our alumni —</p>
                    <div className="left">
                        <div className="upcommingInvestorNewPrev" onClick={() => this.caruselPrev(this.refs.upcommingInvestorImg, 500)}><b /></div>
                        <div className="upcommingInvestorNewImg" ref="upcommingInvestorImg">
                            {
                                images.map(src => (
                                    <div className="investor" key={src}>
                                        <div className="imgBox">
                                            <img src={src} alt="startup" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="upcommingInvestorNewNext" onClick={() => this.caruselNext(this.refs.upcommingInvestorImg, 500)}><b /></div>
                    </div>
                </div>
            </Fragment >
        )
    }
}
export default withRouter(Startups);

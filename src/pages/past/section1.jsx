import React from 'react';
import { Fragment } from 'react';
// import scrollToComponent from 'react-scroll-to-component';
import {Helmet} from "react-helmet";



class Banner extends React.Component {
    constructor() {
        super();
        this.thisPart = React.createRef();
        this.state = {
            promoClass: '',
            promoLink: ''
        }
    }
    handelAddPromo = () => {
        this.setState({
            promoClass: 'openClass2',
            promoLink: this.props.info.aftermovie_link,
        });
    }
    handelRemovePromo = () => {
        this.setState({
            promoClass: '',
            promoLink: ''
        });
    }
    // handelScrollIntoView = () => {
    //     scrollToComponent(this.thisPart, {
    //         offset: this.thisPart.offsetHeight,
    //         align: 'bottom',
    //         duration: 800
    //         //ease: 'inExpo'
    //     });
    // }
    render = () => {
        const { baner_title_part1, event_date, baner_class,metaTitle,metaImg,spiker_push,metaDesc } = this.props.info
        return (
            <Fragment>
                <Helmet>
                    <title>{metaTitle}</title>
                    <meta name="description" content={metaDesc} />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:url" content={`https://www.seasidestartupsummit.com${spiker_push}`} />
                    <meta property="og:image" content={`http://seasidestartupsummit.com/ogImage/${metaImg}`} />
                    <meta property="og:description" content={metaDesc} />
                </Helmet>
                <div id="promoVideo" className={this.state.promoClass} onClick={this.handelRemovePromo}>
                    <iframe title="frame1" width="100%" height="60%" src={this.state.promoLink} allow="encrypted-media" allowFullScreen></iframe>
                </div>
                <div id="cover" className={baner_class} ref={(section) => { this.thisPart = section; }}>
                    <div>
                        <h1>{baner_title_part1}</h1>
                        <p>{event_date}</p> 
                        <div>
                            <button onClick={this.handelAddPromo} className="btn_header">Aftermovie</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Banner;
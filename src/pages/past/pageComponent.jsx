import React from 'react';
import { Fragment } from 'react';
import Banner from './section1.jsx';
import Videos from './section2.jsx';
import Infographic from './section3.jsx';
import Speakers from './section4.0.jsx';
import Startups from './section5.jsx';
import Organizers from './organizers/organizers.jsx';
import Head from '../headNew/head.jsx';
import FootterNew from '../footterNew/footterNew.jsx';
import { Info_Past1, Info_Past2, Info_Past3, Info_Past4, Info_Past5, Info_Past6 } from './eventArray/array.jsx';

import './css/style.css';
import './css/media.css';
import './css/media2.css';

import './img/sevan_2019/img/bg.jpg';
import './img/sevan_2018/img/bg.jpg';
import './img/sevan_2017/img/bg.jpg';
import './img/sevan_2016/img/bg.jpg';
import './img/goa_2018/img/bg.jpg';
import './img/rak_2018/img/bg.jpg';

class Past_Page extends React.Component {
    constructor() {
        super();
        this.open = false;
        this.state = {
            Info: {}
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillMount = () => {
        this.handelUpdate(this.props.history.location.pathname);
    }
    componentWillReceiveProps = nextProps => {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.handelUpdate(nextProps.history.location.pathname);
        }
    }
    handelUpdate = location => {
        if (location === '/sevan18/' || location === '/sevan18') this.setState({ Info: Info_Past1 });
        else if (location === '/sevan17/' || location === '/sevan17') this.setState({ Info: Info_Past2 });
        else if (location === '/sevan16/' || location === '/sevan16') this.setState({ Info: Info_Past3 });
        else if (location === '/uae18/' || location === '/uae18') this.setState({ Info: Info_Past4 });
        else if (location === '/india18/' || location === '/india18') this.setState({ Info: Info_Past5 });
        else if (location === '/sevan19/' || location === '/sevan19') this.setState({ Info: Info_Past6 });
    }

    handleScroll = () => {
        if (this.refs.Banner) {
            if (window.innerWidth > 851) {
                //if (window.scrollY > 0) document.getElementsByTagName('nav')[0].style.background = "rgba(14, 32, 67, 0.88)";
                //else document.getElementsByTagName('nav')[0].style.background = "rgba(255, 255, 255, 0)";
            }
        }
        if (this.refs.Video || this.refs.Infographic) {
            let part2 = this.refs.Video;
            let part3 = this.refs.Infographic;
            if (window.scrollY > part2.offsetTop / 3.2) part2.classList.add('scrollShowMarg');
            if (window.scrollY > part3.offsetTop / 1.7) part3.classList.add('scrollShow');
        }
    }
    render = () => {
        const { Info } = this.state;
        return (
            <Fragment >
                <div ref='Banner'>
                    <Banner info={Info} />
                </div>
                <Head />
                <div className='opacity' ref='Video'>
                    <Videos info={Info} />
                </div>
                <div className='opacity' ref='Infographic'>
                    <Infographic info={Info} />
                </div>
                <Speakers info={Info} />
                <Startups info={Info} />
                <Organizers />
                <FootterNew />
            </Fragment >
        )
    }
}


export default Past_Page



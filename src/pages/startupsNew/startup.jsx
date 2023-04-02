import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Header from '../headNew/head.jsx';
import FootterNew from '../footterNew/footterNew.jsx';
import { Baner } from './baner.jsx';
import { Participate } from './participate.jsx';
import { Fund } from './boosterfund.jsx';
import { Apply } from './howApply.jsx';
import Programs from './program.jsx';
import Meet from './meet.jsx';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
//css
import './startup.css';
//Media


class Startups extends React.Component {
    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.scrollTo(0, 0);
    }
    winScroll = () => {
        if (this.refs.topMenu !== undefined) {
            if (window.scrollY >= window.innerHeight) {
                this.refs.topMenu.classList.add('topMenuFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.topMenu.classList.remove('topMenuFix');
            }
        }
    }
    handelScrollIntoView = () => {
        scrollToComponent(this.refs.footter, {
            offset: this.refs.footter.offsetHeight,
            align: 'top',
            duration: 800
        });
    }
    menuCloase = () => {
        this.submenuOpen();
    }
    menueClose = () => {
        this.menuOpen();
    }

    render = () => {
        return (
            <Fragment>
            <Helmet>
                <title>Startups | Seaside Startup Summit</title>
            </Helmet>
            <div className="startupsNew" >
                <Baner/>
                <Header/>
                <Participate/>
                <Programs/>
                <Fund/>
                <Apply/>
                <Meet/>
                <FootterNew/>
            </div>
            </Fragment>
        )
    }
}

export default Startups;
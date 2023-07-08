import React from 'react';
import scrollToComponent from 'react-scroll-to-component';
import {Fragment}  from 'react';
import {Helmet} from "react-helmet";
import Header from '../headNew/head.jsx';
// Sub Pages
import  SpeakersPage from './speakers/speakers.jsx';
import  ValunteersPage from './volunteers/volunteers.jsx';
import  TeamleadPage from './taemlead/teamlead.jsx';
import  CoachesPage from './coaches/coaches.jsx';

//css
import './upcommingNew.css';

//Media


class UpcommingNew extends React.Component {
    constructor() {
        super();
        this.state = {
            subepage: 'none',
            event:''
        }
        this.scrollY=0;
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.winScroll);
        window.addEventListener("click", this.menueautoClose);
        let subpage=this.props.match.params.subpage;
        window.addEventListener("load", this.scrollSubPart(subpage));

        this.setState({event:this.props.match.params.event});

        if (this.props.match.params.subpage!==undefined) {
            let subpage=this.props.match.params.subpage;
            // this.scrollSubPart(subpage);
            this.redirectSubPage(subpage);
        }
        else window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.winScroll);
        window.removeEventListener('click', this.menueautoClose);
        window.removeEventListener('load', this.scrollSubPart);
    }
    
    
    componentWillReceiveProps=(newprops)=>{
        let subpage=newprops.match.params.subpage;
        this.scrollSubPart(subpage);
        this.redirectSubPage(subpage);
    }

    redirectSubPage=(subpage)=>{
        // console.log('redirectSubPage');
        switch(subpage){
            case 'speakers':
                this.setState({subepage:subpage});
                break;
            case 'volunteers':
                this.setState({subepage:subpage});
                break;
            case 'team-leads':
                this.setState({subepage:subpage});
                break;
            case 'coaches':
                this.setState({subepage:subpage});
                break;
            default: 
                // this.scrollSubPart(subpage)
                this.setState({subepage:'none'});
                break;
            }
    }

    scrollSubPart=(subpage)=>{
        this.setState({subepage:subpage});
        switch(subpage){
            case 'program':
                this.handelScrollTo(this.refs.program);
                break;
            case 'firecode-marathone':
                this.handelScrollTo(this.refs.firecode);
                break;
            case 'our-credo':
                this.handelScrollTo(this.refs.credo);
            break;
            case 'platform-structure':
                this.handelScrollTo(this.refs.platform);
                break;
            case 'speakers-part':
                this.handelScrollTo(this.refs.speaker);
                break;
            case 'investors-part':
                this.handelScrollTo(this.refs.investor);
                break;
            case 'our-Alumni':
                this.handelScrollTo(this.refs.startup);
                break;
            case 'how-to-reach-us':
                this.handelScrollTo(this.refs.shuttle);
                break;
            case 'important-to-know':
                this.handelScrollTo(this.refs.mustKnow);
                break;
            case 'citizen':
                this.handelScrollTo(this.refs.citizen);
                break;
            default: 
                this.setState({subepage:'none'});
                break;
            }
    }

    winScroll = () => {
        if (this.refs.topMenu !== undefined) {
            if (window.scrollY >= window.innerHeight) {
                this.refs.topMenu.classList.add('topMenuFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.topMenu.classList.remove('topMenuFix');
            }
            if (window.scrollY >= window.innerHeight/2) {
                this.refs.subMenu.classList.add('subMnueFix');
            }
            else if (window.scrollY < window.innerHeight) {
                this.refs.subMenu.classList.remove('subMnueFix');
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
    
    handelScrollTo = elem => {
        scrollToComponent(elem, {
            offset: -200,
            align: 'top',
            duration: 800
        });
    }

    menuOpen = (e) => {
        e.stopPropagation(); 

        if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
            this.refs.menuIcon.classList.remove("minmenuIconOpen");
            this.refs.menuBox.classList.remove("minmenuBoxOpen");
        }
        else {
            this.refs.menuIcon.classList.add("minmenuIconOpen");
            this.refs.menuBox.classList.add("minmenuBoxOpen");
        }
    }
    submenuOpen = () => {
        if (this.refs.submenuIcon.classList.contains("minmenuLastIconOpen")) {
            this.refs.submenuIcon.classList.remove("minmenuLastIconOpen");
            this.refs.subMenu.style.display = "none";
        }
        else {
            this.refs.submenuIcon.classList.add("minmenuLastIconOpen");
            this.refs.subMenu.style.display = "flex";
        }
    }

    menuCloase = () => {
        this.submenuOpen();
    }
    menueClose = () => {
        this.menuOpen();
    }
    menueautoClose=()=>{
        if(this.refs.menuIcon){
            if (this.refs.menuIcon.classList.contains("minmenuIconOpen")) {
                this.refs.menuIcon.classList.remove("minmenuIconOpen");
                this.refs.menuBox.classList.remove("minmenuBoxOpen");
            }
        }
    }

    render = () => {
        const {subepage,event}=this.state;
        if(subepage==='speakers')return (<SpeakersPage/>);
        else if(subepage==='volunteers')return (<ValunteersPage/>);
        else if(subepage==='team-leads')return (<TeamleadPage/>);
        else if(subepage==='coaches')return (<CoachesPage/>);
        else
         return (            
            <Fragment>
            <Helmet>
                <title>Sevan 2020 | Seaside Startup Summit</title>
            </Helmet>
            <div className="upcommingNew" >
                <div className="coverbg2020Bl">
                    <div>
                        <img src={require('./img/denger.png')} alt="denger"/>
                    </div>
                    <p>The event won’t be held due to the COVID-19 pandemic</p>
                </div>
                {/* Part 1 */}
                <div className="upcommingNewTop" ref="firstPageTop">
                    <div className="upcommingNewTopHead">
                        <h1>a harbor of discoveries</h1>
                        <h2>turn your dreams into goals</h2>
                    </div>
                    <div  className="upcommingNewTopFootter">
                        <h3>Sevan Startup Summit 2020</h3>
                        <h4>26 july - 1 august </h4>
                    </div>
                </div>
                <Header/>
            </div >
            </Fragment>
        )
    }
}
export default UpcommingNew;
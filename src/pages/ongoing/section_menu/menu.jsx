import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './menu.css';

class FixedMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            classActiv: ''
        }
    }
    componentWillReceiveProps = nextProps => {
        const pathId = nextProps.match.params.id;
        if (this.props.location.pathname !== nextProps.location.pathname) this.checkURL(pathId);
    }
    componentDidMount = () => {
        this.checkURL(this.props.match.params.id);
    }
    checkURL = (url) => {
        switch (url) {
            case 'home':
                this.setState({ classActiv: '' });
                this.handdelActiveListAuto(this.refs.li1);
                break;
            case 'values':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li2);
                break;
            case 'infographic':
                this.setState({ classActiv: '' });
                this.handdelActiveListAuto(this.refs.li3);
                break;
            case 'startups':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li4);
                break;
            case 'speakers':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li6);
                break;
            case 'investors':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li7);
                break;
            case 'firecode':
                this.setState({ classActiv: '' });
                this.handdelActiveListAuto(this.refs.li8);
                break;
            case 'event-details':
                this.setState({ classActiv: '' });
                this.handdelActiveListAuto(this.refs.li9);
                break;
            case 'all-speakers':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li6);
                break;
            case 'partners':
                this.setState({ classActiv: 'fixedMenueWhite' });
                this.handdelActiveListAuto(this.refs.li1);
                break;
            default:
                this.setState({ classActiv: 'fixedMenueWhite' });
                break
        }
    }
    handdelActiveList = e => {
        let obj = this.refs;
        Object.keys(obj).map(function (key) {
            obj[key].classList.remove("active");
            return null;
        });
        e.currentTarget.classList.add("active");
    }
    handdelActiveListAuto = e => {
        let obj = this.refs;
        Object.keys(obj).map(function (key) {
            obj[key].classList.remove("active");
            return null;
        });
        e.classList.add("active");
    }
    render = () => {
        return (
            <div className={`fixedMenu ${this.state.classActiv}`}>
                <ul>
                    <li ref='li1' onClick={(e) => this.handdelActiveList(e)} className="active"><Link to='/sevan19/home'><span className="span1">SSS 2019</span><span className='span2' /></Link></li>
                    <li ref='li3' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/infographic'><span className="span1">Numbers</span><span className='span2' /></Link></li>
                    <li ref='li2' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/values'><span className="span1">Why Attend</span><span className='span2' /></Link></li>
                    <li ref='li4' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/startups'><span className="span1">Tracks</span><span className='span2' /></Link></li>
                    {/* <li ref='li5' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/firecode'><span className="span1">Developers</span><span className='span2' /></Link></li> */}
                    <li ref='li6' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/speakers'><span className="span1">Speakers</span><span className='span2' /></Link></li>
                    <li ref='li7' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/investors'><span className="span1">Investors</span><span className='span2' /></Link></li>
                    <li ref='li8' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/firecode'><span className="span1">FireCode</span><span className='span2' /></Link></li>
                    <li ref='li9' onClick={(e) => this.handdelActiveList(e)}><Link to='/sevan19/event-details'><span className="span1">Location</span><span className='span2' /></Link></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(FixedMenu);
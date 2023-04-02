import React from 'react';
import Section1 from './section1/sectionOne.jsx';
import Header from '../header/header.jsx';
import { Fragment } from 'react';

class Home_Page extends React.Component {
    constructor() {
        super();
        this.state = {
            locationPath: '',
        }
    }
    // componentWillMount = () => {
    //     window.location.href = "/sevan19";
    // }
    componentDidMount = () => {
        this.setState({ locationPath: this.props.location.pathname });
    }
    render = () => {
        return (
            <Fragment>
                <Header />
                <Section1 />
            </Fragment>
        )
    }
}
export default Home_Page;
import React from 'react';
import { Fragment } from 'react';
// import FixedMenu from './section_menu/menu.jsx';
import Section1 from './section1/sectionOne.jsx';
// import Section2 from './section2/sectionTwo.jsx';
// import Section3 from './section3/sectionThree.jsx';
// import Section4 from './section4/sectionFour.jsx';
// import Section5 from './section5/sectionFive.jsx';
// import Section6 from './section6/sectionSix.jsx';
// import Section7 from './section7/sectionSeven.jsx';
// import SectionLast from './sectionLast/sectionLast.jsx';
import OrganizersSevan20 from './organizers/sevan20.jsx';
import Header from '../header/header.jsx';


class Sevan2020 extends React.Component {
    constructor() {
        super();
        this.partners = false;
        this.pages = [undefined, 'home', 'infographic', 'values', 'startups', 'speakers', 'investors', 'firecode', 'event-details'];
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.match.params.id === "partners") {
            this.partners = true;
        }
        else this.partners = false;
    }
    componentWillMount = () => {
        if (this.props.match.params.id === "partners") {
            this.partners = true;
        }
        else this.partners = false;
    }

    // componentDidMount = () => {
    //     window.addEventListener("keydown", (event) => this.keyDown(event));
    // }

    // keyDown = (event) => {
    //     // if (event.ctrlKey && event.key === "a") {

    //     // }
    //     if (event.key === "ArrowDown") {
    //         let location = this.props.match.params.id;
    //         let page = this.pages;
    //         for (let i = 0; i < page.length; i++) {
    //             if (page[i] === location && i !== page.length - 1) {
    //                 let next = page[i + 1];
    //                 this.props.history.push('/sevan19/' + next);
    //                 break;
    //             }
    //         }
    //     }
    //     else if (event.key === "ArrowUp") {
    //         let location = this.props.match.params.id;
    //         let page = this.pages;
    //         for (let i = 0; i < page.length; i++) {
    //             if (page[i] === location && i !== 0 && i !== 1) {
    //                 let prev = page[i - 1];
    //                 this.props.history.push('/sevan19/' + prev);
    //                 break;
    //             }
    //         }
    //     }
    // }

    render = () => {
        if (this.partners) return <OrganizersSevan20 />;
        return (
            <Fragment>
                <Header />
                {/* <FixedMenu /> */}
                <Section1 />
                {/* <Section3 />
                <Section2 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <SectionLast /> */}
            </Fragment>
        )
    }
}
export default Sevan2020;
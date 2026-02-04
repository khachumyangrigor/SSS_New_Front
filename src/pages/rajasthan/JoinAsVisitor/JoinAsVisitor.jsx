import React, { Fragment } from "react";
import "../myStyles.css";

export class JoinAsVisitor extends React.Component {
    constructor() {
        super();
        this.state = {
            textOpeningWhatIs: "More",
            textOpeningWhereWill: "More",
        };
    }
    textOpeningWhatIs = () => {
        const { textOpeningWhatIs } = this.state;
        if (textOpeningWhatIs === "More") {
            this.setState({
                textOpeningWhatIs: "Less",
            });
        } else {
            this.setState({
                textOpeningWhatIs: "More",
            });
        }
    };
    render() {
        return (
            <Fragment>
                <div className="join-as-wisitor-conteiner wb-background-gray">
                    <div className="join-as-wisitor-left"></div>
                    <div className="join-as-wisitor-right">
                        <h2>Join as a Visitor and Experience the Ecosystem Up Close</h2>
                        {/* <div>— Get access to over 100,000 sqM event grounds —</div> */}
                        <p className={`${this.state.textOpeningWhatIs}`}>
                            Rajasthan Startup Summit 2026 invites students, professionals, and ecosystem enthusiasts to
                            attend as Visitors and step inside the world of startups, innovation, and entrepreneurship.
                            This is your opportunity to explore the summit beyond the sidelines and engage directly with
                            the people building tomorrow’s businesses.
                            <br/>
                            Visitors receive access to keynote sessions, panel discussions, startup showcases, and
                            curated networking spaces — offering meaningful interactions with founders, mentors,
                            investors, and industry leaders. The Public Day is designed to open the summit to the
                            broader community, creating space for learning, inspiration, and valuable connections.
                        </p>
                        <div className="join-as-wisitor-button">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdxHpAgReJpE8gIbBtuCrdSVxriA1hE7l0cOcY1XEoQ-HsOeg/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="join-as-wisitor-register-link"
                            >
                                <button className="join-as-wisitor-register-btn">Register now</button>
                            </a>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

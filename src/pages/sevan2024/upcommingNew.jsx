import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import FootterNew from "../footterNew/footterNew.jsx";

import Apply from "./Apply/Apply.jsx";
import Organizers from "./Organizers/Organizers.jsx";
import Stats from "./Status/index.jsx";
import Valounteering from "./Volunteering/Volunteering.jsx";
import Credo from "./credo.jsx";
import MustKnow from "./mustknow.jsx";
import Programs from "./program.jsx";
import Shuttle from "./shuttle.jsx";

import Navbar from "./Navbar/index.jsx";
import { GetAccess } from "./component.min.jsx";

//css
import Roadmap from "./Roadmap/Roadmap.jsx";
import "./upcommingNew.css";
import Partners from "./Partners/Partners.jsx";

//Media

class UpcommingNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      scrollY: null,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      screenWidth: window.innerWidth,
      scrollY: window.scrollY,
    });
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleResize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render = () => {
    return (
      <Fragment>
        <Helmet>
          <title>Sevan Startup Summit 2024 | Seaside Startup Summit</title>
          <meta
            name="description"
            content="Sevan Startup Summit 2024 will be held at Sevan from July 21 to July 27"
          />
          <meta
            property="og:title"
            content="Sevan Startup Summit 2024 | Seaside Startup Summit"
          />
          <meta
            property="og:url"
            content={`https://www.seasidestartupsummit.com/upcoming-events/sevan-2023`}
          />
          <meta
            property="og:image"
            content="http://seasidestartupsummit.com/ogImage/sevan23.png"
          />
          <meta
            property="og:description"
            content="Sevan Startup Summit 2024 will be held at Sevan from July 21 to July 27"
          />
        </Helmet>
        <div className="upcommingNew">
          {/* Part 1 */}
          <div className="upcommingNewTop sevan2023 sevan2024">
            {(this.state.screenWidth > 1024 ||
              this.state.screenWidth === null) && (
              <div
                className={
                  this.state.scrollY >= 650
                    ? "sevan2024-mainNavbar"
                    : "sevan2024-headerNavbar"
                }
              >
                <Navbar />
              </div>
            )}

            <div className="wb-topTitle">
              <h1>
                A Campsite Festival <br /> for Startup Enthusiasts
              </h1>
              <h5>Where Ideas Spark and Dreams Take Flight!</h5>
            </div>
            <div className="wb-footerTitle">
              <h4>
                SEVAN STARTUP SUMMIT 2024 <br /> JULY 21 - 27
              </h4>
              <div className="wb-applyButtonBlock wb-applyButtonBlock-right">
                <a
                  href="https://mootq.com/events/sss24"
                  // onClick={() => setPopupStatus(true)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Buy Tickets</button>
                </a>
              </div>
            </div>
          </div>
          {/* Part 2 */}
          {this.state.screenWidth <= 1024 &&
            this.state.screenWidth !== null && <Navbar />}
          <GetAccess />
          <Stats />
          <Credo />
          <Roadmap />
          {/*<Participate ref="participate" />*/}
          {/*<WeOffer />*/}
          <Programs />
          {/*<Valounteering />*/}
          {/*<Apply />*/}
          <Shuttle />
          <MustKnow />
          <Organizers />
          <Partners />
          <FootterNew />
        </div>
      </Fragment>
    );
  };
}
export default UpcommingNew;

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
import Agritech from "./Agritech/Agritech.jsx";

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
            content="Sevan Startup Summit 2025 will be held at Sevan from July 20 to July 26"
          />
          <meta
            property="og:title"
            content="Sevan Startup Summit 2025 | Seaside Startup Summit"
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
            content="Sevan Startup Summit 2025 will be held at Sevan from July 20 to July 26"
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
                SEVAN STARTUP SUMMIT 2025 <br /> JULY 20 - 26
              </h4>
              <div className="wb-applyButtonBlock wb-applyButtonBlock-right">
                <a
                  href="https://360.skywlkr.me/share/collection/7KM2B?logo=-1&info=0&fs=1&vr=0&sd=1&gyro=0&initload=0&thumbs=1"
                  // onClick={() => setPopupStatus(true)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Area Map</button>
                </a>
                <a
                    className="wb-agendaDesktopButton"
                    href="https://my.matterport.com/show/?m=uuhg5Lm2u9y"
                    // onClick={() => setPopupStatus(true)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <button>Expo Map 2025</button>
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
          <Agritech />
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

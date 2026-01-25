import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import FootterNew from "../footterNew/footterNew.jsx";

import Stats from "./Status/index.jsx";
import Credo from "./credo.jsx";
import Popup from "./Popup/Popup.jsx";
import Organizers from "./Organizers/Organizers.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import Shuttle from "./shuttle.jsx";

import Navbar from "./Navbar/index.jsx";
import { GetAccess } from "./component.min.jsx";

//css
import "./upcommingNew.css";

class UpcommingNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      scrollY: null,
      popupStatus:false
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
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
    document.body.style.overflow = "";
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.popupStatus !== this.state.popupStatus) {
      if (this.state.popupStatus) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }
popupClose = () => {
    this.setState({
      popupStatus: false
    })
  document.body.style.overflow = "";
}
  popupOpen = () => {
    this.setState({
      popupStatus: true
    })
    document.body.style.overflow = "hidden";
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
          <title>Sevan Startup Summit 2025 | Seaside Startup Summit</title>
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
          <Popup status={this.state.popupStatus} infoMode={false} closePopup={this.popupClose} />
          {/* Part 1 */}
          <div className="upcommingNewTop sevan2023 sevan2024 sevan2025">
            {(this.state.screenWidth > 1024 ||
              this.state.screenWidth === null) && (
              <div
                className={
                  this.state.scrollY >= 650
                    ? "sevan2024-mainNavbar"
                    : "sevan2024-headerNavbar"
                }
              >
                <Navbar openPopup={this.popupOpen}/>
              </div>
            )}

            <div className="wb-topTitle">
              <h1>
                A Campsite Festival <br /> for Startup Enthusiasts
              </h1>
              <h5>Where Ideas Begin and Projects Take Shape!</h5>
            </div>
            <div className="wb-footerTitle">
              <h4>
                SEVAN STARTUP SUMMIT 2025 <br /> JULY 20 - 26
              </h4>
              <h6 className="wb-festivalCity">Sevan Festival City</h6>
              <div className="wb-applyButtonBlock wb-applyButtonBlock-right ">
                {/*<a*/}
                {/*    onClick={(e) => {e.preventDefault()}}*/}
                {/*  href="#"*/}
                {/*  // onClick={() => setPopupStatus(true)}*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <button className="upcomingSevan2025Button">Buy Tickets <span>(Coming soon)</span></button>*/}
                {/*</a>*/}
                {/*<a*/}
                {/*    className="wb-agendaDesktopButton"*/}
                {/*    href="https://seasidestartupsummit.com/pdf/sevan_25_agenda.pdf"*/}
                {/*    // onClick={() => setPopupStatus(true)}*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <button>Agenda</button>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>

          <GetAccess />
          <Stats />
          <Organizers />
          <Credo />
          <Roadmap />
          <Shuttle />
          <Organizers />
          <FootterNew />
        </div>
      </Fragment>
    );
  };
}
export default UpcommingNew;

import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import FootterNew from "../footterNew/footterNew.jsx";

import Shuttle from "./shuttle.jsx";
import Programs from "./program.jsx";
import MustKnow from "./mustknow.jsx";
import Credo from "./credo.jsx";
import Platform from "./platform.jsx";
import Participate from "./Participate/Participate.jsx";
import Valounteering from "./Volunteering/Volunteering.jsx";
import Apply from "./Apply/Apply.jsx";
import Stats from "./Status/index.jsx";
import Organizers from "./Organizers/Organizers.jsx"
import Partners from "./Partners/Partners.jsx"

import WeOffer from "./WeOffer/index.jsx";
import Navbar from "./Navbar/index.jsx";
import { GetAccess } from "./component.min.jsx";

//css
import "./upcommingNew.css";

//Media

class UpcommingNew extends React.Component {
  render = () => {
    return (
      <Fragment>
        <Helmet>
          <title>Sevan Startup Summit 2024 | Seaside Startup Summit</title>
          <meta
            name="description"
            content="Sevan Startup Summit 2023 will be held at Sevan seashore from July 23 to July 29"
          />
          <meta
            property="og:title"
            content="Sevan Startup Summit 2023 | Seaside Startup Summit"
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
            content="Sevan Startup Summit 2023 will be held at Sevan seashore from July 23 to July 29"
          />
        </Helmet>
        <div className="upcommingNew">
          {/* Part 1 */}
          <div className="upcommingNewTop">
            <div className="wb-topTitle">
              <h1>a harbor of discoveries</h1>
              <h2>
                From <b>start</b> through <b>struggle</b> to <b>success</b>
              </h2>
            </div>
            <div className="wb-footerTitle">
              <h3>Sevan Startup Summit 2024</h3>
              <h4>july 23 - 29</h4>
            </div>
          </div>
          {/* Part 2 */}
          <Navbar />
          <GetAccess />
          <Stats />
          <Credo ref="credo" />
          <Participate ref="participate" />
          <WeOffer />
          <Programs ref="program" />
          <Valounteering ref="valounteering" />
          <Apply />
          <Shuttle ref="shuttle" />
          <MustKnow ref="mustKnow" />
          <Organizers />
          <Partners />
          <FootterNew ref="footter" />
        </div>
      </Fragment>
    );
  };
}
export default UpcommingNew;

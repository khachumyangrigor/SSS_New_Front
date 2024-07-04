import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import FootterNew from "../footterNew/footterNew.jsx";

import Apply from "./Apply/Apply.jsx";
import Organizers from "./Organizers/Organizers.jsx";
import Stats from "./Status/index.jsx";
import Valounteering from "./Volunteering/Volunteering.jsx";
import MustKnow from "./mustknow.jsx";
import Programs from "./program.jsx";
import Shuttle from "./shuttle.jsx";
import Credo from "../../components/Credo/index.jsx";

import Navbar from "./Navbar/index.jsx";
import { GetAccess } from "./component.min.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";

//css
import "./upcommingNew.css";
import ApplyButtonBlock from "../../ui/buttons/apply-button-block/ApplyButtonBlock.jsx";
import FlipCard from "../../ui/cards/FlipCard.jsx";

//Media

function SeasideEvent() {
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
                href="https://www.f6s.com/sevan-startup-summit-24/apply"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Apply as a Startup</button>
              </a>
            </div>
          </div>
        </div>
        {/* Part 2 */}
        <Navbar />
        <GetAccess />
        <Stats />
        <Credo
          title="Why Participate as a Startup"
          description="SSS provides the following key benefits"
        >
          <ApplyButtonBlock
            isExternal
            title="Apply as a Startup"
            description="*The distribution into Starter and Booster is done by the SSS steering committee"
            url="https://www.f6s.com/sevan-startup-summit-24/apply"
          />
        </Credo>

        <Roadmap />
        {/*<Participate ref="participate" />*/}
        {/*<WeOffer />*/}
        <Programs />
        <Valounteering />
        <Apply />
        <Shuttle />
        <MustKnow />
        <Organizers />
        {/*<Partners />*/}
        <FootterNew />
      </div>
    </Fragment>
  );
}

export default SeasideEvent;

import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Organizers from "../../pages/sevan2024/Organizers/Organizers.jsx";
import Stats from "../../pages/sevan2024/Status/index.jsx";
import MustKnow from "../../pages/sevan2024/mustknow.jsx";
import Programs from "../../pages/sevan2024/program.jsx";
import Credo from "../../components/Credo/index.jsx";
import Partners from "../../pages/sevan2024/Partners/partners.jsx";
import Agritech from "../../pages/sevan2024/Agritech/Agritech.jsx";
import Intro from "../../components/Intro/index.jsx";
import Transport from "../../components/Transport/index.jsx";
import eventData from "./data";
import Navbar from "../../pages/sevan2024/Navbar";
import Roadmap from "../../pages/sevan2024/Roadmap/Roadmap.jsx";

//css
import "../../pages/sevan2024/upcommingNew.css";
import ApplyButtonBlock from "../../ui/buttons/apply-button-block/ApplyButtonBlock.jsx";

//Media

const statsData = [
  { number: "50+", text: "COUNTRIES" },
  { number: "250+", text: "STARTUPS" },
  { number: "10,000+", text: "PARTICIPANTS" },
  { number: "50+", text: "VCS & INVESTORS" },
  { number: "US $200K+", text: "INVESTMENTS" },
];

function Sevan2024() {
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
        <Intro data={eventData} />
        <Stats
          statsTitle={"Sevan Startup Summit 2024 in numbers"}
          statsData={statsData}
        />
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
        <Programs />
        <Agritech />
        <Transport />
        <MustKnow />
        <Organizers />
        <Partners />
      </div>
    </Fragment>
  );
}

export default Sevan2024;

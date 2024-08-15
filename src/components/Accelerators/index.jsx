import React from "react";
import { acceleratorsData } from "./data.js";
import { classNames } from "../../utils/index";

const Accelerators = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="firstPagePartners">
      <div className="partnersMiddlle">
        <div className="partnersMiddlleLeft">
          <div className="partnersTitle">
            We have <br /> cooperated with
          </div>
          <div className="partnersMiddlleLeftText">
            Our Booster micro-acceleration program is run in cooperation with
            leading accelerators.
          </div>
        </div>
        <div className={classNames("partnersMiddlleright", open ? "open" : "")}>
          {acceleratorsData.map((partners, index) => (
            <PartnerSection key={index} partners={partners} />
          ))}
        </div>
        <div className={classNames("morepartnerBox", open ? "open" : "")}>
          <button onClick={() => setOpen(!open)}>
            {open ? "Less" : "More"}
          </button>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = ({ partners }) => (
  <section>
    {partners.map((partner, index) => (
      <Partner
        key={index}
        link={partner.link}
        imgSrc={partner.imgSrc}
        altText={partner.altText}
      />
    ))}
  </section>
);

const Partner = ({ link, imgSrc, altText }) => (
  <div>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} />
    </a>
  </div>
);

export default Accelerators;

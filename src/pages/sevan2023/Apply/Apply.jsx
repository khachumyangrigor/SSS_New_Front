import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import arrow from "./images/arrow.svg";
import "./Apply.css";

const data = [
  {
    img: img1,
    title: "— Application —",
    description:
      "In order to apply, you will need to fill in our application form. \n" +
      "Make sure to provide accurate information: it helps us to provide you with the best experience.",
  },
  {
    img: img2,
    title: "—  Assessment & Interview — ",
    description:
      "All applied volunteers go through a screening process. Accepted volunteers will be invited to an interview.",
  },
  {
    img: img3,
    title: "—  Pre-event training — ",
    description:
      "All the shortlisted candidates pass month-long training. Top applicants are selected and dispersed into working groups.",
  },
  {
    img: img4,
    title: "— Time to work —",
    description:
      "Over the course of the Summit, the volunteers support the organizers in conducting the hottest event of the summer!",
  },
];

function Apply() {
  return (
    <div className="wb-applyBlock">
      <div className="wb-applyTitle">
        <h2>How To Apply</h2>
      </div>
      <div className="wb-applyItemsBlock">
        {data.map((block, i) => {
          return (
            <div key={`apply-${i}`} className="wb-itemWithArrowBlock">
              <div className="wb-itemBlock">
                <div className="wb-imageBlock">
                  <img src={block.img} alt="Icon" />
                </div>
                <div className="wb-contentBlock">
                  <div className="wb-titleBlock">
                    <h3>{block.title}</h3>
                  </div>
                  <div className="wb-description">
                    <p>{block.description}</p>
                  </div>
                </div>
              </div>
              {i !== data.length - 1 && (
                <div className="wb-arrowBlock">
                  <img src={arrow} alt="" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="wb-applyButtonBlock">
        <a
          href="https://forms.gle/VSG5oNLhg2nr8zhr9"
          target="_blank"
          rel="noopener noreferrer">
          <button>Apply as a Volunteer</button>
        </a>
      </div>
    </div>
  );
}

export default Apply;

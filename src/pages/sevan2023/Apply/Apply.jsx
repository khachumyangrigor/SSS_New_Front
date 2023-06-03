import React from "react"
import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import arrow from "./images/arrow.svg"
import "./Apply.css"

const data = [
    {
        img:img1,
        title:"— Application —",
        description:"In order to apply, you will need to fill in our application form. Please keep in mind, that provision of accurate information is important helps us to provide you the best experience"
    },
    {
        img:img2,
        title:"—  Assessment & Interview — ",
        description:"All the applied Volunteers pass a screening process and the accepted ones are interviewed"
    },
    {
        img:img3,
        title:"—  Pre-event training — ",
        description:"All the preselected candidates pass one-month training session and top applicants are selected and distributed into working groups"
    },
    {
        img:img4,
        title:"— Time to work —",
        description:"During the 7 days of the Summit you will have to support the organizers to conduct the best event ever.   "
    }
]

function Apply() {

    return (
        <div className="wb-applyBlock">
            <div className="wb-applyTitle">
                <h2>How To Apply</h2>
            </div>
            <div className="wb-applyItemsBlock">
                {data.map((block,i) => {
                    return (
                        <div className="wb-itemWithArrowBlock">
                            <div className="wb-itemBlock">
                                <div className="wb-imageBlock">
                                    <img src={block.img} alt="Icon" />
                                </div>
                                <div className="wb-titleBlock">
                                    <h3>{block.title}</h3>
                                </div>
                                <div className="wb-description">
                                    <p>{block.description}</p>
                                </div>
                            </div>
                            {i !== data.length - 1 && <div className="wb-arrowBlock"><img src={arrow} alt="" /></div>}
                        </div>

                    )
                })}
            </div>
            <div className="wb-applyButtonBlock">
                <a
                    href="https://forms.gle/VSG5oNLhg2nr8zhr9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        Apply as a Volunteer
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Apply;
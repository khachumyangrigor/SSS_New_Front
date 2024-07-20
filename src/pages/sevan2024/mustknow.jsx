import React, {useState} from 'react';
import {
    Amenities,
    Weather,
    Entertainments,
    LocalRules,
} from './mustknow.min.jsx';
import {Link} from "react-scroll";

const sections = [
    {name: "Amenities", component: <Amenities/>},
    {name: "Weather", component: <Weather/>},
    {name: "Entertainments", component: <Entertainments/>},
    {name: "LocalRules", component: <LocalRules/>}
];

const buttonData = [
    {name: "Amenities", buttonId: "li1", label: "Amenities at the venue"},
    {name: "Weather", buttonId: "li2", label: "Weather conditions"},
    {name: "Entertainments", buttonId: "li3", label: "Entertainments"},
    {name: "LocalRules", buttonId: "li4", label: "Local rules"}
];

const listItems = [
    {name: "Amenities", id: "li5", label: "Amenities at the venue"},
    {name: "Weather", id: "li6", label: "Weather conditions"},
    {name: "Entertainments", id: "li7", label: "Entertainments"},
    {name: "LocalRules", id: "li8", label: "Local rules"}
];

const Programs = () => {
    const [activeSection, setActiveSection] = useState("Amenities");
    const [activeButton, setActiveButton] = useState("li1");

    const programOpen = (section, button) => {
        setActiveSection(section);
        setActiveButton(button);
    };

    const buttonStyle = (button) => ({
        color: activeButton === button ? "rgb(255,255,255)" : "#2F80ED",
        background: activeButton === button ? "#2F80ED" : "#f7f7f7"
    });

    const listItemStyle = (button) => ({
        color: activeButton === button ? "rgb(117,117,117)" : "rgb(47, 128, 237)"
    });


    return (
        <div className="upcommingProgramsBlock sevan2024-mustKnow">
            <h2>What you need to know beforehand</h2>
            <div className="upcommingPrograms">
                <div className="upcommingPrograms_left">
                    <div className="imgBox">
                        <img src={require('./img/disignIcon/info.png') ?? ""} alt="starter program"/>
                    </div>
                    <div className="textBox">
                        <h3>— important to know —</h3>
                        <div style={{display: "flex"}}>
                            <img src={require('./img/disignIcon/info.png') ?? ""} alt="starter program"
                                 className="textBoxMobileImg"/>
                            <p>Sevan Startup Summit is located in one of the most beautiful places in Armenia, in an
                                open outdoor camping area. It is extremely important to be well prepared.<br/> <b>Please
                                    check the below links for more information.</b></p>
                        </div>
                        <div className="carusel_menue">
                            <div className="mobi_meue_trp_left"/>
                            <ul>
                                {listItems.map((item) => (
                                    <li
                                        key={item.id}
                                        style={listItemStyle(item.id)}
                                        onClick={() => programOpen(item.name, item.id)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                            <div className="mobi_meue_trp_right"/>
                        </div>
                        <div className="wb-knowMobileButtons">
                            {buttonData.slice(0, 2).map((button) => (
                                <div key={button.buttonId} className="wb-knowMobileButtons-card">
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                    >
                                        <button
                                            className="wb-knowMobileButton"
                                            style={buttonStyle(button.buttonId)}
                                            onClick={() => programOpen(button.name, button.buttonId)}
                                        >
                                            {button.label}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                            {buttonData.slice(2, 4).map((button) => (
                                <div key={button.buttonId} className="wb-knowMobileButtons-card">
                                    <Link
                                        smooth={true}
                                        offset={-80}
                                        spy={true}
                                        to="wb-knowMobileButtons"
                                        duration={1200}
                                    >
                                        <button
                                            className="wb-knowMobileButton"
                                            style={buttonStyle(button.buttonId)}
                                            onClick={() => programOpen(button.name, button.buttonId)}
                                        >
                                            {button.label}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="upcommingPrograms_right sevan2024-upcommingPrograms_right">
                    {sections.map((section) => (
                        <div key={section.name}
                             className={activeSection === section.name ? "upcommingPrograms_right_open" : ""}>
                            {section.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;

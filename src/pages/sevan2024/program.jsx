import React, {useState} from 'react';
import {Camfire, GropMentorships, MasterClass, Mentorships, TrackBattles, Woekshops} from './program.min.jsx';
import useWindowWidth from "../../hooks/useWidnowWidth";
import "./myStyles.css"

//TODO create dedicated css file, fix the styles,
//TODO finalize the program component to ensure we still need menuItems

const menuItems = [
    { id: 'li1', name: 'Track Battles', type: 'TrackBattles' },
    // { id: 'li2', name: 'Master Classes', type: 'MasterClass' },
    // { id: 'li3', name: 'Business Development Workshops', type: 'Woekshops' },
    // { id: 'li4', name: '1:1 Mentorship Sessions', type: 'Mentorships' },
    // { id: 'li5', name: 'Group Mentorship Sessions', type: 'GropMentorships' },
    // { id: 'li6', name: 'Campfire Talks', type: 'Camfire' }
];

const Programs = () => {
    const [activeProgram, setActiveProgram] = useState('TrackBattles'); // Default open section
    // const [activeMenuItem, setActiveMenuItem] = useState('li1'); // Default active menu item

    const windowWidth = useWindowWidth()

    const programOpen = (menuItem, programType) => {
        setActiveProgram(programType);
        // setActiveMenuItem(menuItem);
    };



    return (
        <div className="program-block sevan2024-program">
            <h2>Educational Program for Startups</h2>
            <div className="upcommingPrograms one">
                <div className="upcommingPrograms_left sevan2024-program wb-program">
                    <div className="textBox">
                        <p>
                            Our innovative curriculum, guided by renowned international experts, categorizes startups into industry-specific tracks, providing a specialized incubation and micro-acceleration experience that propels your venture towards success. Engage in our one-on-one mentoring program, a cornerstone of our educational initiative, where every startup gains direct access to industry experts. Receive personalized, cutting-edge advice on diverse aspects of your startup, forging a path to excellence.
                        </p>
                        <p>
                            Join SSS24's education program and equip yourself with the knowledge and guidance needed to thrive in the dynamic landscape of entrepreneurship.
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="https://seasidestartupsummit.com/pdf/sevan_24_agenda.pdf">
                            Get the educational program
                        </a>
                    </div>
                </div>
                <div className="upcommingPrograms_right one">
                    {menuItems.map(({ id, name, type }) => (

                        <div
                            key={id}
                            className={`upcommingPrograms_right_open ${activeProgram === type ? 'upcommingPrograms_right_open' : ''}`}
                            style={{ display: activeProgram === type ? 'block' : 'none' }}
                        >
                            {type === 'MasterClass' && <MasterClass />}
                            {type === 'Woekshops' && <Woekshops />}
                            {type === 'Mentorships' && <Mentorships />}
                            {type === 'GropMentorships' && <GropMentorships />}
                            {type === 'Camfire' && <Camfire />}
                            {type === 'TrackBattles' && <TrackBattles width={windowWidth} />}
                        </div>
                    ))}
                </div>
                {/*<div className="carusel_menue">*/}
                {/*    <div className="mobi_meue_trp_left" />*/}
                {/*    <ul>*/}
                {/*        {menuItems.map(({ id, name }) => (*/}
                {/*            <li*/}
                {/*                key={id}*/}
                {/*                id={id}*/}
                {/*                onClick={() => programOpen(id, menuItems.find(item => item.id === id).type)}*/}
                {/*                style={{*/}
                {/*                    color: activeMenuItem === id ? "rgba(117, 117, 117, 1)" : "rgb(47, 128, 237)",*/}
                {/*                    borderBottom: windowWidth <= 1024 && activeMenuItem === id ? "2px solid rgb(47, 128, 237)" : "none"*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                {name}*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*    <div className="mobi_meue_trp_right" />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Programs;

import React, {useState} from 'react';
import useWindowWidth from '../../hooks/useWidnowWidth.js'; // Import your custom hook

// Import images
import ggImage from '../../pages/sevan2024/img/disignIcon/ggImage.png';
import busSideView from '../../pages/sevan2024/img/disignIcon/bus-side-view 1.png';
import carFrontView from '../../pages/sevan2024/img/disignIcon/car-fill-from-frontal-view 1.png';
import parking from '../../pages/sevan2024/img/disignIcon/parking.png';

//!TODO Create a dedicated css file and try to get read of windowWidth hook.

const ShuttleCarComponent = () => {
    const windowWidth = useWindowWidth();
    const [open, setOpen] = useState({shuttle: false, car: false});

    const toggleOpen = (type) => {
        setOpen(prevOpen => ({
            shuttle: type === 'shuttle' ? !prevOpen.shuttle : false,
            car: type === 'car' ? !prevOpen.car : false
        }));
    };

    return (
        <div className="upcommingReach wb-sevan2024">
            <h2>How to reach Sevan Startup Summit 2024 Grounds</h2>
            <p>— The best ways to reach us —</p>
            <div className="upcommingReach_middle">
                <div
                    className={`vihacle ${(windowWidth && windowWidth < 547) || open.shuttle ? "vihacleFullOpen" : "vihacleFullClose"}`}
                >
                    <div className="vihacleBox">
                        <div>
                            <img
                                className="wb-ggImage"
                                src={(windowWidth && windowWidth < 547) || open.shuttle ? ggImage : busSideView}
                                alt="shuttle"
                            />
                        </div>
                        <button onClick={() => toggleOpen('shuttle')}>Shuttle Service</button>
                    </div>
                    <div className="vihacleOpen">
                        <div className="vihacleOpenIN">
                            <p>
                                <b>
                                    This year our transportation partner gg is organizing
                                    convenient ggShuttle group rides from Yerevan to SSS.{" "}
                                </b>
                            </p>
                            <p>
                                Reserve your seat in advance and share the journey with fellow
                                participants.
                            </p>

                            <div className="wb-sevan2024ShuttleButtons">
                                <a href="https://bit.ly/to-SSS">
                                    <button>To SSS</button>
                                </a>
                                <a href="https://bit.ly/from-SSS">
                                    <button>From SSS</button>
                                </a>
                            </div>
                            <p>
                                To reserve your seat, please open the link on your mobile
                                device.
                            </p>
                        </div>
                    </div>
                    <div className="border"/>
                </div>
                <div
                    className={`vihacle wb-vehicleCar ${(windowWidth && windowWidth < 547) || open.car ? "vihacleFullOpen" : "vihacleFullClose"}`}
                >
                    <div className="border"/>
                    <div className="vihacleOpen wb-sevan2024WihacleOpenCar">
                        <div className="vihacleOpenIN">
                            <p>
                                <b>You can easily reach the venue on your own.</b>
                            </p>
                            <p>The exact location will be provided soon.</p>
                            <p style={{fontWeight: 700}}>
                                <img
                                    src={parking ?? ""}
                                    alt="parking"
                                />
                                Parking is available at the venue
                            </p>
                        </div>
                        <iframe
                            title="shuttleMap"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2601.4832455460923!2d45.5803449!3d40.342274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f89d42619d199%3A0xab251b125c1578ac!2sSevan%20Startup%20Summit!5e1!3m2!1sen!2sam!4v1686590984126!5m2!1sen!2sam"
                            allowFullScreen
                        />
                    </div>
                    <div className="vihacleBox">
                        <div>
                            <img
                                src={carFrontView ?? ""}
                                alt="car"
                            />
                        </div>
                        <button onClick={() => toggleOpen('car')}>Drive on your own</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShuttleCarComponent;

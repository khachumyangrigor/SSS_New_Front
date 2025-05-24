import React from "react";

class Shuttle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: null,
      busOpen: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.setState({
      screenWidth: window.innerWidth,
    });
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ screenWidth: window.innerWidth });
  }
  shuttleOpen = () => {
    this.refs.shuttle.classList.add("vihacleFullOpen");
    this.refs.car.classList.remove("vihacleFullOpen");
    this.refs.shuttle.classList.remove("vihacleFullClose");
    this.refs.car.classList.add("vihacleFullClose");
    this.setState({
      busOpen: true,
    });
  };
  carOpen = () => {
    this.refs.car.classList.add("vihacleFullOpen");
    this.refs.shuttle.classList.remove("vihacleFullOpen");
    this.refs.car.classList.remove("vihacleFullClose");
    this.refs.shuttle.classList.add("vihacleFullClose");
    this.setState({
      busOpen: false,
    });
  };
  render = () => {
    return (
      <div className="upcommingReach wb-sevan2024">
        <h2>How to reach Sevan Startup Summit 2025 Grounds</h2>
        <p>— The best ways to reach us —</p>
        <div className="upcommingReach_middle">
          <div
            className={
              this.state.screenWidth < 547
                ? "vihacle vihacleFullOpen"
                : "vihacle"
            }
            ref="shuttle"
          >
            <div className="vihacleBox">
              <div>
                <img
                  className="wb-ggImage"
                  src={
                    this.state.screenWidth < 547 || this.state.busOpen
                      ? require("./img/disignIcon/ggImage.png")
                      : require("./img/disignIcon/bus-side-view 1.png")
                  }
                  alt="shuttle"
                />
              </div>
              {this.state.screenWidth > 546 && (
                <button onClick={this.shuttleOpen}>Shuttle Service</button>
              )}
            </div>
            <div className="vihacleOpen ">
              <div className="vihacleOpenIN">
                <p>
                  <b>
                    Shuttle service will be available during the event.
                  </b>
                </p>
                <p>
                  The schedule for it will be available beforehand.
                  Seat reservation will be required.
                </p>
                <h3>coming&nbsp;soon</h3>
                {/*<div className="wb-sevan2024ShuttleButtons">*/}
                {/*  <a href="https://bit.ly/to-SSS">*/}
                {/*    <button>To SSS</button>*/}
                {/*  </a>*/}
                {/*  <a href="https://bit.ly/from-SSS">*/}
                {/*    <button>From SSS</button>*/}
                {/*  </a>*/}
                {/*</div>*/}
                {/*<p>*/}
                {/*  To reserve your seat, please open the link on your mobile*/}
                {/*  device.*/}
                {/*</p>*/}
              </div>
            </div>
            <div className="border" />
          </div>
          <div
            className={
              this.state.screenWidth < 547
                ? "vihacle wb-vehicleCar vihacleFullOpen"
                : "vihacle wb-vehicleCar"
            }
            ref="car"
          >
            <div className="border" />
            <div className="vihacleOpen wb-sevan2024WihacleOpenCar">
              <div className="vihacleOpenIN">
                <p>
                  <b>You can easily reach the venue on your own.</b>
                </p>
                <p>The exact location will be provided soon.</p>
                <p style={{ fontWeight: 700 }}>
                  <img
                    src={require("./img/disignIcon/parking.png")}
                    alt="parking"
                  />
                  Parking is available at the venue
                </p>
              </div>
              <iframe
                title="shuttleMap"
                // src="https://www.google.com/maps/place/40%C2%B020'40.1%22N+45%C2%B034'43.2%22E/@40.3278435,45.5387228,13.25z/data=!4m4!3m3!8m2!3d40.3444672!4d45.5786688?hl=en-GB&entry=ttu"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388960.17335968075!2d45.01580199734058!3d40.39220308366322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404073c3653254db%3A0x2e16e2bbfbe7383f!2sLake%20Sevan!5e0!3m2!1sen!2s!4v1651553883973!5m2!1sen!2s"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2601.4832455460923!2d45.5803449!3d40.342274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f89d42619d199%3A0xab251b125c1578ac!2sSevan%20Startup%20Summit!5e1!3m2!1sen!2sam!4v1686590984126!5m2!1sen!2sam"
                allowFullScreen
              ></iframe>
            </div>
            <div className="vihacleBox">
              <div>
                <img
                  src={require("./img/disignIcon/car-fill-from-frontal-view 1.png")}
                  alt="shuttle"
                />
              </div>
              {this.state.screenWidth > 546 && (
                <button onClick={this.carOpen}>Drive on your own</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Shuttle;

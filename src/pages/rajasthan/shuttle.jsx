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
        <h2>How to reach Rajasthan Startup Summit 2026 Grounds</h2>
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
                {(this.state.screenWidth > 547 || !this.state.busOpen) && (
                    <img
                        className="wb-ggImage"
                        src={
                          require("./img/disignIcon/bus-side-view 1.png")
                        }
                        alt="shuttle"
                    />
                )}

              </div>
              {this.state.screenWidth > 546 && (
                <button onClick={this.shuttleOpen}>Shuttle Service</button>
              )}
            </div>
            <div className="vihacleOpen ">
              <div className="vihacleOpenIN">
                <p>
                  <b>
                    Shuttle service will be available during the event
                    from Jaipur International Aeroport to Taj Amer Hotel.
                  </b>
                </p>
                <p>
                  The schedule for it will be available beforehand.
                  Seat reservation will be required.
                </p>
                {/*<h3>coming&nbsp;soon</h3>*/}
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
                src="https://www.google.com/maps/embed/v1/place?q=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FSeaside%2BStartup%2BSummit%2BHead%2BOffice%2F%4040.1884478%2C44.5116969%2C17.75z%2Fdata%3D!4m14!1m7!3m6!1s0x404073c3653254db%3A0x2e16e2bbfbe7383f!2sLake%2BSevan!8m2!3d40.3449984!4d45.3351942!16zL20vMDNjaDZ3!3m5!1s0x406abd66c708f561%3A0xc58aeafd4e41931e!8m2!3d40.1888534!4d44.5127519!16s%252Fg%252F11h60fc3lm%3Fhl%3Den%26entry%3Dttu%26g_ep%3DEgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%253D&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2601.4832455460923!2d45.5803449!3d40.342274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f89d42619d199%3A0xab251b125c1578ac!2sSevan%20Startup%20Summit!5e1!3m2!1sen!2sam!4v1686590984126!5m2!1sen!2sam"
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

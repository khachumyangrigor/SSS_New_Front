import React from "react";

class Shuttle extends React.Component {
  shuttleOpen = () => {
    this.refs.shuttle.classList.add("vihacleFullOpen");
    this.refs.car.classList.remove("vihacleFullOpen");
    this.refs.shuttle.classList.remove("vihacleFullClose");
    this.refs.car.classList.add("vihacleFullClose");
  };
  carOpen = () => {
    this.refs.car.classList.add("vihacleFullOpen");
    this.refs.shuttle.classList.remove("vihacleFullOpen");
    this.refs.car.classList.remove("vihacleFullClose");
    this.refs.shuttle.classList.add("vihacleFullClose");
  };
  render = () => {
    return (
      <div className="upcommingReach">
        <h2>How to reach Sevan Startup Summit 2023 Grounds</h2>
        <p>— The best ways to reach us —</p>
        <div className="upcommingReach_middle">
          <div className="vihacle" ref="shuttle">
            <div className="vihacleBox">
              <div>
                <img
                  src={require("./img/disignIcon/bus-side-view 1.png")}
                  alt="shuttle"
                />
              </div>
              <button onClick={this.shuttleOpen}>Shuttle Service</button>
            </div>
            <div className="vihacleOpen">
              <div className="vihacleOpenIN">
                <p>
                  <b>Shuttle service will be available during the event.</b>
                </p>
                <p>
                  The schedule for it will be available beforehand. Seat
                  reservation will be required.
                </p>
                <h3>coming&nbsp;soon</h3>
              </div>
            </div>
            <div className="border" />
          </div>
          <div className="vihacle" ref="car">
            <div className="border" />
            <div className="vihacleOpen">
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
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24325.233916190602!2d45.56461820413512!3d40.350015545477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIwJzQwLjEiTiA0NcKwMzQnNDMuMiJF!5e0!3m2!1sen!2sam!4v1685806034323!5m2!1sen!2sam"
                allowFullScreen></iframe>
            </div>
            <div className="vihacleBox">
              <div>
                <img
                  src={require("./img/disignIcon/car-fill-from-frontal-view 1.png")}
                  alt="shuttle"
                />
              </div>
              <button onClick={this.carOpen}>Drive on your own</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default Shuttle;

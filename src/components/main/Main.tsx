import React from "react";
import Check from "./checks/Check";
import Checks from "./checks/Checks";

const Main = () => {
  return (
    <div
      className="body"
      style={{ backgroundColor: "#161736", display: "flex" }}
    >
      <div className="checks">
        <Checks></Checks>
      </div>

      <div className="main-indicators">
        <div className="row first-row">
          <div className="indicator">PPO2</div>
          <div className="indicator">CABIN TEMP</div>
          <div className="indicator">CABIN PRESSURE </div>
          <div className="indicator">CO2</div>
        </div>
        <div className="row second-row">
          <div className="indicator">LOOP A</div>
          <div className="indicator">LOOP B</div>
          <div className="indicator">NTW PWR 1</div>
          <div className="indicator">NTW PWR 2</div>
        </div>
      </div>

      <div className="gauges">
        <div className="gaude">
          <div className="name">Initial Velocity</div>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
          <div>7.68 km/s</div>
        </div>
        <div className="gaude">
          <div className="name">Altitude</div>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
          <div>390.0 km/h</div>
        </div>
        <div className="gaude">
          <div className="name">Initial Velocity</div>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
          <div>7.68 km/s</div>
        </div>
        <div className="gaude">
          <div className="name">Initial Velocity</div>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
          <div>7.68 km/s</div>
        </div>
        <div className="gaude">
          <div className="name">Initial Velocity</div>
          <progress id="file" value="32" max="100">
            {" "}
            32%{" "}
          </progress>
          <div>7.68 km/s</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import ChartInternetSpeed from "../elements/ChartInternetSpeed";

const InternetSpeed = () => {
  return (
    <div className="my-2">
      <h1>Your Internet Speed</h1>
      <div className="row">
        <div className="col-md-6">
          <ChartInternetSpeed title="Download" color="#FFD9C0" />
        </div>
        <div className="col-md-6">
          <ChartInternetSpeed title="Upload" color="#CCF3EE" />
        </div>
      </div>
    </div>
  );
};

export default InternetSpeed;

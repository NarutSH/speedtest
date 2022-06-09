import React from "react";
import InternetSpeed from "../components/InternetSpeed";
import Map from "../components/Map";
import ChartMeasurement from "../elements/ChartMeasurement";

const Home = () => {
  const styles = {
    mapContainer: {
      width: "100%",
      height: "400px",
      overflow: "hidden",
      position: "relative",
    },
  };

  return (
    <div>
      <div>
        <InternetSpeed />
      </div>
      <div className="row my-2">
        <div className="col-md-6">
          <h3>Server Location</h3>
          <div style={styles.mapContainer}>
            <Map />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Latency Measurement</h3>
          <ChartMeasurement label="Latency test" color="#957DAD" />
        </div>
      </div>

      <div className="row my-2">
        <div className="col-6">
          <h3>Download Measurement</h3>
          <ChartMeasurement label="10 kB Download test" color="#EEA579" />
          <ChartMeasurement label="100kB Download test" color="#EEA579" />
          <ChartMeasurement label="1M Download test" color="#EEA579" />
          <ChartMeasurement label="10M Download test" color="#EEA579" />
          <ChartMeasurement label="25 MDownload test" color="#EEA579" />
        </div>
        <div className="col-6">
          <h3>Upload Measurement</h3>
          <ChartMeasurement label="10 kB Upload test" color="#9A8BC9" />
          <ChartMeasurement label="100kB Upload test" color="#9A8BC9" />
          <ChartMeasurement label="1M Upload test" color="#9A8BC9" />
          <ChartMeasurement label="10M Upload test" color="#9A8BC9" />
          <ChartMeasurement label="25M Upload test" color="#9A8BC9" />
        </div>
      </div>
    </div>
  );
};

export default Home;

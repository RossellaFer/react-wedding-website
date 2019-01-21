import React from "react";
import Map from "../Map/Map";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="location section" id="location">
        <h2>Location</h2>
        <p>
          {this.props.t("location.introduction", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
        <ul className="image_grid">
          <li
            role="img"
            aria-label="Tenimento San Giuseppe 1"
            className="small"
          />
          <li
            role="img"
            aria-label="Tenimento San Giuseppe 2"
            className="large"
          />
          <li role="img" aria-label="Foggia from above" className="large" />
          <li role="img" aria-label="Villa di Foggia" className="small" />
        </ul>
        <p>
          {this.props.t("location.cerimonia", {
            framework: "react-i18next"
          })}{" "}
        </p>
        <p>
          {this.props.t("location.mapsuggestions", {
            framework: "react-i18next"
          })}
        </p>
        <Map />
        <div id="directions">
          <div className="transportList">
            <h2>
              <i className="fas fa-plane" />
              {this.props.t("location.plane", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.planedescription1", {
                framework: "react-i18next"
              })}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.busradar.com/coach/bari-airport-bri/foggia/"
              >
                {this.props.t("location.planedescription2", {
                  framework: "react-i18next"
                })}
              </a>{" "}
              {this.props.t("location.planedescription3", {
                framework: "react-i18next"
              })}
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fas fa-car" />
              {this.props.t("location.car", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.cardescription", {
                framework: "react-i18next"
              })}
            </span>
          </div>
          <div className="transportList">
            <h2>
              <i className="fas fa-train" />
              {this.props.t("location.train", {
                framework: "react-i18next"
              })}
            </h2>
            <span className="detailedDirections">
              {this.props.t("location.traindescription", {
                framework: "react-i18next"
              })}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.trenitalia.com/tcom-en"
              >
                {this.props.t("location.traindescription2", {
                  framework: "react-i18next"
                })}
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;

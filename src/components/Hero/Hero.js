import React from "react";
import "./Hero.css";
// import Countdown from "../Countdown/Countdown";

class Hero extends React.Component {
  render() {
    return (
      <section className="header" id="hero">
        {/*}<Countdown />*/}
        <div id="tagline">
          <h1>Rossella & Antonio</h1>
          <h3>
            {this.props.t("hero.weddingwebsite", {
              framework: "react-i18next"
            })}
          </h3>
          <h3>
            {this.props.t("hero.locationwedding", {
              framework: "react-i18next"
            })}
          </h3>
        </div>
      </section>
    );
  }
}

export default Hero;

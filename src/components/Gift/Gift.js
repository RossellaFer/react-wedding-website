import React from "react";
import "./Gift.css";

class Gift extends React.Component {
  render() {
    return (
      <div className="section" id="gifts">
        <h2>
          {this.props.t("gifts.title", {
            framework: "react-i18next"
          })}
        </h2>
        <p>
          {this.props.t("gifts.paragraph", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
        <ul className="image_grid">
          <li role="img" aria-label="Iceland" className="small" />
          <li role="img" aria-label="Isle of Skye" className="large" />
          <li role="img" aria-label="Maldive" className="large" />
          <li role="img" aria-label="Cuba" className="small" />
        </ul>
      </div>
    );
  }
}

export default Gift;

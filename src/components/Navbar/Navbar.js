import React from "react";
import "./Navbar.css";

//handling the navigation
import { HashLink as Link } from "react-router-hash-link";

//handling the translations
// import { translate, Trans } from "react-i18next";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <input type="checkbox" id="menu-toggle" />
        <label id="trigger" htmlFor="menu-toggle" />
        <label id="burger" htmlFor="menu-toggle" />
        <ul id="menu">
          <li>
            <Link to="#location">
              <i className="fas fa-map" />
              <span className="description">Location</span>
            </Link>
          </li>
          <li>
            <Link to="#RSVP">
              <i className="fas fa-envelope-open" />
              <span className="description">
                {this.props.t("navbar.RSVP", {
                  framework: "react-i18next"
                })}
              </span>
            </Link>
          </li>
          <li>
            <Link to="#aboutUs">
              <i className="fas fa-edit" />
              <span className="description">
                {this.props.t("navbar.contactus", {
                  framework: "react-i18next"
                })}
              </span>
            </Link>
          </li>
          <li>
            <Link to="#gifts">
              <i className="fas fa-gift" />
              <span className="description">
                {" "}
                {this.props.t("navbar.gifts", {
                  framework: "react-i18next"
                })}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

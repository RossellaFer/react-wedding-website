import React from "react";
import i18next from "../i18next";

class PlusOne extends React.Component {
  state = {
    isChecked: true,
    plusOne: false
  };

  guestNameRef = React.createRef();
  guestAllergiesRef = React.createRef();

  displayPlusOneOptions = () => {
    if (this.state.plusOne) {
      return (
        <div className="guestDetails">
          <p>
            {this.props.t("plusOne.header", {
              framework: "react-i18next"
            })}
          </p>
          <input
            name="guestName"
            type="text"
            ref={this.guestNameRef}
            placeholder={this.props.t("RSVP.fieldName", {
              framework: "react-i18next"
            })}
            onChange={this.props.handleChange}
            value={this.props.getFieldValues("guestName")}
          />
          <textarea
            name="guestAllergies"
            ref={this.guestAllergiesRef}
            onChange={this.props.handleChange}
            placeholder={this.props.t("plusOne.guestAllergies", {
              framework: "react-i18next"
            })}
            value={this.props.getFieldValues("guestAllergies")}
          />
        </div>
      );
    }
  };

  // isAttending = e => {
  //   e.preventDefault();
  //   if (e.target.value === "yes") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  render() {
    return (
      <div>
        <ul id="plusOneOptions">
          <p id="plusOneText">
            {this.props.t("plusOne.title", {
              framework: "react-i18next"
            })}
          </p>
          <li>
            <label>
              {this.props.t("plusOne.yes", {
                framework: "react-i18next"
              })}
            </label>
            <input
              name="plusOne"
              type="radio"
              value="yes"
              onChange={this.props.handleChange}
              onClick={() => this.setState({ isChecked: true, plusOne: true })}
            />
          </li>
          <li>
            <label>No</label>
            <input
              name="plusOne"
              type="radio"
              value="no"
              onClick={() => this.setState({ isChecked: true, plusOne: false })}
              onChange={this.props.handleChange}
            />
          </li>
        </ul>
        {this.displayPlusOneOptions()}
      </div>
    );
  }
}

export default PlusOne;

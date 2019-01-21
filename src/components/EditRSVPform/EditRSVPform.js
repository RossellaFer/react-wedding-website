import React from "react";
// import "../RSVPform/RSVPform.css";
import "../RSVPform/RSVPform.css";

class EditRSVPform extends React.Component {
  handleChange = e => {
    const updatedRSVP = {
      ...this.props.completedForm.RSVP,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateRSVP("RSVP", updatedRSVP);
  };

  //displaying the correct information in the input fields
  getFieldValues = fieldName => {
    if (this.props.completedForm.user === this.props.user) {
      let individualRSVP = this.props.completedForm.RSVP;
      for (let params in individualRSVP) {
        if (individualRSVP.hasOwnProperty(params) && params === fieldName) {
          return individualRSVP[fieldName];
        }
      }
    }
  };

  render() {
    return (
      <div className="register-wrapper section" id="RSVP">
        <h2>
          {this.props.t("RSVP.header", {
            framework: "react-i18next"
          })}
        </h2>
        <p>
          {this.props.t("RSVP.thanks", {
            framework: "react-i18next"
          })}
        </p>
        <hr />
        <div className="register-block">
          <form>
            <label className="inputLabel">
              {this.props.t("RSVP.fieldName", {
                framework: "react-i18next"
              })}
            </label>
            <input
              className="editInput"
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.getFieldValues("name")}
            />
            <label className="inputLabel">
              {this.props.t("loginpage.placeholderEmail", {
                framework: "react-i18next"
              })}
            </label>
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              value={this.getFieldValues("email")}
            />
            <label className="inputLabel">
              {this.props.t("RSVP.fieldAddress", {
                framework: "react-i18next"
              })}
            </label>
            <input
              onChange={this.handleChange}
              name="postalAddress"
              type="text"
              value={this.getFieldValues("postalAddress")}
            />
            <label className="inputLabel">
              {this.props.t("RSVP.fieldCityAddress", {
                framework: "react-i18next"
              })}
            </label>
            <input
              onChange={this.handleChange}
              name="city"
              type="text"
              value={this.getFieldValues("city")}
            />
            <label className="inputLabel">
              {this.props.t("RSVP.fieldPostcodeAddress", {
                framework: "react-i18next"
              })}
            </label>
            <input
              onChange={this.handleChange}
              name="postcode"
              type="text"
              value={this.getFieldValues("postcode")}
            />
            <label className="inputLabel">
              {this.props.t("RSVP.fieldAttendance", {
                framework: "react-i18next"
              })}
            </label>
            <select onChange={this.handleChange} name="attendance">
              <option value="yes">
                {this.props.t("RSVP.fieldAttendanceYes", {
                  framework: "react-i18next"
                })}
              </option>
              <option value="no">
                {this.props.t("RSVP.fieldAttendanceNo", {
                  framework: "react-i18next"
                })}
              </option>
            </select>
            <label className="inputLabel">
              {this.props.t("RSVP.fieldAllergies", {
                framework: "react-i18next"
              })}
            </label>
            <textarea
              onChange={this.handleChange}
              name="allergies"
              value={this.getFieldValues("allergies")}
            />
            <label className="inputLabel">
              {this.props.t("RSVP.fieldMusic", {
                framework: "react-i18next"
              })}
            </label>
            <textarea
              onChange={this.handleChange}
              name="music"
              value={this.getFieldValues("music")}
            />
            <label className="inputLabel">
              {this.props.t("plusOne.guestName", {
                framework: "react-i18next"
              })}
            </label>
            <input
              name="guestName"
              type="text"
              onChange={this.handleChange}
              value={this.getFieldValues("guestName")}
            />
            <label className="inputLabel">
              {this.props.t("plusOne.guestAllergies", {
                framework: "react-i18next"
              })}
            </label>
            <textarea
              name="guestAllergies"
              onChange={this.handleChange}
              value={this.getFieldValues("guestAllergies")}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditRSVPform;

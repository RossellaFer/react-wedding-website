import React from "react";
import "./RSVPform.css";
import EditRSVPform from "../EditRSVPform/EditRSVPform";

class RSVPform extends React.Component {
  //using the state to toggle the plus one
  state = {
    isChecked: false,
    plusOne: false
  };

  nameRef = React.createRef();
  emailRef = React.createRef();
  postalAddressRef = React.createRef();
  attendanceRef = React.createRef();
  allergiesRef = React.createRef();
  musicRef = React.createRef();
  guestNameRef = React.createRef();
  guestAllergiesRef = React.createRef();
  postalAddressCityRef = React.createRef();
  postalAddressPostcodeRef = React.createRef();

  submitForm = e => {
    //stop the form from submitting
    e.preventDefault();
    //getting the input value of the submitForm
    const RSVP = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      postalAddress: this.postalAddressRef.current.value,
      city: this.postalAddressCityRef.current.value,
      postcode: this.postalAddressPostcodeRef.current.value,
      attendance: this.attendanceRef.current.value,
      allergies: this.allergiesRef.current.value,
      music: this.musicRef.current.value,
      userid: this.props.user,
      guestName: this.guestNameRef.current.value,
      guestAllergies: this.guestAllergiesRef.current.value
    };

    this.props.addRSVP(RSVP);
    //refresh the submitForm
    e.currentTarget.reset();
  };

  displayPlusOneOptions = () => {
    if (this.state.plusOne) {
      return (
        <div className="guestDetails">
          <input
            name="guestName"
            type="text"
            ref={this.guestNameRef}
            placeholder={this.props.t("plusOne.guestName", {
              framework: "react-i18next"
            })}
          />
          <textarea
            name="guestAllergies"
            ref={this.guestAllergiesRef}
            placeholder={this.props.t("plusOne.guestAllergies", {
              framework: "react-i18next"
            })}
          />
        </div>
      );
    } else {
      return (
        <div style={{ display: "none" }} className="guestDetails">
          <p>
            {this.props.t("plusOne.header", {
              framework: "react-i18next"
            })}
          </p>
          <input
            name="guestName"
            type="text"
            defaultValue=""
            ref={this.guestNameRef}
            placeholder={this.props.t("RSVP.fieldName", {
              framework: "react-i18next"
            })}
          />
          <textarea
            name="guestAllergies"
            defaultValue=""
            ref={this.guestAllergiesRef}
            placeholder={this.props.t("plusOne.guestAllergies", {
              framework: "react-i18next"
            })}
          />
        </div>
      );
    }
  };

  //conditional rendering of the form that evaluates if the object completedForm has properties
  renderForm = () => {
    if (Object.getOwnPropertyNames(this.props.completedForm).length === 1) {
      return (
        <div className="register-wrapper section" id="RSVP">
          <h2>
            {this.props.t("RSVP.title", {
              framework: "react-i18next"
            })}
          </h2>
          <p id="headerExplain">
            {this.props.t("RSVP.headerExplain", {
              framework: "react-i18next"
            })}
          </p>
          <hr />
          <div className="register-block">
            <form onSubmit={this.submitForm}>
              <label className="RSVPlabel">Name</label>
              <input
                required
                name="name"
                type="text"
                ref={this.nameRef}
                placeholder={this.props.t("RSVP.fieldName", {
                  framework: "react-i18next"
                })}
              />
              <label className="RSVPlabel">Email address</label>
              <input
                required
                name="email"
                type="email"
                ref={this.emailRef}
                placeholder={this.props.t("loginpage.placeholderEmail", {
                  framework: "react-i18next"
                })}
              />
              <label className="RSVPlabel">Attendance</label>
              <select required name="attendance" ref={this.attendanceRef}>
                <label className="RSVPlabel">Attendance - yes</label>
                <option value="yes">
                  {this.props.t("RSVP.fieldAttendanceYes", {
                    framework: "react-i18next"
                  })}
                </option>
                <label className="RSVPlabel">Attendance - no</label>
                <option value="no">
                  {this.props.t("RSVP.fieldAttendanceNo", {
                    framework: "react-i18next"
                  })}
                </option>
              </select>
              <label className="RSVPlabel">Postal address</label>
              <input
                name="postalAddress"
                type="text"
                ref={this.postalAddressRef}
                placeholder={this.props.t("RSVP.fieldAddress", {
                  framework: "react-i18next"
                })}
              />
              <label className="RSVPlabel">City</label>
              <input
                name="city"
                type="text"
                ref={this.postalAddressCityRef}
                placeholder={this.props.t("RSVP.fieldCityAddress", {
                  framework: "react-i18next"
                })}
              />
              <label className="RSVPlabel">Postcode</label>
              <input
                name="postcode"
                type="text"
                ref={this.postalAddressPostcodeRef}
                placeholder={this.props.t("RSVP.fieldPostcodeAddress", {
                  framework: "react-i18next"
                })}
              />
              <textarea
                name="allergies"
                ref={this.allergiesRef}
                placeholder={this.props.t("RSVP.fieldAllergies", {
                  framework: "react-i18next"
                })}
              />
              <textarea
                name="music"
                ref={this.musicRef}
                placeholder={this.props.t("RSVP.fieldMusic", {
                  framework: "react-i18next"
                })}
              />
              <div>
                <ul id="plusOneOptions">
                  <p id="plusOneText">
                    {this.props.t("plusOne.title", {
                      framework: "react-i18next"
                    })}
                  </p>
                  <div id="radiobuttons">
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
                        onClick={() =>
                          this.setState({ isChecked: true, plusOne: true })
                        }
                      />
                    </li>
                    <li>
                      <label>No</label>
                      <input
                        name="plusOne"
                        type="radio"
                        value="no"
                        onClick={() =>
                          this.setState({ isChecked: true, plusOne: false })
                        }
                      />
                    </li>
                  </div>
                </ul>
                {this.displayPlusOneOptions()}
              </div>
              <input
                type="submit"
                value={this.props.t("RSVP.confirm", {
                  framework: "react-i18next"
                })}
              />
              {/*}<input
                type="submit"
                value="Carica dati"
                onClick={this.props.loadData}
              />*/}
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <EditRSVPform
            t={this.props.t}
            user={this.props.user}
            completedForm={this.props.completedForm}
            updateRSVP={this.props.updateRSVP}
            key={this.props.key}
          />
          {/*}
          <div className="thanksForRSVP">
            <h2>Grazie per aver risposto all'invito</h2>
            <p>
              Se hai bisogno di cambiare alcuni dei dettagli della risposta, o
              se vuoi semplicemente contattarci, mandaci una mail qui:{" "}
              <a href="mailto:nottheusualtourists@gmail.com">
                nottheusualtourists@gmail.com
              </a>
            </p>
          </div>
          */}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default RSVPform;

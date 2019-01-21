import React from "react";
import "./Login.css";
//connecting to the database
// import firebase from "firebase";
import base, { firebaseApp } from "../../base";
import { translate } from "react-i18next";

//handling the translations
import i18next from "../i18next";

class Login extends React.Component {
  //references to the input fields
  myUsernameInput = React.createRef();
  myEmailInput = React.createRef();
  myPasswordInput = React.createRef();

  authHandler = async authData => {
    const email = this.myEmailInput.current.value;
    const halfemail = email.substring(0, email.lastIndexOf("@"));
    const username = halfemail.replace(/[^\w\s]/gi, "");
    await base.post(`${username}/user`, {
      data: authData.user.uid
    });
    // const RSVPform = await base.fetch()
  };
  //
  // authenticate = provider => {
  //   const authProvider = new firebase.auth.FacebookAuthProvider();
  //   firebaseApp
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };

  handleSignUp = async event => {
    event.preventDefault();
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(
          this.myEmailInput.current.value,
          this.myPasswordInput.current.value
        )
        .then(this.authHandler);
      const email = this.myEmailInput.current.value;
      const halfemail = email.substring(0, email.lastIndexOf("@"));
      const username = halfemail.replace(/[^\w\s]/gi, "");
      this.props.history.push(`/user/${username}`);
    } catch (error) {
      alert(error);
    }
  };

  handleLogin = async event => {
    event.preventDefault();
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(
          this.myEmailInput.current.value,
          this.myPasswordInput.current.value
        )
        .then(this.authHandler);
      //go to the RSVP page
      const email = this.myEmailInput.current.value;
      const halfemail = email.substring(0, email.lastIndexOf("@"));
      const username = halfemail.replace(/[^\w\s]/gi, "");
      this.props.history.push(`/user/${username}`);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    // const { t, i18n } = this.props;

    // const changeLanguage = lng => {
    //   i18n.changeLanguage(lng);
    // };

    return (
      <div className="loginContainer">
        <div id="languages">
          <button
            className="flags"
            id="italian"
            onClick={() => i18next.changeLanguage("it")}
          />
          <button
            className="flags"
            id="english"
            onClick={() => i18next.changeLanguage("en")}
          />
        </div>
        <form className="login-form">
          <h2>
            {this.props.t("loginpage.title", { framework: "react-i18next" })}
          </h2>
          <p>
            {" "}
            {this.props.t("loginpage.intro", { framework: "react-i18next" })}
          </p>
          <div id="inputFields">
            {/*
            <input
              onChange={this.handleChange}
              name="username"
              type="text"
              ref={this.myUsernameInput}
              placeholder={this.props.t("loginpage.placeholderName", {
                framework: "react-i18next"
              })}
            />
            */}
            <input
              name="email"
              type="email"
              required
              placeholder={this.props.t("loginpage.placeholderEmail", {
                framework: "react-i18next"
              })}
              ref={this.myEmailInput}
            />
            <input
              required
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="* Password"
              ref={this.myPasswordInput}
            />
          </div>
          <button type="submit" onClick={this.handleSignUp}>
            {this.props.t("loginpage.signupbutton", {
              framework: "react-i18next"
            })}
          </button>
          <button type="submit" onClick={this.handleLogin}>
            {this.props.t("loginpage.loginbutton", {
              framework: "react-i18next"
            })}
          </button>
        </form>
      </div>
    );
  }
}

export default translate("common")(Login);

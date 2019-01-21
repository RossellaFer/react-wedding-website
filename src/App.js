import React, { Component } from "react";
import "./App.css";

//importing children components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Location from "./components/Location/Location";
import RSVPform from "./components/RSVPform/RSVPform";
import AboutUs from "./components/AboutUs/AboutUs";
import Gift from "./components/Gift/Gift";
import { translate } from "react-i18next";

//connecting to the database
import initialData from "./components/loadDatabase";
import base from "./base";

class App extends Component {
  state = {
    RSVPs: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    //sostituire il path per la submission su firebase con lo username
    this.ref = base.syncState(`${params.userId}`, {
      context: this,
      state: "RSVPs"
    });
    // this.authListener();
  }

  //unlistening to changes once the user goes back to the previous page
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRSVP = RSVP => {
    //take a copy of the existing state using an object spread
    const RSVPs = { ...this.state.RSVPs };
    //add our new RSVP form to the RSVPs variable
    RSVPs[`RSVP`] = RSVP;
    //set the new RSVP object to state
    this.setState({ RSVPs });
  };

  loadData = () => {
    this.setState({
      RSVPs: initialData
    });
  };

  updateRSVP = (key, updatedRSVP) => {
    //take a copy of the current RSVP
    const RSVPs = { ...this.state.RSVPs };
    //update that state
    RSVPs[key] = updatedRSVP;
    //set this to state
    this.setState({ RSVPs });
  };

  // signOut = async event => {
  //   event.preventDefault();
  //   try {
  //     await firebaseApp
  //       .auth()
  //       .signOut()
  //       .then(this.props.loggingOut);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  render() {
    return (
      <div>
        <Navbar t={this.props.t} />
        <Hero
          lng={this.props.lng}
          t={this.props.t}
          i18n={this.props.i18n}
          tReady={this.props.tReady}
        />
        <Location t={this.props.t} />
        <RSVPform
          t={this.props.t}
          id="RSVP"
          user={this.props.user}
          addRSVP={this.addRSVP}
          loadData={this.loadData}
          completedForm={this.state.RSVPs}
          updateRSVP={this.updateRSVP}
          key={this.state.key}
        />
        {/*}<button onClick={this.signOut}>Logout</button>*/}
        <AboutUs t={this.props.t} />
        <Gift t={this.props.t} />
        {/*</div><div>{this.renderApp()}</div>;*/}
      </div>
    );
  }
}

export default translate("common")(App);

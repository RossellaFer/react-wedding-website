import React from "react";
import "./Countdown.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0
    };
  }

  weddingTime = new Date(2019, 4, 26, 12, 0);

  componentWillMount() {
    this.getTimeUntil();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTimeUntil(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeUntil = () => {
    const currentTime = new Date();
    const weddingTime = new Date(2019, 4, 26, 12, 0);
    const timeUntil = weddingTime - currentTime;

    // const seconds = Math.floor((timeUntil / 1000) % 60);
    // const minutes = Math.floor((timeUntil / 1000 / 60) % 60);
    // const hours = Math.floor((timeUntil / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    this.setState({ days });
  };

  render() {
    return (
      <div id="countdown">
        <span>{this.state.days} giorni</span>
        <span id="until"> al </span>
        <span id="ido">"Sì"</span>
      </div>
    );
  }
}

export default Countdown;

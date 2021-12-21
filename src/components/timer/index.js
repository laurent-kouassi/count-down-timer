import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timer: props.initial,
      stop: false
    };
    this.countDown = this.countDown.bind(this);
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // run everything just after dom load
  componentDidMount(){
    let left_time = this.state.timer;
    this.setState({ timer: left_time });

    if(!this.state.stop) this.startTimer();  // start our stepper
    this.getCurrentTime(); // update our initial time with the current time  on timer stop
  }

  startTimer() {
    if(
      this.state.stop === false && 
      this.state.timer !== 0 && 
      this.state.timer > 0
    ) {
      this.timer = setInterval(
        this.countDown,
        1000
      );
    }
  }

  // get the counting going by stepper decreasing
  countDown() {
    let stepper = this.state.timer - 1;
    this.setState({
      timer: stepper
    });

    let current_timer = this.getCurrentTime(stepper);
    this.props.callback && this.props.callback(current_timer);
  };

  getCurrentTime(timer) {
    return timer;
  };

  // on timer stop
  stopTimer(){
    this.setState({
      stop: true
    })
  };

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
         <div className="timer-value" data-testid="timer-value">
           {this.state.timer}
         </div>
         <button className="large" data-testid="stop-button" onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}


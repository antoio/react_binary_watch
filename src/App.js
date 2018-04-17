import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// contains state of binary clock
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      h: dec2bin( new Date().getHours() ),
      m: dec2bin( new Date().getMinutes() ),
      s: dec2bin( new Date().getSeconds() ),
    }
  }

  render() {
    // containers that hold binary numbers
    // used to facilitate return JSX
    const hour_rows = [];
    const minute_rows = [];
    const second_rows = [];

    // fill containers
    this.state.h.forEach(val => hour_rows.push(<Dashes bit={val} />));
    this.state.m.forEach(val => minute_rows.push(<Dashes bit={val} />));
    this.state.s.forEach(val => second_rows.push(<Dashes bit={val} />));

    return(
      <div className="clock">
        <div className="hours">
          <h1> Hours: </h1>
          {hour_rows}
        </div>
        <div className="minutes">
          <h2> Minutes: </h2>
          {minute_rows}
        </div>
        <div className="seconds">
          <h3> Seconds: </h3>
          {second_rows}
        </div>
      </div>
    );
  }
}

class Dashes extends Component {
  render() {
    return(
      <a href="#">_{this.props.bit === 1 ? < One /> : <Zero />}_</a>
    );
  }
}

// function returning a random value for the dash
// function zeroOrOne() {
//   let randomNumber = Math.floor((Math.random() * 2) + 1);
//   return (randomNumber % 2 === 0 ? <Zero /> : <One />);
// }

// convert decimal number to binary
// @param {number}
//          decimal number
// @return {remainder}
//          array containing the corresponding binary number
function dec2bin(number) {
  let remainder = [];
  while(number > 0) {
    remainder.push(number%2);
    number = Math.floor(number / 2);
  }

  return remainder.reverse();
}

class One extends Component {
  render() {
    return 'X';
  }
}

class Zero extends Component {
  render() {
    return 'O';
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Clock />
      </div>
    );
  }
}

export default App;

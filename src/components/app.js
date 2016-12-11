import React, { Component } from 'react';
import Calendar from './calendar'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Sam's buzzy Calendar</h1>
        <Calendar />
      </div>
    );
  }
}

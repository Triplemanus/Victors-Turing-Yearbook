import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        <h2>Staff</h2>
        </header>
        <Cohort staff={this.state.staff}/>
        <h2>Students</h2>
        <Cohort staff={this.state.students}/>
      </div>
    );
  }
}

export default App;

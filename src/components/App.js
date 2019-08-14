import React, { Component } from 'react';
import Cohort from './Cohort';
import Form from './Form';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  addStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent]})
  }

  deleteStudent = (id) => {
    const filteredStudents = this.state.students.filter(student => {
      return student.id !== id;
    });   
    this.setState({students: filteredStudents});
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
        <h2>Add New Student 
        <Form addStudent={this.addStudent} /></h2>
        <Cohort staff={this.state.students} deleteStudent={this.deleteStudent}/>
      </div>
    );
  }
}

export default App;

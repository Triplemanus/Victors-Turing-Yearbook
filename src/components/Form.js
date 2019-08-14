import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitStudent = event => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...this.state
    }
    this.props.addStudent(newStudent);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', quote: '', superlative: ''});
  }
  
  render() {
    return(
      <form>
        <input 
          type='text'
          placeholder='Student name'
          name= 'name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input 
        type='text'
        placeholder='Quote'
        name='quote'
        value={this.state.quote}
        onChange={event => this.handleChange(event)}
        />
        <input 
        type='text'
        placeholder='Superlative'
        name='superlative'
        value={this.state.superlative}
        onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitStudent(event)}>Submit</button>
      </form>
      )
  }
}

export default Form;

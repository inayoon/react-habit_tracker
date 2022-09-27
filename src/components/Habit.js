import React, { Component } from 'react';

export default class Habit extends Component {
  state = {
    count : 0,
  };

  handleIncrement = (event) => {
    this.setState({count: this.state.count + 1})
  }

  handleDecrement = (event) => {
    const count = this.state.count - 1
    this.setState({count: count <0 ? 0 : count })
  }

    render() {
      console.log(this.props.habit);
      const {name, count} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button 
          className="habit-button habit-increase" 
          onClick={this.handleIncrement}>
          <i className="fa-solid fa-calendar-plus"></i>
        </button>
        <button 
          className="habit-button habit-decrease" 
          onClick={this.handleDecrement}>
          <i className="fa-solid fa-calendar-minus"></i>
        </button>
        <button 
          className="habit-button habit-delete">
          <i className="fa-solid fa-calendar-xmark"></i>
        </button>
      </li>
    );  
  }
}
